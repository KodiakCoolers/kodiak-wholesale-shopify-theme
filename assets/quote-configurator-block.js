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
  
  // Show/hide front location section
  const frontLocationSection = document.getElementById('front-location-section');
  const frontUploadSection = document.getElementById('front-upload-section');
  
  if (maxFront > 0) {
    if (frontLocationSection) frontLocationSection.style.display = 'block';
    if (frontUploadSection) frontUploadSection.style.display = 'block';
  } else {
    if (frontLocationSection) frontLocationSection.style.display = 'none';
    if (frontUploadSection) frontUploadSection.style.display = 'none';
  }
  
  validateStep1();
}

function chooseColorsBack(value) {
  maxBack = parseInt(value);
  
  // Show/hide back location section and upload section
  const backLocationSection = document.getElementById('back-location-section');
  const backUploadSection = document.getElementById('back-upload-section');
  
  if (maxBack > 0) {
    if (backLocationSection) backLocationSection.style.display = 'block';
    if (backUploadSection) backUploadSection.style.display = 'block';
  } else {
    if (backLocationSection) backLocationSection.style.display = 'none';
    if (backUploadSection) backUploadSection.style.display = 'none';
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

// Handle file uploads for front and back designs
function handleFileUpload(inputId, previewId) {
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
      fileName.textContent = file.name.length > 20 ? file.name.substring(0, 20) + '...' : file.name;
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

// Initialize when DOM is ready
$(document).ready(function() {
  // Initialize step 2 button click handler
  $("#step2-btn").click(function() {
    const pillsQtyTab = bootstrap.Tab.getOrCreateInstance('#pills-qty-tab');
    if (pillsQtyTab) {
      pillsQtyTab.show();
    }
  });
  
  // Initialize the configurator
  chooseTypeOfPrint("screen"); // Default to screen printing
  
  // Initialize with default values (1 front color, 0 back colors)
  chooseColorsFront(1); // This will show front location and upload sections
  chooseColorsBack(0);  // This will hide back sections
  
  // Initialize file upload handlers
  handleFileUpload('frontDesignUpload', 'front-file-preview');
  handleFileUpload('backDesignUpload', 'back-file-preview');
  
  // Set up color swatches if they exist
  const swatches = $('.gf_swatches-selector[data-name="Color"] .gf_swatch');
  swatches.each(function() {
    const color = $(this).text();
    const style = $(this).attr('style');
    $(`.color-item[data-color="${color}"]`).attr('style', style);
  });
  
  // Handle add to cart functionality
  $('.quote-add-to-cart').click(function(e) {
    e.preventDefault();
    
    // Show loading spinner
    $(this).find('.spinner-border').show();
    $(this).find('span:not(.spinner-border)').hide();
    
    // Collect form data and add to cart
    // This would need to be customized based on your specific cart implementation
    console.log("Adding quote to cart...");
    
    // Simulate API call
    setTimeout(() => {
      $(this).find('.spinner-border').hide();
      $(this).find('span:not(.spinner-border)').show();
      
      // You would implement actual cart addition logic here
      alert("Quote added to cart successfully!");
    }, 2000);
  });
  
  // Set delivery dates (placeholder logic)
  const today = new Date();
  const freeDeliveryDate = new Date(today.getTime() + (7 * 24 * 60 * 60 * 1000));
  const rushDeliveryDate = new Date(today.getTime() + (3 * 24 * 60 * 60 * 1000));
  
  $("#free-delivery").text(freeDeliveryDate.toLocaleDateString());
  $("#rush-delivery").text(rushDeliveryDate.toLocaleDateString());
});

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
