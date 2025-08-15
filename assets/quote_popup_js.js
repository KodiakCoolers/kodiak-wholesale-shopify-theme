/** Shopify CDN: Minification failed

Line 16:0 Transforming let to the configured target environment ("es5") is not supported yet
Line 17:0 Transforming let to the configured target environment ("es5") is not supported yet
Line 18:0 Transforming let to the configured target environment ("es5") is not supported yet
Line 19:0 Transforming let to the configured target environment ("es5") is not supported yet
Line 20:0 Transforming let to the configured target environment ("es5") is not supported yet
Line 21:0 Transforming let to the configured target environment ("es5") is not supported yet
Line 22:0 Transforming let to the configured target environment ("es5") is not supported yet
Line 24:0 Transforming let to the configured target environment ("es5") is not supported yet
Line 25:0 Transforming let to the configured target environment ("es5") is not supported yet
Line 26:0 Transforming let to the configured target environment ("es5") is not supported yet
... and 50 more hidden warnings

**/
let colorsFront = [];
let colorsBack = [];
let typeOfPrint = "screen";
let maxFront = 0;
let maxBack = 0;
let sleeveLeft = 0;
let sleeveRight = 0;
// new
let LocationFullFront = 0;
let LocationChestPocket = 0;
let LocationFullBack = 0;
let LocationLeftSleeve = 0;
let LocationRightSleeve = 0;
// new
let filename = "No file chosen";

let products = [];
let saveMore = [];

let screen_printing_minimal = 1;
let dtg_minimal = 1;
let embroidery_minimal = 1;
let payload = {};
let requestPrice = 0;

//
//
//
//
//
//
//
// Set Ink / Thread Colors
// function setInkColor(color, name, side, el) {
//   if (el.classList.contains("active")) {
//     if (side === "front") {
//       const filteredColors = colorsFront.filter((item) => item.color !== color);
//       colorsFront = filteredColors;
//     } else if (side === "back") {
//       const filteredColors = colorsBack.filter((item) => item.color !== color);
//       colorsBack = filteredColors;
//     }
//     el.classList.remove("active");
//   } else {
//     if (side === "front" && maxFront > colorsFront.length) {
//       colorsFront.push({ color, name });
//       el.classList.add("active");
//     } else if (side === "back" && maxBack > colorsBack.length) {
//       colorsBack.push({ color, name });
//       el.classList.add("active");
//     }
//   }

// if (
//   colorsFront.length === parseInt(maxFront) &&
//   colorsBack.length === parseInt(maxBack)
// ) {
//   document.getElementById("step2-btn").disabled = false;
//   document.getElementById("pills-qty-tab").disabled = false;
//   document.getElementById("step2-error-text").style.display = "none";
// } else {
//   document.getElementById("step2-btn").disabled = true;
//   document.getElementById("pills-qty-tab").disabled = true;
//   document.getElementById("step2-error-text").style.display = "block";
// }
//   drawSelectedColors(colorsFront, colorsBack);
// }

// function drawSelectedColors(colorsFront, colorsBack) {
//   const elementFront = document.getElementById("selected-ink-front");
//   const elementBack = document.getElementById("selected-ink-back");
//   elementFront.innerHTML = "";
//   elementBack.innerHTML = "";

//   colorsFront.map(
//     (item) =>
//       (elementFront.innerHTML += `<div class="selected-color-item"><span class="color-item active" style="background-color: ${item.color}"></span> ${item.name}</div>`)
//   );
//   colorsBack.map(
//     (item) =>
//       (elementBack.innerHTML += `<div class="selected-color-item"><span class="color-item active" style="background-color: ${item.color}"></span> ${item.name}</div>`)
//   );
// }

//
//
//
//
//
//
//
// Changing Type or Colors qty
function chooseTypeOfPrint(type) {
  typeOfPrint = type;

  var minqty = 1;
  if (typeOfPrint == 'screen') {
    minqty = screen_printing_minimal;
  }else if (typeOfPrint == 'embroidery') {
    minqty = embroidery_minimal;
  }else if (typeOfPrint == 'DTG') {
    minqty = dtg_minimal;
  }
  let t_qty = products.reduce((acc, { sumQty }) => acc + sumQty, 0);
  if (t_qty < minqty) {
    $("#step3-btn").attr('disabled', true);
  }else{
    $("#step3-btn").removeAttr('disabled');
  }
  
  switch(type){
    case 'screen':
      $("#minimalqty").text(screen_printing_minimal);
      $("#ads").text("Screen Printed is Best for Bulk Orders");
      $("#subtxt").text("Colors count in screen-printing because each color requires a unique screen. Save money by reducing ink colors with one or two colors per side.");
      break;
    case 'DTG':
      $("#minimalqty").text(dtg_minimal);
      $("#ads").text("DTG is best for Smaller Quantity Orders and High Detail");
      break;
    case 'embroidery':
      $("#minimalqty").text(embroidery_minimal);
      $("#ads").text("");$("#subtxt").text("Colors count in embroidery because each color requires a thread change. Save money by reducing colors.");
      break;
    default:
      $("#ads").text("");
  }
  drawColorsSelection(typeOfPrint);
}

function chooseColorsFront(qty) {
  maxFront = qty;
  drawProductsListReview(products);
  // drawColorsSelection(typeOfPrint);
    /* if (parseInt($("#colorFront").val()) > 0) {
        // flag = true;
        $('select#colorBack').css({"background-color": "#d1d3d6a6", "color": "#22252c7a", "pointer-events": "none"});
        $('select#sleeveLeft').css({"background-color": "#d1d3d6a6", "color": "#22252c7a", "pointer-events": "none"});
        $('select#sleeveRight').css({"background-color": "#d1d3d6a6", "color": "#22252c7a", "pointer-events": "none"});
        // $("#colorFront").siblings().hide()
      }else{
        // flag = false;
        $("#colorFront").siblings().show()
        $('select#colorBack').css({"background-color": "#fff", "color": "#22252c", "pointer-events": "all"});
        $('select#sleeveLeft').css({"background-color": "#fff", "color": "#22252c", "pointer-events": "all"});
        $('select#sleeveRight').css({"background-color": "#fff", "color": "#22252c", "pointer-events": "all"});
      }*/
}

