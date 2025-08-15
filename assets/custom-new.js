//custom-new.js
// DRAFT
var ids1 = $(".tab .tablinks").attr("id");
$(".tab #description").addClass("active-tab");
$(".tab_content").hide();
$('.tab_content[id="' + ids1 + '"]').show();
$(".tab .tablinks").click(function () {
  var ids = $(this).attr("id");
  $(".tab .tablinks").removeClass("active-tab");
  $(this).addClass("active-tab");
  $(".tab_content").hide();
  $('.tab_content[id="' + ids + '"]').show();
  $(".slider-content").slick("refresh");
});
$(".Product-questions-dropdown").click(function () {
  $(this).toggleClass("active-drop");
  var ids = $(this).attr("data-id");
  $(this)
    .next('[data-id="' + ids + '"]')
    .slideToggle();
  $(".text-slide-text-inner .slider-content").slick("refresh");
});
var style = $(".swatch_options .style_swatch_design input:checked").val();
var color = $(".swatch_options .color_swatch_design input:checked").val();
$('.price-form div[data-title="' + style + " / " + color + '"]').addClass(
  "activeswatch"
);
$(".color_swatch_design .color").click(function () {
  var col = $(this).attr("data-value");
  var sty = $(".swatch_options .style_swatch_design input:checked").val();
  $(".price-form div").removeClass("activeswatch");
  $('.price-form div[data-title="' + sty + " / " + col + '"]').addClass(
    "activeswatch"
  );
});
$(".style_swatch_design .style").click(function () {
  var sty1 = $(this).attr("data-value");
  var col1 = $(".swatch_options .color_swatch_design input:checked").val();
  $(".price-form div").removeClass("activeswatch");
  var tit = $(
    '.price-form div[data-title="' + sty1 + " / " + col1 + '"]'
  ).addClass("activeswatch");
  var tit1 = $(
    '.price-form div[data-title="' + sty1 + " / " + col1 + '"]'
  ).attr("data-title");
  console.log(tit1);
});
$(document).ready(function() {
  var sel = $(".dropdown-media").val();
  $(".price-form div").removeClass("activeswatch");
  $('.price-form div[data-title="' + sel + '"]').addClass("activeswatch");
  $(".dropdown-media").on("change", function() {
    var selected = $(this).val();
    $(".price-form div").removeClass("activeswatch");
    $('.price-form div[data-title="' + selected + '"]').addClass("activeswatch");
  });
});
$(document).ready(function () {
  $(".compare-collections").slick({
    dots: !1,
    infinite: !1,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 800, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  });
  var id2 = $(".collection-tabs .tablinks").attr("id");
  $(".collection-tabs .tablinks:nth-child(1)").addClass("active-collection");
  $('.compare-collections[data-id="' + id2 + '"]').show();
  $(".collection-tabs .tablinks").click(function () {
    var id1 = $(this).attr("id");
    $(".compare-collections").hide();
    $('.compare-collections[data-id="' + id1 + '"]').show();
    $(".collection-tabs .tablinks").removeClass("active-collection");
    $(this).addClass("active-collection");
    $(".compare-collections").slick("refresh");
  });
  $(
    ".product-new .gallery-thumbnails--left .product-gallery__thumbnails"
  ).slick({
    vertical: !0,
    slidesToShow: 6,
    slidesToScroll: 1,
    verticalSwiping: !0,
    arrows: !1,
  });
  var price1 = parseFloat($(".show_total .activeswatch").attr("data-price"));
  var symbol1 = $(".show_total .activeswatch").attr("data-symbol");
  var subtotal1 = 1 * price1;
  var formattedSubtotal = symbol1 + subtotal1.toFixed(2);
  var tot1 = $(".total_price").text(formattedSubtotal);
  $(document).on("click", ".product-new .ss-icon", function () {
    setTimeout(function () {
      var qty = $(".quantity").val();
      var price = parseFloat($(".show_total .activeswatch").attr("data-price"));
      var symbol = $(".show_total .activeswatch").attr("data-symbol");
      var subtotal = qty * price;
      var comprss = $(".show_total .activeswatch").attr("data-com");
      var sub_comp = qty * comprss;
      var formattedComp = symbol + sub_comp.toFixed(2);
      $(".compare-price-var").text(formattedComp);
      var formattedSubtotal = symbol + subtotal.toFixed(2);
      $(".total_price").text(formattedSubtotal);
      var a = $(".show_total .price-form .activeswatch").attr("data-com");
      var b = $(".show_total .price-form .activeswatch").attr("data-price");
      var c = (b / a) * 100;
      var tt = (100 - c).toFixed(0);
      $(".discount-perc b span").html(tt);
    }, 200);
  });
  $(document).ready(function () {
    var a = $(".show_total .price-form .activeswatch").attr("data-com");
    var b = $(".show_total .price-form .activeswatch").attr("data-price");
    var c = (b / a) * 100;
    var tt = (100 - c).toFixed(0);
    $(".discount-perc b span").html(tt);
    if (tt == "-Infinity") {
      $(".discount-perc").hide();
    }
    var symbol2 = $(".show_total .activeswatch").attr("data-symbol");
    var compr = $(".show_total .activeswatch").attr("data-com");
    if (compr !== "") {
      $(".compare-price-var").text(symbol2 + compr);
    }
    $(".color-image:first-child").click();
    var price2 = parseFloat(
      $(".product-leather-patch-hats .show_total .activeswatch").attr(
        "data-price"
      )
    );
    var symbol2 = $(".show_total .activeswatch").attr("data-symbol");
    var subtotal2 = 1 * price2;
    var formattedSubtotal2 = symbol2 + subtotal2.toFixed(2);
    var tot2 = $(".product-leather-patch-hats .total_price").text(
      formattedSubtotal2
    );
    $(".product-leather-patch-hats .ss-icon").click(function () {
      var thiss = $(this);
      setTimeout(function () {
        var qty1 = thiss
          .parents(".purchase-details__quantity")
          .find("#quantity")
          .val();
        var price1 = parseFloat(
          $(".show_total .price-form .activeswatch").attr("data-price")
        );
        var symbol1 = $(".show_total .price-form .activeswatch").attr(
          "data-symbol"
        );
        var subtotal1 = qty1 * price1;
        var formattedSubtotal1 = symbol1 + subtotal1.toFixed(2);
        $(".product-leather-patch-hats .total_price").text(formattedSubtotal1);
        var comp1 = $(".show_total .price-form .activeswatch").attr("data-com");
        var c1 = (price1 / comp1) * 100;
        var tt1 = (100 - c1).toFixed(0);
        $(".discount-perc b span").html(tt1);
        $("span.sale.savings").html(tt1 + " off");
        if (tt1 == "-Infinity") {
          $(".discount-perc").hide();
        }
      }, 500);
    });
    $(".product-leather-patch-hats .quantity").on("input", function () {
      var thiss = $(this);
      setTimeout(function () {
        var qty1 = thiss.val();
        var tableBody = $(".lb-vd-table-body");
        var discountedRates = {};
        var lastMatchedQuantity = null;
        tableBody.find("tr").each(function () {
          var quantity = $(this).find("td:eq(0)").text().trim();
          var numericQuantity = parseInt(quantity.replace(/\D/g, ""));
          var discountedRate = $(this)
            .find("td:eq(2) span.money")
            .text()
            .trim();
          if (!discountedRates[numericQuantity]) {
            discountedRates[numericQuantity] = [];
          }
          discountedRates[numericQuantity].push(discountedRate);
          if (numericQuantity <= qty1) {
            lastMatchedQuantity = numericQuantity;
          }
        });
        if (lastMatchedQuantity !== null) {
          console.log("Quantity:", lastMatchedQuantity);
          console.log(
            "Discounted Rates:",
            discountedRates[lastMatchedQuantity].join(", ")
          );
          $(".activeswatch .pricing_variant").text(
            discountedRates[lastMatchedQuantity].join(", ")
          );
          $(".pricing_variant")
            .parent(".activeswatch")
            .attr(
              "data-price",
              discountedRates[lastMatchedQuantity].join(", ")
            );
          $(".show_total .price-form .activeswatch").attr(
            "data-price",
            discountedRates[lastMatchedQuantity].join(", ").replace("$", "")
          );
        } else {
          var op = $(".pricing_variant").attr("data-prices");
          $(".activeswatch .pricing_variant").text(op);
          $(".pricing_variant").parent(".activeswatch").attr("data-price", op);
          $(".show_total .price-form .activeswatch").attr(
            "data-price",
            op.replace("$", "")
          );
        }
        var price1 = parseFloat(
          $(".show_total .price-form .activeswatch").attr("data-price")
        );
        var symbol1 = $(".show_total .price-form .activeswatch").attr(
          "data-symbol"
        );
        var subtotal1 = qty1 * price1;
        var formattedSubtotal1 = symbol1 + subtotal1.toFixed(2);
        $(".product-leather-patch-hats .total_price").text(formattedSubtotal1);
        var comp2 = $(".show_total .price-form .activeswatch").attr("data-com");
        var c2 = (price1 / comp2) * 100;
        var tt2 = (100 - c2).toFixed(0);
        $(".discount-perc b span").html(tt2);
      }, 500);
    });
    setTimeout(function () {
      $(".show_total.late-show .total_price").show();
    }, 500);
  });
  $(".product-new .tab-collection.compare-col .total_count").click(function () {
    $(this).hide();
    $(this).parents(".show_colors").find("span.color-option").hide();
    $(this)
      .parents(".show_colors")
      .find("span.color-option.color-option-1")
      .show();
  });
  $(document).ready(function () {
    var dots = $(".image-text-slide-text .slick-dots .slick-active").text();
    $(".image-text-slide-text .dots-text").text(dots);
    $(".image-text-slide-text .prev-arrow").click(function () {
      $(".image-text-slide-text .slick-prev").click();
      var text = $(".slick-dots .slick-active").text();
      $(".image-text-slide-text .dots-text").text(text);
    });
    $(".image-text-slide-text .next-arrow").click(function () {
      $(".image-text-slide-text .slick-next").click();
      var text1 = $(".slick-dots .slick-active").text();
      $(".image-text-slide-text .dots-text").text(text1);
    });
  });
  $(".imageUpload-1").on("change", function (event) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const fileName = selectedFile.name;
      $(this).parents(".upload1").find("#imagePreview-name").text(fileName);
    }
  });
  $(".remove_file").on("click", function () {
    $(".imageUpload-1").val("");
    $("#imagePreview-name").text("");
    $(".manage_two_div .container_avtar input.input-forfile").attr("value", "");
    $("div#imagePreview-name").hide();
    $("img#img_urlss").attr("src", "");
    $(this).hide();
  });
});
function handleSpanClick(spanElement) {
  $(spanElement).hide();
  $(spanElement).parents(".swatch_options").find("span.color-option").hide();
  $(spanElement)
    .parents(".swatch_options")
    .find("span.color-option.color-option-1")
    .show();
}
$(document).ready(function () {
  $(".add_to_cart.ajax-submit").click(function () {
    setTimeout(function () {
      $("body").removeClass("blocked-scroll");
    }, 3000);
  });
  $("#read-more-btn").click(function () {
    $(".product_description").toggleClass("expanded");
    if ($(".product_description").hasClass("expanded")) {
      $("#read-more-btn").text("Read Less");
    } else {
      $("#read-more-btn").text("Read More");
    }
  });
});
jQuery(document).ready(function () {
  const daysElement = jQuery(".min_date_standard");
  const nextdaysElement = jQuery(".max_date_standard");
  if (daysElement.length > 0) {
    const days = parseInt(daysElement.attr("data-min"), 10);
    const days1 = parseInt(nextdaysElement.attr("data-max"), 10);
    if (!isNaN(days)) {
      const currentDate = new Date();
      const futureDate = new Date(currentDate);
      const futureDate1 = new Date(currentDate);
      futureDate.setDate(currentDate.getDate() + days);
      futureDate1.setDate(currentDate.getDate() + days1);
      const formattedFutureDate = formatDate(futureDate);
      const formattedFutureDate1 = formatDate(futureDate1);
      jQuery(".min_date_standard").text(formattedFutureDate);
      jQuery(".max_date_standard").text(formattedFutureDate1);
    }
  }
  const rushdaysElement = $(".min_date_rush");
  const rushnextdaysElement = $(".max_date_rush");
  if (rushdaysElement.length > 0) {
    const rushdays = parseInt(rushdaysElement.attr("data-min"), 10);
    const rushdays1 = parseInt(rushnextdaysElement.attr("data-max"), 10);
    if (!isNaN(rushdays)) {
      const rushcurrentDate = new Date();
      const rushfutureDate = new Date(rushcurrentDate);
      const rushfutureDate1 = new Date(rushcurrentDate);
      rushfutureDate.setDate(rushcurrentDate.getDate() + rushdays);
      rushfutureDate1.setDate(rushcurrentDate.getDate() + rushdays1);
      const rushformattedFutureDate = formatDate(rushfutureDate);
      const rushformattedFutureDate1 = formatDate(rushfutureDate1);
      $(".min_date_rush").text(rushformattedFutureDate);
      $(".max_date_rush").text(rushformattedFutureDate1);
    }
  }
});
function formatDate(date) {
  const monthNames = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = date.getFullYear();
  const monthName = monthNames[date.getMonth()];
  const day = date.getDate().toString().padStart(2, "0");
  return `${monthName}-${day}-${year}`;
}
$(document).ready(function () {
  var p1 = $(".product__details--product-page .price .money").text();
  $(".total_price").text(p1);
  var initialPriceElement = $(".product__details--product-page .price .money");
  var initialPrice = initialPriceElement.attr("data-initial-price", p1);
  var initialPrice01 = initialPriceElement.attr("data-initial-price-1", p1);
  var comparep1 = $(
    ".product__details--product-page .compare-at-price .money"
  ).text();
  var compareinitialPriceElement = $(
    ".product__details--product-page .compare-at-price .money"
  );
  var compareinitialPrice = compareinitialPriceElement.attr(
    "data-compareinitial-price",
    comparep1
  );
  var compareinitialPrice01 = compareinitialPriceElement.attr(
    "data-compareinitial-price-1",
    comparep1
  );
  $(".product__details--product-page span.ss-icon.js-change-quantity").click(
    function () {
      var thisss = $(this);
      setTimeout(function () {
        if (!$("body").hasClass("product-leather-patch-hats")) {
          $(".compare-price-var").text("");
        }
      }, 10);
      setTimeout(function () {
        var priceElement = $(
          ".product__details--product-page .money[data-initial-price]"
        );
        var dataInitialPrice = priceElement.attr("data-initial-price");
        var priceMatch = dataInitialPrice.match(/([\d.]+)/);
        var currencySymbol = dataInitialPrice.replace(priceMatch[0], "").trim();
        var price = parseFloat(priceMatch[0]);
        var quantity = thisss
          .parents(".product-quantity-box")
          .find(".quantity")
          .val();
        var total = quantity * price;
        var totalPriceWithSymbol = currencySymbol + total.toFixed(2);
        $(".product__details--product-page .price .money").text(
          totalPriceWithSymbol
        );
        $(".total_price").text(totalPriceWithSymbol);
        var comparepriceElement = $(
          ".product__details--product-page .money[data-compareinitial-price]"
        );
        var comparedataInitialPrice = comparepriceElement.attr(
          "data-compareinitial-price"
        );
        var comparepriceMatch = comparedataInitialPrice.match(/([\d.]+)/);
        var comparecurrencySymbol = comparedataInitialPrice
          .replace(comparepriceMatch[0], "")
          .trim();
        var compareprice = parseFloat(comparepriceMatch[0]);
        var comparetotal = quantity * compareprice;
        var comparetotalPriceWithSymbol =
          comparecurrencySymbol + comparetotal.toFixed(2);
        $(".product__details--product-page .compare-at-price .money").text(
          comparetotalPriceWithSymbol
        );
        if (!$("body").hasClass("product-leather-patch-hats")) {
          $(".compare-price-var").text(comparetotalPriceWithSymbol);
        }
      }, 1000);
    }
  );
  $(".swatch-element").click(function () {
    setTimeout(function () {
      var p2 = $(".price .money").text();
      var initialPriceElement1 = $(".price .money");
      var initialPrice1 = initialPriceElement1.attr("data-initial-price", p2);
      var initialPrice_1 = initialPriceElement1.attr(
        "data-initial-price-1",
        p2
      );
      var priceElement1 = $(".money[data-initial-price]");
      var dataInitialPrice1 = priceElement1.attr("data-initial-price");
      var priceMatch1 = dataInitialPrice1.match(/([\d.]+)/);
      var currencySymbol1 = dataInitialPrice1
        .replace(priceMatch1[0], "")
        .trim();
      var price1 = parseFloat(priceMatch1[0]);
      var quantity1 = $("#quantity").val();
      var total1 = quantity1 * price1;
      var totalPriceWithSymbol1 = currencySymbol1 + total1.toFixed(2);
      $(".price .money").text(totalPriceWithSymbol1);
      var comparep2 = $(".compare-at-price .money").text();
      var compareinitialPriceElement1 = $(".compare-at-price .money");
      var compareinitialPrice1 = compareinitialPriceElement1.attr(
        "data-compareinitial-price",
        comparep2
      );
      var compareinitialPrice_1 = compareinitialPriceElement1.attr(
        "data-compareinitial-price-1",
        comparep2
      );
      var comparepriceElement1 = $(".money[data-compareinitial-price]");
      var comparedataInitialPrice1 = comparepriceElement1.attr(
        "data-compareinitial-price"
      );
      var comparepriceMatch1 = comparedataInitialPrice1.match(/([\d.]+)/);
      var comparecurrencySymbol1 = comparedataInitialPrice1
        .replace(comparepriceMatch1[0], "")
        .trim();
      var compareprice1 = parseFloat(comparepriceMatch1[0]);
      var comparetotal1 = quantity1 * compareprice1;
      var comparetotalPriceWithSymbol1 =
        comparecurrencySymbol1 + comparetotal1.toFixed(2);
      $(".compare-at-price .money").text(comparetotalPriceWithSymbol1);
    }, 3000);
  });
});
$(document).ready(function () {
  $(".upload-logo-copy .remove_image_upload").click(function () {
    $(this).parents(".upload-logo-copy").find("#img_urlss").attr("src", "");
    $(this)
      .parents(".upload-logo-copy")
      .find("#imagePreview")
      .css("background-image", "none");
    $(this)
      .parents(".upload-logo-copy")
      .find("#imagePreview")
      .css("display", "none");
    $(this)
      .parents(".upload-logo-copy")
      .find("button.gf_remove_img.remove_image_upload")
      .css("display", "none");
    $(this)
      .parents(".upload-logo-copy")
      .find(".file-input-wrapper .file-input-label")
      .removeClass("hide-label");
    $(this).parents(".upload-logo-copy").find(".imageUpload-1").val("");
  });
  $(".upload-logo-copy #img_filess").click(function () {
    var thiss = $(this);
    setTimeout(function () {
      thiss
        .parents(".upload-logo-copy")
        .find("button.gf_remove_img.remove_image_upload")
        .show();
    }, 1000);
  });
});
$(document).ready(function () {
  var selectedItem1 = $(".float-add-cart select.multi_select1")
    .children("option:selected")
    .attr("data-price");
  var selectedItemCompare1 = $(".float-add-cart select.multi_select1")
    .children("option:selected")
    .attr("data-compareprice");
  $(".float-add-cart .left_floating .price").text(selectedItem1);
  $(".float-add-cart .left_floating .compare-at-price").text(
    selectedItemCompare1
  );
  $(".float-add-cart select.multi_select1").change(function () {
    var selectedItem = $(this).children("option:selected").attr("data-price");
    var selectedItemCompare = $(this)
      .children("option:selected")
      .attr("data-compareprice");
    $(".float-add-cart .left_floating .price").text(selectedItem);
    $(".float-add-cart .left_floating .compare-at-price").text(
      selectedItemCompare
    );
  });
});
$(document).on("click", ".product .ss-icon", function () {
  setTimeout(function () {
    var comparepriceElement1 = $(".money[data-compareinitial-price]");
    var comparedataInitialPrice1 = comparepriceElement1.attr(
      "data-compareinitial-price"
    );
    var comparepriceMatch1 = comparedataInitialPrice1.match(/([\d.]+)/);
    var comparecurrencySymbol1 = comparedataInitialPrice1
      .replace(comparepriceMatch1[0], "")
      .trim();
    var a1 = parseFloat(comparepriceMatch1[0]);
    var priceElement1 = $(".money[data-initial-price]");
    var dataInitialPrice1 = priceElement1.attr("data-initial-price");
    var priceMatch1 = dataInitialPrice1.match(/([\d.]+)/);
    var currencySymbol1 = dataInitialPrice1.replace(priceMatch1[0], "").trim();
    var b1 = parseFloat(priceMatch1[0]);
    var c1 = (b1 / a1) * 100;
    var t1 = (100 - c1).toFixed(0);
    console.log("t1", t1);
    $("span.sale.savings").html(t1 + "% Off");
  }, 200);
});
$(".how-is-my-price-determined h2.button").click(function () {
  var content = $(this)
    .parents("div[data-accordion]")
    .find("div[data-content]");
  if (content.hasClass("show_content_sidebar")) {
    content.removeClass("show_content_sidebar");
  } else {
    $("div[data-content]").removeClass("show_content_sidebar");
    content.addClass("show_content_sidebar");
  }
});
$(document).on(
  "click",
  ".mobile_nav-fixed--true details[data-mobile-menu]",
  function () {
    $(this)
      .parents(".top-bar")
      .find(".overlay-mobile")
      .addClass("showed-overlay");
  }
);
$(document).on(
  "click",
  ".mobile_nav-fixed--true .overlay-mobile.showed-overlay",
  function () {
    $(this)
      .parents(".top-bar")
      .find(".overlay-mobile")
      .removeClass("showed-overlay");
    $(this).parents("body").removeClass("is-active");
  }
);
var path = window.location.pathname;
$(
  '.how-is-my-price-determined-1 div[data-label="Accordion"] a[href="' +
    path +
    '"]'
)
  .parents("div[data-sanitized-data-accordion]")
  .addClass("show_accordion_content");
