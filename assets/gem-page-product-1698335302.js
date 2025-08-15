

    
  
    
  
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
    
  
    
    
    
  
    
    
    
  
    
  
    
    
    
  
    
  
    
    
    
  
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
    
    
    
    
            
          
    
    
            
          
    
    
            
          
    
    
    (function( jQuery ){
  try {
    var $module = jQuery('#m-1698337572932').children('.module');
    var single = $module.attr('data-single');
    var openDefault = $module.attr('data-openDefault');
    var openTab = $module.attr('data-openTab');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

    if(openDefault == 0 || openDefault == '0') {
      openTab = '0';
    }

    $module.gfAccordion({
      single: single,
      openTab: openTab,
      mode: mode,
      onChanged: function() {	
        // Fix (P) Desc read more bug	
        $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {	
          if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {	
            jQuery(el).children(".module").data("gfv3productdesc").initReadMore();	
          }	
        })	
      }
    });

    var borderColor = $module.attr('data-borderColor');
    var borderSize = $module.attr('data-borderSize');

    $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
    $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
  } catch(err) {}
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1698337530482').children('.module');
  $module.gfV3ProductDesc();
})( window.GemQuery || jQuery );
  jQuery(function() {
  var $module = jQuery('#m-1685559686881').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});
    (function( jQuery ){
  try {
    var $module = jQuery('#m-1698337717007').children('.module');
    var single = $module.attr('data-single');
    var openDefault = $module.attr('data-openDefault');
    var openTab = $module.attr('data-openTab');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

    if(openDefault == 0 || openDefault == '0') {
      openTab = '0';
    }

    $module.gfAccordion({
      single: single,
      openTab: openTab,
      mode: mode,
      onChanged: function() {	
        // Fix (P) Desc read more bug	
        $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {	
          if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {	
            jQuery(el).children(".module").data("gfv3productdesc").initReadMore();	
          }	
        })	
      }
    });

    var borderColor = $module.attr('data-borderColor');
    var borderSize = $module.attr('data-borderSize');

    $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
    $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
  } catch(err) {}
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1698337717034').children('.module');
  $module.gfV3ProductDesc();
})( window.GemQuery || jQuery );
  
    
  
            
          
            
          
    
    
    
    
    
    
    
    
    
            
          
            
          
    
    
    
    
    
    
    
    
    
    
    
            
          
            
          
    
    
    
    
    
    
    
    
    
            
          
            
          
    
    
    
    
    
    
    
    
    
    
            
          
    
    
            
          
            
          
    
  
    
  
    
    
  
    
  
    
    
  
    
    
  
    
  
    
    
  
    
  
    
    
  
    
    
  
    
  
    
    
  
    
    
  
    
  
    
    
  
    
  
    
    
  
    
    
  
    
  
    
    
  
    
    
  
    
  
    
    
  
    
  
    
    
  
    
    
  
    
  
    
    
  
    
            
          
            
          
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
                      