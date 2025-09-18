// Quote Configurator Block JavaScript - Inline Version
// Adapted from quote_popup_js.js for use without modal

// Global variables
let colorsFront = [];
let colorsBack = [];
let typeOfPrint = "screen";
let maxFront = 0;
let maxBack = 0;
let sleeveLeft = 0;
let sleeveRight = 0;
let LocationFullFront = 0;
let LocationChestPocket = 0;
let LocationFullBack = 0;
let LocationLeftSleeve = 0;
let LocationRightSleeve = 0;
let filename = "No file chosen";

let products = [];
let saveMore = [];

let screen_printing_minimal = 1;
let dtg_minimal = 1;
let embroidery_minimal = 1;
let payload = {};
let requestPrice = 0;

// File preview function
function PreviewImage() {
  const fileInput = document.getElementById("imageUpload");
  const previewContainer = document.querySelector(".preview_file");
  
  if (!fileInput || !previewContainer) return;
  
  previewContainer.innerHTML = "";
  
  for (let i = 0; i < fileInput.files.length; i++) {
    const file = fileInput.files[i];
    const reader = new FileReader();
    
    reader.onload = function(e) {
      const fileDiv = document.createElement("div");
      
      if (file.type.startsWith("image/")) {
        fileDiv.innerHTML = `
          <img src="${e.target.result}" alt="Preview ${i + 1}">
          <span onclick="removeFile(${i})">&times;</span>
        `;
      } else {
        fileDiv.innerHTML = `
          <div class="preview_file_name">
            ${file.name}
            <span onclick="removeFile(${i})">&times;</span>
          </div>
        `;
      }
      
      previewContainer.appendChild(fileDiv);
    };
    
    reader.readAsDataURL(file);
  }
}

// Remove file function
function removeFile(index) {
  const fileInput = document.getElementById("imageUpload");
  if (!fileInput) return;
  
  const dt = new DataTransfer();
  const files = fileInput.files;
  
  for (let i = 0; i < files.length; i++) {
    if (i !== index) {
      dt.items.add(files[i]);
    }
  }
  
  fileInput.files = dt.files;
  PreviewImage();
}

// Choose type of print
function chooseTypeOfPrint(type) {
  typeOfPrint = type;
  
  const chooseColors = document.getElementById("choose-colors");
  const chooseEmbroideryColors = document.getElementById("choose-embroidery-colors");
  const choosePrintLocations = document.querySelector(".choose-print_locations");
  const invalidType = document.querySelector(".invalid-type");
  
  if (invalidType) {
    invalidType.style.display = "none";
  }
  
  if (type === "embroidery") {
    if (chooseColors) chooseColors.classList.add("d-none");
    if (chooseEmbroideryColors) chooseEmbroideryColors.classList.remove("d-none");
    if (choosePrintLocations) choosePrintLocations.classList.add("d-none");
  } else if (type === "DTG") {
    if (chooseColors) chooseColors.classList.add("d-none");
    if (chooseEmbroideryColors) chooseEmbroideryColors.classList.add("d-none");
    if (choosePrintLocations) choosePrintLocations.classList.remove("d-none");
  } else {
    if (chooseColors) chooseColors.classList.remove("d-none");
    if (chooseEmbroideryColors) chooseEmbroideryColors.classList.add("d-none");
    if (choosePrintLocations) choosePrintLocations.classList.add("d-none");
  }
}

// Choose colors functions
function chooseColorsFront(value) {
  maxFront = parseInt(value);
  
  const frontLocationSection = document.getElementById('front-location-section');
  const frontUploadBox = document.getElementById('front-upload-box');
  
  if (maxFront > 0) {
    if (frontLocationSection) frontLocationSection.style.display = 'block';
    if (frontUploadBox) frontUploadBox.style.display = 'block';
  } else {
    if (frontLocationSection) frontLocationSection.style.display = 'none';
    if (frontUploadBox) frontUploadBox.style.display = 'none';
  }
  
  validateStep1();
}

function chooseColorsBack(value) {
  maxBack = parseInt(value);
  
  const backLocationSection = document.getElementById('back-location-section');
  const backUploadBox = document.getElementById('back-upload-box');
  
  if (maxBack > 0) {
    if (backLocationSection) backLocationSection.style.display = 'block';
    if (backUploadBox) backUploadBox.style.display = 'block';
  } else {
    if (backLocationSection) backLocationSection.style.display = 'none';
    if (backUploadBox) backUploadBox.style.display = 'none';
  }
  
  validateStep1();
}

