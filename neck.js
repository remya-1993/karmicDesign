
const necklaces = [
  {
    title: "Single Line Neckpiece",
    productCode: "Kd-01",
    price: 150,
    image: "./img/WhatsApp Image 2024-08-28 at 10.32.33 PM.jpeg",
    description: "Made up of stones. It is a long chain suitable for sarees. Green and white color stones with a long golden chain.",
  },
  {
    title: "Beaded Neckpiece",
    productCode: "Kd-02",
    price: 170,
    image: "./img/WhatsApp Image 2024-08-17 at 7.42.58 PM (1).jpeg",
    description: "Made with high-quality beads. Suitable for both casual and formal wear.",
  },
  {
    title: "Green Stone Neckpiece",
    productCode: "Kd-03",
    price: 350,
    image: "./img/WhatsApp Image 2024-08-30 at 9.29.36 PM.jpeg",
    description: "Made with high-quality beads. Suitable for both casual and formal wear.",
  },
  {
    title: "White Beaded Neckpiece",
    productCode: "Kd-04",
    price: 145,
    image: "./img/WhatsApp Image 2024-08-30 at 9.23.50 PM.jpeg",
    description: "Made with high-quality white and golden coloured beads. Suitable for both casual and formal wear.",
  },
  {
    title: "Single Beaded Chain",
    productCode: "Kd-05",
    price: 100,
    image: "./img/WhatsApp Image 2024-08-31 at 10.14.39 PM.jpeg",
    description: "Made with coloured stones and beads. Suitable for both casual and formal wear.",
  },
  {
    title: "Traditional Neckpiece",
    productCode: "Kd-06",
    price: 210,
    image: "./img/WhatsApp Image 2024-08-31 at 10.08.38 PM.jpeg",
    description: "Made with white and pink coloured beads with golden chain. Suitable for both casual and formal wear.",
  },
  {
    title: "Multi Colour Neckpiece",
    productCode: "Kd-07",
    price: 225,
    image: "./img/WhatsApp Image 2024-08-30 at 9.25.15 PM.jpeg",
    description: "Made with golden coloured metals along with matching earrings. Suitable for both casual and formal wear.",
  },
  {
    title: "Long Golden Chain",
    productCode: "Kd-08",
    price: 220,
    image: "./img/WhatsApp Image 2024-08-31 at 10.11.23 PM.jpeg",
    description: "Made with golden metals with big matching locket. Suitable for both casual and formal wear.",
  },
  {
    title: "Traditional Neckpiece",
    productCode: "Kd-09",
    price: 185,
    image: "./img/WhatsApp Image 2024-08-30 at 11.31.36 PM.jpeg",
    description: "Made with white and green stones in golden chain. Suitable for both casual and formal wear.",
  },
  {
    title: "Traditional Manga Mala",
    productCode: "Kd-10",
    price: 190,
    image: "./img/WhatsApp Image 2024-08-31 at 10.15.19 PM.jpeg",
    description: "Traditional palakka mala made with green coloured stones with earrings. Suitable for both casual and formal wear.",
  },
  {
    title: "White Pearl Neckpiece",
    productCode: "Kd-11",
    price: 200,
    image: "./img/WhatsApp Image 2024-08-30 at 9.23.49 PM.jpeg",
    description: "Traditional Neckpiece chain made with golden and white coloured stones and beads with earrings. Suitable for both casual and formal wear.",
  },
  {
    title: "Fabric Long Chain",
    productCode: "Kd-12",
    price: 170,
    image: "./img/WhatsApp Image 2024-08-31 at 10.19.18 PM.jpeg",
    description: "Made with golden and white coloured stones and beads with earrings. Suitable for both casual and formal wear.",
  },

];

necklaces.push({
  title: "Butterfly invisible chocker  (customized) ",
  productCode: "Kd-13",
  price: 180,
  image: "./img/butterfly_chain1.jpg",
  description: "A stunning simple necklace suitable for formal occasions.",
},
  {
    title: "Invisible chocker  (customized) ",
    productCode: "Kd-14",
    price: 180,
    image: "./img/invisible1.jpg",
    description: "A stunning simple necklace suitable for formal occasions.",
  },
  {
    title: "Invisible chocker  (customized) ",
    productCode: "Kd-15",
    price: 180,
    image: "./img/invisible2.jpg",
    description: "A stunning simple necklace suitable for formal occasions.",
  },
  {
    title: "Invisible chocker (customized)",
    productCode: "Kd-16",
    price: 180,
    image: "./img/invisible3.jpg",
    description: "A stunning simple necklace suitable for formal occasions.",
  },
  {
    title: "Golden Chocker",
    productCode: "Kd-17",
    price: 250,
    image: "./img/1.jpg",
    description: "Made up of stones. It is suitable for sarees. Green and golden color stones with a neck covered golden chocker.",
  },
  {
    title: "Golden chain",
    productCode: "Kd-18",
    price: 250,
    image: "./img/3.jpg",
    description: "Anti Tarnish chain 18k gold plated jewellery With water proof and tarnish free.",
  },
  {
    title: "Golden Chocker",
    productCode: "Kd-19",
    price: 450,
    image: "./img/2.jpg",
    description: "Traditional manga neckalce with ruby stone.",
  }, 
  {
    title: "Golden Chain",
    productCode: "Kd-20",
    price: 250,
    image: "./img/4.jpg",
    description: "Anti Tarnish chain 18k gold plated jewellery With water proof and tarnish free.",
  }
);


function necklacePage() {
  let necklacesHTML = '';
  for (let i = 0; i < necklaces.length; i++) {


    necklacesHTML += `
     <div class="col">
     <div class="card h-100 card-border-radius overflow-hidden">
        <img src="${necklaces[i].image}" class="card-img-top w-100 j-c-img" data-bs-toggle="modal" data-bs-target="#exampleModal" data-title="${necklaces[i].title}" 
  data-code="${necklaces[i].productCode}" 
  data-price="${necklaces[i].price}" 
  data-img="${necklaces[i].image}" 
  data-description="${necklaces[i].description}"/> 
        <div class="card-body pb-0">
        <h5 class="font-16 fw-semibold text-start pt-3">${necklaces[i].title}</h5>
        <h6 "class="fw-semibold font-16">${necklaces[i].productCode} <span class="font-12 fw-light">(Product Code)</span></h6>
        <p class="font-14 fw-medium mb-0">${necklaces[i].description}</p>
        </div>
         <div class="card-footer text-center border-0 bg-white pb-3 pt-4 d-flex align-items-center justify-content-between">
        <h3 class="font-20 fw-bold mb-0">Rs.${necklaces[i].price}</h3>
        <button 
         class="border-0 btn bg-gold font-12 py-1 px-3 fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal" 
            data-title="${necklaces[i].title}" 
  data-code="${necklaces[i].productCode}" 
  data-price="${necklaces[i].price}" 
  data-img="${necklaces[i].image}" 
  data-description="${necklaces[i].description}">
          Know More..
        </button>
      </div>
      </div>
      </div>
    `;

  }

  document.getElementById("necklace-container").innerHTML = necklacesHTML;

}

necklacePage();


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






function imgdetails1() {
  window.location.assign("neckpieces.html")
}

function buynow1() {
  window.location.assign("necksub.html")
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