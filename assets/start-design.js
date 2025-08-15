// Domains and URLs based on the environment
const backendApiUrl = 'https://kodiak-backend-api-7iodz.ondigitalocean.app';
const designAppUrl = 'https://design.kodiak-wholesale.com';

// Constants for DOM elements
const startDesignButton = document.getElementById('start-design');


async function bulkAddToCart(items) {
    try {
        for (const item of items) {
            const formData = new URLSearchParams();

            // Populate the form data according to the specified format
            formData.append('form_type', 'product');
            formData.append('utf8', '✓');
            formData.append('id', item.id); // Variant ID
            formData.append('quantity', item.quantity); // Quantity
            formData.append('product-id', 7697521344548); // Product ID
            formData.append('section-id', item["section-id"]); // Section ID

            // Add options dynamically (up to two for now)
            if (item["option-0"]) formData.append('option-0', item["option-0"]);
            if (item["option-1"]) formData.append('option-1', item["option-1"]);

            // Add custom properties
            for (const [key, value] of Object.entries(item.customProperties)) {
                formData.append(`properties[${key}]`, value);
            }

            const response = await fetch('/cart/add.js', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formData.toString(),
            });

            if (!response.ok) {
                throw new Error(`Failed to add item with ID ${item.id} to cart`);
            }

            const data = await response.json();
            console.log('Item added to cart:', data);
        }

        // Optionally, redirect to cart page or display a confirmation message
        // window.location.href = '/cart';
        const overlayDiv = document.getElementById('kodiak-design');
        overlayDiv.remove()
        refreshCart({})
    } catch (error) {
        console.error('Error adding items to cart:', error);
    }
}

