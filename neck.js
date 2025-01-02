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

  window.location.assign("https://wa.me/917736848705")

  // var phonenumber = "+917736848705";

  // var name = document.querySelector('.cusName').value;
  // var phone = document.querySelector('.cusNumber').value;
  // var qty = document.querySelector('.quantity').value;

  // if (!name || !phone || !qty) {
  //   alert("Please fill out all fields before proceeding.");
  //   return;
  // }
  // var url = "https://wa.me/" + phonenumber + "?text=" +
  //   encodeURIComponent("*Name:* " + name + "\n" +
  //     "*Phone:* " + phone + "\n" +
  //     "*Quantity:* " + qty);
  // window.open(url, '_blank');
}