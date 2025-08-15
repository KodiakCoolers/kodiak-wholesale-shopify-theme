(function (global, $) {
const __COOKIE_INDEX__ = 'RecentlyViewedProducts';
$.ajaxSetup ({ cache : false });
var ProductPage = {
    current: null,
    totalPrice: null,
    storage: {},
    options: [],
    calculateTotalPrice: function (obj) {
        var opt = $.extend({
            quantity: 1
        }, obj);

        this.totalPrice = opt.quantity * this.current.price;
    },

    structureVariants: function () {
        if (this.current) {
            var variations = {};
            this.current.variants.forEach(function(e){
                if (e.available) {
                    if (typeof variations[e.option1] === 'undefined')
                        variations[e.option1] = {};
                    if (typeof variations[e.option1][e.option2] === 'undefined')
                        variations[e.option1][e.option2] = [];
                    if (e.option3)
                        variations[e.option1][e.option2].push(e.option3);
                }
            });
            this.current.variations = variations;
        }
    }
};

var RecentlyViewedProducts = {
    settings: null,
    setup: function( settings ) {
        this.settings = $.extend({
            selector: '#RecentlyViewedProducts',
            storage: true,
            cols: 4,
            rows: 1,
            show_price: true,
            reviews_template: null
        }, settings);
        return this;
    },

    register: function( product ) {
        if (product && this.settings.storage === true) {
            var cookie = global.localStorage.getItem(__COOKIE_INDEX__);
            var cookies_array_id_views = [];
            var cookie_resultant = {};
            cookie = (cookie && cookie !== '') ? JSON.parse(cookie): {};

            if (typeof cookie[product.id] === 'undefined') {
                cookie[product.id] = {
                    id: product.id,
                    title: product.title,
                    handle: product.handle,
                    compare_at_price: product.compare_at_price,
                    price: product.price,
                    available: product.available,
                    image: product.featured_image,
                    url: product.url,
                    views: 0
                };
            } else {
                cookie[product.id].title = product.title;
                cookie[product.id].handle = product.handle;
                cookie[product.id].compare_at_price = product.compare_at_price;
                cookie[product.id].price = product.price;
                cookie[product.id].available = product.available;
                cookie[product.id].image = product.featured_image;
                cookie[product.id].url = product.url;
                cookie[product.id].views++;
            }

            for(var i in cookie) {
                cookies_array_id_views.push([cookie[i].id, cookie[i].views]);
            }

            cookies_array_id_views.sort(function(x,y){
                return (y[1] > x[1]) ? 1 : -1;
            });

            cookies_array_id_views.forEach(function(el){
                cookie_resultant[el[0]] = cookie[el[0]];
            });

            global.localStorage.setItem(__COOKIE_INDEX__, JSON.stringify(cookie));
        }
    },

    show: function( callback ) {
        var products = global.localStorage.getItem(__COOKIE_INDEX__),
            limit = this.settings.rows * this.settings.cols,
            i = 0;

        $(this.settings.selector).html('');
        products = (products && products !== '') ? JSON.parse(products): {};

        for (var product in products) {
            if (i < limit)
                callback( products[product], this.settings, $(this.settings.selector) );
            else
                break;

            i++;
        }
    }
};

var CartPage = {
    current: null,

    urlRequest: {
        add: '/cart/add.js',
        update: '/cart/update.js',
        all: '/cart.js'
    },

    addItem: function (data) {
        return $.ajax({
            url: this.urlRequest.add,
            data: data,
            type: 'POST',
            dataType: 'json'
        });
    },

    update: function (data) {
        return $.ajax({
            url: this.urlRequest.update,
            data: data,
            type: 'POST',
            dataType: 'json'
        });
    },

    getAllItems: function () {
        return $.ajax({
            url: this.urlRequest.all,
            type: 'POST',
            dataType: 'json'
        });
    }

};

var Sections = function() {
    this.instances = {};

    jQuery(document)
        .on('shopify:section:load', this.onLoad.bind(this))
        .on('shopify:section:unload', this.onUnload.bind(this))
        .on('shopify:section:select', this.onSelect.bind(this))
        .on('shopify:section:deselect', this.onDeselect.bind(this))
        .on('shopify:block:select', this.onBlockSelect.bind(this))
        .on('shopify:block:deselect', this.onBlockDeselect.bind(this));
};

Sections.reloadImages = function(){
    $('img,iframe').each(function(){
        if ($(this).attr('data-src') != '') {
            $(this).attr('src', $(this).attr('data-src'));
        }
    });
};

Sections.prototype = {
    onLoad: function( event ) {
        var id = this._getId( event );

        // jQuery('img,iframe', '[data-section-type="' + id + '"]').lazyload();
        Sections.reloadImages();

        if ((typeof this.instances[ id ] !== 'undefined') && (typeof this.instances[ id ].onLoad === 'function'))
            this.instances[ id ].onLoad();
    },

    onUnload: function( event ) {
        var id = this._getId( event );

        if ((typeof this.instances[ id ] !== 'undefined') && (typeof this.instances[ id ].onUnload === 'function'))
            this.instances[ id ].onUnload();
    },

    onSelect: function( event ) {
        var id = this._getId( event );

        if ((typeof this.instances[ id ] !== 'undefined') && (typeof this.instances[ id ].onSelect === 'function'))
            this.instances[ id ].onSelect();
    },

    onDeselect: function( event ) {
        var id = this._getId( event );

        if ((typeof this.instances[ id ] !== 'undefined') && (typeof this.instances[ id ].onDeselect === 'function'))
            this.instances[ id ].onDeselect();
    },

    onBlockSelect: function( event ) {
        var id = this._getId( event );

        if ((typeof this.instances[ id ] !== 'undefined') && (typeof this.instances[ id ].onBlockSelect === 'function'))
            this.instances[ id ].onBlockSelect();
    },

    onBlockDeselect: function( event ) {
        var id = this._getId( event );

        if ((typeof this.instances[ id ] !== 'undefined') && (typeof this.instances[ id ].onBlockDeselect === 'function'))
            this.instances[ id ].onBlockDeselect();
    },

    register: function(id_section, instance) {
        if ((typeof this.instances[ id_section ] === 'undefined') && (typeof instance === 'object'))
            this.instances[ id_section ] = instance;
    },

    _getId: function( event ) {
        return jQuery('[data-section-type]', event.target).eq(0).attr('data-section-type');
    }
};

var Variables = {
    product_itemLabel: 'Translation missing: en.products.product.item',
    product_itemsLabel: 'Translation missing: en.products.product.items',
    _button_plus: jQuery(' .product-quantity-wrapper > .btn-plus'),
    _button_minus: jQuery('.product-quantity-wrapper > .btn-minus'),
    _quantity: jQuery('.product-quantity-wrapper > .quantity'),
    _add_to_cart_value: jQuery('.btn-add-tocart > .btn-money'),
    _add_to_cart_num_items: jQuery('.btn-add-tocart > .btn-items'),
    _form_remove: jQuery('.jq-remove-cart-item'),
    _sort_by: jQuery('.sort-by'),
    _filter_interest: jQuery('.filter-interest'),
   // is_template_index:   ,
    _bt_plus: jQuery('#ButtonPlus'),
    _bt_minus: jQuery('#ButtonMinus'),
    _input_qtd: jQuery('#ProductQuantity'),
    _invetoryError: jQuery('.invetoryError'),
    _addToCartForm: jQuery('#AddToCart'),
    _allVariants: jQuery('.all-variant '),
    _variantDrawer: '.jq-input-qtd-',
    _plusDrawer: '.jq-plus-cart-item',
    itemqtdRest:'',
    variant_inventory:'',
    inventory_policy:'',
    inventory_management: '',
    _add_to_cart: jQuery('.jq-cart-add-product')
}

var VastaShop = {
    Product: ProductPage,
    Cart: CartPage,
    RecentlyViewedProducts: RecentlyViewedProducts,
    Sections: Sections,
    Variables: Variables
};

global.VastaShop = VastaShop;
})(window, jQuery);