function chooseColorsBack(qty) {
  maxBack = qty;
  drawProductsListReview(products);
      
      /*if (parseInt($("#colorBack").val()) > 0) {
        // flag = true;
        // $("#colorBack").siblings().hide()
        $('select#colorFront').css({"background-color": "#d1d3d6a6", "color": "#22252c7a", "pointer-events": "none"});
        $('select#sleeveLeft').css({"background-color": "#d1d3d6a6", "color": "#22252c7a", "pointer-events": "none"});
        $('select#sleeveRight').css({"background-color": "#d1d3d6a6", "color": "#22252c7a", "pointer-events": "none"});
      }else{
        // flag = false;
        // $("#colorBack").siblings().show()
        $('select#colorFront').css({"background-color": "#fff", "color": "#22252c", "pointer-events": "all"});
        $('select#sleeveLeft').css({"background-color": "#fff", "color": "#22252c", "pointer-events": "all"});
        $('select#sleeveRight').css({"background-color": "#fff", "color": "#22252c", "pointer-events": "all"});
      }*/
}

function chooseSleeveLeft(qty) {
  sleeveLeft = qty;
  drawProductsListReview(products);
  /*if (parseInt($("#sleeveLeft").val()) > 0) {
        // flag = true;
        // $("#sleeveLeft").siblings().hide()
        $('select#colorFront').css({"background-color": "#d1d3d6a6", "color": "#22252c7a", "pointer-events": "none"});
        $('select#colorBack').css({"background-color": "#d1d3d6a6", "color": "#22252c7a", "pointer-events": "none"});
        $('select#sleeveRight').css({"background-color": "#d1d3d6a6", "color": "#22252c7a", "pointer-events": "none"});
      }else{
        // flag = false;
        $('select#colorFront').css({"background-color": "#fff", "color": "#22252c", "pointer-events": "all"});
        $('select#colorBack').css({"background-color": "#fff", "color": "#22252c", "pointer-events": "all"});
        $('select#sleeveRight').css({"background-color": "#fff", "color": "#22252c", "pointer-events": "all"});
        // $("#sleeveLeft").siblings().show()
      }*/
}

function chooseSleeveRight(qty) {
  sleeveRight = qty;
  drawProductsListReview(products);
  	  /* if (parseInt($("#sleeveRight").val()) > 0) {
        // flag = true;
        $('select#colorFront').css({"background-color": "#d1d3d6a6", "color": "#22252c7a", "pointer-events": "none"});
        $('select#colorBack').css({"background-color": "#d1d3d6a6", "color": "#22252c7a", "pointer-events": "none"});
        $('select#sleeveLeft').css({"background-color": "#d1d3d6a6", "color": "#22252c7a", "pointer-events": "none"});
        // $("#sleeveRight").siblings().hide()
      }else{
        // flag = false;
         $('select#colorFront').css({"background-color": "#fff", "color": "#22252c", "pointer-events": "all"});
        $('select#colorBack').css({"background-color": "#fff", "color": "#22252c", "pointer-events": "all"});
        $('select#sleeveLeft').css({"background-color": "#fff", "color": "#22252c", "pointer-events": "all"});
        // $("#sleeveRight").siblings().show()
      }
  */
}

// new
$(document).on('click','[name="locations1"]',function(){
  LocationFullBack = 0;
  LocationLeftSleeve = 0;
  LocationRightSleeve = 0;
    $('[name="locations1"]:checked').each(function(){
    console.log($(this).data('function'))
    if($(this).data('function') == 'Full-Back'){
        LocationFullBack = '1';
       console.log('full'+LocationFullBack)
    }
    if($(this).data('function') == 'Left-Sleeve'){
        LocationLeftSleeve = '1';
      console.log('left'+LocationLeftSleeve)
    }
    if($(this).data('function') == 'Right-Sleeve'){
        LocationRightSleeve = '1';
      console.log('right'+LocationRightSleeve)
    }      
});
  drawProductsListReview(products);
});

$(document).on('click','#step2-btn',function(){
  console.log($('[name="locations"]:checked').data('function'))
 if($('[name="locations"]:checked').data('function') == 'Full-Front'){
  LocationFullFront = '1';
  LocationChestPocket = 0;
   console.log(LocationFullFront)
  drawProductsListReview(products);
}else{
   LocationChestPocket = '1';
   LocationFullFront = 0;
   drawProductsListReview(products);
    console.log(LocationFullFront)
}
  
});
// $(document).on('click','#step2-btn',function(){
// if($('[name="locations"]:checked').data('function') == 'Full-Front'){
//   LocationFullFront = '1';
//   drawProductsListReview(products);
// }
//   if($('[name="locations"]:checked').data('function') == 'Chest-Pocket'){
//    LocationChestPocket = '1';
//    drawProductsListReview(products);
// }
// });

// new


function drawColorsSelection(typeOfPrint) {
  $("#choose-colors").addClass("d-none");

  if (typeOfPrint === "screen") {
    $("#choose-colors").removeClass("d-none");
    $(".choose-print_locations, #choose-embroidery-colors").addClass("d-none");  

  } else if (typeOfPrint === "embroidery") {
    $("#choose-embroidery-colors").removeClass("d-none");
    $(".choose-print_locations, #choose-colors").addClass("d-none");  
  }
  else if (typeOfPrint === "DTG") {
    $("#choose-colors, #choose-embroidery-colors").addClass("d-none");
    $(".choose-print_locations").removeClass("d-none"); 
    
  }else {

  }
  //   drawSelectedColors(colorsFront, colorsBack);
}

//
//
//
//
//
//
//
// Adding new product on color clicked
function addColorItem(title, colorName, imageSrc, el) {
  var pData = JSON.parse(jQuery("#product_json").html());
  var colorOptionPosition = pData.options.findIndex(x=>x.toLowerCase() == "color")+1;
  var sizeOptionPosition = pData.options.findIndex(x=>x.toLowerCase() == "size")+1;
  var variants = pData.variants.filter(v => v["option"+colorOptionPosition] == colorName);
  var select_variants={};
  for (let index = 0; index < variants.length; index++) {
      select_variants[variants[index]["option"+sizeOptionPosition]]=0;
  }
  if (!el.classList.contains("active")) {
    products.push({
      id: el.id,
      title: title,
      color: colorName,
      image: imageSrc,
      qty: select_variants,
      variants:variants,
      front:maxFront,
      back:maxBack,
      sleeveLeft:sleeveLeft,
      sleeveRight:sleeveRight,
      fullFront:LocationFullFront,
      chestPocket:LocationChestPocket,
      fullBack:LocationFullBack,
      leftSleeve:LocationLeftSleeve,
      rightSleeve:LocationRightSleeve,
      sumQty: 0,
      price: 0.00, // PLACEHOLDER PRICE
    });

    el.classList.add("active");

    drawSelectedProducts(products);
  } else {
    const filteredProducts = products.filter((item) => item.id !== el.id);
    products = filteredProducts;

    el.classList.remove("active");
    drawSelectedProducts(products);
  }
  checkThirdStepAvailability();
}

