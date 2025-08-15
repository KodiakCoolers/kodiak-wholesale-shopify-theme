//custom.js

//Blog page template new_article_template 
  $(document).ready(function() { 
    $('body.new_article_template .inner_content .blog_inner_content h2').each(function(){
      if ($(this).children().length > 0) {
        var blog_content= $(this).children().first().text().toLowerCase().replace(/\s+/g, '-').replace(/-+/g, '-').replace(/[^a-z0-9-]/g, '');
        $(this).attr('id',blog_content);
      }
      else{
        var blog_content1= $(this).text().toLowerCase().replace(/\s+/g, '-');
        $(this).attr('id',blog_content1);
      }
    })
    var articleHeadings = $('.blog_inner_content h2');
    articleHeadings.each(function(index, element) {
        var headingText = $(element).text();
        var urlFriendlyText = headingText.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
        console.log(headingText);
        $('#table-of-contents ul').append('<li><a href="#' + urlFriendlyText + '"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none"><path d="M7.04723 6.45888C7.04961 6.7771 6.92926 7.08321 6.71264 7.30988L2.09261 12.1456C1.98609 12.261 1.85833 12.3534 1.71677 12.4174C1.57521 12.4814 1.42269 12.5157 1.26811 12.5183C1.11354 12.5208 0.959996 12.4916 0.816449 12.4324C0.672903 12.3732 0.542227 12.2851 0.432045 12.1733C0.321863 12.0614 0.234382 11.9281 0.174707 11.7811C0.115032 11.6341 0.084357 11.4763 0.0844734 11.317C0.0845898 11.1576 0.115495 10.9999 0.175384 10.853C0.235274 10.7062 0.32295 10.5731 0.433295 10.4615L4.23673 6.48052L0.372439 2.55856C0.158619 2.33387 0.0389354 2.03166 0.0391653 1.71702C0.0393952 1.40237 0.15952 1.10046 0.373668 0.876315C0.587815 0.65217 0.878852 0.523722 1.18409 0.518637C1.48933 0.513553 1.78436 0.632237 2.00562 0.849129L6.69957 5.61313C6.91966 5.83643 7.04471 6.14065 7.04723 6.45888Z" fill="#D9D9D9"/></svg><span>'+headingText+'</span></a></li>')  
    });
  });
//End Blog page template new_article_template 
//Products Templates other than Leather Patch Hats

//   function getSelectedValues() {
//     var selectedOptions = [];
//     var numberOfSelectedOptions = $(".template-product input[name^='option-']:checked").length;
//     $(".template-product .price-form.default_product_price_form div").removeClass("active-swatch");
//     $(".template-product .show_total .price-form div").removeClass("active-swatch");
//     for (var i = 0; i < numberOfSelectedOptions; i++) {
//         var optionName = "option-" + i;
//         var selectedValue = $(".template-product input[name='" + optionName + "']:checked").val();
//         selectedOptions.push(selectedValue);   
//     }
//     if (numberOfSelectedOptions >= 2 ) {
//         var dataTitle = selectedOptions.join(" / ");
//         $(".template-product .price-form.default_product_price_form div[data-title='" + dataTitle + "']").addClass("active-swatch");
//         $(".template-product .show_total .price-form div[data-title='" + dataTitle + "']").addClass("active-swatch");
//     } else if (numberOfSelectedOptions === 1) {
//         $(".template-product .price-form.default_product_price_form div[data-title='" + selectedOptions[0] + "']").addClass("active-swatch");
//         $(".template-product .show_total .price-form div[data-title='" + selectedOptions[0] + "']").addClass("active-swatch");
//     }
//     var quantity_default1 = $(".default_details_product .quantity").val();
//     var total_default1= $('.show_total .all_price_form div.active-swatch').text();
//     var total_active= $('.show_total .all_price_form div.active-swatch').attr('data-price');
//     var total_with_swatch = quantity_default1 * total_active;
//     var symbol_total = $('.show_total .all_price_form div.active-swatch').attr('data-symbol');
//     $('.total_price').text(symbol_total + total_with_swatch.toFixed(2));
//     var compare_default1= $('.show_total .all_price_form div.active-swatch').attr('data-com');
//     var symbol_default1= $('.show_total .all_price_form div.active-swatch').attr('data-symbol');
//     $('.compare-price-var').text(symbol_default1 + compare_default1); 
//     if(compare_default1==''){
//         $('.compare-price-var').hide();
//      }
//     var default_price1_attr = $('.show_total .price-form .active-swatch').attr('data-com');
//     var default_compare1_attr = $('.show_total .price-form .active-swatch').attr('data-price');