function chooseSleeveLeft(value) {
  sleeveLeft = parseInt(value);
  validateStep1();
}

function chooseSleeveRight(value) {
  sleeveRight = parseInt(value);
  validateStep1();
}

// Validate step 1
function validateStep1() {
  const step2Btn = document.getElementById("step2-btn");
  const pillsQtyTab = document.getElementById("pills-qty-tab");
  const invalidFeedback = document.querySelector(".invalid-feedback");
  
  const totalColors = maxFront + maxBack + sleeveLeft + sleeveRight;
  
  if (totalColors > 0) {
    if (step2Btn) step2Btn.disabled = false;
    if (pillsQtyTab) pillsQtyTab.disabled = false;
    if (invalidFeedback) invalidFeedback.style.display = "none";
  } else {
    if (step2Btn) step2Btn.disabled = true;
    if (pillsQtyTab) pillsQtyTab.disabled = true;
    if (invalidFeedback) invalidFeedback.style.display = "block";
  }
}

// Add color item
function addColorItem(title, color, image, element) {
  if (!element) return;
  
  element.classList.toggle("active");
  
  // Update products array or handle color selection logic here
  console.log("Color selected:", color, "for product:", title);
  
  // Enable step 3 if colors are selected
  validateStep2();
}

// Validate step 2
function validateStep2() {
  const activeColors = document.querySelectorAll(".color-item.active");
  const step3Btn = document.getElementById("step3-btn");
  const pillsReviewTab = document.getElementById("pills-review-tab");
  
  if (activeColors.length > 0) {
    if (step3Btn) step3Btn.disabled = false;
    if (pillsReviewTab) pillsReviewTab.disabled = false;
  } else {
    if (step3Btn) step3Btn.disabled = true;
    if (pillsReviewTab) pillsReviewTab.disabled = true;
  }
}

// Initialize file upload for the new structure
function initializeFileUpload(inputId, previewId) {
  const input = document.getElementById(inputId);
  const preview = document.getElementById(previewId);
  
  if (!input || !preview) return;
  
  input.addEventListener('change', function(e) {
    preview.innerHTML = '';
    
    for (let i = 0; i < e.target.files.length; i++) {
      const file = e.target.files[i];
      const fileItem = document.createElement('div');
      fileItem.className = 'file-preview-item';
      
      if (file.type.startsWith('image/')) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        fileItem.appendChild(img);
      }
      
      const fileName = document.createElement('span');
      fileName.textContent = file.name.length > 30 ? file.name.substring(0, 30) + '...' : file.name;
      fileItem.appendChild(fileName);
      
      const removeBtn = document.createElement('span');
      removeBtn.className = 'remove-file';
      removeBtn.textContent = '×';
      removeBtn.onclick = function() {
        fileItem.remove();
        // Reset the input
        const dt = new DataTransfer();
        const files = Array.from(input.files);
        files.splice(i, 1);
        files.forEach(f => dt.items.add(f));
        input.files = dt.files;
      };
      fileItem.appendChild(removeBtn);
      
      preview.appendChild(fileItem);
    }
  });
}