function removeProduct(productId) {
  const filteredProducts = products.filter((item) => item.id !== productId);
  products = filteredProducts;

  document.getElementById(productId).classList.remove("active");

  checkThirdStepAvailability();
  drawSelectedProducts(products);
}

//
//
//
//
//
//
//
// Items counter on change

function countProductItems(size, el) {
  const productParent = el.closest(".products-list-item");
  const allInputs = productParent.getElementsByTagName("input");
  const allInputsArr = [...allInputs];
  const sumContainer = productParent.getElementsByClassName("product-items-qty");

  const stock = parseInt(el.getAttribute('data-inventory'));
  const newValue = parseInt(el.value); 
  console.log(stock, newValue);
  if (newValue > stock) {
    el.classList.add('error');
  }else{
    el.classList.remove('error');
  }
  const productId = productParent.dataset.productId;
  const productIndex = products.findIndex((item) => item.id == productId);

  products[productIndex].qty[size] = newValue;

  var sum = 0;
  var price = 0;
  var stockcheck = false;
  for (var i = 0; i < allInputsArr.length; i++) {
    if (parseInt(allInputsArr[i].value)) sum += parseInt(allInputsArr[i].value);
    if (parseInt(allInputsArr[i].value)) price += parseFloat(allInputsArr[i].getAttribute("data-price")) * parseInt(allInputsArr[i].value);
    if (parseInt(allInputsArr[i].value) > parseInt(allInputsArr[i].getAttribute('data-inventory'))) {
      stockcheck=true;
    }
  }

  price = (price/100)/sum;
  console.log(price);
  products[productIndex].sumQty = sum;
  products[productIndex].price = price.toFixed(2);
  products[productIndex].calc_price = price.toFixed(2);
  sumContainer[0].innerText = products[productIndex].sumQty;

  var minqty = 1;
  if (typeOfPrint == 'screen') {
    minqty = screen_printing_minimal;
  }else if (typeOfPrint == 'embroidery') {
    minqty = embroidery_minimal;
  }else if (typeOfPrint == 'DTG') {
    minqty = dtg_minimal;
  }
  let t_qty = products.reduce((acc, { sumQty }) => acc + sumQty, 0);
  if (stockcheck || t_qty < minqty) {
    $("#step3-btn").attr('disabled', true);
    return false;
  }else{
    $("#step3-btn").removeAttr('disabled');
  }


  //checkThirdStepAvailability();

  drawProductsListReview(products);
  
}

function checkThirdStepAvailability() {
  var minqty = 1;
  if (typeOfPrint == 'screen') {
    minqty = screen_printing_minimal;
  }else if (typeOfPrint == 'embroidery') {
    minqty = embroidery_minimal;
  }else if (typeOfPrint == 'DTG') {
    minqty = dtg_minimal;
  }
  
  const stepReviewDisabled = products.some((item) => item.sumQty <= minqty);
  if (stepReviewDisabled || products.length === 0) {
    document.getElementById("step3-btn").disabled = true;
    document.getElementById("pills-review-tab").disabled = true;
    document.getElementById("step3-error-text").style.display = "block";
  } else {
    document.getElementById("step3-btn").disabled = false;
    document.getElementById("pills-review-tab").disabled = false;
    document.getElementById("step3-error-text").style.display = "none";
  }

  if ($('.sizes .sizes-input .error').length) {
    $("#step3-btn").attr('disabled', true);
  }

  // for (let index = 0; index < products.length; index++) {
  //   if (products[index].sumQty < 12) {
  //     $("#step3-btn").attr('disabled', true);
  //     document.getElementById("step3-error-text").style.display = "block";
  //     return false;
  //   }
  // }
}

//
//
//
//
//
//
//
// Drawing Selected products list
function drawSelectedProducts(products) {
    var swatch = $('.gf_swatches-selector[data-name="Color"] .gf_swatch');
    swatch.each(function(){
        var clr = $(this).text();
        var styl = $(this).attr('style');
        $('color-item[data-color="'+clr+'"]').attr('style', styl);
    });
  productsContainer = document.getElementById("products-list");
  productsContainer.innerHTML = "";

  for (let p = 0; p < products.length; p++) {
    var item = products[p];
    var sizeview = "";
    item.variants.map((variant) => (
     sizeview += `<div class="sizes-input `+(variant.available ? '' : 'outstock')+`">
          <label>`+variant.option2+`</label>
          <input type="text" `+(variant.available ? '' : 'disabled')+` data-inventory="`+variantStock[variant.id]+`" data-variant="`+variant.id+`" data-price="`+variant.price+`" name="" id="`+variant.id+`" value="`+item.qty[variant.option2]+`" onkeyup="countProductItems('`+variant.option2+`', this)" class="`+(item.qty[variant.option2] > variantStock[variant.id] ? 'error' : '')+`" /><span>Only `+variantStock[variant.id]+` Available</span>
      </div>`
    ));

    productsContainer.innerHTML += `<div class="products-list-item" data-product-id="${item.id}">
                <div class="row">
                    <div class="col-1 my-auto">
                      <span
                        class="material-symbols-outlined"
                        data-bs-toggle="collapse"
                        href="#product${item.id}"
                        role="button"
                        aria-expanded="true"
                        aria-controls="product${item.id}"
                      >
                        expand_more
                      </span>
                    </div>
                    <div class="col-2 p-3 image">
                      <img
                        class="img-fluid"
                        src="${item.image}"
                        alt=""
                      />
                    </div>
                    <div class="col-6 pt-4">
                      <strong>${item.title}</strong>
                      <div id="product-list-color">${item.color}</div>
                      <a class="" data-bs-toggle="collapse" href="#product${item.id}" aria-expanded="true" aria-controls="product${item.id}">Add Sizes</a>
                    </div>
                    <div class="col-3 pt-4 text-end">
                      <div class="remove-product">
                        <button onclick="removeProduct('${item.id}')">
                          <span class="material-symbols-outlined">close</span>
                        </button>
                      </div>
                      <div>
                      <span class="product-items-qty">
                        ${item.sumQty}
                      </span> Items
                      </div>
                    </div>
                  </div>
                  <div class="collapse multi-collapse show" id="product${item.id}">
                    <div class="sizes">
                      <strong>Sizes</strong>
                      <div class="sizes-qty">
                        `+sizeview+`
                      </div>
                    </div>
                  </div>
      </div>`
    
  }

  drawProductsListReview(products);
}

