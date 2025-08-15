///choose product logo js
setTimeout(function () {
  $(".file-input-wrapper").each(function () {
    var $wrapper = $(this);
    var $input = $wrapper.find('input[type="file"]');
    var $label = $('<label class="file-input-label">');
    $label.attr("for", $input.attr("id"));
    $label.html("Drag and Drop your files or <span>Browse</span>");
    $input.before($label);

    $wrapper.on("dragover", function (e) {
      e.preventDefault();
      e.stopPropagation();
      $label.addClass("dragover");
    });

    $wrapper.on("dragleave", function (e) {
      e.preventDefault();
      e.stopPropagation();
      $label.removeClass("dragover");
    });

    $wrapper.on("drop", function (e) {
      e.preventDefault();
      e.stopPropagation();
      $label.removeClass("dragover");

      var files = e.originalEvent.dataTransfer.files;
      handleFiles(files);
    });

    $input.on("change", function (e) {
      var files = e.target.files;
      handleFiles(files);
    });

    function handleFiles(files) {
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        console.log("File:", file);
        readURL(file);
        $label.addClass("hide-label");
        // Perform file upload or other operations here
      }
    }

    function readURL(file) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $("#imagePreview").css(
          "background-image",
          "url(" + e.target.result + ")"
        );
        $("#imagePreview").hide();
        $("#imagePreview").fadeIn(650);
      };
      reader.readAsDataURL(file);
    }
  });
});

/// cross button upload logo
///// cart drawer ajax
$(document).on(
  "click",
  ".cart-item_desc-remove span.cursor-pointer",
  function () {
    var ID = $(this).attr("data-id");
    $.ajax({
      type: "POST",
      url: "/cart/change.js",
      data: {
        quantity: 0,
        id: ID,
      },
      dataType: "json",
      success: function (e) {
        console.log("sucess");
        jQuery.getJSON("/cart.js", function (cart) {
          console.log(cart.item_count);
          $("span.cart_count").html(cart.item_count);
          cart_drawer.$data.cart_items = cart.items;
          cart_drawer.$data.cart_open = true;
        });
      },
    });
  }
);

$(".faq_Accordion").click(function () {
  $(this).toggleClass("open_col_faq");
  $(this).siblings().removeClass("open_col_faq");
});

$(".fillters-icons svg").click(function () {
  $(".collection_pro_template .sidebar-wrap").css({
    transform: "translate3d(0%,0,0)",
  });
  $(".collection_pro_template .sidebar-wrap").addClass(
    "show-fileter-collection"
  );
});
$(".filter-heading svg").click(function () {
  $(".collection_pro_template .sidebar-wrap").css({
    transform: "translate3d(-100%,0,0)",
  });
  $(".collection_pro_template .sidebar-wrap").removeClass(
    "show-fileter-collection"
  );
});

$(document).click(function (e) {
  if (window.matchMedia("(max-width: 767px)").matches) {
    if (
      !$(".collection_pro_template .sidebar-wrap").is(e.target) &&
      !$(".fillters-icons svg").is(e.target) &&
      $(".collection_pro_template .sidebar-wrap").has(e.target).length === 0
    ) {
      $(".filter-heading svg").click();
    }
  }
});

$("#collection-search-input").on("keyup", function (event) {
  console.log(event);
  $("#product_update").hide();
  var searchTerm = $(this).val();
  $.ajax({
    type: "GET",
    // url: "https://www.kodiak-wholesale.com/search/suggest.json?q=tag:'"+searchTerm+"' OR title:'" + searchTerm + "'",
    url:
      "https://www.kodiak-wholesale.com/search/suggest.json?q=" +
      searchTerm +
      "&resources[type]=product",
    success: function (data) {
      console.log(data);
      var pro = data.resources.results.products;
      var fruitsList = document.getElementById("product__updated");
      var htmlElements = pro.map(function (item) {
        return (
          '<div class="one-third column thumbnail thumbnail-hover-enabled--false medium-down--one-half small-down--one-whole quick-shop-style--popup product__details" data-handle="' +
          item.handle +
          '" data-id="' +
          item.id +
          '"><div class="product-' +
          item.id +
          '"> <div class="product-wrap has-secondary-media-swap"> <div class="relative product_image"> <a href="/collections/all' +
          item.url +
          '"> <div class="image__container"> <div class="image-element__wrap" style=" max-width: 750px;"> <img class="lozad transition--blur-up lazyautosizes lazyloaded" alt="Custom Laser Engraved Logo Drinkware - SPECIAL 72 HOUR SALE PRICING - Single Side Engraving Included in Price" data-src="' +
          item.featured_image.url +
          '" data-sizes="auto" data-aspectratio="750/750" data-srcset="' +
          item.featured_image.url +
          '" style="" width="750" height="750" srcset="' +
          item.featured_image.url +
          '" sizes="404px" src="' +
          item.featured_image.url +
          '"></div></div> <div class="image-element__wrap" style="max-width: 750px;"> <img class="lozad transition--blur-up secondary lazypreload lazyautosizes ls-is-cached lazyloaded secondary-media-hidden" alt="' +
          item.title +
          '" data-src="' +
          item.featured_image.url +
          '" data-sizes="auto" data-aspectratio="750/750" data-srcset="' +
          item.featured_image.url +
          '" style="" width="750" height="750" srcset="' +
          item.featured_image.url +
          '" sizes="404px" src="//www.kodiak-wholesale.com/cdn/shop/products/bulk-wholesale-custom-coffee-mug-with-logo-15-oz-engraved-baby-blue-sml_d5c9ffae-e0f8-4ddf-a8e0-6b3e65f7b738_50x.jpg?v=1672342119"></div><noscript> <img class="lozad noscript secondary lazypreload secondary-media-hidden" data-src="//www.kodiak-wholesale.com/cdn/shop/products/bulk-wholesale-custom-coffee-mug-with-logo-15-oz-engraved-baby-blue-sml_d5c9ffae-e0f8-4ddf-a8e0-6b3e65f7b738_2000x.jpg?v=1672342119" alt="' +
          item.title +
          '" style=""></noscript></a></div> <div class="thumbnail-overlay"> <a href="' +
          item.url +
          '" itemprop="url" class="hidden-product-link">Custom Laser Engraved Logo Drinkware - SPECIAL 72 HOUR SALE PRICING - Single Side Engraving Included in Price allall-productsbest-selling-productscustom-engraved-drinkware</a></div></div></div> <a class="product-info__caption" href="/collections/all' +
          item.url +
          '"><div class="product-details"> <span class="title" itemprop="name">' +
          item.title +
          '</span> <span class="price "> <span class="current_price"> <small class="from"><em>from</em></small> <span class="money">' +
          item.price +
          '</span></span> <span class="was_price"></span> <div class="sold_out"></div></span></div></a></div>'
        );
      });
      var htmlString = htmlElements.join("");
      if ($(".search_filter input[type=text]").val().length >= 1) {
        fruitsList.innerHTML = htmlString;
        $(".products-cust-pro span").each(function () {
          $(".one-third.column.thumbnail").hide();
          var a = $(this).attr("data-id");
          setTimeout(function () {
            $('.one-third.column.thumbnail[data-id="' + a + '"]').show();
          }, 200);
        });
      } else if (
        $(".search_filter input[type=text]").val().trim().length == 0
      ) {
        $("#product_update").show();
      }
    },
    // error: function(jqXHR, textStatus, errorThrown) {
    //    alert(jqXHR.status);
    // },
    dataType: "jsonp",
  });
});
