const fingerRings = [
  {
    name: "Anti Tarnish Rings",
    productCode: "Kd-151",
    price: 120,
    image: "./img/ring1.jpeg",
    description: "It is a thin shaped finger ring."
  },
  {
    name: "Anti Tarnish Rings",
    productCode: "Kd-152",
    price: 100,
    image: "./img/ring2.jpeg",
    description: "It is a thin shaped finger ring."
  },
  {
    name: "Anti Tarnish Rings",
    productCode: "Kd-153",
    price: 170,
    image: "./img/ring3.jpeg",
    description: "It is a thin shaped finger ring."
  },
  {
    name: "Anti Tarnish Rings",
    productCode: "Kd-154",
    price: 100,
    image: "./img/ring4.jpeg",
    description: "It is a thin shaped finger ring."
  },
  {
    name: "Anti Tarnish Rings",
    productCode: "Kd-155",
    price: 110,
    image: "./img/ring5.jpeg",
    description: "It is a thin shaped finger ring."
  },
  {
    name: "Anti Tarnish Rings",
    productCode: "Kd-156",
    price: 110,
    image: "./img/ring6.jpeg",
    description: "It is a thin shaped finger ring."
  },
  {
    name: "Anti Tarnish Rings",
    productCode: "Kd-157",
    price: 110,
    image: "./img/ring7.jpeg",
    description: "It is a thin shaped finger ring."
  },
  {
    name: "Anti Tarnish Rings",
    productCode: "Kd-158",
    price: 110,
    image: "./img/ring8.jpeg",
    description: "It is a thin shaped finger ring."
  }
];


function ringsPage() {
  let fingerRingsHTML = '';

  for (let i = 0; i < fingerRings.length; i++) {
    fingerRingsHTML += `
      <div class="fingerrings-item">
        <img src="${fingerRings[i].image}" alt="${fingerRings[i].name}" width="230px" />
        <h1>${fingerRings[i].name}</h1>
        <h2>Product Code: ${fingerRings[i].productCode}</h2>
        <h3>Price: Rs. ${fingerRings[i].price}</h3>
        <p> ${fingerRings[i].description}</p>
        <button 
          class='buy-btn' 
          onclick='showModal("${fingerRings[i].name}", "${fingerRings[i].productCode}", "${fingerRings[i].price}", "${fingerRings[i].image}", "${fingerRings[i].description}")'>
          Know More..
        </button>
      </div>
    `;
    console.log(fingerRings[i].name);
  }

  document.getElementById("fingerRings-container").innerHTML = fingerRingsHTML;
}

ringsPage();

function showModal(title, productCode, price, imgSrc, description) {

  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-code').textContent = productCode;
  document.getElementById('modal-price').textContent = price;
  document.getElementById('modal-img').src = imgSrc;
  document.getElementById('modal-description').textContent = description;

  document.getElementById('popup1').style.display = 'block';
  document.body.classList.add('modal-open');
}

function closeModal() {
  document.getElementById('popup1').style.display = 'none';
}

function showModal1(cusName, quantity) {
  document.getElementById('cusName').value = cusName;
  document.getElementById('quantity').value = quantity;

  document.getElementById('popup1').style.display = 'none';
  document.getElementById('popup2').style.display = 'block';
}

function closeModal() {
  document.getElementById('popup1').style.display = 'none';
  document.getElementById('popup2').style.display = 'none';
}

function showPopup2() {
  document.getElementById('popup2').style.display = 'flex';
}

function whatsapp() {

  var name = document.querySelector('.cusName').value.trim();
  var qty = document.querySelector('.quantity').value.trim();

  var title = document.getElementById('modal-title').textContent.trim();
  var productCode = document.getElementById('modal-code').textContent.trim();
  var price = document.getElementById('modal-price').textContent.trim();
  var imgSrc = document.getElementById('modal-img').src.trim();
  var description = document.getElementById('modal-description').textContent.trim();

  var productLink = "https://karmic-design.vercel.app/neck.html"

  if (!name || !qty) {
    alert("Please fill out all fields before sending the message.");
    return;
  }
  var phonenumber = "918590210665";
  var message = `
    *Customer Details:*\n
    *Name:* ${name}\n
    *Quantity:* ${qty}\n\n
    *Product Details:*\n
    *Title:* ${title}\n
    *Product Code:* ${productCode}\n
    *Price:* ${price}\n
    *Description:* ${description}
  `;

  var url = "https://wa.me/" + phonenumber + "?text=" + encodeURIComponent(message);

  window.open(url, '_blank');
}
function addCart() {
  window.location.assign("./cart.html")
}
function addCart() {
  const title = document.getElementById('modal-title').innerText;
  const productCode = document.getElementById('modal-code').innerText;
  const price = document.getElementById('modal-price').innerText;
  const image = document.getElementById('modal-img').src;
  const description = document.getElementById('modal-description').innerText;

  const itemDetails = {
    title: title,
    productCode: productCode,
    price: price,
    image: image,
    description: description,
    quantity: 1
  };

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existingItemIndex = cart.findIndex(item => item.productCode === productCode);

  if (existingItemIndex > 0) {

    cart[existingItemIndex].quantity += 1;
  } else {

    cart.push(itemDetails);
  }

  localStorage.setItem('cart', JSON.stringify(cart));

  alert("Item added to cart!");
}
function cart() {
  window.location.assign("cart.html")
}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "details") {
    x.className += " responsive";
  } else {
    x.className = "details";
  }
}