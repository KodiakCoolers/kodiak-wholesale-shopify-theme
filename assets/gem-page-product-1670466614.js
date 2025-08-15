

    
  
    
        jQuery(function() {
            var $module = jQuery('#m-1674674349634').children('.module');
            $module.gfV3Product();
        }); 
    
    
  
    
    
    (function(jQuery) {
  var $module = jQuery('#m-1674674349543').children('.module');
  var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
  $module.gfV3ProductSwatches({
    swatchText: swatchText,
    onSwatchSelected: function(variant, $swatch) {}
  });
})(window.GemQuery || jQuery);
    
    
    
            
          
    
    (function( jQuery ){
  // var $module = jQuery('#m-1674674349581').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );(function( jQuery ){
  // var $module = jQuery('#m-1674674349526').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    (function( jQuery ){
  // var $module = jQuery('#m-1674674349638').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
(function( jQuery ){
  // var $module = jQuery('#m-1674674349520').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1674674349587').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
(function( jQuery ){
  // var $module = jQuery('#m-1674674349548').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  // var $module = jQuery('#m-1674674349588').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    (function(jQuery) {
  var $module = jQuery('#m-1674674349602').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);(function( jQuery ){
  // var $module = jQuery('#m-1674674349625').children('.module');
  // You can add custom Javascript code right here.
  // $("#hide").click(function(){
  // $("#e-1665193905737").hide();
  // });
  // $("#show").click(function(){
  // $("#e-1665193905737").hide();
  // });
  $("#design").click(function(){
    $("#e-1670466698965").toggle();
  });
})( window.GemQuery || jQuery );
(function(jQuery) {
  var $module = jQuery('#m-1674674349615').children('.module');
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
  var $module = jQuery('#m-1674674349609').children('.module');
  var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
  $module.gfV3ProductSwatches({
    swatchText: swatchText,
    onSwatchSelected: function(variant, $swatch) {}
  });
})(window.GemQuery || jQuery);
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1674674349551').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
(function( jQuery ){
  // var $module = jQuery('#m-1674674349567').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1674674349539').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
(function( jQuery ){
  // var $module = jQuery('#m-1674674349605').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1674674349552').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
(function( jQuery ){
  // var $module = jQuery('#m-1674674349499').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  // var $module = jQuery('#m-1674674349531').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    /* add your custom script here */
            
          
            
          
            
          
    
    
            
          
    
    
            
          
    
    
    
            
          
    
    
    
            
          
    
    
    
            
          
    
    
    
            
          
    (function( jQuery ){
  // var $module = jQuery('#m-1674674349627').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );(function( jQuery ){
  var $module = jQuery('#m-1674674349464').children('.module');
  $module.gfV3ProductDesc();
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
            
          
    
    
            
          
    
            
          
    
    
            
          
    
    
            
          
    
    
            
          
    
    
    
        jQuery(function() {
            var $module = jQuery('#m-1674674349560').children('.module');
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
    
    
    
  
    
    
  
    
    
  
    
    
  
    
    
            
          
    
    
  
    
    
  
    
    
  
    
    
            
          
    
    
            
          
    
    
    
    
    
    
    
    
  (function( jQuery ){
  var $module = jQuery('#m-1674675783127').children('.module');

})( window.GemQuery || jQuery );
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1674675783127-child1').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
  var $module = jQuery('#m-1674675783127-child1-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1674675783127-child2').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
  var $module = jQuery('#m-1674675783127-child2-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1674675783127-child3').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
  var $module = jQuery('#m-1674675783127-child3-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1674675783127-child4').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
  var $module = jQuery('#m-1674675783127-child4-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
  
    
  
    
  
    
  