// Initialize quantity and size inputs
function initializeSizeInputs() {
  const sizeInputs = document.querySelectorAll('.size-input-group input[type="number"]');
  const totalEl = document.getElementById('size-total');
  const quantityInput = document.getElementById('totalQuantity');
  let currentTotalQty = getCurrentTotalQty();

  // Handle total quantity changes
  if (quantityInput) {
    quantityInput.addEventListener('input', function() {
      currentTotalQty = parseInt(this.value || '0');
      updateQuantityUI();
      updateSizeTotal();
    });

    // Validate on blur (when user clicks away)
    quantityInput.addEventListener('blur', function() {
      const minimumQty = getMinimumQty();
      const val = parseInt(this.value || '0');
      
      if (val < minimumQty) {
        this.value = minimumQty;
        currentTotalQty = minimumQty;
        updateQuantityUI();
        updateSizeTotal();
        showQuantityError(`Minimum quantity is ${minimumQty} pieces.`);
      } else {
        hideQuantityError();
      }
    });
  }

  sizeInputs.forEach(input => {
    input.addEventListener('input', function() {
      updateSizeTotal();
    });
  });

  function getCurrentTotalQty() {
    const qtyInput = document.getElementById('totalQuantity');
    return qtyInput ? parseInt(qtyInput.value || '0') : getMinimumQty();
  }

  function updateQuantityUI() {
    // Update title
    const titleEl = document.getElementById('size-breakdown-title');
    if (titleEl) {
      titleEl.textContent = `Size Breakdown (Total: ${currentTotalQty} pieces)`;
    }

    // Update max values on inputs
    sizeInputs.forEach(inp => {
      inp.setAttribute('max', currentTotalQty);
    });

    // Reset values if they exceed new max
    sizeInputs.forEach(inp => {
      const val = parseInt(inp.value || '0');
      if (val > currentTotalQty) {
        inp.value = '0';
      }
    });
  }

  function updateSizeTotal() {
    let total = 0;
    sizeInputs.forEach(inp => {
      const val = parseInt(inp.value || '0');
      if (!isNaN(val)) total += val;
    });

    if (totalEl) {
      totalEl.textContent = `Total: ${total} / ${currentTotalQty}`;
      if (total !== currentTotalQty) {
        totalEl.classList.add('error');
      } else {
        totalEl.classList.remove('error');
      }
    }

    updateAddToCartStatus(total, currentTotalQty);
  }

  function showQuantityError(message) {
    let errorEl = document.getElementById('quantity-error');
    if (!errorEl) {
      errorEl = document.createElement('div');
      errorEl.id = 'quantity-error';
      errorEl.className = 'quantity-error';
      quantityInput.parentNode.appendChild(errorEl);
    }
    errorEl.textContent = message;
    errorEl.style.display = 'block';
  }

  function hideQuantityError() {
    const errorEl = document.getElementById('quantity-error');
    if (errorEl) {
      errorEl.style.display = 'none';
    }
  }

  // Initial setup
  updateQuantityUI();
  updateSizeTotal();
}

// Initialize add to cart button
function initializeAddToCart() {
  const addToCartBtn = document.querySelector('.add-to-cart-btn');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', async function() {
      console.log('Add to cart clicked');
      
      // Get the first available variant (package approach - single item)
      const productJsonEl = document.getElementById('product_json');
      if (!productJsonEl) return;
      const productData = JSON.parse(productJsonEl.textContent || '{}');
      const selectedColor = (document.getElementById('bundleColorSelect')?.value || '').toString();
      
      // Find first variant matching selected color
      const variant = (productData.variants || []).find(v => {
        const colorOpt = v.option1 || v.option2 || v.option3 || '';
        return colorOpt.toLowerCase() === selectedColor.toLowerCase();
      });

      if (!variant) {
        alert(`No variant found for color: ${selectedColor}`);
        return;
      }

      if (variant.available === false) {
        alert(`Selected color ${selectedColor} is unavailable`);
        return;
      }

      // Collect all form data as properties
      const frontColors = parseInt(document.getElementById('colorFront')?.value || '0');
      const backColors = parseInt(document.getElementById('colorBack')?.value || '0');
      const notes = (document.querySelector('.order-notes')?.value || '').toString();
      const frontLoc = (document.querySelector('input[name="frontLocation"]:checked')?.value || '').toString();
      const backLoc = backColors > 0 ? (document.querySelector('input[name="backLocation"]:checked')?.value || '') : '';

      // Collect size breakdown
      const sizeInputs = document.querySelectorAll('.size-input-group input[type="number"]');
      const sizeBreakdown = [];
      sizeInputs.forEach(inp => {
        const qty = parseInt(inp.value || '0');
        const sizeName = inp.name.replace('size_', '').toUpperCase();
        if (qty > 0) {
          sizeBreakdown.push(`${qty} x ${sizeName}`);
        }
      });

      // Get uploaded files as data URLs
      const frontFiles = await getUploadedFiles('frontDesignUpload');
      const backFiles = await getUploadedFiles('backDesignUpload');

      const totalQuantity = parseInt(document.getElementById('totalQuantity')?.value || '36');
      const timeline = document.querySelector('input[name="productionTimeline"]:checked')?.value || 'standard';
      const totalPrice = calculatePricing();

      const properties = {
        'Front Print': frontColors > 0 ? `${frontColors} Front Print Color${frontColors > 1 ? 's' : ''}` : 'No Front Design',
        'Back Print': backColors > 0 ? `${backColors} Back Print Color${backColors > 1 ? 's' : ''}` : 'No Back Design',
        'Size': sizeBreakdown.join(', ') || 'Sizes not specified',
        'Total Quantity': `${totalQuantity} pieces`,
        'Production Timeline': timeline === 'rush' ? 'Rush (2-4 Business Days) +$4.00/unit' : 'Standard (7-10 Business Days)',
        'Total Price': `$${totalPrice.toFixed(2)}`,
        'Order Notes': notes || 'None'
      };

      if (frontColors > 0 && frontLoc) {
        properties['Where do you want your front design to go?'] = frontLoc.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
      }

      if (backColors > 0 && backLoc) {
        properties['Where do you want your back design to go?'] = backLoc.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
      }

      // Add file uploads as properties (names only to avoid cart size limits)
      if (frontFiles.length > 0) {
        frontFiles.forEach((file, idx) => {
          properties[`Upload Front Design ${idx + 1}`] = `${file.name} (${(file.size / 1024).toFixed(1)}KB)`;
        });
      }

      if (backFiles.length > 0) {
        backFiles.forEach((file, idx) => {
          properties[`Upload Back Design ${idx + 1}`] = `${file.name} (${(file.size / 1024).toFixed(1)}KB)`;
        });
      }

      try {
        const res = await fetch('/cart/add.js', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            items: [{
              id: Number(variant.id), 
              quantity: 1, // Single package
              properties: properties
            }]
          })
        });
        if (!res.ok) {
          let detail = '';
          try { detail = await res.text(); } catch (_) {}
          console.error('Add to cart failed', res.status, detail);
          throw new Error('Add to cart failed');
        }
        window.location.href = '/cart';
      } catch (e) {
        console.error(e);
        alert('Sorry, there was a problem adding to cart.');
      }
    });
    // Start disabled until minimum is met
    addToCartBtn.disabled = true;
  }
}

