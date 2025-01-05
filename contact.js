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