function updateCart(classForm, itemPrice, totalPriceCart, id_variant) {

var data = jQuery(classForm).serialize();

VastaShop.Cart.update(data).then(function (cart, response) {
    if (response === "success") {
        VastaShop.Cart.current = cart;

        update_shipping_bar(cart.total_price, cart.item_count);
        update_discount_cart(cart.total_price, cart.item_count);

        jQuery(itemPrice + id_variant).html(Shopify.formatMoney(product_line(cart, id_variant)));
        jQuery(totalPriceCart).html(Shopify.formatMoney(cart.total_price));
        inventoryControl(id_variant);

        if(jQuery('.list-products').find('.jq-input-qtd-'+ id_variant).val() == 1){
            jQuery('.list-products').find('.btn-minus-'+id_variant).attr('disabled','disabled');
        }
        if(jQuery('.list-products').find('.jq-input-qtd-'+ id_variant).val() == parseInt(jQuery('.list-products').find('.jq-input-qtd-'+ id_variant).attr('data-max'))){
            jQuery('.list-products').find('.btn-plus-'+ id_variant).attr('disabled','disabled');
        }
        if (cart.item_count == 1) {
            jQuery('.jq_qtd_bt_proceed').html(total_items(cart) + ' Item');
            jQuery('.count').html(total_items(cart));
        } else if (cart.item_count > 1) {
            jQuery('.jq_qtd_bt_proceed').html(total_items(cart) + ' Items');
            jQuery('.count').html(total_items(cart));
        }
        render_cart_drawer(VastaShop.Cart.current, jQuery('.list-products'));
    }
});
}