// Helper function to get uploaded files (just names to avoid cart size limits)
async function getUploadedFiles(inputId) {
  const input = document.getElementById(inputId);
  if (!input || !input.files.length) return [];
  
  const files = [];
  for (let i = 0; i < input.files.length; i++) {
    const file = input.files[i];
    // Just store file name to avoid "Cart is too large" error from data URLs
    files.push({ name: file.name, size: file.size });
  }
  return files;
}

// Pricing calculation
function calculatePricing() {
  const totalQty = getCurrentTotalQty();
  const minimumQty = getMinimumQty();
  const frontColors = parseInt(document.getElementById('colorFront')?.value || '0');
  const backColors = parseInt(document.getElementById('colorBack')?.value || '0');
  const isRush = document.querySelector('input[name="productionTimeline"]:checked')?.value === 'rush';

  // Base price calculation (assuming $15.69 per unit for 36 pieces = $564.86)
  const basePerUnit = 15.69;
  const baseTotal = totalQty * basePerUnit;

  // Front color pricing (1 color included, extras cost $1.25 per unit)
  let frontColorCost = 0;
  if (frontColors > 1) {
    frontColorCost = (frontColors - 1) * 1.25 * totalQty;
  }

  // Back color pricing (all colors cost $1.25 per unit)
  let backColorCost = 0;
  if (backColors > 0) {
    backColorCost = backColors * 1.25 * totalQty;
  }

  // Rush processing cost
  let rushCost = 0;
  if (isRush) {
    rushCost = 4.00 * totalQty;
  }

  const totalPrice = baseTotal + frontColorCost + backColorCost + rushCost;

  // Update pricing display
  updatePricingDisplay(totalQty, baseTotal, frontColors, frontColorCost, backColors, backColorCost, isRush, rushCost, totalPrice);

  return totalPrice;
}