//
//
//
//
//
//
//
// Draw Products list STEP 3
function drawProductsListReview(products) {
  
  productsContainer = document.getElementById("products-list-review");
  productsContainer.innerHTML = "";
  console.log(products);
  for (let rp = 0; rp < products.length; rp++) {
    var item = products[rp];
    var qtyview = [];
    Object.keys(item.qty).forEach(function(key) {
      item.qty[key] ? qtyview.push(key+` - <strong>${item.qty[key]}</strong>`) : ``;
    })
    qtyview = qtyview.join(" , ");
    productsContainer.innerHTML += `<div class="row">
                    <div class="col-2 p-3">
                      <img
                        class="img-fluid"
                        src="${item.image}"
                        alt=""
                      />
                    </div>
                    <div class="col-7 pt-3">
                      <strong>${item.title}</strong>
                      <div>${item.color}</div>
                      <div class="sizes-qty-review mt-2">
                        <span class="text-muted">SIZES: </span>
                        ${
                          qtyview
                        }
                        <div
                          class="edit-sizes-link mt-1 mb-2"
                          onclick="bootstrap.Tab.getOrCreateInstance('#pills-qty-tab').show()"
                        >
                          Edit Sizes
                        </div>
                      </div>
                      <div class="filename-chosen">
                        <span class="text-muted">FILENAME: </span>
                        <span id="filename">${filename}</span>
                      </div>
                      <div class="sleeve-sides ${ typeOfPrint != 'embroidery' ? 'hide' : '' }">
                        <span class="text-muted">PRINT LOCATIONS: </span>
                        <div class="${ $("#colorchestFront").val() > 0 ? '' : 'hide' }">${$("#colorchestFront").val()} colors Chest front</div>
                        <div class="${ $("#thread_count").val() > 0 ? '' : 'hide' }">${$("#thread_count :selected").text()}</div>
                      </div>
                      <div class="sleeve-sides ${ typeOfPrint != 'screen' ? 'hide' : '' }">
                        <span class="text-muted">PRINT LOCATIONS: </span>
                        <div class="${ maxFront > 0 ? '' : 'hide' }">${maxFront} colors front</div>
                        <div class="${ maxBack > 0 ? '' : 'hide' }">${maxBack} colors back</div>
                        <div class="${ sleeveLeft > 0 ? '' : 'hide' }">${sleeveLeft} sleeve printings left</div>
                        <div class="${ sleeveRight > 0 ? '' : 'hide' }">${sleeveRight} sleeve printings right</div>
                      </div>
                       <div class="printing-liactions-add ${ typeOfPrint != 'DTG' ? 'hide' : '' }">
                        <span class="text-muted">PRINT LOCATIONS (DTG): </span>
                        <div class="${ LocationFullFront ? '' : 'hide' }">${LocationFullFront} DTG full front</div>
                        <div class="${ LocationChestPocket ? '' : 'hide' }">${LocationChestPocket} DTG chest pocket</div>
                        <div class="${ LocationFullBack ? '' : 'hide' }">${LocationFullBack} DTG full back</div>
                        <div class="${ LocationLeftSleeve ? '' : 'hide' }">${LocationLeftSleeve} DTG left sleeve</div>
                        <div class="${ LocationRightSleeve ? '' : 'hide' }">${LocationRightSleeve} DTG right sleeve</div>
                      </div>
                    </div>
                    <div class="col-3 pt-3 text-end">
                      ${item.sumQty} Items
                      <div><strong>$${item.price}</strong> each</div>
                    </div>
                  </div>`
  }

  let options = {
    day: "numeric",
    month: "long",
  };
  let rush = addDays(new Date(), 3);
  let free = addDays(new Date(), 14);

  document.getElementById("rush-delivery").innerHTML = rush.toLocaleDateString(
    "en-US",
    options
  );
  document.getElementById("free-delivery").innerHTML = free.toLocaleDateString(
    "en-US",
    options
  );

  let itemsTotal = products.reduce((acc, { sumQty }) => acc + sumQty, 0);
  let priceTotal = products.reduce(
    (acc, { sumQty, price }) => acc + sumQty * price,
    0
  );

  document.getElementById("total-items").innerHTML = itemsTotal;
  document.getElementById("total-price").innerHTML = priceTotal.toFixed(2);
}

//
//
//
//
//
//
// Count delivery dates
function addDays(theDate, days) {
  return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
}

//
//
//
//
//
//
//
// Preview image on file chosen
function PreviewImage() {
  jQuery(".preview_file").html('');
  filename = '';
  if (document.getElementById("imageUpload").files.length) {
    for (let pm = 0; pm < document.getElementById("imageUpload").files.length; pm++) {
      var oFReader = new FileReader();
      let u_file = document.getElementById("imageUpload").files[pm];
      oFReader.readAsDataURL(u_file);
      oFReader.onload = function (oFREvent) {
        if (u_file.type.includes('image')) {
          var imgs = `<div><img src="`+oFREvent.target.result+`" /><span data-index="`+pm+`">x</span></div>`;
          jQuery(".preview_file").append(imgs);          
        }else{
          jQuery(".preview_file").append(`<div><div class="preview_file_name">`+u_file.name+`</div><span data-index="`+pm+`">x</span></div>`);
        }

        //document.getElementById("uploadPreview").src = oFREvent.target.result;
      
        filename += document.getElementById("imageUpload").files.item(pm).name+", ";
      };
    }

    $(document).on('click', '.preview_file span', function() {
      console.log("ok...")
      removeFile($(this).data('index'))
    })

    drawProductsListReview(products);
  }
  // var oFReader = new FileReader();
  // oFReader.readAsDataURL(document.getElementById("imageUpload").files[0]);

  // oFReader.onload = function (oFREvent) {
  //   document.getElementById("uploadPreview").src = oFREvent.target.result;

  //   filename = document.getElementById("imageUpload").files.item(0).name;
  //   drawProductsListReview(products);
  // };
}

