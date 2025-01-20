window.onload = function () {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const cartContainer = document.getElementById('cart-items-container');

  cartContainer.innerHTML = '';

  cartItems.forEach((item, index) => {

    const itemPrice = (parseFloat(item.price.replace(/Rs\.?\s*/i, "").trim()));
    const itemQuantity = parseInt(item.quantity, 10);
    const itemTotal = itemPrice * itemQuantity;

    const itemHTML = `
        <div class="col">
       <div class="card mb-3 card-card p-3">
       <div class="row align-items-center g-3">
       <div class="col-12 col-md-2 col-lg-2">
       <div class="cart-img-wrapper mx-auto">
          <img src="${item.image}" alt="${item.title}" class="w-100 h-100 ">
          </div>
       </div>
       <div class="col-12 col-md-10 col-lg-10">
         <div class="row align-items-center text-center text-md-start g-4">
        <div class="col-12 col-md-4 col-lg-4">
          <span class="font-14 pb-3 fw-medium text-grey">${item.productCode}</span>
          <h2 class="font-16 fw-bold pb-2 mb-0">${item.title}</h2>
          <p class="font-14 fw-medium mb-0">${item.description}</p>
        </div>
         <div class="col-6 col-md-2 col-lg-2 fw-medium font-14 text-center">${item.price}</div>
          <div class="col-6 col-md-3 col-lg-3"> 
          <div class="d-flex align-items-center justify-content-center">
           <button style="width: 40px; height:40px;" class="btnQ bg-grey border-1" onclick="updateQuantity(${index}, -1)">-</button>
            <div class="text-center" style="min-width:40px;" id="quantity-${index}">${item.quantity}</div>
            <button style="width: 40px; height:40px;" class="btnQ bg-grey border-1" onclick="updateQuantity(${index}, 1)">+</button></div>
          </div>
          <div class="col-12 col-md-3 col-lg-3 font-14 fw-bold">Rs. ${itemTotal}</div>
       </div>
       </div>
       </div>
         </div>
        </div>
      `;
    cartContainer.innerHTML += itemHTML;
  });
};
function updateQuantity(index, change) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart[index]) {
    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    window.onload();
  }
}

function cartWhatsapp() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  if (cartItems.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  var phonenumber = "918590210665";
  let message = "Cart Items:\n\n";
  cartItems.forEach((item, index) => {
    const itemPrice = parseFloat(item.price.replace(/Rs\.?\s*/i, "").trim()) || 0;
    const itemQuantity = parseInt(item.quantity, 10) || 0;
    const itemTotal = itemPrice * itemQuantity;

    console.log(`Item ${index + 1} Total:`, itemTotal);
    message += `${index + 1}. ${item.title}\n`;
    message += `   Product Code: ${item.productCode}\n`;
    message += `   Price: Rs. ${parseFloat(item.price.replace(/Rs\.?\s*/i, "").trim()) || 0}\n`;
    message += `   Quantity: ${item.quantity}\n`;
    message += `   Total: Rs. ${itemTotal}\n\n`;
  });

  var url = "https://wa.me/" + phonenumber + "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}


function cart() {
  window.location.assign("./cart.html")
}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "details") {
    x.className += " responsive";
  } else {
    x.className = "details";
  }
}