function updatePricingDisplay(qty, baseTotal, frontColors, frontColorCost, backColors, backColorCost, isRush, rushCost, totalPrice) {
  // Update base price
  document.getElementById('base-qty').textContent = qty;
  document.getElementById('base-price').textContent = `$${baseTotal.toFixed(2)}`;

  // Front color cost
  const frontCostEl = document.getElementById('front-color-cost');
  const frontPriceEl = document.getElementById('front-color-price');
  if (frontColors > 1) {
    frontCostEl.style.display = 'flex';
    frontPriceEl.textContent = `$${frontColorCost.toFixed(2)} (${frontColors - 1} extra colors × $1.25 × ${qty})`;
  } else {
    frontCostEl.style.display = 'none';
  }

  // Back color cost
  const backCostEl = document.getElementById('back-color-cost');
  const backPriceEl = document.getElementById('back-color-price');
  if (backColors > 0) {
    backCostEl.style.display = 'flex';
    backPriceEl.textContent = `$${backColorCost.toFixed(2)} (${backColors} colors × $1.25 × ${qty})`;
  } else {
    backCostEl.style.display = 'none';
  }

  // Rush cost
  const rushCostEl = document.getElementById('rush-cost');
  const rushPriceEl = document.getElementById('rush-price');
  if (isRush) {
    rushCostEl.style.display = 'flex';
    rushPriceEl.textContent = `$${rushCost.toFixed(2)} ($4.00 × ${qty})`;
  } else {
    rushCostEl.style.display = 'none';
  }

  // Total price
  document.getElementById('total-price').innerHTML = `<strong>$${totalPrice.toFixed(2)}</strong>`;
}

