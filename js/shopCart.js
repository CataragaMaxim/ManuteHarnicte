const plusEl = document.querySelectorAll('.plus');
const minusEl = document.querySelectorAll('.minus');
const products = document.querySelector('#product-page');
const cart = document.querySelector('.shop-cart');
// const clearCartBtn = document.querySelector('.clear-cart');
// const empty = document.querySelector('.empty');

function loadEventListeners(){
  for (let i = 0; i < minusEl.length; i++) {
    minusEl[i].addEventListener('click', minus);
    plusEl[i].addEventListener('click', plus);
  }
  products.addEventListener('click', buyProduct);
  cart.addEventListener('click', removeProduct);
  // clearCartBtn.addEventListener('click', clearCart);
  
  function buyProduct(e){
    if(e.target.classList.contains('add-to-cart')){
      const product = e.target.parentElement.parentElement;
      getProductInfo(product);
    }
  }
}

function plus(e) {
  let amount = parseInt(e.target.previousElementSibling.innerHTML);
  amount = amount + 1;
  return e.target.previousElementSibling.innerHTML = amount;
}

function minus(e) {
  let amount = parseInt(e.target.nextElementSibling.innerHTML);
  if (amount <= 1) {
    return e.target.nextElementSibling.innerHTML = 1;
  }
  amount = amount - 1;
  return e.target.nextElementSibling.innerHTML = amount;
}
  
function getProductInfo(product) {
  const productInfo = {
    image: product.querySelector('img').src,
    name: product.querySelector('h5').textContent,
    price: product.querySelector('p').textContent,
    amount: product.querySelector('.buy-product .amount').textContent
  }
  addToCart(productInfo);
}

function addToCart(product){
  const prod = document.createElement('div');
  for (let i = 0; i < cart.childNodes.length; i++) {
    if (cart.childNodes[i].children[1].textContent == product.name) {
      cart.childNodes[i].children[3].textContent = parseInt(cart.childNodes[i].children[3].textContent) + parseInt(product.amount);
      cart.childNodes[i].children[2].textContent = parseInt(product.price)*(parseInt(cart.childNodes[i].children[3].textContent));
      return;
    }
  }
  prod.classList.add('cart-prod','cart-toggle')
  prod.innerHTML = `
  <img src="${product.image}" class="prod-img">    
  <h5>${product.name}</h5>
  <p>${parseInt(product.price)*parseInt(product.amount)}</p>
  <p>${product.amount}</p>
  <img src="img/remove.png" class="remove">
`;
  cart.appendChild(prod);
}

function removeProduct(e){
  if(e.target.classList.contains('remove')){
    e.target.parentElement.remove();
  }
}

function clearCart(){
  console.log(cart.firstChild)
  while(cart.firstChild){
      cart.removeChild(cart.firstChild);
  }
}

loadEventListeners();