// var default_price1 = parseFloat(default_price1_attr.replace(/,/g, ''));
// var default_compare1 = parseFloat(default_compare1_attr.replace(/,/g, ''));

//     var discount1 = default_compare1/default_price1*100;
//     var discount_format1 = (100-discount1).toFixed(0);

// console.log('default_price1', default_price1);
// console.log('default_compare1', default_compare1);
// console.log('discount1',discount1);

//     $('.price-dis .discount-perc b span').html(discount_format1);
//     if(discount_format1=="-Infinity"){
//       $('.price-dis .discount-perc').hide();
//     } 
//   }

function getSelectedValues() {
  var selectedOptions = [];
  var numberOfCheckedOptions = $(".template-product input[name^='option-']:checked").length;
  var numberOfSelectOptions = $(".template-product select[name^='option-']").length;
  var totalOptions = numberOfCheckedOptions + numberOfSelectOptions;
  
  $(".template-product .price-form.default_product_price_form div").removeClass("active-swatch");
  $(".template-product .show_total .price-form div").removeClass("active-swatch");
  
  // Handle radio buttons
  for (var i = 0; i < numberOfCheckedOptions; i++) {
    var optionName = "option-" + i;
    var selectedValue = $(".template-product input[name='" + optionName + "']:checked").val();
    if (selectedValue) {
      selectedOptions.push(selectedValue);
    }
  }
  
  // Handle select dropdowns
  $(".template-product select[name^='option-']").each(function() {
    var selectedValue = $(this).val();
    if (selectedValue) {
      selectedOptions.push(selectedValue);
    }
  });
  
  if (selectedOptions.length >= 2) {
    var dataTitle = selectedOptions.join(" / ");
    $(".template-product .price-form.default_product_price_form div[data-title='" + dataTitle + "']").addClass("active-swatch");
    $(".template-product .show_total .price-form div[data-title='" + dataTitle + "']").addClass("active-swatch");
  } else if (selectedOptions.length === 1) {
    $(".template-product .price-form.default_product_price_form div[data-title='" + selectedOptions[0] + "']").addClass("active-swatch");
    $(".template-product .show_total .price-form div[data-title='" + selectedOptions[0] + "']").addClass("active-swatch");
  }
  
  var quantity_default1 = $(".default_details_product .quantity").val() || 1;
  var total_active = $('.show_total .all_price_form div.active-swatch').attr('data-price') || '0';
  var symbol_total = $('.show_total .all_price_form div.active-swatch').attr('data-symbol') || '$';
  
  var total_with_swatch = quantity_default1 * parseFloat(total_active);
  $('.total_price').text(symbol_total + (isNaN(total_with_swatch) ? '0.00' : total_with_swatch.toFixed(2)));
  
  var compare_default1 = $('.show_total .all_price_form div.active-swatch').attr('data-com') || '';
  var symbol_default1 = $('.show_total .all_price_form div.active-swatch').attr('data-symbol') || '$';
  
  if (compare_default1) {
    $('.compare-price-var').text(symbol_default1 + compare_default1).show();
  } else {
    $('.compare-price-var').hide();
  }
  
  var default_price1_attr = $('.show_total .price-form .active-swatch').attr('data-com');
  var default_compare1_attr = $('.show_total .price-form .active-swatch').attr('data-price');
  
  if (default_price1_attr && default_compare1_attr) {
    var default_price1 = parseFloat(default_price1_attr.replace(/,/g, ''));
    var default_compare1 = parseFloat(default_compare1_attr.replace(/,/g, ''));
    
    if (!isNaN(default_price1) && !isNaN(default_compare1) && default_price1 > 0) {
      var discount1 = default_compare1 / default_price1 * 100;
      var discount_format1 = (100 - discount1).toFixed(0);
      
      $('.price-dis .discount-perc b span').html(discount_format1);
      if (discount_format1 == "-Infinity" || isNaN(discount_format1)) {
        $('.price-dis .discount-perc').hide();
      } else {
        $('.price-dis .discount-perc').show();
      }
    } else {
      $('.price-dis .discount-perc').hide();
    }
  } else {
    $('.price-dis .discount-perc').hide();
  }
}
// Enhanced variant selection functionality for Shopify product forms
function updateVariantURL() {
  console.log("Starting variant selection process");
  
  var selectedOptions = [];
  
  // Get values from radio buttons (color swatches)
  $(".template-product input[name^='option-']:checked").each(function() {
    var optionIndex = parseInt($(this).attr('name').replace('option-', ''));
    selectedOptions[optionIndex] = $(this).val();
    console.log(`Selected option ${optionIndex}: ${$(this).val()}`);
  });
  
  // Get values from dropdowns (logo placement and production time)
  $(".template-product select[name^='option-']").each(function() {
    var optionIndex = parseInt($(this).attr('name').replace('option-', ''));
    selectedOptions[optionIndex] = $(this).val();
    console.log(`Selected option ${optionIndex}: ${$(this).val()}`);
  });
  
  // Filter out any undefined values
  selectedOptions = selectedOptions.filter(option => option !== undefined);
  
  if (selectedOptions.length === 0) {
    console.warn("No options selected");
    return;
  }
  
  console.log("All selected options:", selectedOptions);
  
  // Get product data from the form
  var productForm = $("[data-product-form]");
  var productId = productForm.data('product-id');
  var productData;
  
  try {
    var productJson = productForm.attr('data-product');
    productData = JSON.parse(productJson);
    console.log("Product variants count:", productData.variants.length);
  } catch (e) {
    console.error("Could not parse product data", e);
    return;
  }
  
  // Find the matching variant based on selected options
  var matchingVariant = null;
  
  for (var i = 0; i < productData.variants.length; i++) {
    var variant = productData.variants[i];
    var match = true;
    
    // Check if all selected options match this variant
    for (var j = 0; j < selectedOptions.length; j++) {
      var optionKey = "option" + (j + 1);
      if (variant[optionKey] !== selectedOptions[j]) {
        match = false;
        break;
      }
    }
    
    if (match) {
      matchingVariant = variant;
      console.log("Found matching variant:", variant.id, variant.title);
      break;
    }
  }
  
  if (matchingVariant) {
    var variantId = matchingVariant.id;
    
    // Update the hidden variant selector
    var selectSelector = "#product-select-" + productId;
    $(selectSelector).val(variantId).trigger('change');
    console.log("Updated variant selector to:", variantId);
    
    // Update the form's variant input
    var variantInput = $('input[name="id"]', productForm);
    if (variantInput.length) {
      variantInput.val(variantId);
      console.log("Updated variant input to:", variantId);
    } else {
      // If no input[name="id"] exists, create one
      productForm.append('<input type="hidden" name="id" value="' + variantId + '">');
      console.log("Created new variant input with value:", variantId);
    }
    
    // Update URL if history API is available
    if (window.history && window.history.replaceState) {
      var newUrl = window.location.pathname + "?variant=" + variantId;
      window.history.replaceState({path: newUrl}, '', newUrl);
      console.log("Updated URL to:", newUrl);
    }
    
    // Update price display
    getSelectedValues();
  } else {
    console.warn("No matching variant found for options:", selectedOptions);
  }
}

