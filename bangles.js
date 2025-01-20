const bangles = [
  {
    title: "Beads bangles",
    productCode: "Kd-101",
    price: 150,
    image: "./img/bang 1.jpeg",
    description: "Made up with beads and stones."
  },
  {
    title: "Golden stone work bangles",
    productCode: "Kd-102",
    price: 120,
    image: "./img/bang 3.jpeg",
    description: "Made up with beads and stones."
  },
  {
    title: "Thread bangles",
    productCode: "Kd-103",
    price: 100,
    image: "./img/BANG4.jpeg",
    description: "Made up with beads and stones."
  },
  {
    title: "Handmade stone work bangles",
    productCode: "Kd-104",
    price: 170,
    image: "./img/BANG5.jpeg",
    description: "Made up with beads and stones."
  },
  {
    title: "Handmade stone work bangles",
    productCode: "Kd-105",
    price: 100,
    image: "./img/BANG6.jpeg",
    description: "Made up with beads and stones."
  },
  {
    title: "Handmade stone work bangles",
    productCode: "Kd-106",
    price: 110,
    image: "./img/BANG7.jpeg",
    description: "Made up with beads and stones."
  },
  {
    title: "Handmade stone work bangles",
    productCode: "Kd-107",
    price: 110,
    image: "./img/BANG1.jpeg",
    description: "Made up with beads and stones."
  },
  {
    title: "Golden stone work bangles",
    productCode: "Kd-108",
    price: 110,
    image: "./img/BANG2.jpeg",
    description: "Made up with beads and stones."
  },
  {
    title: "Handmade stone work bangles",
    productCode: "Kd-109",
    price: 110,
    image: "./img/BANG3.jpeg",
    description: "Made up with beads and stones."
  },
  {
    title: "Handmade stone work bangles",
    productCode: "Kd-110",
    price: 110,
    image: "./img/Stone.jpeg",
    description: "Made up with beads and stones."
  },
  {
    title: "Handmade stone work bangles",
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
   <div class="col">
     <div class="card h-100 card-border-radius overflow-hidden">
        <img src="${bangles[i].image}"  class="card-img-top w-100 j-c-img" data-bs-toggle="modal" data-bs-target="#exampleModal"
            data-title="${bangles[i].title}" 
  data-code="${bangles[i].productCode}" 
  data-price="${bangles[i].price}" 
  data-img="${bangles[i].image}" 
  data-description="${bangles[i].description}"/>
        <div class="card-body pb-0">
        <h5 class="font-16 fw-semibold text-start pt-3">${bangles[i].title}</h5>
        <h6 class="class="fw-semibold font-16"">${bangles[i].productCode} <span class="font-12 fw-light">(Product Code)</span></h6>
        <p class="font-14 fw-medium mb-0">${bangles[i].description}</p>
        </div>
         <div class="card-footer text-center border-0 bg-white pb-3 pt-4 d-flex align-items-center justify-content-between">
        <h3 class="font-20 fw-bold mb-0">Rs.${bangles[i].price}</h3>
        <button 
         class="border-0 btn bg-gold font-12 py-1 px-3 fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal"
            data-title="${bangles[i].title}" 
  data-code="${bangles[i].productCode}" 
  data-price="${bangles[i].price}" 
  data-img="${bangles[i].image}" 
  data-description="${bangles[i].description}">
          Know More..
        </button>
      </div>
      </div>
      </div>
    `;
  }

  document.getElementById("bangles-container").innerHTML = banglesHTML;

}
banglesPage();

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





function whatsapp() {

  var name = document.querySelector('#cusName').value.trim();
  var qty = document.querySelector('#quantity').value.trim();

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