// Function to check if the product is configured
function isProductConfigured(sku) {
    // Make a request to check product configuration
    return fetch(`${backendApiUrl}/front/product-basic-details/${sku}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to check product configuration");
            }
            return response.json();
        })
        .then((data) => {
            // Assuming the API returns a field 'isConfigured' to indicate the configuration status
            return data.CustomizedProductID ? true : false;
        })
        .catch((error) => {
            console.error("Error:", error);
            //alert("Failed to check product configuration. Please try again.");
            return false; // Default to false if there's an error
        });
}

// Function to attach design data to the product form
function attachDesignDataToProductForm(designData) {
    const form = document.getElementsByClassName('shopify-product-form')[0];

    let inputImage = document.createElement("input");
    inputImage.type = "hidden";
    inputImage.name = "designImage";
    inputImage.value = designData.designImage;

    let inputSvg = document.createElement("input");
    inputSvg.type = "hidden";
    inputSvg.name = "designSvg";
    inputSvg.value = designData.designSvg;

    let inputDesignId = document.createElement("input");
    inputDesignId.type = "hidden";
    inputDesignId.name = "designId";
    inputDesignId.value = designData.designId;

    let inputPrintMethodId = document.createElement("input");
    inputPrintMethodId.type = "hidden";
    inputPrintMethodId.name = "printMethodId";
    inputPrintMethodId.value = designData.printMethodId;

    let inputUniqueId = document.createElement("input");
    inputUniqueId.type = "hidden";
    inputUniqueId.name = "unique_id";
    inputUniqueId.value = designData.unique_id;

    form.appendChild(inputImage);
    form.appendChild(inputSvg);
    form.appendChild(inputDesignId);
    form.appendChild(inputPrintMethodId);
    form.appendChild(inputUniqueId);

    const addToCartButton = document.getElementById('add-to-cart');
    const kodDesign = document.getElementById('kodiak-design');
    if (kodDesign) {
        kodDesign.remove();
    }

    if (addToCartButton) {
        addToCartButton.click(); // Simulate the click if the button is hidden but present
    } else {
        console.warn("Add to Cart button not found!");
    }
}

// Function to start the design process
function startDesign(sku) {
    isProductConfigured(sku)
        .then((isConfigured) => {
            if (!isConfigured) {
                alert('Product is not configured for design. Please configure the product first.');
                return; // Exit if not configured
            }

            // Proceed with fetching product details if configured
            return fetch(`${backendApiUrl}/front/product-basic-details/${sku}`);
        })
        .then((response) => {
            if (response) {
                if (!response.ok) {
                    throw new Error('Product not found in design system');
                }
                return response.json();
            }
        })
        .then((data) => {
            const productId = data.CustomizedProductID;
            const iframeUrl = `${designAppUrl}/product-catalog/${productId}/start-designing?handle=${sku}&userId=${loggedInAccountId?loggedInAccountId:0}&email=${loggedInAccountEmail?loggedInAccountEmail:""}`;

            const overlayDiv = document.createElement('div');
            overlayDiv.id = "kodiak-design";
            overlayDiv.style.position = 'fixed';
            overlayDiv.style.top = '0';
            overlayDiv.style.left = '0';
            overlayDiv.style.width = '100%';
            overlayDiv.style.height = '100%';
            overlayDiv.style.zIndex = '1000';
            overlayDiv.style.backgroundColor = 'white';

            const iframe = document.createElement('iframe');
            iframe.src = iframeUrl;
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.border = 'none';

            overlayDiv.appendChild(iframe);
            document.body.appendChild(overlayDiv);
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Failed to load the design system. Please try again.');
        });
}

// Initial check to disable/enable the start-design button
function checkAndSetButtonState(sku) {
    isProductConfigured(sku)
        .then((isConfigured) => {
            if (isConfigured) {
                startDesignButton.disabled = false; // Enable button
            } else {
                startDesignButton.disabled = true; // Disable button
            }
        });
}

// Call this function on page load or whenever SKU is available
checkAndSetButtonState(designSku);

// Event listener for button click
startDesignButton.addEventListener('click', () => {
    const sku = designSku;
    startDesign(sku);
});

// Event listener for receiving messages from iframe
window.addEventListener("message", function(event) {
    // Make sure the event is coming from the design app URL for security
    if (event.origin !== designAppUrl) {
        console.warn('Received message from unknown origin');
        return;
    }

    // Handle the design data sent from the iframe
    const designData = event.data;

    if (designData) {
        console.log("Received design data:", designData);
        bulkAddToCart(designData)
        //attachDesignDataToProductForm(designData);
    }
}, false);



function refreshCart(t) {
    jQuery.getJSON("/cart.js", function(cart) {
        render_cart_drawer(cart, jQuery('ul.cart_items.js-cart_items'));
        var t = cart;
        $(".cart_count").empty();
        const e = $(".cart_count"),
            i = e.text() || "0";
        let o = "",
            n = "",
            a = "",
            s = "";
        const r = $("[data-cart-form]");
        let c = !1,
            d = 0,
            l = 0;
        if ((r.data("total-discount", t.total_discount), e.text(i.replace(/[0-9]+/, t.item_count)), 0 === t.item_count)) $(".js-empty-cart__message").removeClass("hidden"), r.addClass("hidden");
        else {
            $(".js-empty-cart__message").addClass("hidden"), r.removeClass("hidden");
            let e = 0,
                i = 0;
            $.each(t.items, (t, n) => {
                const a = n.discounts;
               let designLinks = "";
               let otherProps = "";
                let s = "";
                for (let t = 0; t < a.length; t++) {
                    const {
                        title: e
                    } = a[t];
                    s = `<p class="notification-discount meta">${e}</p>`;
                }
                const r = t + 1;
                if (
                    ((o += `<li class="mini-cart__item" data-cart-item data-line-id="${r}" data-variant-id="${n.id}"><a href="${n.url}">`),
                        n.image && (o += `<div class="cart_image"><img src="${n.image}" alt="${htmlEncode(n.title)}" /></div></a>`),
                        (o += `<div class="mini-cart__item-content"><div class="mini-cart__item-title" data-price="${n.final_price}" data-key="${n.key}"><a href="${n.url}">${n.title}</a>`),
                        n.selling_plan_allocation && (o += `<div class="meta">${n.selling_plan_allocation.selling_plan.name}</div>`),
                        n.properties &&
                        $.each(n.properties, (t, e) => {
                            if ((t == 'same_logo_front') || (t == 'back_logo') || (t == 'Add_Name_Text') || (t == 'Upload_list') || (t == 'different_logo_email_logo_after_order')) {
                                e && (o += `<div class="box"><p id="configurebutton">Configure</p></div><div id="properties_popup" class="popup_details"><div class="popup-content"><h1>CONFIGURE PRODUCT</h1><select class="options_ad_on"><option value="Please Choose Option">Please Choose Option</option><option value="Same Logo as Front">Same Logo as Front</option><option value="Different Logo - Email Logo After Order">Different Logo - Email Logo After Order</option><option value="Different Logo">Different Logo</option><option value="Personalized Name or Text">Personalized Name or Text</option><option value="Upload List of Names">Upload List of Names</option></select><div class="same_logo_front" style="display:none;"> <div> <label for="samelogofront1">Same logo as front</label> <input type="text" id="samelogofront1" name="properties[same_logo_front]" value=""></div></div><div class="different_logo_option_email" style="display:none;"> <div> <label for="differentlogo_email1">Different Logo - Email Logo After Order<span class="required_star">*</span></label> <input type="file" id="differentlogo_email1" name="properties[different_logo_email_logo_after_order]"> </div> </div><div class="different_logo_option"><div><label for="differentlogo1">Display on Backside Design Type</label><input type="file" id="differentlogo1" name="properties[back_logo]"></div></div><div class="name_text_option"><div><label for="nametext1">Add Name/Text Below</label><input type="text" placeholder="" class="name_text_option_backside" id="nametext1" name="properties[Add_Name_Text]"  value=''></div><div class="font_styles_back font_list_name_single"><span>Text Font - Back</span><table><tr><td><span style="display:none">Roboto</span><img alt="Roboto" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/dpo_custom_option_82797_roboto.png?v=1720094524"></td><td><span style="display:none">Poppins</span><img alt="Poppins" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/dpo_custom_option_54329_poppins.png?v=1720094968"></td><td><span style="display:none">Raleway</span><img alt="Raleway" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/dpo_custom_option_23961_raleway.png?v=1720095072"></td><td><span style="display:none">Montserrat</span><img alt="Montserrat" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/dpo_custom_option_54434_montserrat.png?v=1720095177"></td><td><span style="display:none">Electrolize</span><img alt="Electrolize" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/dpo_custom_option_72930_electrolize.png?v=17200952797"></td></tr><tr><td><span style="display:none">Oswald</span><img alt="Oswald" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/oswald.png?v=1720413929"></td><td><span style="display:none">Poiret One</span><img alt="Poiret One" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/poiret-one.png?v=1720414020"></td><td><span style="display:none">Lora</span><img alt="Lora" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/lora.png?v=1720414078"></td><td><span style="display:none">Noto Serif</span><img alt="Noto Serif" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/noto-serif.png?v=1720414132"></td><td><span style="display:none">Crimson Text</span><img alt="Crimson Text" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/crimson-text.png?v=1720414176"></td></tr><tr><td><span style="display:none">Josefin Slab</span><img alt="Josefin Slab" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/josefin-slab.png?v=1720414399"></td><td><span style="display:none">Courier Prime</span><img alt="Courier Prime" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/courier-prime.png?v=1720415588"></td><td><span style="display:none">Arvo</span><img alt="Arvo" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/arvo.png?v=1720415718"></td><td><span style="display:none">Graduate</span><img alt="Graduate" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/graduate.png?v=1720415764"></td><td><span style="display:none">Dancing Script</span><img alt="Dancing Script" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/dancing-script.png?v=1720415841"></td></tr><tr><td><span style="display:none">Satisfy</span><img alt="Satisfy" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/satisfy.png?v=1720416236"></td><td><span style="display:none">Ephesis</span><img alt="Ephesis" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/ephesis.png?v=1720416638"></td><td><span style="display:none">Pinyon Script</span><img alt="Pinyon Script" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/pinyon-script.png?v=1720416458"></td><td><span style="display:none">Playball</span><img alt="Playball" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/playball.png?v=1720416499"></td><td><span style="display:none">Amatic SC</span><img alt="Amatic SC" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/amatic-sc.png?v=1720416586"></td></tr><tr><td><span style="display:none">Just Another Hand</span><img alt="Just Another Hand" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/just-another-hand.png?v=1720416730"></td><td><span style="display:none">Shadows Into Light Two</span><img alt="Shadows Into Light Two" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/shadow-into-light-two.png?v=1720417165"></td><td><span style="display:none">Nothing You Could Do</span><img alt="Nothing You Could Do" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/nothing-you-could-do.png?v=1720417212"></td><td><span style="display:none">Stardos Stencil</span><img alt="Stardos Stencil" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/stardos-stencil.png?v=1720417250"></td><td><span style="display:none">Fredoka One</span><img alt="Fredoka One" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/fredoka-one.png?v=1720417349"></td></tr><tr><td><span style="display:none">Righteous</span><img alt="Righteous" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/righteous.png?v=1720417431"></td></tr></table><select id="font-selector1" name="properties[Selected_font]" style="display:none!important"><option value="">Please Choose Option</option><option value="Roboto">Roboto</option><option value="Poppins">Poppins</option><option value="Raleway">Raleway</option><option value="Montserrat">Montserrat</option><option value="Electrolize">Electrolize</option><option value="Oswald">Oswald</option><option value="Poiret One">Poiret One</option><option value="Lora">Lora</option><option value="Noto Serif">Noto Serif</option><option value="Crimson Text">Crimson Text</option><option value="Josefin Slab">Josefin Slab</option><option value="Courier Prime">Courier Prime</option><option value="Arvo">Arvo</option><option value="Graduate">Graduate</option><option value="Dancing Script">Dancing Script</option><option value="Satisfy">Satisfy</option><option value="Ephesis">Ephesis</option><option value="Pinyon Script">Pinyon Script</option><option value="Playball">Playball</option><option value="Amatic SC">Amatic SC</option><option value="Just Another Hand">Just Another Hand</option><option value="Shadows Into Light Two">Shadows Into Light Two</option><option value="Nothing You Could Do">Nothing You Could Do</option><option value="Stardos Stencil">Stardos Stencil</option><option value="Fredoka One">Fredoka One</option><option value="Righteous">Righteous</option><option value="Other">Other</option></select></div></div><div class="name_text_option_list"><div><label for="uploadlist1">Upload name list (.csv,.xls, .xlsx)</label><input type="file" id="uploadlist1" accept=".csv, .xls, .xlsx" name="properties[Upload_list]"></div><div class="font_styles_back font_list_name"><span>Text Font - Back</span><table><tr><td><span style="display:none">Roboto</span><img alt="Roboto" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/dpo_custom_option_82797_roboto.png?v=1720094524"></td><td><span style="display:none">Poppins</span><img alt="Poppins" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/dpo_custom_option_54329_poppins.png?v=1720094968"></td><td><span style="display:none">Raleway</span><img alt="Raleway" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/dpo_custom_option_23961_raleway.png?v=1720095072"></td><td><span style="display:none">Montserrat</span><img alt="Montserrat" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/dpo_custom_option_54434_montserrat.png?v=1720095177"></td><td><span style="display:none">Electrolize</span><img alt="Electrolize" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/dpo_custom_option_72930_electrolize.png?v=17200952797"></td></tr><tr><td><span style="display:none">Oswald</span><img alt="Oswald" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/oswald.png?v=1720413929"></td><td><span style="display:none">Poiret One</span><img alt="Poiret One" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/poiret-one.png?v=1720414020"></td><td><span style="display:none">Lora</span><img alt="Lora" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/lora.png?v=1720414078"></td><td><span style="display:none">Noto Serif</span><img alt="Noto Serif" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/noto-serif.png?v=1720414132"></td><td><span style="display:none">Crimson Text</span><img alt="Crimson Text" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/crimson-text.png?v=1720414176"></td></tr><tr><td><span style="display:none">Josefin Slab</span><img alt="Josefin Slab" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/josefin-slab.png?v=1720414399"></td><td><span style="display:none">Courier Prime</span><img alt="Courier Prime" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/courier-prime.png?v=1720415588"></td><td><span style="display:none">Arvo</span><img alt="Arvo" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/arvo.png?v=1720415718"></td><td><span style="display:none">Graduate</span><img alt="Graduate" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/graduate.png?v=1720415764"></td><td><span style="display:none">Dancing Script</span><img alt="Dancing Script" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/dancing-script.png?v=1720415841"></td></tr><tr><td><span style="display:none">Satisfy</span><img alt="Satisfy" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/satisfy.png?v=1720416236"></td><td><span style="display:none">Ephesis</span><img alt="Ephesis" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/ephesis.png?v=1720416638"></td><td><span style="display:none">Pinyon Script</span><img alt="Pinyon Script" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/pinyon-script.png?v=1720416458"></td><td><span style="display:none">Playball</span><img alt="Playball" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/playball.png?v=1720416499"></td><td><span style="display:none">Amatic SC</span><img alt="Amatic SC" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/amatic-sc.png?v=1720416586"></td></tr><tr><td><span style="display:none">Just Another Hand</span><img alt="Just Another Hand" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/just-another-hand.png?v=1720416730"></td><td><span style="display:none">Shadows Into Light Two</span><img alt="Shadows Into Light Two" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/shadow-into-light-two.png?v=1720417165"></td><td><span style="display:none">Nothing You Could Do</span><img alt="Nothing You Could Do" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/nothing-you-could-do.png?v=1720417212"></td><td><span style="display:none">Stardos Stencil</span><img alt="Stardos Stencil" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/stardos-stencil.png?v=1720417250"></td><td><span style="display:none">Fredoka One</span><img alt="Fredoka One" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/fredoka-one.png?v=1720417349"></td></tr><tr><td><span style="display:none">Righteous</span><img alt="Righteous" src="https://cdn.shopify.com/s/files/1/0082/8237/4203/files/righteous.png?v=1720417431"></td></tr></table><select id="font-selector-list1" name="properties[Selected_font_for_list]" style="display:none"><option value="">Please Choose Option</option><option value="Roboto">Roboto</option><option value="Poppins">Poppins</option><option value="Raleway">Raleway</option><option value="Montserrat">Montserrat</option><option value="Electrolize">Electrolize</option><option value="Oswald">Oswald</option><option value="Poiret One">Poiret One</option><option value="Lora">Lora</option><option value="Noto Serif">Noto Serif</option><option value="Crimson Text">Crimson Text</option><option value="Josefin Slab">Josefin Slab</option><option value="Courier Prime">Courier Prime</option><option value="Arvo">Arvo</option><option value="Graduate">Graduate</option><option value="Dancing Script">Dancing Script</option><option value="Satisfy">Satisfy</option><option value="Ephesis">Ephesis</option><option value="Pinyon Script">Pinyon Script</option><option value="Playball">Playball</option><option value="Amatic SC">Amatic SC</option><option value="Just Another Hand">Just Another Hand</option><option value="Shadows Into Light Two">Shadows Into Light Two</option><option value="Nothing You Could Do">Nothing You Could Do</option><option value="Stardos Stencil">Stardos Stencil</option><option value="Fredoka One">Fredoka One</option><option value="Righteous">Righteous</option><option value="Other">Other</option></select></div></div><button id="closePopup">X</button><div class="properties_update"><button id="updatecart">Update cart</button></div></div></div>`);
                            }

                  
                              const capitalizedKey = t.charAt(0).toUpperCase() + t.slice(1);
                              // Show link only for 'designImage' and 'designSvg'
                                 if (t === 'designPng' && e) {
                                      designLinks += `<div class="line-item ${t}"><a href="${e}" target="_blank" style="color: blue; text-decoration: underline;font-weight: 600;"> ->View Design Image</a></div>`;
                                  } else if (t === 'designImage' && e) {
                                      designLinks += `<div class="line-item ${t}"><a href="${e}" target="_blank" style="color: blue; text-decoration: underline;font-weight: 600;"> ->View Design Mockup</a></div>`;
                                  } else if (t === 'editDesignURL' && e) {
                                      designLinks += `<div class="line-item ${t}"><a href="${e}" target="_blank" style="color: blue; text-decoration: underline;font-weight: 600;"> ->Edit Design</a></div>`;
                                  } else if (e && t!=="designImage" && t!=="designSvg") {
                                      // Display other properties as plain text with capitalized key
                                      otherProps += `<div class="line-item ${t}">${capitalizedKey}: ${e}</div>`;
                                  }

                        }),
                        (o+=designLinks+otherProps),
                        (o += '</div><div class="mini-cart__item-price">'),
                        $.ajax({
                            dataType: "json",
                            async: !1,
                            cache: !1,
                            url: `/products/${n.handle}.js`,
                            success(t) {
                                let e = t;
                                if (e.variants) {
                                    const t = e.variants;
                                    if (t.length > 1)
                                        for (let i = 0; i < t.length; i++) t[i].id === n.id && (e = t[i]);
                                }
                                e.compare_at_price && e.compare_at_price > e.price ? ((c = !0), (d = e.compare_at_price), (l = e.price)) : (c = !1);
                            },
                        }),
                        !0 === c)
                ) {
                    const t1 = `${window.Shopify.formatMoney(n.final_price, $("body").data("money-format"))} </span><span class="money was_price">${window.Shopify.formatMoney(d, $("body").data("money-format"))}</span>`;
                    //const t = `${window.Shopify.formatMoney(l, $("body").data("money-format"))} </span><span class="money was_price">${window.Shopify.formatMoney(d, $("body").data("money-format"))}</span>`;
                    (o += `<span class="money sale">${t1}</strong>`), (i = (d - l) * n.quantity), (e = i + e);
                    console.log(t1);
                } else if (n.price > n.final_price) {
                    const t = `${window.Shopify.formatMoney(n.final_price, $("body").data("money-format"))} </span><span class="money was_price">${window.Shopify.formatMoney(n.price, $("body").data("money-format"))}</span>`;
                    o += `<span class="money sale">${t}</strong>`;
                } else {
                    const t = window.Shopify.formatMoney(n.price, $("body").data("money-format"));
                    n.price > 0 ? (o += `<span class="money">${t}</span></strong>`) : (o += `<span>${window.PXUTheme.translation.cart_free_text}</span></strong>`);
                }
                if (((o += "</div>"), n.unit_price_measurement && n.price > 0)) {
                    let t = "";
                    1 !== n.unit_price_measurement.reference_value && (t = n.unit_price_measurement.reference_value),
                        (o += `<p class="mini-cart__unit-price">${n.unit_price_measurement.quantity_value}${n.unit_price_measurement.quantity_unit} | ${Shopify.formatMoney(n.unit_price, $("body").data("money-format"))} / ${t}${
                                n.unit_price_measurement.reference_unit
                            }</p>`);
                }
                n.price > n.final_price && (o += s),
                    (o += '<div class="product-quantity-box">'),
                    (o += '<span class="ss-icon product-minus js-change-quantity" data-func="minus"><span class="icon-minus"></span></span>'),
                    (o += `<input type="number" min="0" class="quantity" name="updates[]" id="updates_${n.id}" value="${n.quantity}" data-cart-quantity-input="mini-cart" />`),
                    (o += '<span class="ss-icon product-plus js-change-quantity" data-func="plus"><span class="icon-plus"></span></span>'),
                    (o += "</div></div></div>"),
                    (o += `<a href="/cart/change?line=${r}&amp;quantity=0" class="js-cart-remove-btn cart__remove-btn" data-line-id="${r}" data-remove-item="mini-cart"><span class="remove-icon1"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M2165 4684 c-120 -26 -209 -76 -300 -168 -73 -74 -90 -99 -185 -278 l-105 -197 -312 -3 c-297 -3 -313 -4 -339 -24 -47 -35 -67 -70 -72 -128 -5 -66 23 -125 78 -159 l35 -22 1595 0 1595 0 35 22 c55 34 83 93 78 159 -5 58 -25 93 -72 128 -26 20 -42 21 -339 24 l-312 3 -105 197 c-95 178 -113 204 -185 278 -93 94 -181 142 -307 168 -107 22 -679 22 -783 0z m778 -354 c27 -13 62 -39 77 -57 26 -29 109 -172 125 -215 7 -17 -25 -18 -584 -18 -325 0 -591 3 -591 6 0 14 103 196 127 225 25 29 83 64 133 80 14 4 169 7 345 6 319 -2 320 -2 368 -27z"/><path d="M1211 3380 c-55 -13 -81 -32 -109 -80 l-27 -45 0 -710 c0 -741 5 -868 55 -1430 21 -232 38 -304 95 -400 73 -122 181 -208 325 -259 l85 -31 925 0 925 0 80 27 c186 64 330 208 386 388 22 69 43 280 76 740 15 209 18 382 18 965 l0 710 -27 46 c-32 55 -80 81 -148 81 -49 0 -94 -18 -121 -48 -44 -50 -43 -41 -40 -649 1 -319 -3 -683 -9 -810 -15 -324 -59 -883 -72 -925 -27 -85 -101 -156 -188 -180 -47 -13 -1713 -13 -1760 0 -87 24 -161 95 -188 180 -13 42 -57 601 -72 925 -6 127 -10 491 -9 810 3 515 1 583 -13 610 -36 68 -110 102 -187 85z"/></g></svg></span></a></span></a>`);
            });
            const p = t.cart_level_discount_applications;
            for (let t = 0; t < p.length; t++) {
                const e = window.Shopify.formatMoney(p[t].total_allocated_amount, $("body").data("money-format")),
                    {
                        title: i
                    } = p[t];
                (n += `<span class="cart_discounts--title">${i}</span>`), (n += '<span class="cart_discounts--price">'), (n += `-<span class="money">${e}</span></span>`);
            }
            (a += `<span class="right"><span class="money">${window.Shopify.formatMoney(t.total_price, $("body").data("money-format"))}</span></span> <span>${window.PXUTheme.translation.cart_subtotal_text}</span>`),
            (e += t.total_discount),
            (s =
                window.PXUTheme.theme_settings.display_savings && e > 0 ?
                `<span class="right"><span class="money">${window.Shopify.formatMoney(e, $("body").data("money-format"))}</span></span><span>${window.PXUTheme.translation.cart_savings_text}</span>` :
                "");
        }
        $(".js-cart_items").html(o), $(".js-cart_discounts").html(n), $(".js-cart_subtotal").html(a), $(".js-cart_savings").html(s), window.PXUTheme.currency.show_multiple_currencies && window.currencyConverter.convertCurrencies();


        $("body").hasClass("fancybox-active") && $.fancybox.close(),
            $("#header").is(":visible") ?
            $("#header .cart-container").addClass("active_link") :
            $(".sticky_nav--stick").length ?
            $(".sticky_nav .cart-container").addClass("active_link") :
            $(".top-bar .cart-container").addClass("active_link"),
            // render_cart_drawer(t, jQuery('ul.cart_items.js-cart_items'));
            // return true;
            $('.mini_cart').click()
    })

}