

    
    
    
        jQuery(function() {
            var $module = jQuery('#m-1671476235324').children('.module');
            $module.gfV3Product();
        }); 
    
    
  
    
    
(function(jQuery) {
    var $module = jQuery('#m-1671659218047').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
    jQuery(function() {
    var $module = jQuery('#m-1671593030055').children('.module');
    var style = $module.attr('data-style');
    var updatePrice = $module.attr('data-updateprice');

    $module.gfV3ProductQuantity({
        'style': style,
        'updatePrice': updatePrice
    });
});(function(jQuery) {
  var $module = jQuery('#m-1671592727345').children('.module');
  var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
  $module.gfV3ProductSwatches({
    swatchText: swatchText,
    onSwatchSelected: function(variant, $swatch) {}
  });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
  var $module = jQuery('#m-1671593008864').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});
    
    
    
    
    
    
    
(function(jQuery) {
    var $module = jQuery('#m-1671593152140').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
    var $module = jQuery('#m-1671593152213').children('.module');
    var style = $module.attr('data-style');
    var updatePrice = $module.attr('data-updateprice');

    $module.gfV3ProductQuantity({
        'style': style,
        'updatePrice': updatePrice
    });
});
    (function(jQuery) {
  var $module = jQuery('#m-1671593661551').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
  
    
    
    
    
    
    
    
    jQuery(function() {
  var $module = jQuery('#m-1671593179265').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});
(function(jQuery) {
  var $module = jQuery('#m-1671592727382').children('.module');
  $module.gfV4ProductImageList({
    onImageClicked: function(imageUrl, imageZoomUrl) {}
  });

  var style = $module.attr('data-style');
  switch(style) {
    case 'slider':
    var navspeed = $module.data('navspeed'),
      navlg = $module.data('navlg'),
      navmd = $module.data('navmd'),
      navsm = $module.data('navsm'),
      navxs = $module.data('navxs'),
      collg = $module.data('collg'),
      colmd = $module.data('colmd'),
      colsm = $module.data('colsm'),
      colxs = $module.data('colxs'),
      dotslg = $module.data('dotslg'),
      dotsmd = $module.data('dotsmd'),
      dotssm = $module.data('dotssm'),
      dotsxs = $module.data('dotsxs'),

      marginlg = parseInt($module.data('mlg')),
      marginmd = parseInt($module.data('mmd')),
      marginsm = parseInt($module.data('msm')),
      marginxs = parseInt($module.data('mxs'));

    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    if(mode == 'production') {
      var loop = $module.data('loop'),
        autoRefresh = true;
    } else {
      var loop = 0,
        autoRefresh = false;
    }
    $module.find('.gf_product-images-list').children().each( function( index ) {
      jQuery(this).attr( 'data-position', index );
    });
    $module.find('.gf_product-images-list').owlCarousel({
      mouseDrag: false,
      navSpeed: navspeed,
      autoRefresh: autoRefresh,
      autoWidth: !1,
      loop: loop,
      responsiveClass:true,
      responsive:{
        0:{
          items:colxs,
          nav: navxs,
          dots:dotsxs,
          margin: marginxs
        },
        768:{
          items:colsm,
          nav: navsm,
          dots:dotssm,
          margin: marginsm
        },
        992:{
          items:colmd,
          nav: navmd,
          dots:dotsmd,
          margin: marginmd
        },
        1200:{
          items:collg,
          nav: navlg,
          dots:dotslg,
          margin: marginlg
        }
      },
      onInitialized: function(){
        $module.closest('.module-wrap[data-label="(P) Image List"]').addClass('gf-carousel-loaded');
      }
    }); 
    break;
  }
})(window.GemQuery || jQuery); 
    (function(jQuery) {
  var $module = jQuery('#m-1671592727368').children('.module');
  var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
  $module.gfV3ProductSwatches({
    swatchText: swatchText,
    onSwatchSelected: function(variant, $swatch) {}
  });
})(window.GemQuery || jQuery);
            
          
    
            
          
    
    
            
          
    
    
    
            
          
    
    
    
            
          
    
    
    
            
          
    
    
    
    
    (function( jQuery ){
  var $module = jQuery('#m-1671476235349').children('.module');
  $module.gfV3ProductDesc();
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
            
          
    
    
            
          
    
    
            
          
    
    
            
          
    
    
    
    
    
    
    
    
    
    
    
            
          
    
    
            
          
    
    
    
            
          
    
    
            
          
    
    
            
          
    
    
    
            
          
    
    
            
          
    
    
            
          
    
    
        jQuery(function() {
            var $module = jQuery('#m-1671476235406').children('.module');
            var single   = $module.attr('data-single');
            var openDefault  = $module.attr('data-openDefault');
            var openTab  = $module.attr('data-openTab');
            var mode     = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

            if(openDefault == 0 || openDefault == '0') {
                openTab = '0';
            }

            $module.gfAccordion({
                single: single,
                openTab: openTab,
                mode: mode
            });

            var borderColor = $module.attr('data-borderColor');
            var borderSize = $module.attr('data-borderSize');

            $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
            $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
        });
    
    
    
    
    
    
    
    
    
    
    
    
            
          
    
    
    
    
    
    
    
    
    
    
    
    
            
          
    
    
    
    
    
    
            
          
    
    
            
          
    
    
            
          
    
    
    
            
          
    
    
            
          
    
    
            
          
    
    
            
          
    
    
            
          