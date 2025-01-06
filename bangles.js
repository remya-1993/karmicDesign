const bangles = [
  {
    name: "Beads bangles",
    productCode: "Kd-101",
    price: 150,
    image: "./img/bang 1.jpeg",
    description: "Made up with beads and stones."
  },
  {
    name: "Golden stone work bangles",
    productCode: "Kd-102",
    price: 120,
    image: "./img/bang 3.jpeg",
    description: "Made up with beads and stones."
  },
  {
    name: "Thread bangles",
    productCode: "Kd-103",
    price: 100,
    image: "./img/BANG4.jpeg",
    description: "Made up with beads and stones."
  },
  {
    name: "Handmade stone work bangles",
    productCode: "Kd-104",
    price: 170,
    image: "./img/BANG5.jpeg",
    description: "Made up with beads and stones."
  },
  {
    name: "Handmade stone work bangles",
    productCode: "Kd-105",
    price: 100,
    image: "./img/BANG6.jpeg",
    description: "Made up with beads and stones."
  },
  {
    name: "Handmade stone work bangles",
    productCode: "Kd-106",
    price: 110,
    image: "./img/BANG7.jpeg",
    description: "Made up with beads and stones."
  },
  {
    name: "Handmade stone work bangles",
    productCode: "Kd-107",
    price: 110,
    image: "./img/BANG1.jpeg",
    description: "Made up with beads and stones."
  },
  {
    name: "Golden stone work bangles",
    productCode: "Kd-108",
    price: 110,
    image: "./img/BANG2.jpeg",
    description: "Made up with beads and stones."
  },
  {
    name: "Handmade stone work bangles",
    productCode: "Kd-109",
    price: 110,
    image: "./img/BANG3.jpeg",
    description: "Made up with beads and stones."
  },
  {
    name: "Handmade stone work bangles",
    productCode: "Kd-110",
    price: 110,
    image: "./img/Stone.jpeg",
    description: "Made up with beads and stones."
  },
  {
    name: "Handmade stone work bangles",
    productCode: "Kd-111",
    price: 110,
    image: "./img/Stone2.jpeg",
    description: "Made up with beads and stones."
  }
];

function banglesPage() {
  let banglesHTML = '';

  for (let i = 0; i < bangles.length; i++) {
    banglesHTML += `
      <div class="bangles-item">
        <img src="${bangles[i].image}" alt="${bangles[i].name}" width="230px" />
        <h1>${bangles[i].name}</h1>
        <h2>Product Code: ${bangles[i].productCode}</h2>
        <h3>Price: Rs. ${bangles[i].price}</h3>
        <p> ${bangles[i].description}</p>
        <button 
          class='buy-btn' 
          onclick='showModal("${bangles[i].name}", "${bangles[i].productCode}", "${bangles[i].price}", "${bangles[i].image}", "${bangles[i].description}")'>
          Know More..
        </button>
      </div>
    `;
  }

  document.getElementById("bangles-container").innerHTML = banglesHTML;

}
banglesPage();

function showModal(title, productCode, price, imgSrc, description) {

  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-code').textContent = productCode;
  document.getElementById('modal-price').textContent = price;
  document.getElementById('modal-img').src = imgSrc;
  document.getElementById('modal-description').textContent = description;

  document.getElementById('popup1').style.display = 'block';
  document.body.classList.add('modal-open');
}
cument.getElementById('popup2').style.display = 'none';

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


function closeModal() {
  document.getElementById('popup1').style.display = 'none';
}

function showModal1(cusName, cusNumber, quantity) {
  document.getElementById('cusName').value = cusName;
  document.getElementById('cusNumber').value = cusNumber;
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

function cart(){
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