

    
    
        jQuery(function() {
            var $module = jQuery('#m-1646336293936').children('.module');
            $module.gfV3Product();
        }); 
    
    
            
          
    
    
    
    
            
          
    
    
(function(jQuery) {
    var $module = jQuery('#m-1646336293993').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
    
    
(function(jQuery) {
    var $module = jQuery('#m-1646336293902').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
    var $module = jQuery('#m-1646336293879').children('.module');
    var style = $module.attr('data-style');
    var updatePrice = $module.attr('data-updateprice');

    $module.gfV3ProductQuantity({
        'style': style,
        'updatePrice': updatePrice
    });
});
    jQuery(function() {
    var $module = jQuery('#m-1646336293868').children('.module');
    var style = $module.attr('data-style');
    var updatePrice = $module.attr('data-updateprice');

    $module.gfV3ProductQuantity({
        'style': style,
        'updatePrice': updatePrice
    });
});
    
    
    
    
    /* add your custom script here */jQuery(function() {
  var $module = jQuery('#m-1646336293932').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});jQuery(function() {
  var $module = jQuery('#m-1646336293889').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});
    
    
    
    
    
    
            
          
    
    
    
    
    
    
            
          
    
    
            
          
    
    
            
          
    
    
            
          
    
    
    
            
          
    
    
        jQuery(function() {
            var $module = jQuery('#m-1585089772818').children('.module');
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
    
    
    
    
    
    
    
    
    
    
    
    window.__gfFlowActions = []; window.__gfFlowActions.push([]); window.__gfV1FlowActions.init();