function plusItem(buttom_plus, item_qtd) {

var input_qtd = jQuery(buttom_plus).siblings(item_qtd);
input_qtd.siblings('.jq-minus-cart-item').removeAttr('disabled');
if(input_qtd.attr('data-max') >= 0){

    if(input_qtd.val() >= parseInt(input_qtd.attr('data-max')) ){
        input_qtd.attr('disabled','disabled');
        buttom_plus.attr('disabled','disabled') ;
    }else{
        input_qtd.val(parseInt(input_qtd.val()) + 1);
    }
}else if(input_qtd.attr('data-max') == -1){
    input_qtd.val(parseInt(input_qtd.val()) + 1);
}
// inventoryControl(jQuery(buttom_plus).attr('name'));
}

function minusItem(buttom_minus, item_qtd) {
var input_qtd = jQuery(buttom_minus).siblings(item_qtd);
buttom_minus.removeAttr('disabled');
if (input_qtd.val() > 1){

    if(input_qtd.val() <= parseInt(input_qtd.attr('data-max')) ){
        input_qtd.val(parseInt(input_qtd.val()) - 1);
        input_qtd.removeAttr('disabled');
        input_qtd.siblings('.jq-plus-cart-item').removeAttr('disabled');
    }else if(input_qtd.attr('data-max') == -1){
        input_qtd.val(parseInt(input_qtd.val()) - 1);
    }
}else if(input_qtd.val() == 1){
    buttom_minus.attr('disabled','disabled');
}
}

function removeItem(classForm, itemLine, totalPriceCart, id_variant, button) { 
var data = 'updates%5B' + id_variant + '%5D=0';
 
jQuery(button).html(loading());
VastaShop.Cart.update(data).then(function (cart, response) {
    if (response === "success") {
        VastaShop.Cart.current = cart;
         
        update_shipping_bar(cart.total_price, cart.item_count);
        update_discount_cart(cart.total_price, cart.item_count);

        jQuery(button).html('Removed!');
        jQuery(itemLine + id_variant).fadeOut('slow');
        jQuery(totalPriceCart).html(Shopify.formatMoney(cart.total_price));
        inventoryControl(id_variant);

        if (cart.item_count < 1) {
            jQuery('.drawer-title').html(empty_cart());
            jQuery('.list-products').html(continue_shopping());
            jQuery('.cart-container').addClass('empty');
            jQuery('.cart-products-wrapper').removeClass('product-content');
            jQuery('.cupom-text').hide();
            jQuery('.count').html(total_items(cart));

        } else if (cart.item_count == 1) {
            jQuery('.jq_qtd_bt_proceed').html(total_items(cart) + ' Item');
            jQuery('.count').html(total_items(cart));
            jQuery('.cupom-text').show();
        } else if (cart.item_count > 1) {
            jQuery('.cupom-text').show();
            jQuery('.jq_qtd_bt_proceed').html(total_items(cart) + ' Items');
            jQuery('.count').html(total_items(cart));
            
        }
       
    }
});
}

function loading() {
return '<span class="lds-dual-ring"></span>';
}

function continue_shopping() {
if (jQuery('#CartDrawer').length > 0){
    return '<div class="cart-products-wrapper"><ul class="list-products"></ul></div>';
}else{
    return '<div class="cart__empty text-center" data-cart-view="data-cart-view">'+'<p class="empty-cart">Your cart is currently empty.</p>'+'<a aria-label="cart-continue-shopping" id="cart-continue-shopping" href="/collections/all"> <button class="btn">Continue shopping</button> </a>'+'</div>';
}
}