// Enhanced function to update price display based on selected variant
function getSelectedValues() {
  var selectedOptions = [];
  
  // Get values from radio buttons
  $(".template-product input[name^='option-']:checked").each(function() {
    var optionIndex = parseInt($(this).attr('name').replace('option-', ''));
    selectedOptions[optionIndex] = $(this).val();
  });
  
  // Get values from dropdowns
  $(".template-product select[name^='option-']").each(function() {
    var optionIndex = parseInt($(this).attr('name').replace('option-', ''));
    selectedOptions[optionIndex] = $(this).val();
  });
  
  // Reset active swatch classes
  $(".template-product .price-form.default_product_price_form div").removeClass("active-swatch");
  $(".template-product .show_total .price-form div").removeClass("active-swatch");
  
  // Build the data-title string based on selected options
  if (selectedOptions.length >= 2) {
    var dataTitle = selectedOptions.join(" / ");
    $(".template-product .price-form.default_product_price_form div[data-title='" + dataTitle + "']").addClass("active-swatch");
    $(".template-product .show_total .price-form div[data-title='" + dataTitle + "']").addClass("active-swatch");
  } else if (selectedOptions.length === 1) {
    $(".template-product .price-form.default_product_price_form div[data-title='" + selectedOptions[0] + "']").addClass("active-swatch");
    $(".template-product .show_total .price-form div[data-title='" + selectedOptions[0] + "']").addClass("active-swatch");
  }
  
  // Update total price display
  var quantity = parseInt($(".default_details_product .quantity").val() || 1);
  var activeSwatchEl = $('.show_total .all_price_form div.active-swatch, .show_total .price-form div.active-swatch');
  
  if (activeSwatchEl.length > 0) {
    var pricePerUnit = parseFloat(activeSwatchEl.attr('data-price') || 0);
    var currencySymbol = activeSwatchEl.attr('data-symbol') || '$';
    var totalPrice = quantity * pricePerUnit;
    
    // Update the total price display
    $('.total_price').text(currencySymbol + (isNaN(totalPrice) ? '0.00' : totalPrice.toFixed(2)));
    
    // Update compare price if available
    var comparePrice = activeSwatchEl.attr('data-com');
    if (comparePrice && comparePrice !== '') {
      $('.compare-price-var').text(currencySymbol + comparePrice).show();
      
      // Calculate discount percentage
      var price = parseFloat(pricePerUnit);
      var compare = parseFloat(comparePrice.replace(/,/g, ''));
      
      if (!isNaN(price) && !isNaN(compare) && compare > 0) {
        var discountPercent = Math.round(100 - (price / compare * 100));
        $('.price-dis .discount-perc b span').html(discountPercent);
        $('.price-dis .discount-perc').toggle(discountPercent > 0);
      } else {
        $('.price-dis .discount-perc').hide();
      }
    } else {
      $('.compare-price-var').hide();
    }
  } else {
    $('.total_price').text('$0.00');
    $('.compare-price-var').hide();
  }
}

