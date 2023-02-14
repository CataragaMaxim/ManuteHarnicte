// const subMenu = document.querySelector('.sub-menu');
// const categ = document.querySelector('.prod-categ');
const phoneMenu = document.querySelector('.phone-menu');
const shopCart = document.querySelector('.shop-cart');
const prodPage = document.querySelector('.prod');
const infoPage = document.querySelector('.info');
const contactPage = document.querySelector('.contact');
// subMenu.onmouseover = () => {
//   categ.style.display = "flex";
// }

// subMenu.onmouseout = () => {
//   categ.style.display = "none";
// }

// categ.onmouseover = () => {
//   categ.style.display = "flex";
// }

// categ.onmouseout = () => {
//   categ.style.display = "none";
// }

function moveWindow(y) {
  window.scrollTo({
    top: y,
    behavior: 'smooth'
  });
}