function empty_cart() {
return drawer_texts.empty_cart;
}

function total_items(cart) {
var rtn = 0;

cart.items.forEach(function (e, i) {
    rtn += e.quantity;
});

return rtn;
}

function product_line(cart, id_variant) {
var line_price = 0;
cart.items.forEach(function (e, i) {
    if (e.id == id_variant) {
        line_price = e.line_price;
    }
});
return line_price;
}

function get_id_variant(serialize_id) {
id = serialize_id.split('%');
id = id[1].substring(2);
return id;
}

function product_list_item(e, settings) {
var price = Shopify.formatMoney(e.price),
    compare_at_price = Shopify.formatMoney(e.compare_at_price),
    html = '',
    reviews = (settings.reviews_template) ? settings.reviews_template.replace(/\$\{ID\}/ig, e.id) : null;

html += '<li class="grid-products-item col-4">' +
    '<h3 class="hide">' + e.title + '</h3>' +
    '<a aria-label="recently-viewed-' + e.id + '" id="recently-viewed-' + e.id + '" href="' + e.url + '" class="grid-product-link">' +
    '<div class="responsive-image__wrapper">' +
    '<img class="responsive-image__image lazyload" src="' + e.image + '" alt="' + e.title + '">' +
    '</div>' +
    '<p class="grid-product-title">' + e.title + '</p>';

if (settings.show_price === true) {
    html += '<div class="prices-wrapper">';

    if (settings.reviews_template)
        html += '<div class="reviews">' + reviews + '</div>';

    if (compare_at_price.replace(/[^1-9]|0/g, '') !== '')
        html += '<span class="compare-price">' + compare_at_price + '</span>';

    html += '<span class="price">' + price + '</span></div>';
}

html += '</a>' +
    '</li>';

return html;
}

/**
* Show Recently Viewed Product
*  @function[<show_recently_viewed_products>]
*
* This function Show Recently product
*
*
* Dependencies: depends on customize actions
*
* @param{ Image } image - Object
* @param{ Long } x - width
* @param{ Long } y - height
*
* @return Image
*/
// function show_recently_viewed_products(e, settings) {
//     if (window.location.pathname.indexOf(e.url) < 0) {
//         jQuery('#RecentlyViewedProducts').prepend(product_list_item(e, settings));
//         jQuery('#RecentlyViewedProducts').siblings().show();
//     }
// }