// Initialize the product form
$(document).ready(function() {
  if (!$('body').hasClass('product-leather-patch-hats')) {
    // Initial setup for variant selection
    setTimeout(function() {
      console.log("Initializing product variant selection");
      
      // Handle radio button (swatch) changes
      $(".template-product input[name^='option-']").on("change", function() {
        updateVariantURL();
      });
      
      // Handle dropdown changes
      $(".template-product select[name^='option-']").on("change", function() {
        updateVariantURL();
      });
      
      // Handle quantity changes
      $(".purchase-details__quantity .js-change-quantity, .quantity").on("change click", function() {
        getSelectedValues();
      });
      
      // Initial setup on page load
      updateVariantURL();
      
      // Ensure correct variant is added to cart
      $('.add_to_cart.ajax-submit').on('click', function(e) {
        // Force a final update of the variant ID before submission
        updateVariantURL();
        
        // Check if a valid variant was selected
        var productForm = $("[data-product-form]");
        var variantId = $('input[name="id"]', productForm).val();

        if (!variantId || variantId === '') {
          console.error("No variant ID found for add to cart");
          e.preventDefault();
          alert("Please select all product options before adding to cart.");
          return false;
        }
        
        console.log("Adding to cart with variant ID:", variantId);
      });
    }, 1000); // Reduced timeout for faster initialization
  }
});

