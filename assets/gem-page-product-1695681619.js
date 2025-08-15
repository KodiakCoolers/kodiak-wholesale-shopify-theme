

    
  
    
    
    
    
    
    
    
    
    
    
    
    
    (function( jQuery ){
    var $module = jQuery('#m-1679947389889').children('.module');
    $module.gfV1Countdown({
        id: "1679947389889",
        idSlug: "1679947389889"
    });
})( window.GemQuery || jQuery );
  
    
        jQuery(function() {
            var $module = jQuery('#m-1672352195259').children('.module');
            $module.gfV3Product();
        }); 
    
    
  
    
    
(function(jQuery) {
    var $module = jQuery('#m-1672352195280').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
    
  
    jQuery(function() {
    var $module = jQuery('#m-1672352195360').children('.module');
    var style = $module.attr('data-style');
    var updatePrice = $module.attr('data-updateprice');

    $module.gfV3ProductQuantity({
        'style': style,
        'updatePrice': updatePrice
    });
});(function(jQuery) {
  var $module = jQuery('#m-1674146467646').children('.module');
  var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
  $module.gfV3ProductSwatches({
    swatchText: swatchText,
    onSwatchSelected: function(variant, $swatch) {}
  });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
  var $module = jQuery('#m-1676518682341').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});
    
            
          
    
    
    
  
    
  
    
    
(function(jQuery) {
    var $module = jQuery('#m-1672352195400').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
    var $module = jQuery('#m-1672352195339').children('.module');
    var style = $module.attr('data-style');
    var updatePrice = $module.attr('data-updateprice');

    $module.gfV3ProductQuantity({
        'style': style,
        'updatePrice': updatePrice
    });
});
    (function(jQuery) {
  var $module = jQuery('#m-1672352195379').children('.module');
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
  var $module = jQuery('#m-1695784962426').children('.module');
  var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
  $module.gfV3ProductSwatches({
    swatchText: swatchText,
    onSwatchSelected: function(variant, $swatch) {}
  });
})(window.GemQuery || jQuery);
    
    
    
  
    (function(jQuery) {
  var $module = jQuery('#m-1677016446077').children('.module');
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
    var $module = jQuery('#m-1677016446015').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    (function(jQuery) {
  var $module = jQuery('#m-1677016446095').children('.module');
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
  var $module = jQuery('#m-1677016446166').children('.module');
  var style = $module.attr('data-style');
  var updatePrice = $module.attr('data-updateprice');

  $module.gfV3ProductQuantity({
    'style': style,
    'updatePrice': updatePrice
  });
})( window.GemQuery || jQuery );
  jQuery(function() {
  var $module = jQuery('#m-1677016446143').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});
    
    
    jQuery(function() {
  var $module = jQuery('#m-1672352195354').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});
    
  
            
          
            
          
    
  
    
    
    
  
    
    
    
  
    
  
    
    
    
  
    
  
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
            
          
            
          
    
    
    
    
    
    
    
    
    
            
          
            
          
    
    
    
    
    
    
    
    
    
    
    
    
            
          
            
          
    
    
    
    
    
    
    
    
    
    
            
          
            
          
    
    
    
    
    
    
    
    
    
    
            
          
    
    
            
          
            
          
    
  
    
        jQuery(function() {
            var $module = jQuery('#m-1676607068607').children('.module');
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
                              try{
                                  if(jQuery().gfV2Lazyload){
                                      var $module = jQuery(window);
                                      $module.gfV2Lazyload({delay:125})
                                  }
                              }catch(err){
                                  console.error(err)
                              }
                          })( window.GemQuery || jQuery );
                      window.__gfFlowActions = []; window.__gfFlowActions.push([{"source":{"id":"#r-1677016446133"},"events":[{"key":"scrolling-to-percentage","data":{"condition":"gte","percentage":33,"runtime":"infinite"}}],"targets":[{"id":"#r-1677016446133","actions":[{"key":"show","type":2,"data":{"delay":0,"duration":50}}]}]},{"source":{"id":"#r-1677016446133"},"events":[{"key":"scrolling-to-percentage","data":{"condition":"lt","percentage":33,"runtime":"infinite"}}],"targets":[{"id":"#r-1677016446133","actions":[{"key":"hide","type":2,"data":{"delay":0,"duration":50}}]}]}]); window.__gfV1FlowActions.init();