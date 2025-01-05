function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "details") {
    x.className += " responsive";
  } else {
    x.className = "details";
  }
}

function more(){
  window.location.assign("ear.html")
}

function more1(){
  window.location.assign("neck.html")
}
function more2(){
  window.location.assign("bangles.html")
}
function more3(){
  window.location.assign("rings.html")
}
function cart(){
  window.location.assign("cart.html")
}