// function updateVariantURL() {
//   console.log("updateVariantURL called");
  
//   var selectedOptions = [];
//   var variantId = null;

//   // Get values from radio buttons
//   $(".template-product input[name^='option-']:checked").each(function() {
//     var optionIndex = $(this).attr('name').replace('option-', '');
//     selectedOptions[parseInt(optionIndex)] = $(this).val();
//     variantId = $(this).data('variant-id');
//     console.log("Radio option " + optionIndex + ": " + $(this).val() + ", Variant ID: " + variantId);
//   });
  
//   // Get values from dropdowns
//   $(".template-product select[name^='option-']").each(function() {
//     var optionIndex = $(this).attr('name').replace('option-', '');
//     var selectedValue = $(this).val();
//     selectedOptions[parseInt(optionIndex)] = selectedValue;
//     var selectedOption = $(this).find('option:selected');
//     if (selectedOption.data('variant-id')) {
//       variantId = selectedOption.data('variant-id');
//     }
//     console.log("Dropdown option " + optionIndex + ": " + selectedValue + ", Variant ID: " + variantId);
//   });
  
//   console.log("All selected options:", selectedOptions);
  
//   var productForm = $("[data-product-form]");
//   var productData;
//   try {
//     var productJson = productForm.attr('data-product');
//     productData = JSON.parse(productJson);
//     console.log("Product variants count:", productData.variants.length);
//   } catch (e) {
//     console.warn("Could not parse product data", e);
//     return;
//   }
  
//   if (!variantId || selectedOptions.length > 1) {
//     variantId = null;
//     for (var j = 0; j < productData.variants.length; j++) {
//       var variant = productData.variants[j];
//       var match = true;
//       for (var k = 0; k < selectedOptions.length; k++) {
//         var optionKey = "option" + (k + 1);
//         if (variant[optionKey] !== selectedOptions[k]) {
//           match = false;
//           break;
//         }
//       }
//       if (match) {
//         variantId = variant.id;
//         console.log("Found matching variant:", variant.id);
//         break;
//       }
//     }
//   }
  
//   if (variantId) {
//     var selectSelector = "#product-select-" + productData.id;
//     console.log("Updating selector " + selectSelector + " to variant " + variantId);
//     $(selectSelector).val(variantId).trigger('change');
    
//     var variantInput = $('input[name="id"]', productForm);
//     if (variantInput.length) {
//       variantInput.val(variantId);
//       console.log("Updated variant input to: " + variantId);
//     }
    
//     if (window.history && window.history.replaceState) {
//       var newUrl = window.location.pathname + "?variant=" + variantId;
//       console.log("Updating URL to " + newUrl);
//       window.history.replaceState({path: newUrl}, '', newUrl);
//     }
//   } else {
//     console.log("No matching variant found for options:", selectedOptions);
//   }
// }

$(document).ready(function() {
  if (!$('body').hasClass('product-leather-patch-hats')) {
    setTimeout(function() {
      console.log("Initializing product option handlers");
      handleFlickityOnScroll();
      
      // Listen for changes on radio buttons
      $(".template-product input[name^='option-']").on("change", function() {
        console.log("Radio option changed:", $(this).attr('name'), "Value:", $(this).val());
        getSelectedValues();
        updateVariantURL();
      });
      
      // Listen for changes on dropdowns
      $(".template-product select[name^='option-']").on("change", function() {
        console.log("Dropdown option changed:", $(this).attr('name'), "Value:", $(this).val());
        getSelectedValues();
        updateVariantURL();
      });
      
      // Initial call to set up prices and variant
      console.log("Initial call to getSelectedValues and updateVariantURL");
      getSelectedValues();
      updateVariantURL();
      
      // Handle add to cart button click to ensure correct variant
      $('.add_to_cart.ajax-submit').on('click', function(e) {
        var productForm = $("[data-product-form]");
        var variantId = $('#product-select-' + productForm.data('product-id')).val();
        if (variantId) {
          console.log("Adding to cart with variant ID:", variantId);
          $('input[name="id"]', productForm).val(variantId);
        } else {
          console.warn("No variant ID found for add to cart");
          e.preventDefault(); // Prevent submission if no variant is selected
        }
      });
    }, 2000);
  }
});

