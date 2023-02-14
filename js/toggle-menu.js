function toggleShow(object) {
  object.classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.toggle')) {
    if (phoneMenu.classList.contains('show')) {
      phoneMenu.classList.remove('show');
    }
  }
  if (!event.target.matches('.cart-toggle') && !event.target.parentNode.matches('.cart-toggle')) {
    if (shopCart.classList.contains('show')) {
      shopCart.classList.remove('show');
    }
  }
}