function cart_line(prod, index) {
var dis= '';
console.log('title checking: ',prod)
if(prod.discounts.length > 0){
dis = prod.discounts[0].title;
}else{
dis = '';
}
var in1=index+1;
var inventory = -1;
var strDisabled = '';
var strDisabledMax = '';
var variant = JSON.parse(window.localStorage.getItem('all_products'));


prod.image = image_resize(prod.image, 100, 100);
variant_title = prod.variant_title != null ? prod.variant_title : '';

console.log('variant_title',prod.variant_id);
if( variant && typeof variant[prod.variant_id] !== 'undefined' && variant[prod.variant_id] ){
    
    if(variant[prod.variant_id].inventory_policy == 'continue' || variant[prod.variant_id].inventory_management == ""  ){
        inventory = -1;
    }else{
        inventory = variant[prod.variant_id].inventory_quantity;
    }
}


if( prod.quantity == 1){
    strDisabled = 'disabled="disabled"';
}

if(inventory == -1){
    strDisabledMax= '';
}else if(inventory == prod.quantity ){
    strDisabledMax= 'disabled="disabled"';
}

var checkbundle = '';
var editbtn = '';
var qtyviwe = '';
if( prod.properties.bundle){
  checkbundle = 'bundle-item';
  editbtn = '<a href="/products/'+prod.handle+'?action=editqty" class="edit-qty">Edit Quantity</a>';
  qtyviwe = '<div class="line-item">Quantity: '+prod.quantity+'</div>';
}
var artworkType='';
if(prod.properties.artwork){
 artworkType = `artwork: ${prod.properties.artwork}`;
 artworkval= prod.properties.artwork;
}   
else{
 artworkval= '';
}
return '<li class="mini-cart__item '+ checkbundle +' mini-cart-item1" data-cart-item data-line-id="'+in1+'" data-variant-id="'+ prod.variant_id +'" data-quantity="'+prod.quantity+'">'+ 
'<a href="' + prod.url + '"> <div class="cart_image mini-cart__item-image">' +
'<img src="' + prod.image + '" alt="' + prod.product_title + '" class=" ls-is-cached lazyloaded"></div>'+ 
'</a> <div class="mini-cart__item-content"> <div class="mini-cart__item-title" data-price="'+prod.price+'">' +
'<a href="' + prod.url + '">' + prod.product_title + '</a><div class="line-item">'+variant_title+'</div><div class="line-item artwork"><a href='+artworkval+'>' + artworkType + '</a></div>' + qtyviwe +
              '<div class="mini-cart__item-price"><span class="money sale">'+window.Shopify.formatMoney(prod.final_price, $("body").data("money-format"))+' </span></div>' +
               
                editbtn+
                '<p class="notification-discount meta" style="font-weight: 500;">'+dis+'</p>' + 
                '<div class="product-quantity-box">'+
                  '<span class="ss-icon product-minus js-change-quantity" data-func="minus">' +
                    '<span class="icon-minus"></span>' +
                    '</span>' +
                    '<input type="number" min="0" size="2" class="quantity" name="updates[]" id="updates_'+ prod.variant_id +'" value="'+prod.quantity+'" data-cart-quantity-input="mini-cart" step="1">' +
                    '<span class="ss-icon product-plus js-change-quantity" data-func="plus">' +
                      '<span class="icon-plus"></span>' +
                     '</span>' +
                  '</div></div>' +
                  '<a href="/cart/change?line=1&quantity=0" class="cart__remove-btn cart__remove-btn1" data-line-id="1" data-remove-item="mini-cart" data-variant-id="'+ prod.variant_id +'">' +
                     '<span class="remove-icon1">' + 
                     '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M2165 4684 c-120 -26 -209 -76 -300 -168 -73 -74 -90 -99 -185 -278 l-105 -197 -312 -3 c-297 -3 -313 -4 -339 -24 -47 -35 -67 -70 -72 -128 -5 -66 23 -125 78 -159 l35 -22 1595 0 1595 0 35 22 c55 34 83 93 78 159 -5 58 -25 93 -72 128 -26 20 -42 21 -339 24 l-312 3 -105 197 c-95 178 -113 204 -185 278 -93 94 -181 142 -307 168 -107 22 -679 22 -783 0z m778 -354 c27 -13 62 -39 77 -57 26 -29 109 -172 125 -215 7 -17 -25 -18 -584 -18 -325 0 -591 3 -591 6 0 14 103 196 127 225 25 29 83 64 133 80 14 4 169 7 345 6 319 -2 320 -2 368 -27z"></path><path d="M1211 3380 c-55 -13 -81 -32 -109 -80 l-27 -45 0 -710 c0 -741 5 -868 55 -1430 21 -232 38 -304 95 -400 73 -122 181 -208 325 -259 l85 -31 925 0 925 0 80 27 c186 64 330 208 386 388 22 69 43 280 76 740 15 209 18 382 18 965 l0 710 -27 46 c-32 55 -80 81 -148 81 -49 0 -94 -18 -121 -48 -44 -50 -43 -41 -40 -649 1 -319 -3 -683 -9 -810 -15 -324 -59 -883 -72 -925 -27 -85 -101 -156 -188 -180 -47 -13 -1713 -13 -1760 0 -87 24 -161 95 -188 180 -13 42 -57 601 -72 925 -6 127 -10 491 -9 810 3 515 1 583 -13 610 -36 68 -110 102 -187 85z"></path></g></svg>'+
                     '</span></a></li>';
}

function image_resize(image, x, y) {
var size = '_' + x + 'x' + y;
var img;
var ext;

img = image.replace(/_([0-9])*x([0-9])*\./g, '.').split('.');

ext = img[img.length - 1];
ext = size + '.' + ext;

img = img.slice(0, img.length - 1).join('.');

return img + ext;
}