//End of Products Templates other than Leather Patch Hats
//HomePage Slider
  $(document).ready(function(){ 
    $('.home_feature_pro').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 6,
      arrow:false,
      dots:true,
      prevArrow: "<button class='slick-prev pull-left'><svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 129 129' xmlns:xlink='http://www.w3.org/1999/xlink' enable-background='new 0 0 129 129'> <g> <path d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z'></path> </g></svg></button>",
      nextArrow: "<button class='slick-next pull-left'><svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 129 129' xmlns:xlink='http://www.w3.org/1999/xlink' enable-background='new 0 0 129 129'> <g> <path d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z'></path> </g></svg></button>",
      responsive: [
        {
          breakpoint: 1400,
          settings: {                       
            slidesToShow: 5,
            slidesToScroll: 5,
            arrows:false,
          }
        },
        {
        breakpoint: 1200,
        settings: {                       
            slidesToShow: 4,
            slidesToScroll:4,
            arrows:false,
          }
        },
        {
        breakpoint: 1024,
        settings: {                       
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows:false,
          }
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows:false,
          }
        }         
      ]
    });       
  });
//End HomePage Slider
// FAQ Accordion
  $(window).on('load', function() {
    $('.faqAccordion dt:first-of-type button').click();
  });
  $(document).ready(function(){
    $('.faqAccordion dt button').click(function(){
      $('.faqAccordion dd').removeClass('activefaq');
      $('.faqAccordion dd').hide();
      $('.faqAccordion dt button').attr('aria-expanded','false');
      $(this).parent().next('dd').addClass('activefaq');
    })
  }) 
// End FAQ Accordion
$('.float-add-cart-inner .float-add-form select').change(function() {
  var selectedOption = $(this).find('option:selected');
  var attributeValue = selectedOption.attr('data-price');
  var attributeprice = selectedOption.attr('data-compareprice');
  var imagevar= selectedOption.attr('data-featured-image');
  $('.float-add-cart-inner img').attr('src','//www.kodiak-wholesale.com/cdn/shop/'+ imagevar);
  $('.float-add-cart-inner .compare-at-price').text(attributeprice); 
  $('.float-add-cart-inner .price').text(attributeValue); 
  });

  $(window).scroll(function() {
  var specifiedDiv = $('.float-add-cart');
  if ($(window).scrollTop() > 900) {
  specifiedDiv.addClass('float_custom_button');
  }
  else {
  specifiedDiv.removeClass('float_custom_button');
  }
  });

  $('.cross_icon').click(function(){
  $(this).parents('body').removeClass('is-active');
  $(this).parents('.top-bar').find('.overlay-mobile').removeClass('showed-overlay');
})

$(document).ready(function() { 
  $('.image-text-slide-text-inner').slick({
    dots:true,
    arrows:true,
    infinite: false,
    customPaging: function (slider, i) {
      console.log(slider);
      return  (i + 1) + '/' + slider.slideCount;
    }
  });
  var $slider = $('.image-text-slide-text-inner');
  var $progressBar = $('.progress');
  var $progressBarLabel = $( '.slider__label' );
  $(document).ready(function(){
    $progressBar
    .css('background-size', '20% 100%')
    .attr('aria-valuenow', '20%' );
  });
  $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    var calc = ((nextSlide + 1) / slick.slideCount) * 100;
    $progressBar
    .css('background-size', calc + '% 100%')
    .attr('aria-valuenow', calc );
    $progressBarLabel.text( calc + '% completed' );
  });
  $('.slider-content').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, 
    centerPadding: '15px',
    responsive: [
       {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
         }
       },
       {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
         }
       }
      ]  
  })
});
//How to order
  $(document).ready(function() { 
    var path=window.location.pathname; 
    $('.place-order div[data-label="Accordion"] a[href="'+path+'"]').parents('div[data-accordion]').addClass('show_accordion_content');
    $('.place-order div[data-label="Accordion"] a[href="'+path+'"]').addClass('main_path');
    $('.place-order .plus.iCon-right.text-.item-content').click(function(){
      $(this).parents('div[data-accordion]').toggleClass('show_accordion_content');
      $(this).parents('div[data-accordion]').siblings('[data-accordion]').removeClass('show_accordion_content');
    });
  });
