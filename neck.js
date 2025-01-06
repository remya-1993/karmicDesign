
const necklaces = [
  {
    title: "Single Line Neckpiece",
    productCode: "Kd-01",
    price: 150,
    imgSrc: "./img/WhatsApp Image 2024-08-28 at 10.32.33 PM.jpeg",
    description: "Made up of stones. It is a long chain suitable for sarees. Green and white color stones with a long golden chain.",
    button: "<button class='buy-btn' onclick='showModal()'>Know More</button>",
  },
  {
    title: "Beaded Neckpiece",
    productCode: "Kd-02",
    price: 170,
    imgSrc: "./img/WhatsApp Image 2024-08-17 at 7.42.58 PM (1).jpeg",
    description: "Made with high-quality beads. Suitable for both casual and formal wear.",
    button: "<button class='buy-btn' onclick='showModal()'> Know More</button>",
  },
  {
    title: "Green Stone Neckpiece",
    productCode: "Kd-03",
    price: 190,
    imgSrc: "./img/WhatsApp Image 2024-08-30 at 9.29.36 PM.jpeg",
    description: "Made with high-quality beads. Suitable for both casual and formal wear.",
    button: "<button class='buy-btn' onclick='showModal()'>Know More</button>",
  },
  {
    title: "White Beaded Neckpiece",
    productCode: "Kd-04",
    price: 145,
    imgSrc: "./img/WhatsApp Image 2024-08-30 at 9.23.50 PM.jpeg",
    description: "Made with high-quality white and golden coloured beads. Suitable for both casual and formal wear.",
    button: "<button class='buy-btn' onclick='showModal()'>Know More</button>",
  },
  {
    title: "Single Beaded Chain",
    productCode: "Kd-05",
    price: 100,
    imgSrc: "./img/WhatsApp Image 2024-08-31 at 10.14.39 PM.jpeg",
    description: "Made with coloured stones and beads. Suitable for both casual and formal wear.",
    button: "<button class='buy-btn' onclick='showModal()'>Know More</button>",
  },
  {
    title: "Traditional Neckpiece",
    productCode: "Kd-06",
    price: 210,
    imgSrc: "./img/WhatsApp Image 2024-08-31 at 10.08.38 PM.jpeg",
    description: "Made with white and pink coloured beads with golden chain. Suitable for both casual and formal wear.",
    button: "<button class='buy-btn' onclick='showModal()'>Know More</button>",
  },
  {
    title: "Multi Colour Neckpiece",
    productCode: "Kd-07",
    price: 225,
    imgSrc: "./img/WhatsApp Image 2024-08-30 at 9.25.15 PM.jpeg",
    description: "Made with golden coloured metals along with matching earrings. Suitable for both casual and formal wear.",
    button: "<button class='buy-btn' onclick='showModal()'>Know More</button>",
  },
  {
    title: "Long Golden Chain",
    productCode: "Kd-08",
    price: 220,
    imgSrc: "./img/WhatsApp Image 2024-08-31 at 10.11.23 PM.jpeg",
    description: "Made with golden metals with big matching locket. Suitable for both casual and formal wear.",
    button: "<button class='buy-btn' onclick='showModal()'>Know More</button>",
  },
  {
    title: "Traditional Neckpiece",
    productCode: "Kd-09",
    price: 185,
    imgSrc: "./img/WhatsApp Image 2024-08-30 at 11.31.36 PM.jpeg",
    description: "Made with white and green stones in golden chain. Suitable for both casual and formal wear.",
    button: "<button class='buy-btn' onclick='showModal()'>Know More</button>",
  },
  {
    title: "Traditional Manga Mala",
    productCode: "Kd-10",
    price: 190,
    imgSrc: "./img/WhatsApp Image 2024-08-31 at 10.15.19 PM.jpeg",
    description: "Traditional palakka mala made with green coloured stones with earrings. Suitable for both casual and formal wear.",
    button: "<button class='buy-btn' onclick='showModal()'>Know More</button>",
  },
  {
    title: "White Pearl Neckpiece",
    productCode: "Kd-11",
    price: 200,
    imgSrc: "./img/WhatsApp Image 2024-08-30 at 9.23.49 PM.jpeg",
    description: "Traditional Neckpiece chain made with golden and white coloured stones and beads with earrings. Suitable for both casual and formal wear.",
    button: "<button class='buy-btn' onclick='showModal()'>Know More</button>",
  },
  {
    title: "Fabric Long Chain",
    productCode: "Kd-12",
    price: 170,
    imgSrc: "./img/WhatsApp Image 2024-08-31 at 10.19.18 PM.jpeg",
    description: "Made with golden and white coloured stones and beads with earrings. Suitable for both casual and formal wear.",
    button: "<button class='buy-btn' onclick='showModal()'>Know More</button>",
  },
];


function necklacePage() {
  let necklacesHTML = '';

  for (let i = 0; i < necklaces.length; i++) {


    necklacesHTML += `
      <div class="necklace-item">
>
        <img src="${necklaces[i].imgSrc}"  onclick='showModal("${necklaces[i].title}", "${necklaces[i].productCode}", "${necklaces[i].price}", "${necklaces[i].imgSrc}", "${necklaces[i].description}")' alt="${necklaces[i].title}" width="230px" />
        <h1>${necklaces[i].title}</h1>
        <h2>Product Code: ${necklaces[i].productCode}</h2>
        <h3>Price: ${necklaces[i].price}</h3>
        <p>${necklaces[i].description}</p>
        <button 
          class='buy-btn' 
          onclick='showModal("${necklaces[i].title}", "${necklaces[i].productCode}", "${necklaces[i].price}", "${necklaces[i].imgSrc}", "${necklaces[i].description}")'>
          Know More..
        </button>
      </div>
    `;
    console.log(necklaces[i].title);
  }

  document.getElementById("necklace-container").innerHTML = necklacesHTML;

}
necklacePage();

function showModal(title, productCode, price, imgSrc, description) {

  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-code').textContent = productCode;
  document.getElementById('modal-price').textContent = price;
  document.getElementById('modal-img').src = imgSrc;
  document.getElementById('modal-description').textContent = description;

  document.getElementById('popup1').style.display = 'block';
  document.body.classList.add('modal-open');
}


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