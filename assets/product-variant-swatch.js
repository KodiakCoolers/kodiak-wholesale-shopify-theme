/* Variant + swatch syncing and image switching */
(function() {
  if (typeof window === 'undefined') return;
  function onReady(fn){ if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn); else fn(); }

  onReady(function() {
    // Update main image and Flickity when variant select changes
    $(document).on('change', 'select[name="id"], input[name^="option-"]', function() {
      var form = $(this).closest('form[action*="/cart/add"]');
      var select = form.find('select[name="id"]');
      var selectedOption = select.find('option:selected');
      var imageUrl = selectedOption.attr('data-image');
      if (imageUrl && imageUrl !== '') {
        var mainImage = $('.product-gallery__image').first();
        if (mainImage.length) mainImage.attr('src', imageUrl);
        if (typeof Flickity !== 'undefined') {
          var gallery = document.querySelector('.product_gallery');
          if (gallery && gallery.flickityInstance) {
            var slides = gallery.querySelectorAll('.product-gallery__image');
            slides.forEach(function(slide, index) {
              if (slide.getAttribute('data-imglink') === imageUrl) gallery.flickityInstance.select(index);
            });
          }
        }
      }
    });

    // From swatches to variant select
    function selectVariantFromSwatches() {
      try {
        var color = $('.swatch_options .color_swatch_design input:checked').val() || $('.swatch_options .color_swatch_design label[aria-checked="true"]').attr('data-value') || $('.swatch_options .color_swatch_design .selected_label-1').attr('data-value');
        var style = $('.swatch_options .style_swatch_design input:checked').val() || $('.swatch_options .style_swatch_design label[aria-checked="true"]').attr('data-value') || $('.swatch_options .style_swatch_design .selected_label-1').attr('data-value');
        var $variantSelect = $('select[name="id"]');
        var $opt = $();
        if ($('.multi_select option').length) {
          if (color && style) $opt = $('.multi_select option[data-option1="'+color+'"][data-option2="'+style+'"]').first();
          if (!$opt.length && color) $opt = $('.multi_select option[data-option1="'+color+'"]').first();
          if (!$opt.length && style) $opt = $('.multi_select option[data-option2="'+style+'"]').first();
          if (!$opt.length) $opt = $('.multi_select option').first();
          if ($opt.length) {
            $('.multi_select').val($opt.val()).trigger('change');
            if ($variantSelect.length) $variantSelect.val($opt.val()).trigger('change');
          }
        } else if ($('.single_select option').length) {
          var singleVal = color || style;
          if (singleVal) $opt = $('.single_select option[data-option1="'+singleVal+'"]').first();
          if (!$opt.length) $opt = $('.single_select option').first();
          if ($opt.length) {
            $('.single_select').val($opt.val()).trigger('change');
            if ($variantSelect.length) $variantSelect.val($opt.val()).trigger('change');
          }
        }

      } catch (e) {}
    }

    $(document).on('click change', '.swatch_options .color_swatch_design input, .swatch_options .style_swatch_design input, .swatch_options .color_swatch_design label, .swatch_options .style_swatch_design label', function() {
      setTimeout(selectVariantFromSwatches, 0);
    });
  });
})();