function render_cart_drawer(cart, target) {

target.html('');

cart.items.forEach(function (prod,index) {
  
    target.prepend(cart_line(prod,index));
  
});

update_btn_add(cart.item_count);

if(VastaShop.Cart.current.items.find(x => x.properties.bundle == "true")){

 var uniqueItem = {};
 VastaShop.Cart.current.items.forEach(function(x){
    if(x.properties.bundle){
        if(uniqueItem[x.handle]){
            uniqueItem[x.handle].qty += x.quantity
        }else{
            uniqueItem[x.handle]=x.properties;
            uniqueItem[x.handle].name = 'Customization Cost for - '+x.product_title;
            uniqueItem[x.handle].qty = x.quantity;
            uniqueItem[x.handle].image = x.image;
        }
    }  
  });

  var custom_price = 0;
  var custom_qty = 0;
  Object.values(uniqueItem).forEach(function(uitm){ 
      var price = parseFloat(uitm._perunit);
      var request_price = parseFloat(uitm._requestPrice).toFixed(2);
      var price_each= ((price-request_price)*100);
      var price_each_custom= window.Shopify.formatMoney(price_each, $("body").data("money-format"));
      var uitm_price = ((price-request_price)*100) * uitm.qty;
      custom_price += uitm_price;
      custom_qty += uitm.qty;
      //var p = Shopify.formatMoney(uitm_price);
      var p = window.Shopify.formatMoney(uitm_price, $("body").data("money-format"));
      var propView = ``;
      Object.keys(uitm).forEach(function(prop){
        if(prop != 'bundle' && prop != 'image' && prop != 'name' && prop != 'qty' && prop != '_payload' && prop != '_perunit' && prop  != '_requestPrice'){
          if(prop.includes('file')){
            propView  += `<div class="line-item"><a target="_blank" href="`+uitm[prop]+`">`+prop+`</a></div>`;
          }else{
            propView  += `<div class="line-item">`+prop+`: `+uitm[prop]+`</div>`;
          }
        }
      });

      var itm_view = '<li class="mini-cart__item mini-cart-item1" data-quantity="'+uitm.qty+'">'+ 
      '<a href="' + uitm.url + '"> <div class="cart_image mini-cart__item-image">' + 
        '<img src="'+uitm.image+'" alt="' + uitm.name + '" class=" ls-is-cached lazyloaded"></div>'+ 
         '</a> <div class="mini-cart__item-content"> <div class="mini-cart__item-title" data-price="' + uitm.price + '">' +
          '<a href="' + uitm.url + '">' + uitm.name + '</a>' + propView +
                        '<div class="line-item">Quantity:'+uitm.qty+'</div>' +
                        '<div class="mini-cart__item-price">' + 
                        '<div style="margin-bottom:10px;"><span class="money sale">'+ price_each_custom + '</span></div>'+
                         '<span class="money " data-final-price="' + p + '" >' + p + '</span>' +
                          '</div>' +
                            '</li>';
      $('ul.cart_items.js-cart_items').append(itm_view);
  });
  console.log(custom_price);
  var cart_total_price = cart.total_price + custom_price;
  var cart_item_count = cart.item_count + custom_qty;
  $('.mini-cart-content-inner button.global-button.global-button--primary.add_to_cart:not(.bundle-btn)').hide();
  if($('.bundle-btn').length){
    $(".jq_qtd_bt_proceed").text(cart_item_count+' Items')
  }else{
  var btn = `<button type="button" onclick="goCheckout()" name="checkout" class="global-button global-button--primary bundle-btn add_to_cart" value="PROCEED TO Checkout"><span class="icon-lock"></span>PROCEED TO Checkout</button>`;
  $('.mini-cart-content-inner button.global-button.global-button--primary.add_to_cart:not(.bundle-btn)').after(btn);
  }
  jQuery('.cart_subtotal .money').html(window.Shopify.formatMoney(cart_total_price, $("body").data("money-format")));
}else{
  if(cart.item_count){
      if($('.bundle-btn').length == 0){
        var btn = `<button type="submit" name="checkout" class="global-button global-button--primary add_to_cart" data-minicart-checkout-button="" value="PROCEED TO Checkout"><span class="icon-lock"></span>PROCEED TO Checkout</button>`;
        $('.bundle-btn').after(btn);
        $(".bundle-btn").remove()
      }
  }
}

if( VastaShop.Cart.current.items.length == 0){
  $(".bundle-btn").remove()
}

var items = $("header .cart-container.mini-cart-content-inner .mini-cart-item1");
var totalQuantity = 0;
items.each(function () {
var quantity = $(this).data("quantity");
if (!isNaN(quantity)) {
    totalQuantity += parseInt(quantity);
}
});
$('.cart_count').text(totalQuantity);
}

function prepare_data(form, cart_items) {
var id, quantity,
    data = {},
    form_data = form.serializeArray();

form_data.forEach(function (e) {
    if (e.name === 'id') {
        id = e.value;
    } else if (e.name === 'quantity') {
        quantity = parseInt(e.value);
        data[id] = get_product_quantity(cart_items, id) + quantity;
    } else if (e.name.indexOf('updates[') > -1) {
        data[e.name.replace(/[^0-9]/g, '')] = e.value;
    }
});

return { updates: data };
}

