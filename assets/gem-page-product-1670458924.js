

    
  
    
        jQuery(function() {
            var $module = jQuery('#m-1674674366489').children('.module');
            $module.gfV3Product();
        }); 
    
    
  
    
    
    (function(jQuery) {
  var $module = jQuery('#m-1674674366428').children('.module');
  var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
  $module.gfV3ProductSwatches({
    swatchText: swatchText,
    onSwatchSelected: function(variant, $swatch) {}
  });
})(window.GemQuery || jQuery);
    
    
    
            
          
    
    (function( jQuery ){
  // var $module = jQuery('#m-1674674366460').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );(function( jQuery ){
  // var $module = jQuery('#m-1674674366410').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    (function( jQuery ){
  // var $module = jQuery('#m-1674674366385').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
(function( jQuery ){
  // var $module = jQuery('#m-1674674366514').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1674674366423').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
(function( jQuery ){
  // var $module = jQuery('#m-1674674366538').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  // var $module = jQuery('#m-1674674366540').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    (function(jQuery) {
  var $module = jQuery('#m-1672350105201').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);(function( jQuery ){
  // var $module = jQuery('#m-1672350105285').children('.module');
  // You can add custom Javascript code right here.
  // $("#hide").click(function(){
  // $("#e-1665193905737").hide();
  // });
  // $("#show").click(function(){
  // $("#e-1665193905737").hide();
  // });
  $("#design").click(function(){
    $("#e-1670963559494").toggle();
  });
})( window.GemQuery || jQuery );
(function(jQuery) {
  var $module = jQuery('#m-1672350105368').children('.module');
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
  var $module = jQuery('#m-1674674366480').children('.module');
  var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
  $module.gfV3ProductSwatches({
    swatchText: swatchText,
    onSwatchSelected: function(variant, $swatch) {}
  });
})(window.GemQuery || jQuery);
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1674674366541').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
(function( jQuery ){
  // var $module = jQuery('#m-1674674366426').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1674674366551').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
(function( jQuery ){
  // var $module = jQuery('#m-1674674366451').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1674674366521').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
(function( jQuery ){
  // var $module = jQuery('#m-1674674366474').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  // var $module = jQuery('#m-1674674366457').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    /* add your custom script here */
            
          
            
          
            
          
    
    
            
          
    
    
            
          
    
    
    
            
          
    
    
    
            
          
    
    
    
            
          
    
    
    
            
          
    (function( jQuery ){
  // var $module = jQuery('#m-1674674366523').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );(function( jQuery ){
  var $module = jQuery('#m-1674674366505').children('.module');
  $module.gfV3ProductDesc();
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
            
          
    
    
            
          
    
            
          
    
    
            
          
    
    
            
          
    
    
            
          
    
    
    
        jQuery(function() {
            var $module = jQuery('#m-1674674366435').children('.module');
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
  var $module = jQuery('#m-1674675623138').children('.module');

})( window.GemQuery || jQuery );
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1674675623138-child1').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
  var $module = jQuery('#m-1674675623138-child1-0').children('.module');
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
  var $module = jQuery('#m-1674675623138-child2').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
  var $module = jQuery('#m-1674675623138-child2-0').children('.module');
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
  var $module = jQuery('#m-1674675623138-child3').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
  var $module = jQuery('#m-1674675623138-child3-0').children('.module');
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
  var $module = jQuery('#m-1674675623138-child4').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
  var $module = jQuery('#m-1674675623138-child4-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
  
    
  
    
  
    
  