//
//
//
//
//
//
//
// Show modal by default
$(document).ready(function () {
  $(".quote_open").click(function(e){
    e.preventDefault();
    $("#modal").modal("show");
    var swatch = $('.gf_swatches-selector[data-name="Color"] .gf_swatch');
    swatch.each(function(){
        var clr = $(this).text();
        var styl = $(this).attr('style');
        $('.color-item[data-color="'+clr+'"]').attr('style', styl);
    });
  });

  //$("#modal").modal("show");
  //drawSelectedProducts(products);

        function refreshCart(t) {
            $(".cart_count").empty();
            const e = $(".cart_count"),
                i = e.text() || "0";
            let o = "",
                n = "",
                a = "",
                s = "";
            const r = $("[data-cart-form]");
            let c = !1,
                d = 0,
                l = 0;
            if ((r.data("total-discount", t.total_discount), e.text(i.replace(/[0-9]+/, t.item_count)), 0 === t.item_count)) $(".js-empty-cart__message").removeClass("hidden"), r.addClass("hidden");
            else {
                $(".js-empty-cart__message").addClass("hidden"), r.removeClass("hidden");
                let e = 0,
                    i = 0;
                $.each(t.items, (t, n) => {
                    const a = n.discounts;
                    let s = "";
                    for (let t = 0; t < a.length; t++) {
                        const { title: e } = a[t];
                        s = `<p class="notification-discount meta">${e}</p>`;
                    }
                    const r = t + 1;
                    if (
                        ((o += `<li class="mini-cart__item" data-cart-item data-line-id="${r}" data-variant-id="${n.id}"><a href="${n.url}">`),
                        n.image && (o += `<div class="cart_image"><img src="${n.image.replace(/(\.[^.]*)$/, "_compact$1").replace("http:", "")}" alt="${htmlEncode(n.title)}" /></div></a>`),
                        (o += `<div class="mini-cart__item-content"><div class="mini-cart__item-title" data-price="${n.final_price}" ><a href="${n.url}">${n.title}</a>`),
                        n.selling_plan_allocation && (o += `<div class="meta">${n.selling_plan_allocation.selling_plan.name}</div>`),
                        n.properties &&
                            $.each(n.properties, (t, e) => {
                                e && (o += `<div class="line-item">${t}: ${e} </div>`);
                            }),
                        (o += '</div><div class="mini-cart__item-price">'),
                        $.ajax({
                            dataType: "json",
                            async: !1,
                            cache: !1,
                            url: `/products/${n.handle}.js`,
                            success(t) {
                                let e = t;
                                if (e.variants) {
                                    const t = e.variants;
                                    if (t.length > 1) for (let i = 0; i < t.length; i++) t[i].id === n.id && (e = t[i]);
                                }
                                e.compare_at_price && e.compare_at_price > e.price ? ((c = !0), (d = e.compare_at_price), (l = e.price)) : (c = !1);
                            },
                        }),
                        !0 === c)
                    ) { const t1 = `${window.Shopify.formatMoney(n.final_price, $("body").data("money-format"))} </span><span class="money was_price">${window.Shopify.formatMoney(d, $("body").data("money-format"))}</span>`;
                        //const t = `${window.Shopify.formatMoney(l, $("body").data("money-format"))} </span><span class="money was_price">${window.Shopify.formatMoney(d, $("body").data("money-format"))}</span>`;
                        (o += `<span class="money sale">${t1}</strong>`), (i = (d - l) * n.quantity), (e = i + e);
                      console.log(t1);
                    } else if (n.price > n.final_price) {
                        const t = `${window.Shopify.formatMoney(n.final_price, $("body").data("money-format"))} </span><span class="money was_price">${window.Shopify.formatMoney(n.price, $("body").data("money-format"))}</span>`;
                        o += `<span class="money sale">${t}</strong>`;
                    } else {
                        const t = window.Shopify.formatMoney(n.price, $("body").data("money-format"));
                        n.price > 0 ? (o += `<span class="money">${t}</span></strong>`) : (o += `<span>${window.PXUTheme.translation.cart_free_text}</span></strong>`);
                    }
                    if (((o += "</div>"), n.unit_price_measurement && n.price > 0)) {
                        let t = "";
                        1 !== n.unit_price_measurement.reference_value && (t = n.unit_price_measurement.reference_value),
                            (o += `<p class="mini-cart__unit-price">${n.unit_price_measurement.quantity_value}${n.unit_price_measurement.quantity_unit} | ${Shopify.formatMoney(n.unit_price, $("body").data("money-format"))} / ${t}${
                                n.unit_price_measurement.reference_unit
                            }</p>`);
                    }
                    n.price > n.final_price && (o += s),
                        (o += '<div class="product-quantity-box">'),
                        (o += '<span class="ss-icon product-minus js-change-quantity" data-func="minus"><span class="icon-minus"></span></span>'),
                        (o += `<input type="number" min="0" class="quantity" name="updates[]" id="updates_${n.id}" value="${n.quantity}" data-cart-quantity-input="mini-cart" />`),
                        (o += '<span class="ss-icon product-plus js-change-quantity" data-func="plus"><span class="icon-plus"></span></span>'),
                        (o += "</div></div></div>"),
                        (o += `<a href="/cart/change?line=${r}&amp;quantity=0" class="js-cart-remove-btn cart__remove-btn" data-line-id="${r}" data-remove-item="mini-cart"><span class="remove-icon1"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M2165 4684 c-120 -26 -209 -76 -300 -168 -73 -74 -90 -99 -185 -278 l-105 -197 -312 -3 c-297 -3 -313 -4 -339 -24 -47 -35 -67 -70 -72 -128 -5 -66 23 -125 78 -159 l35 -22 1595 0 1595 0 35 22 c55 34 83 93 78 159 -5 58 -25 93 -72 128 -26 20 -42 21 -339 24 l-312 3 -105 197 c-95 178 -113 204 -185 278 -93 94 -181 142 -307 168 -107 22 -679 22 -783 0z m778 -354 c27 -13 62 -39 77 -57 26 -29 109 -172 125 -215 7 -17 -25 -18 -584 -18 -325 0 -591 3 -591 6 0 14 103 196 127 225 25 29 83 64 133 80 14 4 169 7 345 6 319 -2 320 -2 368 -27z"/><path d="M1211 3380 c-55 -13 -81 -32 -109 -80 l-27 -45 0 -710 c0 -741 5 -868 55 -1430 21 -232 38 -304 95 -400 73 -122 181 -208 325 -259 l85 -31 925 0 925 0 80 27 c186 64 330 208 386 388 22 69 43 280 76 740 15 209 18 382 18 965 l0 710 -27 46 c-32 55 -80 81 -148 81 -49 0 -94 -18 -121 -48 -44 -50 -43 -41 -40 -649 1 -319 -3 -683 -9 -810 -15 -324 -59 -883 -72 -925 -27 -85 -101 -156 -188 -180 -47 -13 -1713 -13 -1760 0 -87 24 -161 95 -188 180 -13 42 -57 601 -72 925 -6 127 -10 491 -9 810 3 515 1 583 -13 610 -36 68 -110 102 -187 85z"/></g></svg></span></a></span></a>`);
                });
                const p = t.cart_level_discount_applications;
                for (let t = 0; t < p.length; t++) {
                    const e = window.Shopify.formatMoney(p[t].total_allocated_amount, $("body").data("money-format")),
                        { title: i } = p[t];
                    (n += `<span class="cart_discounts--title">${i}</span>`), (n += '<span class="cart_discounts--price">'), (n += `-<span class="money">${e}</span></span>`);
                }
                (a += `<span class="right"><span class="money">${window.Shopify.formatMoney(t.total_price, $("body").data("money-format"))}</span></span> <span>${window.PXUTheme.translation.cart_subtotal_text}</span>`),
                    (e += t.total_discount),
                    (s =
                        window.PXUTheme.theme_settings.display_savings && e > 0
                            ? `<span class="right"><span class="money">${window.Shopify.formatMoney(e, $("body").data("money-format"))}</span></span><span>${window.PXUTheme.translation.cart_savings_text}</span>`
                            : "");
            }
            $(".js-cart_items").html(o), $(".js-cart_discounts").html(n), $(".js-cart_subtotal").html(a), $(".js-cart_savings").html(s), window.PXUTheme.currency.show_multiple_currencies && window.currencyConverter.convertCurrencies();
        }
  
  $('.quote-add-to-cart').click(function(e){
    
    e.preventDefault();
$('html, body').animate({scrollTop: 0}, 800);
    var formData = new FormData();
    console.log('check'+formData)
    var iv = 0;
    var variantData = [];
    var propertiesData = [];
    $(products).each(function(i, v){
        Object.keys(v.qty).forEach(function(key) {
            if(v.qty[key]){
              var s = key;
              var qty = v.qty[key];
              var varnt = v.variants.find(b=> (b.option1 == v.color && b.option2 == s));
              var p = varnt.price / 100;
              variantData.push({id: varnt.id, qty: qty, price: p, name: v.title});
              formData.append('items['+iv+'][id]', varnt.id);
              formData.append('items['+iv+'][quantity]', qty);
              formData.append('items['+iv+'][properties][bundle]', 'true');
              formData.append('items['+iv+'][properties][_payload]', JSON.stringify(payload));
              
              formData.append('items['+iv+'][properties][_perunit]', products[0].price);
              formData.append('items['+iv+'][properties][_requestPrice]', requestPrice);
              if ($('#imageUpload')[0].files.length) {
                for (let f = 0; f < $('#imageUpload')[0].files.length; f++) {
                  formData.append('items['+iv+'][properties][file '+(f+1)+']', $('#imageUpload')[0].files[f]);
                }
              }

              if(typeOfPrint == "screen"){
                formData.append('items['+iv+'][properties][Type]', 'Screen Printing');
                if (maxFront) {
                  formData.append('items['+iv+'][properties][Front colors]', maxFront);
                  // propertiesData.push({name: "Front colors", value: maxFront});
                }
                if (maxBack) {
                  formData.append('items['+iv+'][properties][Back colors]', maxBack);
                  // propertiesData.push({name: "Back colors", value: maxBack});
                }
                if (sleeveLeft) {
                  formData.append('items['+iv+'][properties][Sleeve printings left]', sleeveLeft);
                  // propertiesData.push({name: "Sleeve printings left", value: sleeveLeft});
                }
                if (sleeveRight) {
                  formData.append('items['+iv+'][properties][Sleeve printings right]', sleeveRight);
                  // propertiesData.push({name: "Sleeve printings right", value: sleeveRight});
                }
              }
          
              if(typeOfPrint == "embroidery"){
                formData.append('items['+iv+'][properties][Type]', 'Embroidery');
                formData.append('items['+iv+'][properties][colorchestFront]', $("#colorchestFront").val());
                formData.append('items['+iv+'][properties][thread_count]', $("#thread_count").val());
                // propertiesData.push({name: "colorchestFront", value: $("#colorchestFront").val()});
                // propertiesData.push({name: "thread_count", value: $("#thread_count").val()});
              }
          
              if(typeOfPrint == "DTG"){
                formData.append('items['+iv+'][properties][Type]', 'DTG (Direct to Garment)');
                if (LocationFullFront) {
                  formData.append('items['+iv+'][properties][Full Front]', LocationFullFront);
                  // propertiesData.push({name: "Full Front", value: LocationFullFront});
                }
                if (LocationChestPocket) {
                  formData.append('items['+iv+'][properties][Chest Pocket]', LocationChestPocket);
                  // propertiesData.push({name: "Chest Pocket", value: LocationChestPocket});
                }
                if (LocationFullBack) {
                  formData.append('items['+iv+'][properties][Full Back]', LocationFullBack);
                  // propertiesData.push({name: "Full Back", value: LocationFullBack});
                }
                if (LocationLeftSleeve) {
                  formData.append('items['+iv+'][properties][Left Sleeve]', LocationLeftSleeve);
                  // propertiesData.push({name: "Left Sleeve", value: LocationLeftSleeve});
                }
                if (LocationRightSleeve) {
                  formData.append('items['+iv+'][properties][Right Sleeve]', LocationRightSleeve);
                  // propertiesData.push({name: "Right Sleeve", value: LocationRightSleeve});
                }
              }

              iv++;
            }
        })
    });


    // formData.append('files_count', $('#imageUpload')[0].files.length);
    // if ($('#imageUpload')[0].files.length) {
    //   for (let f = 0; f < $('#imageUpload')[0].files.length; f++) {
    //     formData.append('files_'+(f+1), $('#imageUpload')[0].files[f]);
    //   }
    // }
    // formData.append('variantData', JSON.stringify(variantData));
    // formData.append('propertiesData', JSON.stringify(propertiesData));
    // formData.append('payload', payload.encryptedData);
    // formData.append('iv', payload.iv);
    console.log(formData);

    //return false;
    $(".spinner-border").show();
    $("button.btn-next.quote-add-to-cart.navigable span").hide();
    $("button.btn-next.quote-add-to-cart.navigable").attr('disabled', true);
    $.getJSON('/cart.js', function(cart){
        var removeitem ={};
        cart.items.forEach(function(item) {
          if (item.product_id == meta.product.id) {
            removeitem[item.id] = 0;
          }
        });
        $.ajax({
            url: '/cart/update.js',
            type: 'post',
            data: {updates: removeitem},
            dataType: 'json',
            success: function(res){
              console.log("in console");          
              $.ajax({
                     url : '/cart/add.js',
                     // url: 'https://kodiakapps.com/price-calc/backend/api/cart',
                     type : 'POST',
                     data : formData,
                     processData: false,  // tell jQuery not to process the data
                     contentType: false,  // tell jQuery not to set contentType
                     success : function(data) {
                          //window.location.href='/cart';
                       // window.location.href=data.order.draft_order.invoice_url;
                      jQuery.getJSON('/cart.js', function(cart) {
                          
                        $("#modal").modal("hide");
                        $(".spinner-border").hide();
                        $("button.btn-next.quote-add-to-cart.navigable span").show();
                        $("button.btn-next.quote-add-to-cart.navigable").removeAttr('disabled');
                        bootstrap.Tab.getOrCreateInstance('#pills-design-tab').show();
                        refreshCart(cart);

                        $('.header .cart-container').addClass('active_link');
                        $('.cart-container.mobile-1').addClass('active_link');
                        $('.header .cart-container .cart_content').show(); 
                      
                        VastaShop.Cart.current = cart;

                        //render_cart_drawer(VastaShop.Cart.current, jQuery('.list-products'));
                       
                        render_cart_drawer(VastaShop.Cart.current, jQuery('ul.cart_items.js-cart_items'));
                       
                       //update_shipping_bar(cart.total_price,cart.item_count);
                      // jQuery('body').addClass('cart-drawer-open cart-open');
                      })
                     },
                  error: function (data) {
                    console.log('not-'+data);
                  }
              });
            }
        });
    })

  });
  
  $(window).on('shown.bs.tab', async function (e) {
    console.log($(e.target))
    if($(e.target).attr('id') == "pills-design-tab"){
      $('button#pills-qty-tab').attr('disabled', true);
    }
    
    if ($(e.target).attr('id') == "pills-review-tab" && products.length) {
      switch(typeOfPrint){
        case 'screen':
          var pType = 'Screen Printing';
          var params = {"fcolor": maxFront, "bcolor": maxBack, "sleft":sleeveLeft, "sright": sleeveRight, type: pType };
          break;
        case 'embroidery':
          var pType = 'Embroidery';
          var colorchestFront = $("#colorchestFront").val();
          var thread_count = $("#thread_count").val();
          var params = {type: pType, "thread_count": thread_count, "fleece": (fleece ? 1 : 0), "fcolor": colorchestFront  };
          break;
        case 'DTG':
          var pType = 'DTG';
          var print_location = 1;
          if(jQuery("#locations_box1").prop('checked')){
            var print_location = 2;
          }
          var params = {type: pType, "print_location": print_location, "fleece": (fleece ? 1 : 0), "design_files": design_files  };
          break;
        case 'Engraved':
          var pType = 'Engraved';
           var params = {type: pType };
          break;
      }
      await products.map(async function(product){
        params.qty = product.sumQty;
        params.price = product.calc_price;
        params.pid = product.id;
        //await getQuote(params);
      });
      await previewSaveMore();
      bootstrap.Tab.getOrCreateInstance('#pills-review-tab').show();
    }
  });

  $("#step2-btn").click(function(e){
    e.preventDefault();
    var selected_type = $('[name="type"]:checked').val();
  if ($('input[name="type"]:checked').length > 0) {
     $('div.choose-type .invalid-type').hide();
    if (selected_type == "screen") {
      var flag = false;
      if (parseInt($("#colorFront").val()) > 0 || parseInt($("#colorBack").val()) > 0 || parseInt($("#sleeveLeft").val()) > 0 || parseInt($("#sleeveRight").val()) > 0){
         flag = true;
        $('div#choose-colors .invalid-feedback').hide()
      }else{
         flag = false;
         $('div#choose-colors .invalid-feedback').show()
      }
      // if (parseInt($("#colorFront").val()) > 0) {
      //   flag = true;
      //   $("#colorFront").siblings().hide()
      // }else{
      //   flag = false;
      //   $("#colorFront").siblings().show()
      // }
      
      // if (parseInt($("#colorBack").val()) > 0) {
      //   flag = true;
      //   $("#colorBack").siblings().hide()
      // }else{
      //   flag = false;
      //   $("#colorBack").siblings().show()
      // }

      // if (parseInt($("#sleeveLeft").val()) > 0) {
      //   flag = true;
      //   $("#sleeveLeft").siblings().hide()
      // }else{
      //   flag = false;
      //   $("#sleeveLeft").siblings().show()
      // }

      // if (parseInt($("#sleeveRight").val()) > 0) {
      //   flag = true;
      //   $("#sleeveRight").siblings().hide()
      // }else{
      //   flag = false;
      //   $("#sleeveRight").siblings().show()
      // }

      if (parseInt($("#colorFront").val()) > 0 ||
         parseInt($("#colorBack").val()) > 0 ||
         parseInt($("#sleeveLeft").val()) > 0 ||
         parseInt($("#sleeveRight").val()) > 0) {
        $("#pills-qty-tab").removeAttr('disabled');
        bootstrap.Tab.getOrCreateInstance('#pills-qty-tab').show();
      }
      
    }else{
      $("#pills-qty-tab").removeAttr('disabled');
      bootstrap.Tab.getOrCreateInstance('#pills-qty-tab').show();
    }
}
else {
      $('div.choose-type .invalid-type').show();
}
  })


  
});