// End of how to order
// For Buy more save more price in price each
$(document).on('click', '.purchase-details .ss-icon', function() {
  var qut = $(this).parents('.product-quantity-box').find('.quantity').val();
  console.log(qut);
  $(".lb-vd-table-body-text:nth-child(1)").each(function(){
    var integer = $(this).text();
    var thiss = parseInt(integer.match(/\d+/)[0]);
    if(thiss == qut){
      var nextt = $(this).next('.lb-vd-table-body-text').html();
      console.log('nextt',nextt);
        setTimeout(function() {
          $('span.sale.savings').removeClass("savings").addClass("sale-class");;
          $('span.sale-class').html(nextt);
          
        }, 1000);
      }
  });
  var tableBody = $('.lb-vd-table-body');
  var discountedRates = {};
  var lastMatchedQuantity = null; // Track the last matched quantity
  // Loop through each row in the table body
  tableBody.find('tr').each(function() {
    var quantity = $(this).find('td:eq(0)').text().trim();
    var numericQuantity = parseInt(quantity.replace(/\D/g, '')); // Fixed this line
    var discountedRate = $(this).find('td:eq(2) span.money').text().trim();
    // Store discounted rates based on quantities
    if (!discountedRates[numericQuantity]) {
      discountedRates[numericQuantity] = [];
    }
    discountedRates[numericQuantity].push(discountedRate);
    // Update the last matched quantity
    if (numericQuantity <= qut) {
      lastMatchedQuantity = numericQuantity;
    }
  });
  // Display discounted rates for the last matched quantity
  if (lastMatchedQuantity !== null) {
    console.log('Quantity:', lastMatchedQuantity);
    console.log('Discounted Rates:', discountedRates[lastMatchedQuantity].join(', '));
    $('.activeswatch .pricing_variant').text(discountedRates[lastMatchedQuantity].join(', '));
    $('.pricing_variant').parent('.activeswatch').attr('data-price',discountedRates[lastMatchedQuantity].join(', '));
    $('.show_total .price-form .activeswatch').attr('data-price',discountedRates[lastMatchedQuantity].join(', ').replace('$', ''));
    $('.active-swatch .pricing_variant').text(discountedRates[lastMatchedQuantity].join(', '));
    $('.pricing_variant').parent('.active-swatch').attr('data-price',discountedRates[lastMatchedQuantity].join(', '));
    $('.show_total .price-form .active-swatch').attr('data-price',discountedRates[lastMatchedQuantity].join(', ').replace('$', ''));
  } 
  else {
    var op = $('.activeswatch .pricing_variant').attr('data-prices');
    $('.activeswatch .pricing_variant').text(op);
    $('.pricing_variant').parent('.activeswatch').attr('data-price',op);
    $('.show_total .price-form .activeswatch').attr('data-price',op.replace('$', ''));
    var op1 = $('.active-swatch .pricing_variant').attr('data-prices');
    $('.active-swatch .pricing_variant').text(op1);
    $('.pricing_variant').parent('.active-swatch').attr('data-price',op1);

    $('.show_total .price-form .active-swatch').attr('data-price',op1.replace('$', ''));
  } 
  var qty = $('.quantity').val();
  var symbol = $('.show_total .activeswatch').attr('data-symbol'); 
  var comprss =  $('.show_total .activeswatch').attr('data-com');
  var sub_comp = qty * comprss;
  var formattedComp = symbol + sub_comp.toFixed(2); 
  $('.compare-price-var').text(formattedComp);
  if(formattedComp== "$0.00"){$('.compare-price-var').hide();}
  });
