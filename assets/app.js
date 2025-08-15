rimg.shopify.init('[data-rimg="lazy"]', { round: 1 });
const sections = new ShopifySectionsManager();
sections.register("age-gate", (t) => new AgeGate.PageAgeGate(t));
const ageGatePage = document.getElementById("age-gate-page");
function floatToString(t, e) {
    const i = t.toFixed(e).toString();
    return i.match(/^\.\d+/) ? `0${i}` : i;
}
ageGatePage && new AgeGate.SiteAgeGate(ageGatePage),
    $(() => {
        window.utils.enableDisclosure();
        const oldFlickityCreate = window.Flickity.prototype._create;
        (window.Flickity.prototype._create = function () {
            const t = this;
            return (
                this.element.addEventListener &&
                    this.element.addEventListener(
                        "load",
                        () => {
                            t.onresize();
                        },
                        !0
                    ),
                (this._create = oldFlickityCreate),
                oldFlickityCreate.apply(this, arguments)
            );
        }),
            document.addEventListener("lazyloaded", (t) => {
                let e = t.target.getAttribute("data-bg");
                const i = t.target.getAttribute("data-mobile-bg");
                e && (window.PXUTheme.media_queries.medium.matches && i && (e = i), (t.target.style.backgroundImage = `url(${e})`));
            }),
            window.imageFunctions.flickityIosFix(),
            window.objectFitImages(),
            window.header.init(),
            window.mobileSearch.init(),
            window.siteOverlay.init(),
            window.meganavManager.injectAll(),
            window.PXUTheme.theme_settings.enable_autocomplete && window.predictiveSearch.init(),
            window.utils.initializeSectionWrapper(),
            window.slideshow.init(),
            window.testimonials.init(),
            window.video.init(),
            window.gallery.init(),
            window.videoFeature.setupVideoPlayer(),
            window.featuredPromotions.init(),
            window.featuredCollection.init(),
            window.logoList.init(),
            window.collectionSidebarFilter.init(),
            window.cart.init(),
            window.map.init(),
            window.shoppableImage.init(),
            window.productPage.init(),
            window.productPage.runOptionSelector(),
            window.productPage.initializeQuantityBox(),
            window.recentlyViewed.init(),
            window.sidebarAccordions.init(),
            (window.PXUTheme.currency.show_multiple_currencies || window.PXUTheme.currency.native_multi_currency) && window.currencyConverter.init();
        const { pathname: pathname } = location;
        let resizeTimeout;
        pathname.startsWith("/challenge") && $("html, body").animate({ scrollTop: 0 }, "slow");
        const beforeResizeWidth = $(window).width();
        window.addEventListener(
            "resize",
            () => {
                resizeTimeout ||
                    (resizeTimeout = setTimeout(() => {
                        resizeTimeout = null;
                        const t = $(window).width();
                        window.PXUTheme.media_queries.medium.matches && t !== beforeResizeWidth && (window.cart.init(), window.is_touch_device() || (window.header.unload(), window.header.init())), window.logoList.init();
                        document.querySelectorAll("[data-bg]").forEach((t) => {
                            let e = t.getAttribute("data-bg");
                            const i = t.getAttribute("data-mobile-bg");
                            e && (window.PXUTheme.media_queries.medium.matches && i && (e = i), (t.style.backgroundImage = `url(${e})`));
                        });
                    }, 66));
            },
            !1
        ),
            ($.fancybox.defaults.animationEffect = "fade"),
            ($.fancybox.defaults.transitionEffect = "fade"),
            ($.fancybox.defaults.hash = !1),
            ($.fancybox.defaults.infobar = !1),
            ($.fancybox.defaults.toolbar = !1),
            ($.fancybox.defaults.arrows = !1),
            ($.fancybox.defaults.loop = !0),
            ($.fancybox.defaults.smallBtn = !0),
            ($.fancybox.defaults.live = !1),
            ($.fancybox.defaults.zoom = !1),
            ($.fancybox.defaults.mobile.preventCaptionOverlap = !1),
            ($.fancybox.defaults.mobile.toolbar = !0),
            ($.fancybox.defaults.mobile.buttons = ["close"]),
            ($.fancybox.defaults.mobile.clickSlide = "close"),
            ($.fancybox.defaults.mobile.clickContent = "zoom"),
            ($.fancybox.defaults.afterLoad = function (t, e) {
                "image" === t.current.type && e.$content.wrapInner("<div class='fancybox-image-wrap'></div>"),
                    t.group.length > 1 &&
                        e.$content
                            .find(".fancybox-image-wrap")
                            .append(
                                `<a title="Previous" class="fancybox-item fancybox-nav fancybox-prev" href="javascript:;" data-fancybox-prev><span>${window.svgArrowSizeLeft}</span></a><a title="Next" class="fancybox-item fancybox-nav fancybox-next" href="javascript:;" data-fancybox-next><span>${svgArrowSizeRight}</span></a>`
                            );
            }),
            $('.lightbox[rel="gallery"]').fancybox();
        const $videoIframes = $('iframe[src*="youtube.com"], iframe[src*="vimeo.com"], iframe[src*="facebook.com/plugins/video"]');
        function getAspectRatio(t, e) {
            const i = t / e;
            return 0 === Math.abs(i - 1) ? "1:1" : Math.abs(i - 4 / 3) < Math.abs(i - 16 / 9) ? "4:3" : "16:9";
        }
        $videoIframes.each((t, e) => {
            const i = $(e),
                o = i.attr("src");
            i.parents(".plyr__video-wrapper").length || i.parents(".lazyframe").length || i.wrap(`<div class="lazyframe" data-ratio="${getAspectRatio(i.attr("width"), i.attr("height"))}" data-src="${o}"></div>`);
        }),
            window.lazyframe(".lazyframe"),
            $(".shopify-policy__container").wrap('<section class="section shopify-policy-template"><div class="container content"></div>'),
            $(".shopify-policy__container").addClass("five-eighths offset-by-three columns is-hidden-offset-mobile-only medium-down--one-whole"),
            $(".shopify-policy__title").append('<div class="feature-divider"></div>');
        const sortByEl = document.querySelector("[data-sort-by]");
        sortByEl &&
            sortByEl.addEventListener("change", (t) => {
                const { target: e } = t,
                    i = e.value;
                if (e) {
                    const t = new URLSearchParams(document.location.search);
                    t.set("sort_by", i), (window.location.search = t);
                }
            }),
            $("body").on("change", "#tag_filter", () => {
                $("[data-option-filter] input").prop("checked", !1), window.quickFilter.init();
            }),
            $("body").on("change", "#blog_filter", function () {
                const t = $(this).val();
                window.location = t;
            }),
            $("input, select, textarea").on("focus blur", (t) => {
                $("meta[name=viewport]").attr("content", "width=device-width,initial-scale=1,maximum-scale=" + ("blur" === t.type ? 10 : 1));
            }),
            $("body").on("change", "[data-option-filter] input", () => {
                window.quickFilter.init(), $("html, body").animate({ scrollTop: $(".content").offset().top }, 500);
            }),
            $("body").on("click", "[data-reset-filters]", () => {
                window.collectionSidebarFilter.clearAllFilters();
            }),
            $("body").on("click", "[data-clear-filter]", (t) => {
                const e = $(t.currentTarget).parents(".filter-active-tag");
                window.collectionSidebarFilter.clearSelectedFilter(e);
            }),
            $("body").on("change", ".currencies", () => {
                $("[data-initial-modal-price]").attr("data-initial-modal-price", "");
            }),
            $("body").on("change", ".js-quick-shop select", () => {
                const t = $('.js-quick-shop select[name="id"]').val();
                t && window.globalQuickShopProduct && window.quickShop.updateVariant(t);
            }),
            window.PXUTheme.theme_settings.quick_shop_enabled && window.quickShop.init();
        let touchStartPos = 0;
        if (
            ($(document)
                .bind("touchstart", () => {
                    touchStartPos = $(window).scrollTop();
                })
                .bind("touchend", (t) => {
                    const e = touchStartPos - $(window).scrollTop();
                    (e > 20 || e < -20) && t.preventDefault;
                }),
            $("body").on("click", ".sidebar .parent-link--false", function (t) {
                t.preventDefault();
                const e = $(this).parent("li");
                e.find(".menu-toggle").toggleClass("active"), e.find("ul").slideToggle();
            }),
            window.PXUTheme.theme_settings.newsletter_popup && window.newsletter_popup.init(),
            -1 !== window.location.pathname.indexOf("/comments") && $("html,body").animate({ scrollTop: $("#new-comment").offset().top - 140 }, "slow"),
            window.PXUTheme.media_queries.large.matches &&
                ($(".animate_right").waypoint(
                    function () {
                        $(this.element).addClass("animated fadeInRight");
                    },
                    { offset: "70%" }
                ),
                $(".animate_left").waypoint(
                    function () {
                        $(this.element).addClass("animated fadeInLeft");
                    },
                    { offset: "70%" }
                ),
                $(".animate_up").waypoint(
                    function () {
                        $(this.element).addClass("animated fadeInUp");
                    },
                    { offset: "70%" }
                ),
                $(".animate_down").waypoint(
                    function () {
                        $(this.element).addClass("animated fadeInDown");
                    },
                    { offset: "70%" }
                )),
            $(".slider, .flexslider").find("li").unwrap(),
            $(".slider, .flexslider").flickity({ pageDots: window.usePageDots, imagesLoaded: !0, arrowShape: window.arrowSize, lazyLoad: 2 }),
            window.utils.createAccordion(".footer_menu", "h6", "ul"),
            window.utils.createAccordion(".footer_content", "h6", "div.toggle_content"),
            window.utils.createAccordion(".product_section .accordion-tabs", ".tabs li > a", ".tabs-content li"),
            window.utils.mobileParentActiveAccordion("#mobile_menu", "li.sublink > a.parent-link--true span", "li.sublink ul"),
            window.utils.mobileAccordion("#mobile_menu", "li.sublink > a.parent-link--false", "li.sublink ul"),
            window.utils.initializeTabs(),
            window.accordion.init(),
            $("body").on("click", ".menu-toggle", function () {
                $(this).next("ul").slideToggle(), $(this).toggleClass("active"), $(this).attr("aria-expanded", "true" === $(this).attr("aria-expanded") ? "false" : "true");
            }),
            window.PXUTheme.theme_settings.collection_swatches &&
                window.PXUTheme.media_queries.large.matches &&
                ($("body").on("mouseenter", ".collection_swatches", function () {
                    $(".swatch span", $(this)).each(function () {
                        -1 === $(this).data("image").indexOf("no-image") && ($("<img/>")[0].src = $(this).data("image"));
                    });
                }),
                $("body").on("mouseenter", ".swatch span", function () {
                    -1 === $(this).data("image").indexOf("no-image") &&
                        ($(this).parents(".thumbnail").find(".image__container img:not(.secondary)").attr("src", $(this).data("image")),
                        $(this).parents(".thumbnail").find(".image__container img:not(.secondary)").attr("srcset", $(this).data("image")));
                })),
            window.PXUTheme.theme_settings.display_tos_checkbox &&
                $("body").on("click touchstart", ".cart_content .tos_label", function () {
                    $(this).prev("input").prop("checked", !0);
                }),
            window.PXUTheme.theme_settings.display_tos_checkbox && window.PXUTheme.theme_settings.go_to_checkout
                ? $("body").on("click", ".tos_warning [data-cart-checkout-button]", function (t) {
                      if (!$(this).parents("form").find(".tos_agree").is(":checked")) {
                          const t = `<p class="warning animated bounceIn">${window.PXUTheme.translation.agree_to_terms_warning}</p>`;
                          return 0 === $("p.warning").length && $(this).before(t), !1;
                      }
                      window.PXUTheme.theme_settings.go_to_checkout || $("body").hasClass("cart") ? $(this).submit() : (t.preventDefault(), (document.location.href = window.PXUTheme.routes.cart_url));
                  })
                : window.PXUTheme.theme_settings.go_to_checkout ||
                  $("body").on("click", ".cart_content [data-minicart-checkout-button]", (t) => {
                      t.preventDefault(), (document.location.href = window.PXUTheme.routes.cart_url);
                  }),
            window.PXUTheme.theme_settings.collection_secondary_image && window.imageFunctions.showSecondaryImage(),
            $("[data-is-required]").length)
        ) {
            const t = $(".custom-contact__checkbox");
            t.prop("required", !0),
                t.on("change", () => {
                    t.prop("required", !0), t.is(":checked") && t.prop("required", !1);
                });
        }
        function ajaxSubmitCart(t) {
            const e = t;
            $.ajax({
                url: "/cart/update.js",
                dataType: "json",
                cache: !1,
                type: "post",
                data: e.serialize(),
                success(t) {
                    refreshCart(t);
                },
            });
        }
        function updateCartItemQuantity(t) { 
              $.ajax({
                url: "/cart/change.js",
                dataType: "json",
                cache: !1,
                type: "post",
                data: { quantity: t.quantity, line: t.lineID },
                success(e) { 
                  console.log('updateCartItemQuantity');
                    const i = e.items,
                        o = t.lineID - 1,
                        n = t.parentCartForm.find("[data-variant-id]").length,
                        a = t.parentCartForm.find(`[data-variant-id="${t.variantID}"] input`);
                    let s = 0,
                        r = 0;
                    const c = void 0 !== e.items[o] ? e.items[o].quantity : 0;
                    if (
                        (a.length > 1
                            ? ($.each(a, (t, e) => {
                                  s += parseInt($(e).val());
                              }),
                              i.forEach((e) => {
                                  e.variant_id === t.variantID && (r += e.quantity);
                              }))
                            : ((s = parseInt(a.val())), (r = void 0 !== e.items[o] ? e.items[o].quantity : 0)),
                        s > 0 && s > r)
                    )
                        if (((itemsLeftText = 1 === r ? window.PXUTheme.translation.one_item_left : window.PXUTheme.translation.items_left_text), $(".warning--quantity").remove(), n < i.length))
                            "cart-template" === t.parentCartForm.data("cart-form") ? t.parentCartForm.submit() : refreshCart(e);
                        else {
                            const e = `<p class="warning warning--quantity animated bounceIn">${r} ${itemsLeftText}</p>`;
                            t.parentCartForm.find(`[data-line-id='${t.lineID}'] input`).parent().after(e), t.parentCartForm.find(`[data-line-id='${t.lineID}'] input`).val(c);
                        }
                    else "cart-template" === t.parentCartForm.data("cart-form") ? t.parentCartForm.submit() : refreshCart(e);
                    
                    jQuery.getJSON("/cart.js", function(cart) {  
                 
                        var free_shipping = parseFloat($('.shipping-bar-text').attr('data-free-shipping'));
                        var free_currency = $('.shipping-bar-text').attr('data-free-shipping-currency');
                        var new_shipping = (free_shipping - cart.total_price)/ 100;
                        //$('.shipping-bar-text .free_shipping.money').text(free_currency + new_shipping);
                         var new_price = free_currency + new_shipping;
                       if(cart.total_price<=100000 && cart.total_price>0){  
                         $('.shipping-bar-text').html("ONLY <span class='free_shipping money'>" + new_price + "</span> AWAY FROM FREE SHIPPING!");
                    
                      }
                      else if(cart.total_price>100000){
                          $('.shipping-bar-text').html("<span class='free_shipping money' style='background-color:transparent;color:#000;' data-free-shipping='"+ free_shipping +"' data-free-shipping-currency='"+ free_currency +"'>congratulations! we'll pay your shipping</span>");
                        }  
                       else if(cart.total_price==0){
                         $('.shipping-bar-text').html("ONLY <span class='free_shipping money'>" + new_price + "</span> AWAY FROM FREE SHIPPING!");
                        }              
                }); 
                },
            });
        }
        function refreshCartID() {
            const t = document.querySelectorAll(".cart__item");
            for (let e = 0; e < t.length; e++) {
                const i = e + 1,
                    o = t[e].querySelectorAll("[data-line-id]");
                for (let t = 0; t < o.length; t++) o[t].dataset.lineId = i;
            }
        }
        function refreshCart(t) {
            jQuery.getJSON("/cart.js", function (cart) { 
               const hasBundleItems = cart.items.some(item => item.properties && item.properties.bundle);
                if (hasBundleItems) {
                    render_cart_drawer(cart, jQuery('ul.cart_items.js-cart_items'));
                    return true;
                }      
            })
            // render_cart_drawer(t, jQuery('ul.cart_items.js-cart_items'));
            // return true;
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
                    let s = "";
                    for (let t = 0; t < a.length; t++) {
                        const { title: e } = a[t];
                        s = `<p class="notification-discount meta">${e}</p>`;
                    }
                    const r = t + 1;
                    if (
                        ((o += `<li class="mini-cart__item" data-cart-item data-line-id="${r}" data-variant-id="${n.id}"><a href="${n.url}">`),
                        n.image && (o += `<div class="cart_image"><img src="${n.image.replace(/(\.[^.]*)$/, "_compact$1").replace("http:", "")}" alt="${htmlEncode(n.title)}" /></div></a>`),
                        (o += `<div class="mini-cart__item-content"><div class="mini-cart__item-title" data-price="${n.final_price}" ><a href="${n.url}">${n.title}</a>`),
                        n.selling_plan_allocation && (o += `<div class="meta">${n.selling_plan_allocation.selling_plan.name}</div>`),
                        n.properties &&
                            $.each(n.properties, (t, e) => {
                                e && (o += `<div class="line-item ${t}">${t}: ${e} </div>`);
                            }),
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
                                    if (t.length > 1) for (let i = 0; i < t.length; i++) t[i].id === n.id && (e = t[i]);
                                }
                                e.compare_at_price && e.compare_at_price > e.price ? ((c = !0), (d = e.compare_at_price), (l = e.price)) : (c = !1);
                            },
                        }),
                        !0 === c)
                    ) { const t1 = `${window.Shopify.formatMoney(n.final_price, $("body").data("money-format"))} </span><span class="money was_price">${window.Shopify.formatMoney(d, $("body").data("money-format"))}</span>`;
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
                        { title: i } = p[t];
                    (n += `<span class="cart_discounts--title">${i}</span>`), (n += '<span class="cart_discounts--price">'), (n += `-<span class="money">${e}</span></span>`);
                }
                (a += `<span class="right"><span class="money">${window.Shopify.formatMoney(t.total_price, $("body").data("money-format"))}</span></span> <span>${window.PXUTheme.translation.cart_subtotal_text}</span>`),
                    (e += t.total_discount),
                    (s =
                        window.PXUTheme.theme_settings.display_savings && e > 0
                            ? `<span class="right"><span class="money">${window.Shopify.formatMoney(e, $("body").data("money-format"))}</span></span><span>${window.PXUTheme.translation.cart_savings_text}</span>`
                            : "");
            }
            $(".js-cart_items").html(o), $(".js-cart_discounts").html(n), $(".js-cart_subtotal").html(a), $(".js-cart_savings").html(s), window.PXUTheme.currency.show_multiple_currencies && window.currencyConverter.convertCurrencies();
        }

        $(".maps").click(() => {
            $(".maps iframe").css("pointer-events", "auto");
        }),
            "load_more" === window.PXUTheme.theme_settings.pagination_type && window.enableLoadMoreProducts(),
            "load_more_button" === window.PXUTheme.theme_settings.pagination_type && window.enableLoadMoreButton(".product-list"),
            "infinite_scroll" === window.PXUTheme.theme_settings.pagination_type && window.enableInfiniteScroll(".product-list"),
            $("body").on("change", "[data-cart-quantity-input]", function () {
                const t = {
                    lineID: $(this).parents("[data-cart-item]").data("line-id"),
                    variantID: $(this).parents("[data-cart-item]").data("variant-id"),
                    quantity: $(this).val(),
                    parentCartForm: $(this).parents("[data-cart-form]"),
                    totalDiscount: $(this).parents("[data-cart-form]").data("total-discount"),
                    $element: $(this).parents("[data-cart-item]"),
                };
                $(this).parents(".product-quantity-box").find(".js-change-quantity").addClass("is-disabled"), updateCartItemQuantity(t);
            }),
            $("body").on("click", "[data-remove-item]", function (t) { 
                t.preventDefault();
                const e = {
                    lineID: $(this).parents("[data-cart-item]").data("line-id"),
                    variantID: $(this).parents("[data-cart-item]").data("variant-id"),
                    quantity: 0,
                    parentCartForm: $(this).parents("[data-cart-form]"),
                    totalDiscount: $(this).parents("[data-cart-form]").data("total-discount"),
                    $element: $(this).parents("[data-cart-item]"),
                };

                e.$element.addClass("animated fadeOutLeft"),
                    updateCartItemQuantity(e), 
                    "cart-template" === e.parentCartForm.data("cart-form") && (e.$element.find("input").val("0"), e.parentCartForm.submit()),
                    "mini-cart" === e.parentCartForm.data("cart-form") && e.$element.find("input").val("0");

                    setTimeout(function () {
                    jQuery.getJSON("/cart.js", function (cart) {
                        refreshCart(cart);
                        VastaShop.Cart.current = cart;
                        render_cart_drawer(VastaShop.Cart.current, jQuery('ul.cart_items.js-cart_items')); 
                    })
                    }, 1000);                              
            }),
            "ajax" === window.PXUTheme.theme_settings.cart_action &&
                // $(document).on("click", ".ajax-submit", function (e) {
                //     e.preventDefault();
                  
                //     const $addToCartForm = $(this).closest("form"),
                //         $addToCartBtn = $addToCartForm.find(".add_to_cart");
                //        var formData= new FormData($addToCartForm[0]);
                //        if(jQuery(".imageUpload-1").length){
                //         formData.append('properties[artwork]', jQuery(".imageUpload-1")[0].files[0]);
                        
                //       }
                //     return (
                //         $("body").hasClass("cart") && $addToCartForm.submit(),
                //         $.ajax({
                //             url: "/cart/add.js",
                //             dataType: "json",
                //             cache: !1,
                //             type: "post",
                //              //data: $addToCartForm.serialize(),
                //             contentType: false,
                //             processData: false,
                //             data: formData,
                //             beforeSend() {
                //                 $addToCartBtn.attr("disabled", "disabled").addClass("disabled"), $addToCartBtn.find("span").removeClass("fadeInDown").addClass("animated zoomOut");
                //             },
                //             success(res) {
                //               // console.log("responce var:- ", res.variant_id)
                //                 $addToCartBtn.find(".checkmark").addClass("checkmark-active"),
                //                     window.setTimeout(() => {
                //                         $addToCartBtn.removeAttr("disabled").removeClass("disabled"),
                //                             $addToCartBtn.find(".checkmark").removeClass("checkmark-active"),
                //                             $addToCartBtn.find("span").removeClass("zoomOut").addClass("fadeInDown");
                //                     }, 1e3),
                //                     $.ajax({
                //                         url: "/cart.js",
                //                         dataType: "json",
                //                         cache: !1,
                //                         success(t) {
                //                             setTimeout(function () {
                //                                 if (
                //                                     (refreshCart(t),
                //                                     $("body").hasClass("fancybox-active") && $.fancybox.close(),
                //                                     $("#header").is(":visible")
                //                                         ? $("#header .cart-container").addClass("active_link")
                //                                         : $(".sticky_nav--stick").length
                //                                         ? $(".sticky_nav .cart-container").addClass("active_link")
                //                                         : $(".top-bar .cart-container").addClass("active_link"),
                //                                     window.PXUTheme.media_queries.medium.matches)
                //                                 ) {
                //                                     $(this).parent().hasClass("active_link"), $("body").addClass("blocked-scroll");
                //                                     document.getElementById("header").classList.contains("mobile_nav-fixed--false") && window.scroll({ top: 0, left: 0, behavior: "smooth" });
                //                                 }
                //                             }, 500);
                //                         },
                //                     });
                //             jQuery.getJSON("/cart.js", function(cart) {    
                //             cart_drawer.$data.cart_items = cart.items;
                //             cart_drawer.$data.cart_open = true;
                //             });
                //             },
                //             error(XMLHttpRequest) {
                //                 let response = eval(`(${XMLHttpRequest.responseText})`);
                //                 (response = response.description), $(".warning").remove();
                //                 const warning = `<p class="warning animated bounceIn">${response.replace("All 1 ", "All ")}</p>`;
                //                 $addToCartForm.after(warning), $addToCartBtn.removeAttr("disabled").removeClass("disabled"), $addToCartBtn.find("span").text(window.PXUTheme.translation.add_to_cart).removeClass("zoomOut").addClass("zoomIn");
                //             },
                //         }),
                //         !1
                //     );
                // }),

                  
                $('[data-label="(P) Cart Button"] [data-ajaxcart="1"][data-cbto="custom"] .gf_add-to-cart').on('click.addToCart', function() {
                
                      var $addToCartForm = $(this).closest('form');
                      var $addToCartBtn = $addToCartForm.find('.add_to_cart');
                    
                      setTimeout(function() {
                          $.ajax({
                            url: '/cart.js',
                            dataType: 'json',
                            cache: false,
                            success: function(cart) {
                              refreshCart(cart);
                              if($('body').hasClass('fancybox-active')) {
                                $.fancybox.close();
                              }
                              
                              jQuery('.main_nav_wrapper ul.menu li.cart_container').addClass('active_link');
                              $('body').addClass('drawer-open-custom');
                              setTimeout(function(){
                                                 jQuery('.main_nav_wrapper ul.menu li.cart_container').removeClass('active_link');
                                $('body').removeClass('drawer-open-custom');
                
                                        },3000);
                              if($('#header').is(':visible')) {
                                  $('#header .cart-container').addClass('active_link');
                                } else if ($('.sticky_nav--stick').length) {
                                  $('.sticky_nav .cart-container').addClass('active_link');
                                } else {
                                  $('.top-bar .cart-container').addClass('active_link');
                                }
                
                                //block scrolling on mobile
                                if (Shopify.media_queries.medium.matches) {
                                  var $cart_container = $(this).parent();
                                  if($cart_container.hasClass('active_link')) {
                                    $('body').addClass('blocked-scroll');
                                  } else {
                                    $('body').addClass('blocked-scroll');
                                  }
                                }
                            }
                          });
                      },2000);
                });
  

