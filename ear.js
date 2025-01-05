const earrings = [
  {
    title: "Multi Color Danglers",
    productCode: "Kd-51",
    price: "Rs. 150",
    imgSrc: "./img/WhatsApp Image 2024-08-30 at 9.21.13 PM.jpeg",
    description: "Made up with multicoloured stones and beads.",
  },
  {
    title: "Golden Jhumka",
    productCode: "Kd-52",
    price: "Rs. 125",
    imgSrc: "./img/WhatsApp Image 2024-08-17 at 10.55.17 AM.jpeg",
    description: "Made up with golden and black coloured beads. Its suitable for traditional dresses.",
  },
  {
    title: "Multi Color Jhumka",
    productCode: "Kd-53",
    price: "Rs. 120",
    imgSrc: "./img/WhatsApp Image 2024-08-30 at 9.22.46 PM.jpeg",
    description: "Made up with multicoloured beads along with ear chain.",
  },
  {
    title: "Beaded Earrings",
    productCode: "Kd-54",
    price: "Rs. 100",
    imgSrc: "./img/WhatsApp Image 2024-08-28 at 10.14.43 AM.jpeg",
    description: "Made up with multicoloured beads.",
  },
  {
    title: "White Color Danglers",
    productCode: "Kd-55",
    price: "Rs. 170",
    imgSrc: "./img/WhatsApp Image 2024-08-30 at 9.21.12 PM.jpeg",
    description: "Made up with white-coloured beads.",
  },
  {
    title: "Traditional Jhumka",
    productCode: "Kd-56",
    price: "Rs. 115",
    imgSrc: "./img/WhatsApp Image 2024-08-30 at 10.51.14 PM.jpeg",
    description: "Made up with golden coloured beads.",
  },
  {
    title: "Beaded Danglers",
    productCode: "Kd-57",
    price: "Rs. 140",
    imgSrc: "./img/WhatsApp Image 2024-08-30 at 10.54.26 PM.jpeg",
    description: "Made up with multicoloured beads.",
  },
  {
    title: "Stone Earrings",
    productCode: "Kd-58",
    price: "Rs. 110",
    imgSrc: "./img/WhatsApp Image 2024-08-30 at 10.57.36 PM.jpeg",
    description: "Made up with stone and multicoloured beads.",
  },
  {
    title: "Multi Jhumka",
    productCode: "Kd-59",
    price: "Rs. 130",
    imgSrc: "./img/WhatsApp Image 2024-08-30 at 10.59.27 PM.jpeg",
    description: "Made up with golden beads.",
  },
  {
    title: "Black Stone Earrings",
    productCode: "Kd-60",
    price: "Rs. 180",
    imgSrc: "./img/WhatsApp Image 2024-08-31 at 10.03.40 PM.jpeg",
    description: "Made up with black-coloured stones.",
  },
  {
    title: "Multi Color Stud",
    productCode: "Kd-61",
    price: "Rs. 180",
    imgSrc: "./img/WhatsApp Image 2024-08-31 at 9.48.25 PM.jpeg",
    description: "Made up with multicoloured stones.",
  },
  {
    title: "Metal Jhumka",
    productCode: "Kd-62",
    price: "Rs. 180",
    imgSrc: "./img/WhatsApp Image 2024-08-30 at 11.01.32 PM.jpeg",
    description: "Made up with metal beads.",
  },
];

function earringsPage() {
  let earringsHTML = '';

  for (let i = 0; i < earrings.length; i++) {


    earringsHTML += `
      <div class="earrings-item">
        <img src="${earrings[i].imgSrc}" alt="${earrings[i].title}" width="230px" />
        <h1>${earrings[i].title}</h1>
        <h2>Product Code: ${earrings[i].productCode}</h2>
        <h3>Price: ${earrings[i].price}</h3>
        <p>Description: ${earrings[i].description}</p>
        <button 
          class='buy-btn' 
          onclick='showModal("${earrings[i].title}", "${earrings[i].productCode}", "${earrings[i].price}", "${earrings[i].imgSrc}", "${earrings[i].description}")'>
          Know More
        </button>
      </div>
    `;
    console.log(earrings[i].title);
  }

  document.getElementById("earring-container").innerHTML = earringsHTML;

}
earringsPage();

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
function addCart(){
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
