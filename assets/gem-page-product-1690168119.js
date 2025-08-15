

    
  
    (function( jQuery ){
    var $module = jQuery('#m-1690424829361').children('.module');
    $module.gfV1Countdown({
        id: "1690424829361",
        idSlug: "1690424829361"
    });
})( window.GemQuery || jQuery );
  
    
  
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
    
  
    
    
    
  
    
    
    
  
    
  
    
    
    
  
    
  
    
    
    
  
    
  
    (function( jQuery ){
  try {
    var $module = jQuery('#m-1690216382872').children('.module');   
    var navspeed = $module.data('navspeed'),
      autoplaytimeout = $module.data('autoplaytimeout'),
      autoplayhoverpause = $module.data('autoplayhoverpause'),
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
      marginlg = parseInt($module.data('marginlg')),
      marginmd = parseInt($module.data('marginmd')),
      marginsm = parseInt($module.data('marginsm')),
      marginxs = parseInt($module.data('marginxs'));

    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    if(mode == 'production') {
    var autoplay = $module.data('autoplay'), 
        autoRefresh = true, 
        loop = $module.data('loop');
    } else {
    var autoplay = 0, 
        autoRefresh = false, 
        loop = 0;
    }

    var initCarousel = function() {
      $module.owlCarousel({
        mouseDrag: false,
        autoplayHoverPause: autoplayhoverpause,
        autoplay: autoplay,
        autoRefresh: autoRefresh,
        autoplaySpeed: navspeed,
        autoplayTimeout: autoplaytimeout,
        loop: loop,
        navSpeed: navspeed,
        autoWidth: !1,
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
        onInitialized: function () {
          $module.closest('.module-wrap[data-label="Carousel"]').addClass('gf-carousel-loaded');
          jQuery(window).trigger("resize");
        }
      });
    }
    
    // Fix nested carousel bug	
    if ($module.parent().parent().closest('.module-wrap[data-label="Carousel"]').length > 0) {	
      setTimeout(function() {	
        initCarousel();	
      }, 300)	
    } else {	
      initCarousel();	
    }
  } catch(err) {}
})( window.GemQuery || jQuery );
  
    
    
    
  
    
  
    
    
    
  
    
  
    
    
    
  
    
  
    
    
    
  
    
  
    
    
    
  
    
  
    
    
    
  
    
  
    
    
    
  
    
  
    
  
    
  
        jQuery(function() {
            var $module = jQuery('#m-1682887751465').children('.module');
            $module.gfV3Product();
        }); 
    
    
  
    
    
(function(jQuery) {
    var $module = jQuery('#m-1682887751464').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
  
    jQuery(function() {
    var $module = jQuery('#m-1682887751456').children('.module');
    var style = $module.attr('data-style');
    var updatePrice = $module.attr('data-updateprice');

    $module.gfV3ProductQuantity({
        'style': style,
        'updatePrice': updatePrice
    });
});(function(jQuery) {
  var $module = jQuery('#m-1682887751454').children('.module');
  var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
  $module.gfV3ProductSwatches({
    swatchText: swatchText,
    onSwatchSelected: function(variant, $swatch) {}
  });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
  var $module = jQuery('#m-1682887751361').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});
    
            
          
    
    
    
  
    (function( jQuery ){
    var $module = jQuery('#m-1690424572296').children('.module');
    $module.gfV1Countdown({
        id: "1690424572296",
        idSlug: "1690424572296"
    });
})( window.GemQuery || jQuery );
  
    
  
    
    
(function(jQuery) {
    var $module = jQuery('#m-1682887751458').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
    var $module = jQuery('#m-1682887751432').children('.module');
    var style = $module.attr('data-style');
    var updatePrice = $module.attr('data-updateprice');

    $module.gfV3ProductQuantity({
        'style': style,
        'updatePrice': updatePrice
    });
});
    (function(jQuery) {
  var $module = jQuery('#m-1682887751516').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
  (function(jQuery) {
  var $module = jQuery('#m-1682887751442').children('.module');
  var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
  $module.gfV3ProductSwatches({
    swatchText: swatchText,
    onSwatchSelected: function(variant, $swatch) {}
  });
})(window.GemQuery || jQuery);
    
    
    
  
    (function(jQuery) {
  var $module = jQuery('#m-1682887751494').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
  
(function(jQuery) {
    var $module = jQuery('#m-1682887751362').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    (function(jQuery) {
  var $module = jQuery('#m-1682887751377').children('.module');
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

  var blankOption = $module.attr('data-blankoption');
  var blankOptionText = $module.attr('data-blankoptiontext');
  var style = $module.attr('data-style');

  $module.gfV3ProductVariants({
    mode: mode,
    blankOption: blankOption,
    blankOptionText: blankOptionText,
    style: style,
    onVariantSelected: function(variant, $select) {}
  });
})(window.GemQuery || jQuery); 
  
    (function( jQuery ){
  var $module = jQuery('#m-1682887751461').children('.module');
  var style = $module.attr('data-style');
  var updatePrice = $module.attr('data-updateprice');

  $module.gfV3ProductQuantity({
    'style': style,
    'updatePrice': updatePrice
  });
})( window.GemQuery || jQuery );
  jQuery(function() {
  var $module = jQuery('#m-1682887751431').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});
    
            
          
    
    jQuery(function() {
  var $module = jQuery('#m-1685559686881').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});
    
  
            
          
            
          
    
    
    
    
    
    
    
    
    
            
          
    
    
            
          
            
          
    
  
    
  
    
    
  
    
  
    
    
  
    
    
  
    
  
    
    
  
    
  
    
    
  
    
    
  
    
  
    
    
  
    
    
  
    
  
    
    
  
    
  
    
    
  
    
    
  
    
  
    
    
  
    
    
  
    
  
    
    
  
    
  
    
    
  
    
    
  
    
  
    
    
  
    
            
          
            
          
                          (function( jQuery ){
                              try{
                                  if(jQuery().gfV2Lazyload){
                                      var $module = jQuery(window);
                                      $module.gfV2Lazyload({delay:125})
                                  }
                              }catch(err){
                                  console.error(err)
                              }
                          })( window.GemQuery || jQuery );
                      window.__gfFlowActions = []; window.__gfFlowActions.push([{"source":{"id":"#r-1682887751374"},"events":[{"key":"scrolling-to-percentage","data":{"condition":"gte","percentage":33,"runtime":"infinite"}}],"targets":[{"id":"#r-1682887751374","actions":[{"key":"show","type":2,"data":{"delay":0,"duration":50}}]}]},{"source":{"id":"#r-1682887751374"},"events":[{"key":"scrolling-to-percentage","data":{"condition":"lt","percentage":33,"runtime":"infinite"}}],"targets":[{"id":"#r-1682887751374","actions":[{"key":"hide","type":2,"data":{"delay":0,"duration":50}}]}]}]); window.__gfV1FlowActions.init();