$(document).on("click", ".ajax-submit", function (e) {
    e.preventDefault();

    const $addToCartForm = $(this).closest("form");
    const $addToCartBtn = $addToCartForm.find(".add_to_cart");
    var formData = new FormData($addToCartForm[0]);
    const inputElement = document.getElementById('img_filess');

    //const fileelement = document.getElementById('fileInput');
    //const fileelement = document.getElementById('image-p');
    const fileelement = $('#image-p').text();
    if (inputElement.files.length > 0) {
    // Check if there's an imageUpload-1 element, and if so, append its value as 'artwork' property
    if ($("body.template-product").hasClass("upload_logo")) {
          if(jQuery(".imageUpload-1").length){
                        formData.append('properties[artwork]', jQuery(".imageUpload-1")[0].files[0]); 
                        //formData.append('properties[artwork]', jQuery("#image-p").text()); 
                      }
    }
    else{
    if (jQuery(".imageUpload-1").length) {
        formData.append('items[][properties][artwork]', jQuery(".imageUpload-1")[0].files[0]);
        // Add an additional product to the cart with variant_id '20620171247675'
        formData.append('items[][id]', '20620171247675'); // Variant ID of the additional product
        formData.append('items[][quantity]', '1'); // Quantity of the additional product
    }}
     jQuery('.template-product .upload1 button.gf_remove_img.remove_file').click();
     jQuery('body.copy-upload-logo .upload-logo-copy.drop-zone button.gf_remove_img.remove_image_upload').click();
    }


   if ($("body.template-product").hasClass("product-new")) {
    if (fileelement.length > 0){
    if (jQuery(".imageUpload-1").length) {
        // formData.append('items[][properties][artwork]', jQuery(".patc-img").attr('src'));
        formData.append('items[][properties][artwork]', window.file);
        formData.append('items[][id]', '20620171247675'); 
        formData.append('items[][quantity]', '1'); 
    }}
    // var fileInput = jQuery(".imageUpload-1")[0];
    // if (fileInput.files.length > 0) {
    //     //var file = fileInput.files[0];
    //     var file = fileInput.files[0];
    //     var reader = new FileReader();
    //     reader.onload = function (event) {
    //         var fileSource = event.target.result;
    //         localStorage.setItem('storedFileSource', fileSource);
    //         console.log('File source stored in local storage.');
    //     };
    //        reader.readAsDataURL(file);
    // }
var imageSource = jQuery(".patc-img").attr('src');
var imagsrcname = jQuery(".imagePreview-name-1 .imag-pr").text();
if (imageSource) {
    localStorage.setItem('storedFileSource', imageSource);
    localStorage.setItem('storedFileSourcename', imagsrcname);
} 
     // jQuery('.template-product .upload1 button.gf_remove_img.remove_file').click();
     // jQuery('body.copy-upload-logo .upload-logo-copy.drop-zone button.gf_remove_img.remove_image_upload').click();
    }
if ($("body.template-product").hasClass("product-leather-patch-hats")) {
   if ($('.product-leather-patch-hats input#stiched_leather').is(':checked')) {
    formData.append('items[][id]', '40898924904484');
    formData.append('items[][quantity]', $(this).parents('.shopify-product-form').find('input[name="quantity"]').val()); 
   }
}

if ($("body.template-product").hasClass("product-drinkware_samples")) {
   if ($('.product-drinkware_samples input#stiched_leather').is(':checked')) {
    // formData.append('items[][id]', $(this).parents('.shopify-product-form').find('.first_id').text());
    // formData.append('items[][quantity]', $(this).parents('.shopify-product-form').find('input[name="quantity"]').val()); 
    formData.append('items[][id]', $(this).parents('body').find('.first_id').text());
    formData.append('items[][quantity]', $(this).parents('body').find('input[name="quantity"]').val()); 
   }

   if ($('.product-drinkware_samples input#stiched_leather_2').is(':checked')) {
    // formData.append('items[][id]', $(this).parents('.shopify-product-form').find('.first_id1').text());
    // formData.append('items[][quantity]', $(this).parents('.shopify-product-form').find('input[name="quantity"]').val()); 
    formData.append('items[][id]', $(this).parents('body').find('.first_id1').text());
    formData.append('items[][quantity]', $(this).parents('body').find('input[name="quantity"]').val()); 
   }
}

if ($("body.template-product").hasClass("product-drinkware_v3")) {
   var behaviour= $('.product-drinkware_v3 .stiched_line_item').attr('data-behaviour');
    if ($('.product-drinkware_v3 input#stiched_leather').is(':checked')) {
    formData.append('items[][id]', $(this).parents('.shopify-product-form').find('.first_id').text());
    formData.append('items[][quantity]', $(this).parents('.shopify-product-form').find('input[name="quantity"]').val()); 
    if(behaviour=="true"){$('.product-drinkware_v3 input#stiched_leather').prop('checked',false);}
   }
   
   if ($('.product-drinkware_v3 input#stiched_leather_2').is(':checked')) {
    formData.append('items[][id]', $(this).parents('.shopify-product-form').find('.first_id1').text());
    formData.append('items[][quantity]', $(this).parents('.shopify-product-form').find('input[name="quantity"]').val()); 
    if(behaviour=="true"){$('.product-drinkware_v3 input#stiched_leather_2').prop('checked',false);}
   }
}

    return (
        $("body").hasClass("cart") && $addToCartForm.submit(),
        $.ajax({ 
            url: "/cart/add.js",
            dataType: "json",
            cache: !1,
            type: "post",
             //data: $addToCartForm.serialize(),
            contentType: false,
            processData: false,
            data: formData,
            beforeSend() {
                $addToCartBtn.attr("disabled", "disabled").addClass("disabled");
                $addToCartBtn.find("span").removeClass("fadeInDown").addClass("animated zoomOut");
            },
            success(res) { $('html, body').animate({scrollTop: 0}, 800);
                console.log('add.js');
                // Handle success, like showing a checkmark animation
                $addToCartBtn.find(".checkmark").addClass("checkmark-active");
                window.setTimeout(() => {
                    $addToCartBtn.removeAttr("disabled").removeClass("disabled");
                    $addToCartBtn.find(".checkmark").removeClass("checkmark-active");
                    $addToCartBtn.find("span").removeClass("zoomOut").addClass("fadeInDown");
                }, 1e3);

                // Fetch updated cart and handle it as needed
                $.ajax({
                    url: "/cart.js",
                    dataType: "json",
                    cache: !1,
                    success(t) { 
                        setTimeout(function () {   
                                                if (
                                                    (refreshCart(t),
                                                    $("body").hasClass("fancybox-active") && $.fancybox.close(),
                                                    $("#header").is(":visible")
                                                        ? $("#header .cart-container").addClass("active_link")
                                                        : $(".sticky_nav--stick").length
                                                        ? $(".sticky_nav .cart-container").addClass("active_link")
                                                        : $(".top-bar .cart-container").addClass("active_link"),
                                                    window.PXUTheme.media_queries.medium.matches)
                                                ) { 
                                                    $(this).parent().hasClass("active_link"), $("body").addClass("blocked-scroll");
                                                    document.getElementById("header").classList.contains("mobile_nav-fixed--false") && window.scroll({ top: 0, left: 0, behavior: "smooth" });
                                                }
                                            }, 500);
                    },
                });
                // jQuery.getJSON("/cart.js", function(cart) {    
                //     cart_drawer.$data.cart_items = cart.items;
                //     cart_drawer.$data.cart_open = true;
                // });
                jQuery.getJSON("/cart.js", function(cart) {  
                 
                    var free_shipping = parseFloat($('.shipping-bar-text').attr('data-free-shipping'));
                    var free_currency = $('.shipping-bar-text').attr('data-free-shipping-currency');
                    var new_shipping = (free_shipping - cart.total_price)/ 100;
                    //$('.shipping-bar-text .free_shipping.money').text(free_currency + new_shipping);
                     var new_price = free_currency + new_shipping;
                   if(cart.total_price<=100000 && cart.total_price>0){  
                     $('.shipping-bar-text').html("ONLY <span class='free_shipping money'>" + new_price + "</span> AWAY FROM FREE SHIPPING!");
                
                  }
                  else if(cart.total_price>100000){
                      $('.shipping-bar-text').html("<span class='free_shipping money' style='background-color:transparent;color:#000;' data-free-shipping='"+ free_shipping +"' data-free-shipping-currency='"+ free_currency +"'>congratulations! we'll pay your shipping</span>");
                    }  
                   else if(cart.total_price==0){
                     $('.shipping-bar-text').html("ONLY <span class='free_shipping money'>" + new_price + "</span> AWAY FROM FREE SHIPPING!");
                    }              
                });
            },
            error(XMLHttpRequest) {
                let response = eval(`(${XMLHttpRequest.responseText})`);
                (response = response.description), $(".warning").remove();
                const warning = `<p class="warning animated bounceIn">${response.replace("All 1 ", "All ")}</p>`;
                $addToCartForm.after(warning), $addToCartBtn.removeAttr("disabled").removeClass("disabled"), $addToCartBtn.find("span").text(window.PXUTheme.translation.add_to_cart).removeClass("zoomOut").addClass("zoomIn");
            },
        }),
        !1
    );

});



            window.productPage.productSwatches();
    }),
    (window.Shopify.updateOptionsInSelector = function (t, e) {
        switch (t) {
            case 0:
                var i = "root";
                break;
            case 1:
                i = $(`${e} .single-option-selector:eq(0)`).val();
                break;
            case 2:
                i = $(`${e} .single-option-selector:eq(0)`).val();
                i += ` / ${$(`${e} .single-option-selector:eq(1)`).val()}`;
        }
        const o = Shopify.optionsMap[i];
        $(`${e} .swatch[data-option-index="${t}"] .swatch-element`).each(function () {
            -1 !== $.inArray($(this).attr("data-value"), o)
                ? $(this).removeClass("soldout").find(":radio").removeAttr("disabled", "disabled").removeAttr("checked")
                : $(this).addClass("soldout").find(":radio").removeAttr("checked").attr("disabled", "disabled");
        });
    }),
    (window.Shopify.linkOptionSelectors = function (t, e) {
        window.Shopify.optionsMap = {};
        for (let e = 0; e < t.variants.length; e++) {
            const i = t.variants[e];
            if (i.available) {
                if (
                    ((window.Shopify.optionsMap.root = window.Shopify.optionsMap.root || []),
                    window.Shopify.optionsMap.root.push(i.option1),
                    (window.Shopify.optionsMap.root = window.Shopify.uniq(window.Shopify.optionsMap.root)),
                    t.options.length > 1)
                ) {
                    const t = i.option1;
                    (window.Shopify.optionsMap[t] = window.Shopify.optionsMap[t] || []), window.Shopify.optionsMap[t].push(i.option2), (window.Shopify.optionsMap[t] = window.Shopify.uniq(window.Shopify.optionsMap[t]));
                }
                if (3 === t.options.length) {
                    const t = `${i.option1} / ${i.option2}`;
                    (window.Shopify.optionsMap[t] = window.Shopify.optionsMap[t] || []), window.Shopify.optionsMap[t].push(i.option3), (window.Shopify.optionsMap[t] = window.Shopify.uniq(window.Shopify.optionsMap[t]));
                }
            }
        }
        window.Shopify.updateOptionsInSelector(0, e),
            t.options.length > 1 && window.Shopify.updateOptionsInSelector(1, e),
            3 === t.options.length && window.Shopify.updateOptionsInSelector(2, e),
            $(`${e} .single-option-selector:eq(0)`).change(() => (window.Shopify.updateOptionsInSelector(1, e), 3 === t.options.length && window.Shopify.updateOptionsInSelector(2, e), !0)),
            $(`${e} .single-option-selector:eq(1)`).change(() => (3 === t.options.length && window.Shopify.updateOptionsInSelector(2, e), !0));
    }),
    (window.htmlEncode = function (t) {
        return t ? $("<div/>").text(t).html() : "";
    }),
    (window.is_touch_device = function () {
        return "ontouchstart" in window || navigator.maxTouchPoints;
    }),
    (window.touch_device = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)),
    void 0 === window.Shopify && (window.Shopify = {}),
    (window.Shopify.each = function (t, e) {
        for (let i = 0; i < t.length; i++) e(t[i], i);
    }),
    (window.Shopify.map = function (t, e) {
        for (var i = [], o = 0; o < t.length; o++) i.push(e(t[o], o));
        return i;
    }),
    (window.Shopify.arrayIncludes = function (t, e) {
        for (let i = 0; i < t.length; i++) if (t[i] == e) return !0;
        return !1;
    }),
    (window.Shopify.uniq = function (t) {
        for (var e = [], i = 0; i < t.length; i++) window.Shopify.arrayIncludes(e, t[i]) || e.push(t[i]);
        return e;
    }),
    (window.Shopify.isDefined = function (t) {
        return void 0 !== t;
    }),
    (window.Shopify.getClass = function (t) {
        return Object.prototype.toString.call(t).slice(8, -1);
    }),
    (window.Shopify.extend = function (t, e) {
        function i() {}
        (i.prototype = e.prototype), (t.prototype = new i()), (t.prototype.constructor = t), (t.baseConstructor = e), (t.superClass = e.prototype);
    }),
    (window.Shopify.locationSearch = function () {
        return window.location.search;
    }),
    (window.Shopify.locationHash = function () {
        return window.location.hash;
    }),
    (window.Shopify.replaceState = function (t) {
        window.history.replaceState({}, document.title, t);
    }),
    (window.Shopify.urlParam = function (t) {
        const e = RegExp(`[?&]${t}=([^&#]*)`).exec(window.Shopify.locationSearch());
        return e && decodeURIComponent(e[1].replace(/\+/g, " "));
    }),
    (window.Shopify.newState = function (t, e) {
        let i;
        return (
            (i = window.Shopify.urlParam(t) ? window.Shopify.locationSearch().replace(RegExp(`(${t}=)[^&#]+`), `$1${e}`) : "" === window.Shopify.locationSearch() ? `?${t}=${e}` : `${window.Shopify.locationSearch()}&${t}=${e}`),
            i + window.Shopify.locationHash()
        );
    }),
    (window.Shopify.setParam = function (t, e) {
        window.Shopify.replaceState(window.Shopify.newState(t, e));
    }),
    (window.Shopify.Product = function (t) {
        window.Shopify.isDefined(t) && this.update(t);
    }),
    (window.Shopify.Product.prototype.update = function (t) {
        for (property in t) this[property] = t[property];
    }),
    (window.Shopify.Product.prototype.optionNames = function () {
        return "Array" == window.Shopify.getClass(this.options) ? this.options : [];
    }),
    (window.Shopify.Product.prototype.optionValues = function (t) {
        if (!window.Shopify.isDefined(this.variants)) return null;
        const e = window.Shopify.map(this.variants, (e) => {
            const i = `option${t + 1}`;
            return null == e[i] ? null : e[i];
        });
        return null == e[0] ? null : window.Shopify.uniq(e);
    }),
    (window.Shopify.Product.prototype.getVariant = function (t) {
        let e = null;
        return (
            t.length != this.options.length ||
                window.Shopify.each(this.variants, (i) => {
                    for (var o = !0, n = 0; n < t.length; n++) {
                        i[`option${n + 1}`] != t[n] && (o = !1);
                    }
                    return 1 == o ? void (e = i) : void 0;
                }),
            e
        );
    }),
    (window.Shopify.Product.prototype.getVariantById = function (t) {
        for (let e = 0; e < this.variants.length; e++) {
            const i = this.variants[e];
            if (t == i.id) return i;
        }
        return null;
    }),
    (window.Shopify.money_format = "$"),
    (window.Shopify.formatMoney = function (t, e) {
        function i(t, e) {
            return void 0 === t ? e : t;
        }
        function o(t, e, o, n) {
            if (((e = i(e, 2)), (o = i(o, ",")), (n = i(n, ".")), isNaN(t) || null == t)) return 0;
            const a = (t = (t / 100).toFixed(e)).split(".");
            return a[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, `$1${o}`) + (a[1] ? n + a[1] : "");
        }
        "string" == typeof t && (t = t.replace(".", ""));
        let n = "";
        const a = /\{\{\s*(\w+)\s*\}\}/,
            s = e || this.money_format;
        switch (s.match(a)[1]) {
            case "amount":
                n = o(t, 2);
                break;
            case "amount_no_decimals":
                n = o(t, 0);
                break;
            case "amount_with_comma_separator":
                n = o(t, 2, ".", ",");
                break;
            case "amount_with_apostrophe_separator":
                n = o(t, 2, "'", ".");
                break;
            case "amount_no_decimals_with_comma_separator":
                n = o(t, 0, ".", ",");
        }
        return s.replace(a, n);
    }),
    (window.Shopify.OptionSelectors = function (t, e) {
        return (
            (this.selectorDivClass = "selector-wrapper"),
            (this.selectorClass = "single-option-selector"),
            (this.variantIdFieldIdSuffix = "-variant-id"),
            (this.variantIdField = null),
            (this.historyState = null),
            (this.selectors = []),
            (this.domIdPrefix = t),
            (this.product = new window.Shopify.Product(e.product)),
            (this.onVariantSelected = window.Shopify.isDefined(e.onVariantSelected) ? e.onVariantSelected : function () {}),
            this.replaceSelector(t),
            //this.initDropdown(),
            window.location.href.includes("variant=") ? this.initDropdown() : null,
            e.enableHistoryState && (this.historyState = new window.Shopify.OptionSelectors.HistoryState(this)),
            !0
        );
    }),
    (window.Shopify.OptionSelectors.prototype.initDropdown = function () {
        const t = { initialLoad: !0 };
        if (!this.selectVariantFromDropdown(t)) {
            const e = this;
            setTimeout(() => {
                e.selectVariantFromParams(t) || e.fireOnChangeForFirstDropdown.call(e, t);
            });
        }
    }),
    (window.Shopify.OptionSelectors.prototype.fireOnChangeForFirstDropdown = function (t) {
        this.selectors[0].element.onchange(t);
    }),
    (window.Shopify.OptionSelectors.prototype.selectVariantFromParamsOrDropdown = function (t) {
        this.selectVariantFromParams(t) || this.selectVariantFromDropdown(t);
    }),
    (window.Shopify.OptionSelectors.prototype.replaceSelector = function (t) {
        const e = document.getElementById(t),
            i = e.parentNode;
        window.Shopify.each(this.buildSelectors(), (t) => {
            i.insertBefore(t, e);
        }),
            (e.style.display = "none"),
            (this.variantIdField = e);
    }),
    (window.Shopify.OptionSelectors.prototype.selectVariantFromDropdown = function (t) {
        let e = document.getElementById(this.domIdPrefix).querySelector("[selected]");
        if ((e || (e = document.getElementById(this.domIdPrefix).querySelector('[selected="selected"]')), !e)) return !1;
        const i = e.value;
        return this.selectVariant(i, t);
    }),
    (window.Shopify.OptionSelectors.prototype.selectVariantFromParams = function (t) {
        const e = window.Shopify.urlParam("variant");
        return this.selectVariant(e, t);
    }),
    (window.Shopify.OptionSelectors.prototype.selectVariant = function (t, e) {
        const i = this.product.getVariantById(t);
        if (null == i) return !1;
        for (let t = 0; t < this.selectors.length; t++) {
            const e = this.selectors[t].element,
                o = i[e.getAttribute("data-option")];
            null != o && this.optionExistInSelect(e, o) && (e.value = o);
        }
        return "undefined" != typeof jQuery ? jQuery(this.selectors[0].element).trigger("change", e) : this.selectors[0].element.onchange(e), !0;
    }),
    (window.Shopify.OptionSelectors.prototype.optionExistInSelect = function (t, e) {
        for (let i = 0; i < t.options.length; i++) if (t.options[i].value == e) return !0;
    }),
    (window.Shopify.OptionSelectors.prototype.insertSelectors = function (t, e) {
        window.Shopify.isDefined(e) && this.setMessageElement(e), (this.domIdPrefix = `product-${this.product.id}-variant-selector`);
        const i = document.getElementById(t);
        window.Shopify.each(this.buildSelectors(), (t) => {
            i.appendChild(t);
        });
    }),
    (window.Shopify.OptionSelectors.prototype.buildSelectors = function () {
        for (let t = 0; t < this.product.optionNames().length; t++) {
            const e = new window.Shopify.SingleOptionSelector(this, t, this.product.optionNames()[t], this.product.optionValues(t));
            (e.element.disabled = !1), this.selectors.push(e);
        }
        const t = this.selectorDivClass,
            e = this.product.optionNames();
        return window.Shopify.map(this.selectors, (i) => {
            const o = document.createElement("div");
            if ((o.setAttribute("class", t), e.length > 1)) {
                const t = document.createElement("label");
                (t.htmlFor = i.element.id), (t.innerHTML = i.name), o.appendChild(t);
            }
            return o.appendChild(i.element), o;
        });
    }),
    (window.Shopify.OptionSelectors.prototype.selectedValues = function () {
        for (var t = [], e = 0; e < this.selectors.length; e++) {
            const i = this.selectors[e].element.value;
            t.push(i);
        }
        return t;
    }),
    (window.Shopify.OptionSelectors.prototype.updateSelectors = function (t, e) {
        const i = this.selectedValues(),
            o = this.product.getVariant(i);
        o ? ((this.variantIdField.disabled = !1), (this.variantIdField.value = o.id)) : (this.variantIdField.disabled = !0), this.onVariantSelected(o, this, e), null != this.historyState && this.historyState.onVariantChange(o, this, e);
    }),
    (window.Shopify.OptionSelectorsFromDOM = function (t, e) {
        const i = e.optionNames || [],
            o = e.priceFieldExists || !0,
            n = e.delimiter || "/",
            a = this.createProductFromSelector(t, i, o, n);
        (e.product = a), window.Shopify.OptionSelectorsFromDOM.baseConstructor.call(this, t, e);
    }),
    window.Shopify.extend(window.Shopify.OptionSelectorsFromDOM, window.Shopify.OptionSelectors),
    (window.Shopify.OptionSelectorsFromDOM.prototype.createProductFromSelector = function (t, e, i, o) {
        if (!window.Shopify.isDefined(i)) i = !0;
        if (!window.Shopify.isDefined(o)) o = "/";
        const n = document.getElementById(t),
            a = n.childNodes;
        let s = (n.parentNode, e.length);
        const r = [];
        window.Shopify.each(a, (t, n) => {
            if (1 == t.nodeType && "option" == t.tagName.toLowerCase()) {
                const n = t.innerHTML.split(new RegExp(`\\s*\\${o}\\s*`));
                0 == e.length && (s = n.length - (i ? 1 : 0));
                const a = n.slice(0, s),
                    c = i ? n[s] : "",
                    d = (t.getAttribute("value"), { available: !t.disabled, id: parseFloat(t.value), price: c, option1: a[0], option2: a[1], option3: a[2] });
                r.push(d);
            }
        });
        const c = { variants: r };
        if (0 == e.length) {
            c.options = [];
            for (let t = 0; s > t; t++) c.options[t] = `option ${t + 1}`;
        } else c.options = e;
        return c;
    }),
    (window.Shopify.SingleOptionSelector = function (t, e, i, o) {
        (this.multiSelector = t), (this.values = o), (this.index = e), (this.name = i), (this.element = document.createElement("select"));
        for (let t = 0; t < o.length; t++) {
            const e = document.createElement("option");
            (e.value = o[t]), (e.innerHTML = o[t]), this.element.appendChild(e);
        }
        return (
            this.element.setAttribute("class", this.multiSelector.selectorClass),
            this.element.setAttribute("data-option", `option${e + 1}`),
            (this.element.id = `${t.domIdPrefix}-option-${e}`),
            (this.element.onchange = function (i, o) {
                (o = o || {}), t.updateSelectors(e, o);
            }),
            !0
        );
    }),
    (window.Shopify.Image = {
        preload(t, e) {
            for (let i = 0; i < t.length; i++) {
                const o = t[i];
                this.loadImage(this.getSizedImageUrl(o, e));
            }
        },
        loadImage(t) {
            new Image().src = t;
        },
        switchImage(t, e, i) {
            if (t && e) {
                const o = this.imageSize(e.src),
                    n = this.getSizedImageUrl(t.src, o);
                i ? i(n, t, e) : (e.src = n);
            }
        },
        imageSize(t) {
            const e = t.match(/_(1024x1024|2048x2048|pico|icon|thumb|small|compact|medium|large|grande)\./);
            return null != e ? e[1] : null;
        },
        getSizedImageUrl(t, e) {
            if (null == e) return t;
            if ("master" == e) return this.removeProtocol(t);
            const i = t.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);
            if (null != i) {
                const o = t.split(i[0]),
                    n = i[0];
                return this.removeProtocol(`${o[0]}_${e}${n}`);
            }
            return null;
        },
        removeProtocol: (t) => t.replace(/http(s)?:/, ""),
    }),
    (window.Shopify.OptionSelectors.HistoryState = function (t) {
        this.browserSupports() && this.register(t);
    }),
    (window.Shopify.OptionSelectors.HistoryState.prototype.register = function (t) {
        window.addEventListener("popstate", (e) => {
            t.selectVariantFromParamsOrDropdown({ popStateCall: !0 });
        });
    }),
    (window.Shopify.OptionSelectors.HistoryState.prototype.onVariantChange = function (t, e, i) {
        this.browserSupports() && (!t || i.initialLoad || i.popStateCall || window.Shopify.setParam("variant", t.id));
    }),
    (window.Shopify.OptionSelectors.HistoryState.prototype.browserSupports = function () {
        return window.history && window.history.replaceState;
    }),
    $(document).on("shopify:block:select", (t) => {
        const { blockId: e } = t.detail,
            i = $(`#shopify-section-${t.detail.sectionId}`);
        (i.hasClass("shopify-section--slideshow") || i.hasClass("shopify-section--testimonials") || i.hasClass("shopify-section--shoppable-image--slider-enabled")) && sliderBlock.select(e, i);
    }),
    $(document).on("shopify:block:deselect", (t) => {
        const e = $(`#shopify-section-${t.detail.sectionId}`);
        (e.hasClass("shopify-section--slideshow") || e.hasClass("shopify-section--testimonials")) && window.sliderBlock.deselect(e);
    }),
    $(document).on("shopify:section:reorder", (t) => {
        window.utils.initializeSectionWrapper();
    }),
    $(document).on("shopify:section:load", (t) => {
        const e = $(`#shopify-section-${t.detail.sectionId}`);
        window.utils.initializeSectionWrapper(),
            window.utils.enableDisclosure(),
            window.PXUTheme.theme_settings.enable_autocomplete && window.predictiveSearch.init(),
            window.PXUTheme.theme_settings.newsletter_popup && window.newsletter_popup.init(),
            e.hasClass("shopify-section--article-template") && window.sidebarAccordions.init(),
            e.hasClass("shopify-section--blog-template") && window.sidebarAccordions.init(),
            e.hasClass("shopify-section--product-sidebar") && window.sidebarAccordions.init(),
            e.hasClass("shopify-section--page-gallery-template") && window.gallery.init(e),
            e.hasClass("shopify-section--gallery") && window.gallery.init(),
            (e.hasClass("shopify-section--page-faq-template") || e.hasClass("shopify-section--faq")) && window.accordion.init(),
            e.hasClass("shopify-section--cart-template") && window.cart.init(),
            e.hasClass("shopify-section--featured-promotions") && window.featuredPromotions.init(),
            e.hasClass("shopify-section--slideshow") && window.slideshow.init(),
            e.hasClass("shopify-section--testimonials") && window.testimonials.init(),
            e.hasClass("shopify-section--featured-product") && (window.productPage.init(), window.productPage.runOptionSelector(e), window.videoFeature.init(), window.productPage.productSwatches()),
            e.hasClass("shopify-section--map") && window.map.init(),
            e.hasClass("shopify-section--logo-list") && window.logoList.init(),
            e.hasClass("shopify-section--shoppable-image") && window.shoppableImage.init(),
            e.hasClass("shopify-section--featured-collection") && (window.featuredCollection.init(), window.productPage.init(), window.productPage.runOptionSelector(e), window.videoFeature.init()),
            e.hasClass("shopify-section--video") && window.video.init(),
            (e.hasClass("shopify-section--product-template") || e.hasClass("shopify-section--quick-shop")) &&
                (window.productPage.init(), window.productPage.runOptionSelector(e), window.videoFeature.init(), window.productPage.productSwatches(), window.recentlyViewed.init()),
            e.hasClass("shopify-section--recommended-products") && window.productPage.init(),
            e.hasClass("shopify-section--recently-viewed-products") && window.recentlyViewed.init(),
            e.hasClass("shopify-section--article-template") && -1 != window.location.pathname.indexOf("/comments") && $("html,body").animate({ scrollTop: $("#new-comment").offset().top - 140 }, "slow"),
            e.hasClass("shopify-section--collection-template") && (window.collectionSidebarFilter.init(), window.productPage.init(), window.productPage.runOptionSelector(e), window.sidebarAccordions.init(), window.recentlyViewed.init()),
            e.hasClass("shopify-section--contact-section") && window.map.init(),
            e.hasClass("shopify-section--search-template") && (window.PXUTheme.theme_settings.enable_autocomplete && window.predictiveSearch.init(), window.collectionSidebarFilter.init(), window.sidebarAccordions.init()),
            e.hasClass("shopify-section--header") && (window.meganavManager.injectAll(), window.header.init()),
            e.hasClass("shopify-section--mega-menu") && window.meganavManager.add(e[0]);
    }),
    $(document).on("shopify:section:unload", (t) => {
        const e = $(t.target),
            i = $(`#shopify-section-${t.detail.sectionId}`);
        i.hasClass("shopify-section--header") && window.header.unload(e),
            i.hasClass("shopify-section--slideshow") && window.slideshow.unload(e),
            i.hasClass("shopify-section--logo-list") && window.logoList.unload(i.find("[data-logo-wrapper]")),
            i.hasClass("shopify-section--testimonials") && window.testimonials.unload(e),
            i.hasClass("shopify-section--shoppable-image") && window.shoppableImage.unload(e),
            i.hasClass("shopify-section--search") && window.predictiveSearch.unload(e),
            i.hasClass("shopify-section--product-template") && window.productPage.unload(i),
            i.hasClass("shopify-section--featured-product") && window.productPage.unload(i),
            i.hasClass("shopify-section--mega-menu") && window.meganavManager.remove(i[0]),
            window.requestAnimationFrame(() => {
                window.utils.initializeSectionWrapper();
            });
    }),
    $(document).on("shopify:section:select", (t) => {
        const e = $(`#shopify-section-${t.detail.sectionId}`);
        e.hasClass("shopify-section--mega-menu") && window.meganavManager.select(e[0]),
            e.hasClass("shopify-section--logo-list") && window.logoList.init(),
            e.hasClass("shopify-section--featured-collection") && (window.featuredCollection.unload(e), window.featuredCollection.init());
        const i = document.createEvent("UIEvents");
        i.initUIEvent("resize", !0, !1, window, 0), window.dispatchEvent(i);
    }),
    $(document).on("shopify:section:deselect", (t) => {
        $(`#shopify-section-${t.detail.sectionId}`).hasClass("shopify-section--mega-menu") && window.meganavManager.deselect();
    });


