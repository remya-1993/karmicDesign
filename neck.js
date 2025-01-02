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
  document.getElementById('popup1').style.display = 'none';
  document.getElementById('popup2').style.display = 'none';
}

function showPopup2() {
  document.getElementById('popup2').style.display = 'flex';
}

function whatsapp() {

  var name = document.querySelector('.cusName').value.trim();
  var phone = document.querySelector('.CusNumber').value.trim();
  var qty = document.querySelector('.quantity').value.trim();

  var productLink = "https://karmic-design.vercel.app/neck.html"

  if (!name || !phone || !qty) {
    alert("Please fill out all fields before sending the message.");
    return;
  }
  if (isNaN(phone) || phone.length < 10 || phone.length > 10) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  var phonenumber = "918590210665";
  var url = "https://wa.me/" + phonenumber + "?text=" +
    encodeURIComponent("*Name:* " + name + "\n" +
      "*Phone Number:* " + phone + "\n" +
      "*Product Quantity:* " + qty + "\n" +
      "*Product Link:* " + productLink);
  window.open(url, '_blank');
}