function getQuote(data) {
  $.ajax({
    //  "url":"https://kodiakapps.com/price-calc/backend/api/quote-price",
    "url":"https://kodiakapps.com/price-calc/backend/api/v2/quote-price",
    "type":"post",
    "dataType": "json",
    "data": data,
    "success": function(res){
      if(res.length){
          const productIndex = products.findIndex((item) => item.id == res[0].pid);
          products[productIndex].price = parseFloat(res[0].per_unit);
          drawProductsListReview(products); 
      }
    },
    "error": function(){
    }
  });
}

function previewSaveMore() {
  var s_calc_price  = 0;
  var s_price  = 0;
  var s_qty = 0;
  var s_front = maxFront;
  var s_back = maxBack;
  var s_sleeveLeft=sleeveLeft;
  var s_sleeveRight=sleeveRight;
  // for (let index = 0; index < products.length; index++) {
  //   s_front = parseInt(products[index].front);
  //   s_back = parseInt(products[index].back);
  //   s_sleeveLeft = parseInt(products[index].sleeveLeft);
  //   s_sleeveRight = parseInt(products[index].sleeveRight);
  // }

  s_qty = products.reduce((acc, { sumQty }) => acc + sumQty, 0);
  s_calc_price = products.reduce(
    (acc, { sumQty, calc_price }) => acc + sumQty * calc_price,
    0
  );

  s_calc_price = s_calc_price/s_qty;
  requestPrice = s_calc_price;
    switch(typeOfPrint){
        case 'screen':
          var pType = 'Screen Printing';
          var params = {"qty": s_qty, "price": s_calc_price, "fcolor": s_front, "bcolor": s_back, "sleft":s_sleeveLeft, "sright": s_sleeveRight, type: pType };
          break;
        case 'embroidery':
          var pType = 'Embroidery';
          var colorchestFront = $("#colorchestFront").val();
          var thread_count = $("#thread_count").val();
          var params = {"qty": s_qty, "price": s_calc_price, "fcolor": colorchestFront, "thread_count": thread_count, "fleece": (fleece ? 1 : 0), type: pType };
          break;
        case 'DTG':
          var pType = 'DTG';
          var print_location = 1;
          if(jQuery("#locations_box1").prop('checked')){
            var print_location = 2;
          }
          var params = {"qty": s_qty, "price": s_calc_price, "print_location": print_location, "design_files": design_files, "fleece": (fleece ? 1 : 0), type: pType };
          break;
        case 'Engraved':
          var pType = 'Engraved';
          var params = {"qty": s_qty, "price": s_calc_price, "type": pType };
          break;
    }
  
  $.ajax({
    //"url":"https://kodiakapps.com/price-calc/backend/api/quote-price",
    "url":"https://kodiakapps.com/price-calc/backend/api/v2/quote-price",
    "type":"post",
    "dataType": "json",
    "data": params,
    "success": function(res){
      $(".buy-more").remove();
     if(res.length>0){
       for (let index = 0; index < products.length; index++) {
          products[index].price = parseFloat(res[0].per_unit);
          drawProductsListReview(products); 
       }
       payload =  res[0].payload;
     }
      if(res.length>1){
          var sm_view = `<div class="buy-more"><strong>Buy More Save More!</strong>`;
          for (let sm = 1; sm < res.length; sm++) {
            sm_view += `<div class="row">
              <div class="col-6">
                Buy <strong>${ res[sm].qty - s_qty } More</strong> items and save $${ (res[sm-1].per_unit - res[sm].per_unit).toFixed(2) } each
              </div>
              <div class="col-6 text-end">
                <strong>$${ res[sm].per_unit }</strong> each
              </div>
            </div>`;
          }
          sm_view += `</div>`;
        $('.affirm').after(sm_view);
      }
    },
    "error": function(){
    }
  });
}

