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
  
  function showModal1(cusName, cusNumber, quantity){
    document.getElementById('cusName').value = cusName;
    document.getElementById('cusNumber').value = cusNumber;
    document.getElementById('quantity').value= quantity;
  
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