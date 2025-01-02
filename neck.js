function toggleMenu() {
  var x = document.getElementById("myTopnav");
  x.classList.toggle("responsive");
}

function imgdetails1() {
  window.location.assign("neckpieces.html")
}

function buynow1() {
  window.location.assign("necksub.html")
}

function showModal(title, price, imgSrc, description) {

  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-price').textContent = price;
  document.getElementById('modal-img').src = imgSrc;
  document.getElementById('modal-description').textContent = description;

  document.getElementById('popup1').style.display = 'flex';
  document.body.classList.add('modal-open');
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
  // Close both popups
  document.getElementById('popup1').style.display = 'none';
  document.getElementById('popup2').style.display = 'none';
}

function showPopup2() {
  document.getElementById('popup2').style.display = 'flex';
}

function whatsapp() {
  // Retrieve input values
  var name = document.querySelector('.cusName').value.trim();
  var phone = document.querySelector('.CusNumber').value.trim();
  var qty = document.querySelector('.quantity').value.trim();

  // Validate inputs
  if (!name || !phone || !qty) {
      alert("Please fill out all fields before sending the message.");
      return;
  }

  // Ensure phone number is numeric and of valid length
  if (isNaN(phone) || phone.length < 10 || phone.length > 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
  }

  // Construct the WhatsApp URL with the data
  var phonenumber = "917736848705"; // Replace with the recipient's number
  var url = "https://wa.me/" + phonenumber + "?text=" + 
            encodeURIComponent("*Name:* " + name + "\n" + 
                               "*Phone Number:* " + phone + "\n" + 
                               "*Product Quantity:* " + qty);

  // Open the WhatsApp URL in a new tab
  window.open(url, '_blank');
}



// function whatsapp() {

//   window.location.assign("https://wa.me/917736848705")

//   var phonenumber = "+917736848705";

//   var name = document.querySelector('.cusName').value;
//   var phone = document.querySelector('.cusNumber').value;
//   var qty = document.querySelector('.quantity').value;

//   if (!name || !phone || !qty) {
//     alert("Please fill out all fields before proceeding.");
//     return;
//   }
//   var url = "https://wa.me/" + phonenumber + "?text=" +
//     encodeURIComponent("*Name:* " + name + "\n" +
//       "*Phone:* " + phone + "\n" +
//       "*Quantity:* " + qty);
//   window.open(url, '_blank');
// }