function get_product_quantity(items, product_id) {
for (var i = 0, j = items.length; (i < j) && (items[i].id != product_id); i++);

return (i < j) ? parseInt(items[i].quantity) : 0;
}

function update_btn_add(item_count) {
jQuery('#cart-count > .count').html(item_count);

if (item_count > 1)
    jQuery('.jq_qtd_bt_proceed').html(item_count + ' Items');
else
    jQuery('.jq_qtd_bt_proceed').html(item_count + ' Item');
}

var semana = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var d = new Date();
var type_of_value;
var _shipping_bar_text = jQuery('.shipping-bar-text');
var _discount_in_cart_page = jQuery('.btn-wrapper form .text_botom_button');
var _cupom_drawer = jQuery('.cupom-text');
var _shipping_drawer_text = jQuery('.shipping-discount-drawer');

function update_discount_cart(current_total_price, quantity_cart) {
var _message_sucess_in_cartPage = "<strong>" + shipping_bar.text_cart_above_button_sucess + "</strong>";
var _message_default_in_cartPage = shipping_bar.text_cart_above_button + '<br><strong>' + semana[d.getDay()] + ' Only!</strong>';
var _message_drawer_cupom;

if (_cupom_drawer.length) {
    _message_drawer_cupom = "<strong>" + drawer_texts.cupom + "</strong>";
}

if (shipping_bar.discount_in_cart_page == 'quantity') {
    if (quantity_cart >= shipping_bar.shipping_quantity) {
        _discount_in_cart_page.html(_message_sucess_in_cartPage);
        _cupom_drawer.html(_message_sucess_in_cartPage);
    } else {
        _discount_in_cart_page.html(_message_default_in_cartPage);
        _cupom_drawer.html(_message_drawer_cupom);
    }
} else if (shipping_bar.discount_in_cart_page == 'price') {
    if (current_total_price >= shipping_bar.shipping_value) {
        _discount_in_cart_page.html(_message_sucess_in_cartPage);
        _cupom_drawer.html(_message_sucess_in_cartPage);
    } else {
        _discount_in_cart_page.html(_message_default_in_cartPage);
        _cupom_drawer.html(_message_drawer_cupom);
    }
}
}

function recharge(calllback) {
var quantity, price,
    _rc_radio = jQuery('.rc_radio'),
    _tag_prices = jQuery('.current-price, .btn-add-tocart .btn-money'),
    _quantity = jQuery('.product-quantity-wrapper > .quantity');

_rc_radio.change(function () {
    price = parseInt(jQuery(this).data('product-price'));
    quantity = parseInt(_quantity.val());

    _tag_prices.html(Shopify.formatMoney(price * quantity));

    if (typeof callback === 'function')
        callback(price, quantity);
});
}