// Add to cart status management
function updateAddToCartStatus(sizeTotal, totalQty) {
  const btn = document.querySelector('.add-to-cart-btn');
  const minimumQty = getMinimumQty();
  
  let statusMessage = '';
  let isValid = true;
  const issues = [];

  // Check minimum quantity
  if (totalQty < minimumQty) {
    issues.push(`Minimum quantity is ${minimumQty} pieces`);
    isValid = false;
  }

  // Check size breakdown
  if (sizeTotal !== totalQty) {
    issues.push(`Size breakdown must equal ${totalQty} pieces (currently ${sizeTotal})`);
    isValid = false;
  }

  // Check front print colors and location
  const frontColors = parseInt(document.getElementById('colorFront')?.value || '0');
  if (frontColors > 0) {
    const frontLoc = document.querySelector('input[name="frontLocation"]:checked');
    if (!frontLoc) {
      issues.push('Select front design location');
      isValid = false;
    }
  }

  // Check back print colors and location
  const backColors = parseInt(document.getElementById('colorBack')?.value || '0');
  if (backColors > 0) {
    const backLoc = document.querySelector('input[name="backLocation"]:checked');
    if (!backLoc) {
      issues.push('Select back design location');
      isValid = false;
    }
  }

  if (btn) {
    btn.disabled = !isValid;
  }

  // Update status message
  let statusEl = document.getElementById('add-to-cart-status');
  if (!statusEl) {
    statusEl = document.createElement('div');
    statusEl.id = 'add-to-cart-status';
    statusEl.className = 'add-to-cart-status';
    btn.parentNode.insertBefore(statusEl, btn);
  }

  if (isValid) {
    statusEl.textContent = 'Ready to add to cart!';
    statusEl.className = 'add-to-cart-status success';
  } else {
    statusEl.innerHTML = 'Complete the following:<br>• ' + issues.join('<br>• ');
    statusEl.className = 'add-to-cart-status error';
  }

  // Update pricing whenever status is updated
  calculatePricing();
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// Legacy function for compatibility
function handleFileUpload(inputId, previewId) {
  return initializeFileUpload(inputId, previewId);
}

// ----- Sizes helpers -----
function getMinimumQty() {
  const el = document.getElementById('minimumQty');
  const val = parseInt(el ? el.value : '36');
  return isNaN(val) ? 36 : val;
}

function toggleSizeInput(size, enabled) {
  const container = document.getElementById('sizes-qty');
  if (!container) return;

  const existing = container.querySelector(`.sizes-input[data-size="${size}"]`);

  if (enabled) {
    if (existing) return;
    const wrapper = document.createElement('div');
    wrapper.className = 'sizes-input';
    wrapper.setAttribute('data-size', size);
    wrapper.innerHTML = `
      <label>${size}</label>
      <input type="number" class="size-qty-input" min="0" step="1" value="0" inputmode="numeric" pattern="[0-9]*" />
    `;
    container.appendChild(wrapper);
    const input = wrapper.querySelector('input');
    input.addEventListener('input', recalculateTotalQty);
  } else if (existing) {
    existing.remove();
  }
}

function recalculateTotalQty() {
  const inputs = document.querySelectorAll('.size-qty-input');
  let total = 0;
  inputs.forEach(inp => {
    const val = parseInt(inp.value || '0');
    if (!isNaN(val)) total += val;
  });

  const minimum = getMinimumQty();
  const status = document.getElementById('sizes-minimum-status');
  const btn = document.querySelector('.add-to-cart-btn');

  if (status) {
    if (total >= minimum) {
      status.textContent = `Total: ${total}. Minimum met.`;
      status.classList.remove('error');
    } else {
      status.textContent = `Total: ${total}. Please add at least ${minimum - total} more.`;
      status.classList.add('error');
    }
  }

  if (btn) {
    btn.disabled = total < minimum;
  }
}

// Initialize when DOM is ready
// Initialize (no jQuery required)
(function initConfigurator(){
  if (window.__KODIAK_QC_INIT === true) return; // prevent double init if script is loaded twice
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initConfigurator);
    return;
  }
  window.__KODIAK_QC_INIT = true;
  // Initialize the configurator
  chooseTypeOfPrint("screen"); // Default to screen printing
  
  // Initialize with the current select values
  const initialFront = parseInt(document.getElementById('colorFront')?.value || '0');
  const initialBack = parseInt(document.getElementById('colorBack')?.value || '0');
  chooseColorsFront(initialFront);
  chooseColorsBack(initialBack);
  
  // Initialize file upload handlers for new structure
  initializeFileUpload('frontDesignUpload', 'front-file-preview');
  initializeFileUpload('backDesignUpload', 'back-file-preview');
  
  // Initialize size inputs (new package approach)
  initializeSizeInputs();
  
  // Initialize add to cart button
  initializeAddToCart();
  
  // No longer needed - replaced by initializeSizeInputs

  // Color swatch selection
  const swatches = document.querySelectorAll('#bundleColorSwatches .swatch');
  const hiddenColor = document.getElementById('bundleColorSelect');
  if (swatches.length) {
    // set first active
    swatches[0].classList.add('active');
  }
  swatches.forEach(btn => {
    btn.addEventListener('click', function() {
      swatches.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      if (hiddenColor) hiddenColor.value = this.getAttribute('data-color');
    });
  });

  // Update status when color/location selections change
  const colorFrontEl = document.getElementById('colorFront');
  const colorBackEl = document.getElementById('colorBack');
  if (colorFrontEl) {
    colorFrontEl.addEventListener('change', function(e){
      chooseColorsFront(e.target.value);
      updateAddToCartStatus(getCurrentSizeTotal(), getCurrentTotalQty());
    });
  }
  if (colorBackEl) {
    colorBackEl.addEventListener('change', function(e){
      chooseColorsBack(e.target.value);
      updateAddToCartStatus(getCurrentSizeTotal(), getCurrentTotalQty());
    });
  }

  // Update status when location selections change
  document.addEventListener('change', function(e) {
    if (e.target.name === 'frontLocation' || e.target.name === 'backLocation' || e.target.name === 'productionTimeline') {
      updateAddToCartStatus(getCurrentSizeTotal(), getCurrentTotalQty());
    }
  });

  // Helper functions for status updates
  function getCurrentSizeTotal() {
    let total = 0;
    document.querySelectorAll('.size-input-group input[type="number"]').forEach(inp => {
      const val = parseInt(inp.value || '0');
      if (!isNaN(val)) total += val;
    });
    return total;
  }

  function getCurrentTotalQty() {
    const qtyInput = document.getElementById('totalQuantity');
    return qtyInput ? parseInt(qtyInput.value || '0') : getMinimumQty();
  }
  
  // (Optional) Delivery dates removed in simplified flow
})();

// Additional utility functions can be added here as needed
function updatePricing() {
  // Implement pricing calculation logic
  console.log("Updating pricing...");
}

function drawProductsListReview() {
  // Implement product list review logic
  console.log("Drawing products list review...");
}

// Export functions for global access if needed
window.PreviewImage = PreviewImage;
window.chooseTypeOfPrint = chooseTypeOfPrint;
window.chooseColorsFront = chooseColorsFront;
window.chooseColorsBack = chooseColorsBack;
window.chooseSleeveLeft = chooseSleeveLeft;
window.chooseSleeveRight = chooseSleeveRight;
window.addColorItem = addColorItem;