$.get('https://kodiakapps.com/price-calc/backend/pricerule/minimalLimit', function(minimalLimit) {
  screen_printing_minimal = minimalLimit.screen_printing_minimal;
  dtg_minimal = minimalLimit.dtg_minimal;
  embroidery_minimal = minimalLimit.embroidery_minimal;
});

addEventListener("load", (event) => {
  if (window.location.search.includes('editqty')) {
    window.bundle_dataTransfer = new DataTransfer();
    var current_items = [];
    VastaShop.Cart.current.items.forEach(function(item) {
      if (item.product_id == meta.product.id) {
        current_items.push(item);
      }
    });
    if(current_items.length){
      var pre_bundle = current_items[0];
      var properties = pre_bundle.properties;
      if (properties["Type"] == "Screen Printing") {
        $('.choose-type input[value="screen"]').trigger('click');
      }else if(properties["Type"] == "Embroidery"){
        $('.choose-type input[value="embroidery"]').trigger('click');
      }else if(properties["Type"] == "DTG (Direct to Garment)"){
        $('.choose-type input[value="DTG"]').trigger('click');
      }else{
        $('.choose-type input[value="Engraved"]').trigger('click');
      }

      if (properties["Front colors"]) {
        $("#colorFront").val(properties["Front colors"]).trigger('change');
      }

      if (properties["Back colors"]) {
        $("#colorBack").val(properties["Back colors"]).trigger('change');
      }
      if (properties["Sleeve printings left"]) {
        $("#sleeveLeft").val(properties["Sleeve printings left"]).trigger('change');
      }
      if (properties["Sleeve printings right"]) {
        $("#sleeveRight").val(properties["Sleeve printings right"]).trigger('change');
      }
      if (properties["colorchestFront"]) {
        $("#colorchestFront").val(properties["colorchestFront"]).trigger('change');
      }
      if (properties["thread_count"]) {
        $("#thread_count").val(properties["thread_count"]).trigger('change');
      }
      if (properties["Full Front"]) {
        $('input[data-function="Full-Front"]').trigger('click')
      }
      if (properties["Chest Pocket"]) {
        $('input[data-function="Chest-Pocket"]').trigger('click')
      }
      if (properties["Full Back"]) {
        $('input[data-function="Full-Back"]').trigger('click')
      }

      $("#step2-btn").trigger('click');
      window.file_length = Object.keys(current_items[0].properties).filter(x => x.includes('file')).length;
      window.file_count = 0;
      Object.keys(properties).forEach(async function(prop) {
        if (prop.includes("file")) {
          var file_url = properties[prop];
          await getFileFromUrl(file_url, prop);          
        }
      });


      current_items.forEach(function(itm) {
        var color = itm.variant_options[0];
        if($('.color-picker .color-item[data-color="'+color+'"]').hasClass('active') == false){
          $('.color-picker .color-item[data-color="'+color+'"]').trigger('click');
        }
        $('.sizes .sizes-input input[data-variant="'+itm.variant_id+'"]').val(itm.quantity).trigger('keyup')
        
      });

      var intvl = setInterval(function() {
        if (window.file_length == window.file_count) {
          var fileInput = document.querySelector('#imageUpload');
          fileInput.files = window.bundle_dataTransfer.files;
          PreviewImage();
          clearInterval(intvl);
        }
      }, 200)

    }
    console.log(current_items)
      var swatch = $('.gf_swatches-selector[data-name="Color"] .gf_swatch');
      swatch.each(function(){
          var clr = $(this).text();
          var styl = $(this).attr('style');
          $('color-item[data-color="'+clr+'"]').attr('style', styl);
      });

    $("#modal").modal("show");
  }
});

async function getFileFromUrl(url, name, defaultType = 'image/png') {
  var response = await fetch(url)
  var data = await response.blob()
  var file = new File([data], name, {
    type: data.type || defaultType,
  });
  window.file_count++;
  window.bundle_dataTransfer.items.add(file);
  console.log(bundle_dataTransfer.files);
}

function removeFile(index){
    var attachments = document.querySelector('#imageUpload').files;
    var fileBuffer = new DataTransfer();

    // append the file list to an array iteratively
    for (let i = 0; i < attachments.length; i++) {
        // Exclude file in specified index
        if (index !== i)
            fileBuffer.items.add(attachments[i]);
    }
    
    // Assign buffer to file input
    document.querySelector('#imageUpload').files = fileBuffer.files;
    PreviewImage();
}