function enableInputs(variant_id){
if(jQuery('.btn-add-tocart').hasClass('hide') == false){

  VastaShop.Variables._bt_minus.removeAttr('disabled');
  VastaShop.Variables._input_qtd.removeAttr('disabled');
  VastaShop.Variables._bt_plus.removeAttr('disabled');
  VastaShop.Variables._addToCartForm.removeAttr('disabled');
  VastaShop.Variables._invetoryError.html('This variant can not be added anymore').css('display', 'none');
}
}

  function disableInputs(variant_id){
      VastaShop.Variables._bt_plus.attr('disabled','disabled');
      VastaShop.Variables._bt_minus.attr('disabled','disabled');
      VastaShop.Variables._input_qtd.attr('disabled','disabled');
      setTimeout(function() {
          VastaShop.Variables._addToCartForm.attr('disabled','disabled');
      }, 50);
      VastaShop.Variables._invetoryError.html('This variant can not be added anymore').css('display', 'block');
  }
  
  function verifyCartInventory(variant_id){
      enableInputs(variant_id);
      VastaShop.Variables.itemqtdRest = VastaShop.Variables._allVariants.find('option[value='+ variant_id +']').attr('data-inventory');
      VastaShop.Product.current.variants.forEach(function(variant,i){
          if(variant_id == variant.id){
              VastaShop.Variables.variant_inventory = variant.inventory_quantity;
              VastaShop.Variables.inventory_policy =  variant.inventory_policy;
              VastaShop.Variables.inventory_management = variant.inventory_management ;
          }
      });

      if(VastaShop.Cart.current.item_count > 0){
          VastaShop.Cart.current.items.forEach(function(item,i){
              VastaShop.Variables.itemqtdRest = productInventory(item,variant_id);
          });
      }else{
          VastaShop.Variables.itemqtdRest = productInventory(null,variant_id);
      }
      return VastaShop.Variables.itemqtdRest;
  }
  
  function productInventory(item,variant_id){
      if(VastaShop.Variables.inventory_policy == 'continue' || VastaShop.Variables.inventory_management == null ){
          VastaShop.Variables.itemqtdRest = -1;
      }else if( item != null && variant_id == item.variant_id){
          VastaShop.Variables.itemqtdRest = VastaShop.Variables.variant_inventory - item.quantity;
          if(VastaShop.Variables.itemqtdRest == 0){
              disableInputs(variant_id);
          }
      }else{
          VastaShop.Variables.itemqtdRest = VastaShop.Variables.variant_inventory;
      }
      return VastaShop.Variables.itemqtdRest;
  }
  
  function inventoryControl(variant_id){
      if(jQuery('body').hasClass('template-product')){
          var inventoryQTD = verifyCartInventory(variant_id);
          VastaShop.Variables._allVariants.find('option[value='+ variant_id +']').attr('data-inventory', inventoryQTD);

          if(jQuery('#ProductQuantity').length > 0 && jQuery(VastaShop.Variables._allVariants).find(' option:selected').val() == variant_id)
              jQuery('#ProductQuantity').attr('data-max', parseInt(jQuery(VastaShop.Variables._allVariants).find('option:selected').attr('data-inventory')) == -1 ? parseInt(jQuery('#ProductQuantity').val()) + 3 : inventoryQTD  );
      }
  }
  
  $(document).ready(function(){
    $('.all-variant ').change(function(){
    var temp = window.location.href;
    if(window.location.href.indexOf('?variant=')){
    temp = window.location.href.split('?variant=')[0];
    }
    window.history.pushState({url: "" + $(this).attr('href') + ""}, $(this).attr('title') ,temp + "?variant=" + $(this).find('option:selected').val()); ;

    });

});

$('.main-header .cart-icon').click(function(){
    render_cart_drawer(VastaShop.Cart.current, jQuery('.list-products'));
});

(function ($) {
var es_ie;
if (es_ie) {
    setTimeout(function () {
        jQuery('.loaderIE').removeClass('active');
    }, 1000);
} else {
    jQuery('.loaderIE').removeClass('active');
}

jQuery(document).ready(function () {
    
    var sections = new VastaShop.Sections();
    inventoryControl($('.all-variant option:selected').val());
    jQuery('.lds-css.ng-scope').remove();

    if (window.SectionReviews && typeof window.SectionReviews !== 'undefined')
        sections.register('reviews', window.SectionReviews);

    if (window.SectionSliderPromotional && typeof window.SectionSliderPromotional !== 'undefined')
        sections.register('slider-promotional', window.SectionSliderPromotional);

    if (window.SectionProductTabs && typeof window.SectionProductTabs !== 'undefined')
        sections.register('product-tabs', window.SectionProductTabs);

    if (window.SectionSwatch && typeof window.SectionSwatch !== 'undefined')
        sections.register('swatch', window.SectionSwatch);

    if (window.SectionFooter && typeof window.SectionFooter !== 'undefined')
        sections.register('main-footer', window.SectionFooter);

    if (window.SectionCartDrawer && typeof window.SectionCartDrawer !== 'undefined')
        sections.register('cart-drawer', window.SectionCartDrawer);

    if (window.SectionMenuMobile && typeof window.SectionMenuMobile !== 'undefined')
        sections.register('menu-mobile', window.SectionMenuMobile);

    if (window.SectionShippingBar && typeof window.SectionShippingBar !== 'undefined')
        sections.register('shipping-bar', window.SectionShippingBar);

    if (window.SectionHeader && typeof window.SectionHeader !== 'undefined')
        sections.register('header', window.SectionHeader);
    
    if (window.SectionCTA && typeof window.SectionCTA !== 'undefined')
        sections.register('cta-section', window.SectionCTA);

    jQuery('#AddToCartFloat').click(function () {
        VastaShop.Variables._add_to_cart.trigger('submit');
    });

    jQuery('#AddToCart2').click(function () {
        VastaShop.Variables._add_to_cart.trigger('submit');
    });
});
})(jQuery); 