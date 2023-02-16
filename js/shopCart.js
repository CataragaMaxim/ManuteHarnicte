const cart = document.querySelector('.product-list');
// const clearCartBtn = document.querySelector('.clear-cart');
// const empty = document.querySelector('.empty');

function buyProduct(e){
  if(e.target.classList.contains('add-to-cart')){
    const product = e.target.parentElement.parentElement;
    getProductInfo(product);
  }
}

function loadEventListeners(){
  cart.addEventListener('click', removeProduct);
  // clearCartBtn.addEventListener('click', clearCart);
  
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
    if (cart.childNodes[i].children[1].children[0].textContent == product.name) {
      cart.childNodes[i].children[2].children[1].textContent = parseInt(cart.childNodes[i].children[2].children[1].textContent) + parseInt(product.amount);
      cart.childNodes[i].children[1].children[1].children[0].textContent = parseInt(product.price)*parseInt(cart.childNodes[i].children[2].children[1].textContent);
      return;
    }
  }
  prod.classList.add('cart-prod','cart-toggle')
  prod.innerHTML = `
  <img src="${product.image}" class="prod-img">    
  <div class="prod-info">
    <h5>${product.name}</h5>
    <div><p>${parseInt(product.price)*parseInt(product.amount)}</p><p>lei</p></div>
  </div>
  <div class="prod-calc">  
    <button class="minus">-</button>
    <p class="amount">${product.amount}</p>
    <button class="plus">+</button>
  </div>
  <img src="img/remove.png" class="remove">
  `;
  cart.appendChild(prod);
  prod.children[1].children[1].alt = parseInt(product.price);
  for (let i = 0; i < cart.childNodes.length; i++) {
    if (cart.childNodes[i].children[1].children[0].textContent == product.name) {
      const minusCartEl = cart.childNodes[i].children[2].children[0];
      const plusCartEl = cart.childNodes[i].children[2].children[2];
      minusCartEl.addEventListener('click', minusCart);
      plusCartEl.addEventListener('click', plusCart);
    }
  };
}

function plusCart(e) {
  let amount = parseInt(e.target.previousElementSibling.innerHTML);
  let price = parseInt(e.target.parentElement.parentElement.children[1].children[1].alt);
  amount = amount + 1;
  e.target.previousElementSibling.innerHTML = amount;
  e.target.parentElement.parentElement.children[1].children[1].children[0].textContent = price * amount;
}

function minusCart(e) {
  let amount = parseInt(e.target.nextElementSibling.innerHTML);
  let price = parseInt(e.target.parentElement.parentElement.children[1].children[1].alt);
  if (amount <= 1) {
    amount = 1;
    e.target.nextElementSibling.innerHTML = amount;
    return e.target.parentElement.parentElement.children[1].children[1].children[0].textContent = price * amount;
  }
  amount = amount - 1;
  e.target.nextElementSibling.innerHTML = amount;
  return e.target.parentElement.parentElement.children[1].children[1].children[0].textContent = price * amount;
}

function removeProduct(e){
  if(e.target.classList.contains('remove')){
    e.target.parentElement.remove();
  }
}

function clearCart(){
  console.log(cartProducts.firstChild)
  while(cartProducts.firstChild){
      cart.removeChild(cartProducts.firstChild);
  }
}

loadEventListeners();