$(".how-is-my-price-determined-1 .plus.iCon-right.text-.item-content").click(
  function () {
    $(this)
      .parents("div[data-sanitized-data-accordion]")
      .toggleClass("show_accordion_content");
    $(this)
      .parents("div[data-sanitized-data-accordion]")
      .siblings("[data-sanitized-data-accordion]")
      .removeClass("show_accordion_content");
  }
);
$(document).on(
  "click",
  'form[data-cart-form="mini-cart"] a.cart_content__continue-shopping.secondary_button span',
  function () {
    setTimeout(function () {
      $("body").click();
      $(".cart-container").removeClass("active_link");
    }, 200);
  }
);
$(document).on(
  "click",
  "a.cart_content__continue-shopping.secondary_button.continue_button_hidden_cart span",
  function () {
    setTimeout(function () {
      $("body").click();
      $(".cart-container").removeClass("active_link");
    }, 200);
  }
);
$(document).on(
  "click",
  ".cart-container.mobile-1 .overlay-mini-cart",
  function () {
    setTimeout(function () {
      $("body").click();
      $(".cart-container").removeClass("active_link");
    }, 200);
  }
);
$("body").on("click", "#mobile_menu .parent-link--false", function (t) {
  t.preventDefault();
  const e = $(this).parent("li.sublink_sub_item");
  e.find(".parent-link--false span.right.icon-plus").toggleClass("active");
});
$(".swatch_options .dropdown-media").on("change", function () {
  var selectedOption = $("option:selected", this);
  var attributeValue = selectedOption.attr("data-inventory");
  var add = $(this)
    .parents("body")
    .find(".purchase-details__buttons .add_to_cart")
    .attr("data-add");
  var sold = $(this)
    .parents("body")
    .find(".purchase-details__buttons .add_to_cart")
    .attr("data-sold");
  if (attributeValue == "true") {
    $(this)
      .parents("body")
      .find(".purchase-details__buttons .add_to_cart span")
      .text(add);
  } else {
    $(this)
      .parents("body")
      .find(".purchase-details__buttons .add_to_cart span")
      .text(sold);
  }
});
$("#table-of-contents li").click(function () {
  $("#table-of-contents li").removeClass("active-li");
  $(this).addClass("active-li");
});
$(document).ready(function () {
  //var checkInterval = setInterval(function () {}, 100);
    jQuery.getJSON("/cart.js", function (cart) {
      VastaShop.Cart.current = cart;
      render_cart_drawer(
        VastaShop.Cart.current,
        jQuery("ul.cart_items.js-cart_items")
      );
      // if ($(".cart-container").hasClass("active_link")) {
      //   clearInterval(checkInterval);
      // }
    });
  
});
var uploadResult;
function uploadImage(fileInput, callback) {
  var formdata = new FormData();
  var retrievedFileSource1 = localStorage.getItem("storedFileSource");
  if (retrievedFileSource1 !== null) {
    formdata.append("image", fileInput);
  } else {
    formdata.append("image", fileInput.files[0]);
  }
  var currentTimestamp = new Date().getTime();
  formdata.append("UID", currentTimestamp);
  var requestOptions = { method: "POST", body: formdata, redirect: "follow" };
  fetch("https://kodiakapps.com/logo-overlay/upload", requestOptions)
    .then((response) => response.text())
    .then(callback)
    .catch((error) => console.log("error", error));
}
$(document).ready(function () {
  var uploadContainer = $(".upload-inner-content");
  var fileInput = $("#fileInput");
  var imagePreviewName = $(".imagePreview-name-1");
  uploadContainer.on("dragover", function (e) {
    e.preventDefault();
  });
  uploadContainer.on("dragleave", function () {});
  uploadContainer.on("drop", function (e) {
    e.preventDefault();
    var droppedFiles = e.originalEvent.dataTransfer.files;
    if (droppedFiles.length > 0) {
      fileInput[0].files = droppedFiles;
      displayFileNames(droppedFiles);
    }
  });
  function displayFileNames(files) {
    var fileNames = [];
    for (var i = 0; i < files.length; i++) {
      fileNames.push(files[i].name);
    }
    imagePreviewName.find(".imag-pre").text(fileNames.join(", "));
    if (fileNames.length > 0) {
      $(".remove-close").show();
      setTimeout(function () {
        if ($("body").hasClass("template-product")) {
          $(".button_upload").click();
        }
        if ($("body").hasClass("template-collection")) {
          $(".button_upload1").click();
        }
      }, 1000);
    } else {
      $(".remove-close").hide();
    }
  }
});
function handleUploadResult(result, error) {
  $(".error_while_upload").hide();
  $(".spinner-product-outer").hide();
  $(".upload-inner-content").hide();
  $(".remove_upload_image_1").show();
  console.log(result);
  uploadResult = result;
  if ($("body").hasClass("product-new")) {
    var button_selected = $(".personalize_content_button_section div")
      .find(".active-1")
      .attr("data-button");
    let std_remove = JSON.parse(uploadResult);
    if (button_selected == "Standard Design") {
      if ($("#remove").is(":checked")) {
        processImage(std_remove.Image1_STD_RemBg_Metal.data);
      } else {
        processImage(std_remove.Image2_STD_Metal.data);
      }
    }
    if (button_selected == "Inverted Design") {
      if ($("#remove").is(":checked")) {
        processImage(std_remove.Image3_INVERT_RemBg_Metal.data);
      } else {
        processImage(std_remove.Image4_INVERT_Metal.data);
      }
    }
  }
  if ($("body").hasClass("template-collection")) {
    let std_remove = JSON.parse(uploadResult);
    processImage(std_remove.Image1_STD_RemBg_Metal.data);
  }
}
function processImage(bufferData) {
  const uint8Array = new Uint8Array(bufferData);
  const binaryString = uint8Array.reduce(
    (str, byte) => str + String.fromCharCode(byte),
    ""
  );
  const base64Data = btoa(binaryString);
  const imageUrl = "data:image/png;base64," + base64Data;
  const image = new Image();
  image.src = imageUrl;
  const byteCharacters = atob(base64Data);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: "image/png" });
  const blobUrl = URL.createObjectURL(blob);
  image.src = blobUrl;
  const randomFileName = "image_" + Math.floor(Math.random() * 10000) + ".png";
  const randomLastModified = Math.floor(Math.random() * new Date().getTime());
  var file = new File([blob], randomFileName, {
    lastModified: randomLastModified,
  });
  window.file = file;
  $("body.product-new").find(".patc-img").attr("src", imageUrl);
  $(".patc-img").show();
  var show_logo_coll = $(".new_collection_template").attr("data-show-logo");
  if (show_logo_coll == "true") {
    localStorage.setItem("storedFileSource", imageUrl);
    $(".remove_upload_image_1 .image_prev_upld img").attr("src", imageUrl);
    $(".appended-image").attr("src", imageUrl);
  }
}
$(".button_upload").click(function (e) {
  e.preventDefault();
  var value = $("#fileInput").val();
  console.log(value);
  if (value.length > 0) {
    $(".spinner-product-outer").css("display", "flex");
    $(".upload-inner-content").hide();
    $(".remove_upload_image_1").hide();
    uploadImage(fileInput, handleUploadResult);
  } else {
    $(".file-input-label1").click();
    let sppinerInterval = setInterval(() => {
      let value = $("#fileInput").val();
      if (value) {
        $(".spinner-product-outer").css("display", "flex");
        $(".upload-inner-content").hide();
        $(".remove_upload_image_1").hide();
        clearInterval(sppinerInterval);
        uploadImage(fileInput, handleUploadResult);
      }
    }, 1000);
  }
});
$(".standard-design").click(function (e) {
  e.preventDefault();
  if (uploadResult) {
    let std_remove = JSON.parse(uploadResult);
    if ($("#remove").is(":checked")) {
      const bufferData = std_remove.Image1_STD_RemBg_Metal.data;
      const uint8Array = new Uint8Array(bufferData);
      const binaryString = uint8Array.reduce(
        (str, byte) => str + String.fromCharCode(byte),
        ""
      );
      const base64Data = btoa(binaryString);
      const imageUrl = "data:image/png;base64," + base64Data;
      const image = new Image();
      image.src = imageUrl;
      console.log("Image:", imageUrl);
      $(this).parents("body").find(".patc-img").attr("src", imageUrl);
      $(".patc-img").show();
    } else {
      const bufferData = std_remove.Image2_STD_Metal.data;
      const uint8Array = new Uint8Array(bufferData);
      const binaryString = uint8Array.reduce(
        (str, byte) => str + String.fromCharCode(byte),
        ""
      );
      const base64Data = btoa(binaryString);
      const imageUrl = "data:image/png;base64," + base64Data;
      const image = new Image();
      image.src = imageUrl;
      console.log("Image:", imageUrl);
      $(this).parents("body").find(".patc-img").attr("src", imageUrl);
      $(".patc-img").show();
    }
  } else {
    console.log("No result available yet.");
  }
});
$(".inverted-design").click(function (e) {
  e.preventDefault();
  if (uploadResult) {
    let std_remove = JSON.parse(uploadResult);
    if ($("#remove").is(":checked")) {
      const bufferData = std_remove.Image3_INVERT_RemBg_Metal.data;
      const uint8Array = new Uint8Array(bufferData);
      const binaryString = uint8Array.reduce(
        (str, byte) => str + String.fromCharCode(byte),
        ""
      );
      const base64Data = btoa(binaryString);
      const imageUrl = "data:image/png;base64," + base64Data;
      const image = new Image();
      image.src = imageUrl;
      console.log("Image:", imageUrl);
      $(this).parents("body").find(".patc-img").attr("src", imageUrl);
      $(".patc-img").show();
    } else {
      const bufferData = std_remove.Image4_INVERT_Metal.data;
      const uint8Array = new Uint8Array(bufferData);
      const binaryString = uint8Array.reduce(
        (str, byte) => str + String.fromCharCode(byte),
        ""
      );
      const base64Data = btoa(binaryString);
      const imageUrl = "data:image/png;base64," + base64Data;
      const image = new Image();
      image.src = imageUrl;
      console.log("Image:", imageUrl);
      $(this).parents("body").find(".patc-img").attr("src", imageUrl);
      $(".patc-img").show();
    }
  } else {
    console.log("No result available yet.");
  }
});
$(".product-new #remove").change(function () {
  var button_selected = $(".personalize_content_button_section div")
    .find(".active-1")
    .attr("data-button");
  if (uploadResult) {
    let std_remove = JSON.parse(uploadResult);
    if (button_selected == "Standard Design") {
      if (this.checked) {
        const bufferData = std_remove.Image1_STD_RemBg_Metal.data;
        const base64String = btoa(
          String.fromCharCode.apply(null, new Uint8Array(bufferData))
        );
        const image = new Image();
        image.src = "data:image/png;base64," + base64String;
        console.log("Result", "data:image/png;base64," + base64String);
        $("body.product-new")
          .find(".patc-img")
          .attr("src", "data:image/png;base64," + base64String);
        $(".patc-img").show();
      } else {
        const bufferData = std_remove.Image2_STD_Metal.data;
        const base64String = btoa(
          String.fromCharCode.apply(null, new Uint8Array(bufferData))
        );
        const image = new Image();
        image.src = "data:image/png;base64," + base64String;
        console.log("data:image/png;base64," + base64String);
        $("body.product-new")
          .find(".patc-img")
          .attr("src", "data:image/png;base64," + base64String);
        $(".patc-img").show();
      }
    }
    if (button_selected == "Inverted Design") {
      if (this.checked) {
        const bufferData = std_remove.Image3_INVERT_RemBg_Metal.data;
        const base64String = btoa(
          String.fromCharCode.apply(null, new Uint8Array(bufferData))
        );
        const image = new Image();
        image.src = "data:image/png;base64," + base64String;
        console.log("data:image/png;base64," + base64String);
        $("body.product-new")
          .find(".patc-img")
          .attr("src", "data:image/png;base64," + base64String);
        $(".patc-img").show();
      } else {
        const bufferData = std_remove.Image4_INVERT_Metal.data;
        const base64String = btoa(
          String.fromCharCode.apply(null, new Uint8Array(bufferData))
        );
        const image = new Image();
        image.src = "data:image/png;base64," + base64String;
        console.log("data:image/png;base64," + base64String);
        $("body.product-new")
          .find(".patc-img")
          .attr("src", "data:image/png;base64," + base64String);
        $(".patc-img").show();
      }
    }
  }
});
$(".button_upload1").click(function (e) {
  e.preventDefault();
  var value = $("#fileInput").val();
  console.log(value);
  var show_logo_prod = $(".new_collection_template").attr("data-show-logo");
  console.log("show_logo_prod", show_logo_prod);
  if (value.length > 0) {
    $(".spinner-product-outer").css("display", "flex");
    $(".upload-inner-content").hide();
    $(".remove_upload_image_1").hide();
    var file = fileInput.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
      if (show_logo_prod == "false") {
        var fileSource = event.target.result;
        var imagsrcname = $(
          ".imagePreview-name-1 .imag-pr.imag-pr-desktop"
        ).text();
        var imagsrcname1 = $(
          ".imagePreview-name-1 .imag-pr.imag-pr-mobile"
        ).text();
        localStorage.setItem("storedFileSource", fileSource);
        localStorage.setItem("storedFileSourcename", imagsrcname);
        localStorage.setItem("storedFileSourcenamemobile", imagsrcname1);
        $("span.remove-close.close_upload01").show();
        console.log("File source stored in local storage.");
        $(".spinner-product-outer").hide();
        $(".upload-inner-content").hide();
        $(".remove_upload_image_1").show();
        $(".remove_upload_image_1 .image_prev_upld img").attr(
          "src",
          fileSource
        );
        $(".appended-image").attr("src", fileSource);
      }
      if (show_logo_prod == "") {
        var fileSource = event.target.result;
        var imagsrcname = $(
          ".imagePreview-name-1 .imag-pr.imag-pr-desktop"
        ).text();
        var imagsrcname1 = $(
          ".imagePreview-name-1 .imag-pr.imag-pr-mobile"
        ).text();
        localStorage.setItem("storedFileSource", fileSource);
        localStorage.setItem("storedFileSourcename", imagsrcname);
        localStorage.setItem("storedFileSourcenamemobile", imagsrcname1);
        $("span.remove-close.close_upload01").show();
        console.log("File source stored in local storage.");
        $(".spinner-product-outer").hide();
        $(".upload-inner-content").hide();
        $(".remove_upload_image_1").show();
        $(".remove_upload_image_1 .image_prev_upld img").attr(
          "src",
          fileSource
        );
        $(".appended-image").attr("src", fileSource);
      }
      if (show_logo_prod == "true") {
        console.log(file);
        var fileSource = event.target.result;
        var imagsrcname = $(
          ".imagePreview-name-1 .imag-pr.imag-pr-desktop"
        ).text();
        var imagsrcname1 = $(
          ".imagePreview-name-1 .imag-pr.imag-pr-mobile"
        ).text();
        localStorage.setItem("storedFileSource", fileSource);
        localStorage.setItem("storedFileSourcename", imagsrcname);
        localStorage.setItem("storedFileSourcenamemobile", imagsrcname1);
        $("span.remove-close.close_upload01").show();
        console.log("File source stored in local storage.");
        $(".spinner-product-outer").hide();
        $(".upload-inner-content").hide();
        $(".remove_upload_image_1").show();
        $(".remove_upload_image_1 .image_prev_upld img").attr(
          "src",
          fileSource
        );
        $(".appended-image").attr("src", fileSource);
        uploadImage(file, handleUploadResult);
      }
    };
    reader.readAsDataURL(file);
  } else {
    $(".file-input-label1").click();
    let sppinerInterval = setInterval(() => {
      let value = $("#fileInput").val();
      if (value) {
        $(".spinner-product-outer").css("display", "flex");
        $(".upload-inner-content").hide();
        clearInterval(sppinerInterval);
        var file = fileInput.files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
          if (show_logo_prod == "false") {
            var fileSource = event.target.result;
            var imagsrcname = $(
              ".imagePreview-name-1 .imag-pr.imag-pr-desktop"
            ).text();
            var imagsrcname1 = $(
              ".imagePreview-name-1 .imag-pr.imag-pr-mobile"
            ).text();
            localStorage.setItem("storedFileSource", fileSource);
            localStorage.setItem("storedFileSourcename", imagsrcname);
            localStorage.setItem("storedFileSourcenamemobile", imagsrcname1);
            $("span.remove-close.close_upload01").show();
            console.log("File source stored in local storage.");
            $(".spinner-product-outer").hide();
            $(".upload-inner-content").hide();
            $(".remove_upload_image_1").show();
            $(".remove_upload_image_1 .image_prev_upld img").attr(
              "src",
              fileSource
            );
            $(".appended-image").attr("src", fileSource);
          }
          if (show_logo_prod == "") {
            var fileSource = event.target.result;
            var imagsrcname = $(
              ".imagePreview-name-1 .imag-pr.imag-pr-desktop"
            ).text();
            var imagsrcname1 = $(
              ".imagePreview-name-1 .imag-pr.imag-pr-mobile"
            ).text();
            localStorage.setItem("storedFileSource", fileSource);
            localStorage.setItem("storedFileSourcename", imagsrcname);
            localStorage.setItem("storedFileSourcenamemobile", imagsrcname1);
            $("span.remove-close.close_upload01").show();
            console.log("File source stored in local storage.");
            $(".spinner-product-outer").hide();
            $(".upload-inner-content").hide();
            $(".remove_upload_image_1").show();
            $(".remove_upload_image_1 .image_prev_upld img").attr(
              "src",
              fileSource
            );
            $(".appended-image").attr("src", fileSource);
          }
          if (show_logo_prod == "true") {
            var fileSource = event.target.result;
            var imagsrcname = $(
              ".imagePreview-name-1 .imag-pr.imag-pr-desktop"
            ).text();
            var imagsrcname1 = $(
              ".imagePreview-name-1 .imag-pr.imag-pr-mobile"
            ).text();
            localStorage.setItem("storedFileSource", fileSource);
            localStorage.setItem("storedFileSourcename", imagsrcname);
            localStorage.setItem("storedFileSourcenamemobile", imagsrcname1);
            $("span.remove-close.close_upload01").show();
            console.log("File source stored in local storage.");
            $(".spinner-product-outer").hide();
            $(".upload-inner-content").hide();
            $(".remove_upload_image_1").show();
            $(".remove_upload_image_1 .image_prev_upld img").attr(
              "src",
              fileSource
            );
            $(".appended-image").attr("src", fileSource);
            uploadImage(file, handleUploadResult);
          }
        };
        reader.readAsDataURL(file);
      }
    }, 2000);
  }
  setTimeout(function () {
    var retrievedFileSource = localStorage.getItem("storedFileSource");
    if (retrievedFileSource !== null) {
      $(".appended-image").attr("src", retrievedFileSource);
      $(".design-appended .patc-img").attr("src", retrievedFileSource);
    }
  }, 3000);
});
$(".personalize_content_inner_block .option_title").click(function () {
  $(this)
    .parents(".personalize_content_inner_block")
    .toggleClass("show-personalize");
});
$(".product-faq .option_title_faq").click(function () {
  $(this).parents(".product-faq").toggleClass("show-1");
});
$(".product-description .option_title_desc").click(function () {
  $(this).parents(".product-description").toggleClass("show-1");
});
$(".product-specification .option_title_spec").click(function () {
  $(this).parents(".product-specification").toggleClass("show-1");
});
$(".personalize_content_button_section div button").click(function () {
  $(".personalize_content_button_section div button").removeClass("active-1");
  $(this).addClass("active-1");
});
$(".file-input-label1").click(function () {
  $("#fileInput").change(function () {
    var fileName = $(this).val().split("\\").pop();
    $(".imag-pre").text(fileName);
    $(".remove-close").show();
  });
});
$("span.remove-close.fa.fa-close.close_upload01").click(function () {
  $("#fileInput").val("");
  $(".imag-pre").text("");
  $("span.remove-close.fa.fa-close.close_upload01").hide();
  $(".patc-img").attr("src", "");
  $(".patc-img").hide();
  $(".spinner-product-outer").hide();
  $(".upload-inner-content").show();
  $(".remove_upload_image_1").hide();
  $(".appended-image").attr("src", "");
  $(".remove_upload_image_1 .image_prev_upld img").attr("src", "");
  localStorage.removeItem("storedFileSource");
  localStorage.removeItem("storedFileSourcename");
  localStorage.removeItem("storedFileSourcenamemobile");
});
$(".remove_upload").click(function (e) {
  e.preventDefault();
  $("span.remove-close.fa.fa-close.close_upload01").click();
});
$(".product-new .swatch_options .swatch input").on("change", function () {
  var add_button = $(
    ".product-new .purchase-details__buttons button.add_to_cart"
  ).attr("data-add");
  $(".product-new .purchase-details__buttons button.add_to_cart span").text(
    add_button
  );
});
$(".other-products .swatch_options .swatch input").on("change", function () {
  var add_button = $(
    ".other-products .purchase-details__buttons button.add_to_cart"
  ).attr("data-add");
  $(".other-products .purchase-details__buttons button.add_to_cart span").text(
    add_button
  );
});
$(document).ready(function () {
  var retrievedFileSource = localStorage.getItem("storedFileSource");
  if (retrievedFileSource !== null) {
    $(".appended-image").attr("src", retrievedFileSource);
    $(".design-appended .patc-img").attr("src", retrievedFileSource);
    setTimeout(function () {
      $(
        ".image__container .appended-image-collection .append-image-coll"
      ).show();
      $(".design-appended .patc-img").css("display", "block");
    }, 200);
  }
});
var retrievedFileSource1 = localStorage.getItem("storedFileSource");
var retrievedFileSourcename1 = localStorage.getItem("storedFileSourcename");
if (retrievedFileSource1 !== null) {
  $(".spinner-product-outer").hide();
  $(".upload-inner-content").hide();
  $(".remove_upload_image_1").show();
  $(".remove_upload_image_1 .image_prev_upld img").attr(
    "src",
    retrievedFileSource1
  );
  $(".imagePreview-name-1 .imag-pre").text(retrievedFileSourcename1);
  $(
    ".remove_upload_image_1 .imagePreview-name-1 span.remove-close.close_upload01"
  ).css("display", "inline");
  var image_url = localStorage.getItem("storedFileSource");
  var blob = dataURLtoBlob(image_url);
  var file = new File([blob], "cropped_image.png", { type: blob.type });
  uploadImage(file, handleUploadResult);
  function dataURLtoBlob(dataURL) {
    var parts = dataURL.split(";base64,");
    var contentType = parts[0].split(":")[1];
    var raw = window.atob(parts[1]);
    var rawLength = raw.length;
    var uint8Array = new Uint8Array(rawLength);
    for (var i = 0; i < rawLength; ++i) {
      uint8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uint8Array], { type: contentType });
  }
}
$(".stiched_tooltip_sign").hover(function () {
  $(this).parents(".stiched_line_item").find(".stiched_overlay").show();
});
$(".stiched_close").click(function () {
  $(this).parents(".stiched_overlay").hide();
});
$(document).ready(function () {
  $("p#clear-cart-button").click(function () {
    setTimeout(function () {
      $.ajax({
        type: "POST",
        url: "/cart/clear.js",
        data: "",
        dataType: "json",
        success: function () {
          $('form[data-cart-form="mini-cart"]').hide();
          $(".js-empty-cart__message").removeClass("hidden");
          $("a.icon-cart.mini_cart.dropdown_link .cart_count").text("0");
        },
        error: function (XMLHttpRequest, textStatus) {
          console.log("clear.js loading failed");
        },
      });
    }, 1000);
  });
});
$(".reorder_label").click(function () {
  $(this).parents(".reorder_inner").find("input").click();
});
$(document).on("click", 'input[name="reorder"]', function () {
  if (this.checked) {
    $(".textarea-order textarea").show();
  } else {
    $(".textarea-order textarea").hide();
  }
});
function goCheckout() {
  jQuery.getJSON("/cart.js", function (cart) {
    console.log(cart);
    $.ajax({
      url: "https://kodiakapps.com/price-calc/backend/api/v2/cart",
      type: "POST",
      headers: { "Content-Type": "application/json" },
      dataType: "json",
      data: JSON.stringify(cart),
      success: function (data) {
        console.log(data);
        window.location.href = data.order.draft_order.invoice_url;
      },
      error: function (xhr, status, error) {
        var err = eval("(" + xhr.responseText + ")");
        alert(err.Message);
      },
    });
  });
}
$(document).on("click", ".sizes-input input", function () {
  this.select();
});
$(".sizes-input input").focus();
$(document).on("click", "button.btn-close", function () {
  $("div#modal").removeClass("show");
});
$(".pro_read_more").click(function () {
  $(this).addClass("btn_hide");
  $(this)
    .parents(".technique_subheading")
    .find(".first_show_desc")
    .addClass("hide_div");
  $(this)
    .parents(".technique_subheading")
    .find(".first_hide_desc")
    .addClass("show_div");
  $(this)
    .parents(".technique_subheading")
    .find(".pro_less_more")
    .addClass("less_div");
});
$(".pro_less_more").click(function () {
  $(this).removeClass("less_div");
  $(this)
    .parents(".technique_subheading")
    .find(".first_show_desc")
    .removeClass("hide_div");
  $(this)
    .parents(".technique_subheading")
    .find(".first_hide_desc")
    .removeClass("show_div");
  $(this)
    .parents(".technique_subheading")
    .find(".pro_read_more")
    .removeClass("btn_hide");
});
$(".dropdown_collection").click(function () {
  $(this).toggleClass("open_drop_down");
  $(this).parent().find(".collection_lists").toggleClass("open_col_lists");
  $(this)
    .parent()
    .siblings()
    .find(".dropdown_collection")
    .removeClass("open_drop_down");
  $(this)
    .parent()
    .siblings()
    .find(".collection_lists")
    .removeClass("open_col_lists");
});
$(".crose-icon").click(function () {
  $(".popup_overlay").hide();
});
!(function (window) {
  var $q = function (q, res) {
      if (document.querySelectorAll) {
        res = document.querySelectorAll(q);
      } else {
        var d = document,
          a = d.styleSheets[0] || d.createStyleSheet();
        a.addRule(q, "f:b");
        for (var l = d.all, b = 0, c = [], f = l.length; b < f; b++)
          l[b].currentStyle.f && c.push(l[b]);
        a.removeRule(0);
        res = c;
      }
      return res;
    },
    addEventListener = function (evt, fn) {
      window.addEventListener
        ? this.addEventListener(evt, fn, !1)
        : window.attachEvent
        ? this.attachEvent("on" + evt, fn)
        : (this["on" + evt] = fn);
    },
    _has = function (obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    };
  function loadImage(el, fn) {
    var img = new Image(),
      src = el.getAttribute("data-src");
    img.onload = function () {
      if (!!el.parent) el.parent.replaceChild(img, el);
      else el.src = src;
      fn ? fn() : null;
    };
    img.src = src;
  }
  function elementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  var images = new Array(),
    query = $q("img.lozad"),
    processScroll = function () {
      for (var i = 0; i < images.length; i++) {
        if (elementInViewport(images[i])) {
          loadImage(images[i], function () {
            images.splice(i, i);
          });
        }
      }
    };
  for (var i = 0; i < query.length; i++) {
    images.push(query[i]);
  }
  processScroll();
  addEventListener("scroll", processScroll);
})(this);
$(document).on(
  "click",
  ".patch-shapes .swatch.customily-swatch label",
  function () {
    $(this)
      .parent(".swatch.customily-swatch")
      .addClass("active-lab")
      .siblings()
      .removeClass("active-lab");
    var img = $(this)
      .parent(".swatch.customily-swatch")
      .find("img")
      .attr("src");
    console.log(img);
    $(
      ".template-product .product-main .gallery-cell.is-selected .patch-appended .patc-img"
    ).show();
    $(
      ".template-product .product-main .gallery-cell.is-selected .patch-appended .patc-img"
    ).attr("src", img);
    $(
      ".template-product .product-main .gallery-cell.is-selected .patch-appended .patc-img"
    ).attr("data-src", img);
  }
);
$(".color-image").click(function () {
  $(this)
    .find("input")
    .prop("checked", !0)
    .parent(".color-image")
    .siblings()
    .find("input")
    .prop("checked", !1);
  $(this).addClass("active-opti").siblings().removeClass("active-opti");
  var index = $(this)
    .find(".swatch.customily-swatch.active-lab .active-lab")
    .data("index");
  setTimeout(function () {
    $(
      '.swatch-container .swatch.customily-swatch[data-index="' + index + '"]'
    ).click();
  }, 1000);
  var color = $(this).attr("color");
  $('.patch-shapes .swatch-container[color="' + color + '"]').addClass(
    "active-patch"
  );
  $('.patch-shapes .swatch-container[color!="' + color + '"]').removeClass(
    "active-patch"
  );
  $('.patch-shapes .swatch-container[color="' + color + '"]').show();
  $('.patch-shapes .swatch-container[color!="' + color + '"]').hide();
});
$("select.dropdown-media").change(function () {
  var optionss = $(this).find("option:selected").val();
  $('.swatch.is-flex .swatch-element label[data-value="' + optionss + '"]').click(); // Line 1449
});
$(".file-input-wrapper-1 input").click(function () {
  interval = setInterval(function () {
    if ($("img#img_urlss").attr("src") != "") {
      var imgss = $("img#img_urlss").attr("src");
      $(".remove_file").show();
      $("input.input-forfile").attr("value", imgss);
      clearInterval(interval);
    }
  }, 200);
});
interval = setInterval(function () {
  if ($(".file-input-wrapper-1 label").length) {
    $(".file-input-wrapper-1 label").html("Upload your artwork here");
    clearInterval(interval);
  }
}, 200);
function img_pathUrl(input) {
  $("#img_urlss")[0].src = (window.URL ? URL : webkitURL).createObjectURL(
    input.files[0]
  );
}
$("button.button-call").click(function () {
  $("html, body").animate(
    { scrollTop: $(".product_gallery").offset().top },
    "slow"
  );
});
setTimeout(function () {
  $(
    '.patch-shapes .swatch-container.active-patch .swatch.customily-swatch[data-index="1"] label'
  ).click();
}, 1000);
$(".color-image").click(function () {
  var color1 = $(this).attr("color");
  $(
    '.patch-shapes .swatch-container[color="' +
      color1 +
      '"] .swatch.customily-swatch[data-index="1"] label'
  ).click();
  setTimeout(function () {
    $(
      '.patch-shapes .swatch-container[color="' +
        color1 +
        '"] .swatch.customily-swatch.active-lab input'
    ).prop("checked", !0);
  }, 2000);
});
$(".product-leather-patch-hats .dropdown-media").change(function () {
  $(
    ".product-leather-patch-hats .swatch-container.active-patch .swatch.customily-swatch.active-lab label"
  ).trigger("click");
});
$(".style_new_4 .inner_content").first().addClass("active-block");
$(".style_new_4 .inner_content").click(function () {
  $(".style_new_4 .inner_content").removeClass("active-block");
  $(this).addClass("active-block");
});
$(".product-leather-patch-hats .dropdown-media").on("change", function () {
  var selectedOption = $(this).val();
  if (selectedOption.includes("BLANK")) {
    $(".hats-upload-content").css("display", "flex");
  } else {
    $(".hats-upload-content").hide();
  }
});
$(document).ready(function () {
  if ($("body").hasClass("product-leather-patch-hats")) {
    setTimeout(function () {
      var selectedOption_drop = $(".product-leather-patch-hats .dropdown-media")
        .find(":selected")
        .val();
      if (selectedOption_drop.includes("BLANK")) {
        $(".hats-upload-content").css("display", "flex");
      } else {
        $(".hats-upload-content").hide();
      }
    }, 3000);
  }
});
$(".product-drinkware_v2 .swatch-element label").click(function () {
  var selvalue = $(this).attr("data-value");
  $(this).click();
  $(this).parents(".swatch").find(".option_title span").text(selvalue);
});
$(document).ready(function () {
  // Handle custom swatch selector clicks
  $('.custom-swatch-options .swatch-element input[type="radio"]').on('change', function () {
    var $parent = $(this).closest('.custom-swatch-options');
    $parent.find('.swatch-element').removeClass('selected');
    $(this).closest('.swatch-element').addClass('selected');
  });

  // Initialize the selected state on page load
  $('.custom-swatch-options .swatch-element input[type="radio"]:checked').each(function () {
    $(this).closest('.swatch-element').addClass('selected');
  });
});