// End of Buy more save more price in price each

// Other products total
 $(document).ready(function() { 
  $('.other-products .ss-icon').click(function(){
    var thiss = $(this);
    setTimeout(function() {
      var qty11 =  thiss.parents('.purchase-details__quantity').find('#quantity').val();
      var price11 = parseFloat($('.other-products .show_total .price-form .active-swatch').attr('data-price'));
      var symbol11 = $('.other-products .show_total .price-form .active-swatch').attr('data-symbol'); 
      var subtotal11 = qty11 * price11;
      var formattedSubtotal11 = symbol11 + subtotal11.toFixed(2); 
      $('.other-products .total_price.total_price1').text(formattedSubtotal11);
      var comp11 = $('.other-products .show_total .price-form .active-swatch').attr('data-com');
      var c11 = price11/comp11*100;
      var tt11 = (100-c11).toFixed(0);
      $('.other-products .discount-perc b span').html(tt11);
      if(tt11=="-Infinity"){
       $('.other-products .discount-perc').hide();
      } 
    },1500)
  });
 });
// End of other products total
// Other products total on input change
$(document).ready(function() { 
$('.other-products .quantity').on('input',function(){
var thiss = $(this);
setTimeout(function() {
var qty1 =  thiss.val();
var tableBody = $('.lb-vd-table-body');
var discountedRates = {};
var lastMatchedQuantity = null; // Track the last matched quantity
tableBody.find('tr').each(function() {
var quantity = $(this).find('td:eq(0)').text().trim();
var numericQuantity = parseInt(quantity.replace(/\D/g, '')); // Fixed this line
var discountedRate = $(this).find('td:eq(2) span.money').text().trim();
if (!discountedRates[numericQuantity]) {
discountedRates[numericQuantity] = [];
}
discountedRates[numericQuantity].push(discountedRate);
if (numericQuantity <= qty1) {
lastMatchedQuantity = numericQuantity;
}
});
if (lastMatchedQuantity !== null) {
console.log('Quantity:', lastMatchedQuantity);
console.log('Discounted Rates:', discountedRates[lastMatchedQuantity].join(', '));
$('.active-swatch .pricing_variant').text(discountedRates[lastMatchedQuantity].join(', '));
$('.pricing_variant').parent('.active-swatch').attr('data-price',discountedRates[lastMatchedQuantity].join(', '));
$('.show_total .price-form .active-swatch').attr('data-price',discountedRates[lastMatchedQuantity].join(', ').replace('$', ''));
} 
else {
var op = $('.active-swatch .pricing_variant').attr('data-prices');
$('.active-swatch .pricing_variant').text(op);
$('.pricing_variant').parent('.active-swatch').attr('data-price',op);
$('.show_total .price-form .active-swatch').attr('data-price',op.replace('$', ''));
}
var price1 = parseFloat($('.show_total .price-form .active-swatch').attr('data-price'));
var symbol1 = $('.show_total .price-form .active-swatch').attr('data-symbol'); 
var subtotal1 = qty1 * price1;
var formattedSubtotal1 = symbol1 + subtotal1.toFixed(2); 
$('.product .total_price').text(formattedSubtotal1);
var comp2 = $('.show_total .price-form .active-swatch').attr('data-com');
var c2 = price1/comp2*100;
var tt2 = (100-c2).toFixed(0);
$('.discount-perc b span').html(tt2);
},500)
});
});
// End of Other products total on input change
$(document).ready(function(){
$('.page-inner-template .item-content-heading').click(function(){
  $(this).parents('.module-wrap').siblings().removeClass('active-content');  
  $(this).parents('.module-wrap').toggleClass('active-content');  
})
})
$(document).ready(function() { 
    var path=window.location.pathname; 
    $('.page-inner-template div.inner_page_menu a[href="'+path+'"]').parents('.module-wrap').addClass('active-content');
    $('.page-inner-template div.inner_page_menu a[href="'+path+'"]').addClass('main_path');
  });

