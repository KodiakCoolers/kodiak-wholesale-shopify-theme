/**
 * ProductVariantHandler - A clean implementation for Shopify product variant selection
 * This replaces the scattered implementations across multiple files
 */
const ProductVariantHandler = (function() {
  // Store initialized product forms to prevent duplicate initialization
  const initializedForms = new Set();
  
  /**
   * Initialize a product form with variant selection handling
   * @param {HTMLElement} form - The product form element
   */
  function init(form) {
    const $form = $(form);
    const formId = $form.attr('id') || $form.data('product-form');
    
    // Prevent double initialization
    if (initializedForms.has(formId)) return;
    initializedForms.add(formId);
    
    // Get product data
    let productData;
    try {
      productData = JSON.parse($form.attr('data-product'));
      console.log(`Initialized product form for: ${productData.title}`);
    } catch (e) {
      console.error('Could not parse product data', e);
      return;
    }
    
    // Set up event handlers for option selectors
    setupOptionSelectors($form);
    
    // Handle form submission
    $form.on('submit', handleFormSubmit);
    
    // Initial update to ensure correct variant is selected
    updateSelectedVariant($form);
    
    console.log(`Product form ${formId} initialized with ${productData.variants.length} variants`);
  }
  
  /**
   * Set up event handlers for all option selectors (swatches and dropdowns)
   * @param {jQuery} $form - The product form jQuery object
   */
  function setupOptionSelectors($form) {
    // Handle radio button (swatch) changes
    $form.find('.swatch_options input[type="radio"]').on('change', function() {
      updateSelectedVariant($form);
    });
    
    // Handle dropdown option changes
    $form.find('.dropdown-option select.dropdown-media').on('change', function() {
      updateSelectedVariant($form);
    });
    
    // Handle quantity changes
    $form.find('input[name="quantity"]').on('change', function() {
      updatePriceDisplay($form);
    });
  }
  
  /**
   * Update the selected variant based on current option selections
   * @param {jQuery} $form - The product form jQuery object
   */
  function updateSelectedVariant($form) {
    const selectedOptions = collectSelectedOptions($form);
    const variantId = findMatchingVariantId($form, selectedOptions);
    
    if (variantId) {
      console.log(`Selected variant: ${variantId}`);
      updateFormInputs($form, variantId);
      updatePriceDisplay($form);
      updateProductURL(variantId);
      updateVariantImage($form, variantId);
    } else {
      console.warn('No matching variant found for selected options:', selectedOptions);
    }
  }
  
  /**
   * Collect all selected options from a product form
   * @param {jQuery} $form - The product form jQuery object
   * @returns {Array} An array of selected option values
   */
  function collectSelectedOptions($form) {
    const selectedOptions = [];
    
    // Get selections from radio buttons (swatches)
    $form.find('.swatch_options input[type="radio"]:checked').each(function() {
      const optionIndex = parseInt($(this).closest('.swatch').attr('data-option-index'));
      selectedOptions[optionIndex] = $(this).val();
    });
    
    // Get selections from dropdowns
    $form.find('.dropdown-option select.dropdown-media').each(function() {
      const optionIndex = parseInt($(this).closest('.dropdown-option').attr('data-option-index'));
      selectedOptions[optionIndex] = $(this).val();
    });
    
    return selectedOptions.filter(option => option !== undefined);
  }
  
  /**
   * Find the matching variant ID based on selected options
   * @param {jQuery} $form - The product form jQuery object
   * @param {Array} selectedOptions - Array of selected option values
   * @returns {string|null} The matching variant ID or null if no match
   */
  function findMatchingVariantId($form, selectedOptions) {
    if (selectedOptions.length === 0) return null;
    
    let matchingVariantId = null;
    const variantSelector = $form.find('select[name="id"]');
    
    variantSelector.find('option').each(function() {
      const option = $(this);
      const option1 = option.attr('data-option1');
      const option2 = option.attr('data-option2');
      const option3 = option.attr('data-option3');
      
      const match = 
        (!selectedOptions[0] || selectedOptions[0] === option1) &&
        (!selectedOptions[1] || selectedOptions[1] === option2) &&
        (!selectedOptions[2] || selectedOptions[2] === option3);
      
      if (match) {
        matchingVariantId = option.val();
        return false; // Break the loop
      }
    });
    
    return matchingVariantId;
  }
  
  /**
   * Update all form inputs with the selected variant ID
   * @param {jQuery} $form - The product form jQuery object
   * @param {string} variantId - The selected variant ID
   */
  function updateFormInputs($form, variantId) {
    // Update all possible variant selectors
    $form.find('select[name="id"]').val(variantId);
    $form.find('input[name="id"]').val(variantId);
    $form.find('[data-variant-id]').attr('data-variant-id', variantId);
    
    // Ensure the value is set (for some browsers that might not update properly)
    $form.find('select[name="id"], input[name="id"]').each(function() {
      this.value = variantId;
    });
  }
  
  /**
   * Update the price display based on the selected variant
   * @param {jQuery} $form - The product form jQuery object
   */
  function updatePriceDisplay($form) {
    // Get the selected variant
    const variantId = $form.find('select[name="id"]').val();
    if (!variantId) return;
    
    const selectedOption = $form.find(`select[name="id"] option[value="${variantId}"]`);
    const price = selectedOption.data('variant-price');
    
    // Update price displays if price data is available
    if (price) {
      $form.find('.current_price').html(price);
    }
    
    // Handle quantity-based price calculations if needed
    const quantity = parseInt($form.find('input[name="quantity"]').val()) || 1;
    const priceElement = $form.find('.show_total .price-form .active-swatch');
    
    if (priceElement.length) {
      const unitPrice = parseFloat(priceElement.attr('data-price') || 0);
      const symbol = priceElement.attr('data-symbol') || '$';
      const totalPrice = quantity * unitPrice;
      
      $form.find('.total_price').text(symbol + totalPrice.toFixed(2));
    }
  }
  
  /**
   * Update the URL to reflect the selected variant
   * @param {string} variantId - The selected variant ID
   */
  function updateProductURL(variantId) {
    if (window.history && window.history.replaceState) {
      const newUrl = window.location.pathname + '?variant=' + variantId;
      window.history.replaceState({path: newUrl}, '', newUrl);
    }
  }
  
  /**
   * Update product images based on the selected variant
   * @param {jQuery} $form - The product form jQuery object
   * @param {string} variantId - The selected variant ID
   */
  function updateVariantImage($form, variantId) {
    const selectedOption = $form.find(`select[name="id"] option[value="${variantId}"]`);
    const imageUrl = selectedOption.data('image');
    
    if (imageUrl && window.productMedia) {
      // Use the product media system if available
      const mediaId = selectedOption.data('media-id');
      if (mediaId) {
        window.productMedia.showMedia(mediaId);
      }
    }
  }
  
  /**
   * Handle form submission
   * @param {Event} e - The submit event
   */
  function handleFormSubmit(e) {
    e.preventDefault();
    const $form = $(this);
    
    // Verify we have a valid variant selected
    const selectedOptions = collectSelectedOptions($form);
    const variantId = findMatchingVariantId($form, selectedOptions);
    
    if (!variantId) {
      console.error('Cannot add to cart: No valid variant selected');
      alert('Please select all options to continue');
      return;
    }
    
    // Create a clean form to avoid interference from other scripts
    const $newForm = $('<form method="post" action="/cart/add"></form>');
    $newForm.append(`<input type="hidden" name="id" value="${variantId}">`);
    
    // Copy quantity
    const quantity = $form.find('input[name="quantity"]').val() || 1;
    $newForm.append(`<input type="hidden" name="quantity" value="${quantity}">`);
    
    // Copy any properties
    $form.find('input[name^="properties"]').each(function() {
      const name = $(this).attr('name');
      const value = $(this).val();
      $newForm.append(`<input type="hidden" name="${name}" value="${value}">`);
    });
    
    // Submit the form
    $('body').append($newForm);
    $newForm.submit();
  }
  
  // Public API
  return {
    init: init,
    
    // Initialize all product forms on the page
    initAll: function() {
      $('form[action="/cart/add"]').each(function() {
        init(this);
      });
    }
  };
})();

// Initialize on document ready
$(document).ready(function() {
  ProductVariantHandler.initAll();
});