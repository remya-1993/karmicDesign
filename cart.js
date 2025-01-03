window.onload = function () {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items-container');

    cartContainer.innerHTML = '';

    cartItems.forEach((item, index) => {

        console.log("itemPrice:", item.price, "itemQuantity:", item.quantity);
        const itemPrice = parseFloat(item.price); 
        const itemQuantity = parseInt(item.quantity, 10);
        const itemTotal = itemPrice * itemQuantity;

        console.log("itemPrice:", itemPrice, "itemQuantity:", itemQuantity, "itemTotal:", itemTotal);

        const itemHTML = `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.title}" width="100px">
          <br>
          <br>
          <h2>${item.title}</h2>
          <p>Product Code: ${item.productCode}</p>
          <p>Price: ${item.price}</p>
          <p>Description: ${item.description}</p>
          <p>Quantity: 
            <button onclick="updateQuantity(${index}, -1)">-</button>
            <span id="quantity-${index}">${item.quantity}</span>
            <button onclick="updateQuantity(${index}, 1)">+</button>
          </p>
          <p>Total: Rs. ${itemTotal}</p>
          <br>
          <br>
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
        const itemPrice = parseFloat(item.price); 
        const itemQuantity = parseInt(item.quantity, 10);
        const itemTotal = itemPrice * itemQuantity;

        message += `${index + 1}. ${item.title}\n`;
        message += `   Product Code: ${item.productCode}\n`;
        message += `   Price: Rs. ${item.price}\n`;
        message += `   Quantity: ${item.quantity}\n`;
        message += `   Total: Rs. ${itemTotal}\n\n`;
    });

    var url = "https://wa.me/" + phonenumber + "?text=" + encodeURIComponent(message);
    
    window.open(url, "_blank");
}
