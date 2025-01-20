const earrings = [
  {
    title: "Multi Color Danglers",
    productCode: "Kd-51",
    price: 150,
    image: "./img/WhatsApp Image 2024-08-30 at 9.21.13 PM.jpeg",
    description: "Made up with multicoloured stones and beads.",
  },
  {
    title: "Golden Jhumka",
    productCode: "Kd-52",
    price: 125,
    image: "./img/WhatsApp Image 2024-08-17 at 10.55.17 AM.jpeg",
    description: "Made up with golden and black coloured beads. Its suitable for traditional dresses.",
  },
  {
    title: "Multi Color Jhumka",
    productCode: "Kd-53",
    price: 120,
    image: "./img/WhatsApp Image 2024-08-30 at 9.22.46 PM.jpeg",
    description: "Made up with multicoloured beads along with ear chain.",
  },
  {
    title: "Beaded Earrings",
    productCode: "Kd-54",
    price: 100,
    image: "./img/WhatsApp Image 2024-08-28 at 10.14.43 AM.jpeg",
    description: "Made up with multicoloured beads.",
  },
  {
    title: "White Color Danglers",
    productCode: "Kd-55",
    price: 170,
    image: "./img/WhatsApp Image 2024-08-30 at 9.21.12 PM.jpeg",
    description: "Made up with white-coloured beads.",
  },
  {
    title: "Traditional Jhumka",
    productCode: "Kd-56",
    price: 115,
    image: "./img/WhatsApp Image 2024-08-30 at 10.51.14 PM.jpeg",
    description: "Made up with golden coloured beads.",
  },
  {
    title: "Beaded Danglers",
    productCode: "Kd-57",
    price: 140,
    image: "./img/WhatsApp Image 2024-08-30 at 10.54.26 PM.jpeg",
    description: "Made up with multicoloured beads.",
  },
  {
    title: "Stone Earrings",
    productCode: "Kd-58",
    price: 110,
    image: "./img/WhatsApp Image 2024-08-30 at 10.57.36 PM.jpeg",
    description: "Made up with stone and multicoloured beads.",
  },
  {
    title: "Multi Jhumka",
    productCode: "Kd-59",
    price: 130,
    image: "./img/WhatsApp Image 2024-08-30 at 10.59.27 PM.jpeg",
    description: "Made up with golden beads.",
  },
  {
    title: "Black Stone Earrings",
    productCode: "Kd-60",
    price: 180,
    image: "./img/WhatsApp Image 2024-08-31 at 10.03.40 PM.jpeg",
    description: "Made up with black-coloured stones.",
  },
  {
    title: "Multi Color Stud",
    productCode: "Kd-61",
    price: 180,
    image: "./img/WhatsApp Image 2024-08-31 at 9.48.25 PM.jpeg",
    description: "Made up with multicoloured stones.",
  },
  {
    title: "Metal Jhumka",
    productCode: "Kd-62",
    price: 180,
    image: "./img/WhatsApp Image 2024-08-30 at 11.01.32 PM.jpeg",
    description: "Made up with metal beads.",
  },
];

function earringsPage() {
  let earringsHTML = '';

  for (let i = 0; i < earrings.length; i++) {


    earringsHTML += `
       <div class="col">
     <div class="card h-100 card-border-radius overflow-hidden">
        <img src="${earrings[i].image}"  class="card-img-top w-100 j-c-img" data-bs-toggle="modal" data-bs-target="#exampleModal"
            data-title="${earrings[i].title}" 
  data-code="${earrings[i].productCode}" 
  data-price="${earrings[i].price}" 
  data-img="${earrings[i].image}" 
  data-description="${earrings[i].description}"/>
        <div class="card-body pb-0">
        <h5 class="font-16 fw-semibold text-start pt-3">${earrings[i].title}</h5>
        <h6 class="class="fw-semibold font-16"">${earrings[i].productCode} <span class="font-12 fw-light">(Product Code)</span></h6>
        <p class="font-14 fw-medium mb-0">${earrings[i].description}</p>
        </div>
         <div class="card-footer text-center border-0 bg-white pb-3 pt-4 d-flex align-items-center justify-content-between">
        <h3 class="font-20 fw-bold mb-0">Rs.${earrings[i].price}</h3>
        <button 
         class="border-0 btn bg-gold font-12 py-1 px-3 fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal"
            data-title="${earrings[i].title}" 
  data-code="${earrings[i].productCode}" 
  data-price="${earrings[i].price}" 
  data-img="${earrings[i].image}" 
  data-description="${earrings[i].description}">
          Know More..
        </button>
      </div>
      </div>
      </div>
    `;

    console.log(earrings[i].title);
  }

  document.getElementById("earring-container").innerHTML = earringsHTML;

}
earringsPage();

const exampleModal = document.getElementById('exampleModal');

exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  const button = event.relatedTarget;

  // Extract info from data-* attributes
  const title = button.getAttribute('data-title');
  const code = button.getAttribute('data-code');
  const price = button.getAttribute('data-price');
  const img = button.getAttribute('data-img');
  const description = button.getAttribute('data-description');

  // Update modal content
  const modalTitle = document.getElementById('modal-title');
  const modalCode = document.getElementById('modal-code');
  const modalPrice = document.getElementById('modal-price');
  const modalImg = document.getElementById('modal-img');
  const modalDescription = document.getElementById('modal-description');

  modalTitle.textContent = title;
  modalCode.textContent = code;
  modalPrice.textContent = `Rs. ${price}`;
  modalImg.src = img;
  modalDescription.textContent = description;
});



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
