const body = document.querySelector('body');
const cart = document.querySelector('.product-list');
const cartTotalPrice = document.querySelector('.cart-total-price');
const cartTotalAmount = document.querySelector('.total-prod-amount');
const clearCartBtn = document.querySelector('.clear-cart');

function totalPriceCalc() {
  let totalPrice = 0;
  for (let i = 0; i < cart.children.length; i++) {
    totalPrice += parseInt(cart.children[i].children[1].children[1].children[0].innerHTML);
  }
  cartTotalPrice.innerHTML = totalPrice;
}

function totalAmountCalc() {
  let totalAmount = 0;
  let cartAmounts = document.querySelectorAll('.cart-amount');
  for (let i = 0; i < cartAmounts.length; i++) {
    totalAmount += parseInt(cartAmounts[i].textContent);
  }
  if (totalAmount > 99) {
    cartTotalAmount.textContent = '99+';
  } else {
    cartTotalAmount.textContent = totalAmount;
  }
}

function buyProduct(e) {
  if(e.target.classList.contains('add-to-cart')){
    const product = e.target.parentElement.parentElement.parentElement;
    getProductInfo(product);
  }
}

function loadEventListeners() {
  cart.addEventListener('click', removeProduct);
  clearCartBtn.addEventListener('click', clearCart);
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

function addToCart(product) {
  const prod = document.createElement('div');
  for (let i = 0; i < cart.childNodes.length; i++) {
    if (cart.childNodes[i].children[1].children[0].textContent == product.name) {
      cart.childNodes[i].children[2].children[1].textContent = parseInt(cart.childNodes[i].children[2].children[1].textContent) + parseInt(product.amount);
      cart.childNodes[i].children[1].children[1].children[0].textContent = parseInt(product.price)*parseInt(cart.childNodes[i].children[2].children[1].textContent);
      totalAmountCalc()
      totalPriceCalc();
      return;
    }
  }
  prod.classList.add('cart-prod','cart-toggle')
  prod.innerHTML = `
  <img src="${product.image}" class="prod-img cart-toggle">    
  <div class="prod-info cart-toggle">
    <h5>${product.name}</h5>
    <div class="cart-toggle"><p>${parseInt(product.price)*parseInt(product.amount)}</p><p>lei</p></div>
  </div>
  <div class="prod-calc cart-toggle">  
    <button class="cart-minus">-</button>
    <p class="cart-amount">${product.amount}</p>
    <button class="cart-plus">+</button>
  </div>
  <img src="img/delete.png" class="remove">
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
  totalAmountCalc()
  totalPriceCalc();
}

function plusCart(e) {
  let amount = parseInt(e.target.previousElementSibling.innerHTML);
  let price = parseInt(e.target.parentElement.parentElement.children[1].children[1].alt);
  amount = amount + 1;
  e.target.previousElementSibling.innerHTML = amount;
  e.target.parentElement.parentElement.children[1].children[1].children[0].textContent = price * amount;
  totalAmountCalc()
  totalPriceCalc();
}

function minusCart(e) {
  let amount = parseInt(e.target.nextElementSibling.innerHTML);
  let price = parseInt(e.target.parentElement.parentElement.children[1].children[1].alt);
  if (amount <= 1) {
    amount = 1;
    e.target.nextElementSibling.innerHTML = amount;
    e.target.parentElement.parentElement.children[1].children[1].children[0].textContent = price * amount;
    totalAmountCalc()
    return totalPriceCalc();
  }
  amount = amount - 1;
  e.target.nextElementSibling.innerHTML = amount;
  e.target.parentElement.parentElement.children[1].children[1].children[0].textContent = price * amount;
  totalAmountCalc()
  return totalPriceCalc();
}

function removeProduct(e) {
  if(e.target.classList.contains('remove')){
    e.target.parentElement.remove();
  }
  totalAmountCalc()
  totalPriceCalc();
}

function removeComandBlock(){
  let removeItem = document.querySelector('.remove-comand-block');
  removeItem.parentElement.remove();
}

function clearCart() {
  while(cart.firstChild){
      cart.removeChild(cart.firstChild);
  }
  totalAmountCalc()
  totalPriceCalc();
}

class ComandProd {
  constructor() {
    const infoBlock = document.createElement('div');
    infoBlock.classList.add('comand-bg');
    infoBlock.innerHTML = `
    <div onclick="removeComandBlock()" class="remove-comand-block"></div>
    <div class="comand-block">
      <img onclick="removeComandBlock()" class="remove-comand-img" src="img/remove.png">
      <h4>Comandă</h4>
      <p>Pentru a comanda apelați la numărul <a target="_blank" rel="noopener noreferrer" href="tel:+37360905200">+373 60 905 200</a>.</p>
    </div>
    `
    body.appendChild(infoBlock);
  }
}

class ComandProdEn {
  constructor() {
    const infoBlock = document.createElement('div');
    infoBlock.classList.add('comand-bg');
    infoBlock.innerHTML = `
    <div onclick="removeComandBlock()" class="remove-comand-block"></div>
    <div class="comand-block">
      <img onclick="removeComandBlock()" class="remove-comand-img" src="img/remove.png">
      <h4>Order</h4>
      <p>To order call the number <a target="_blank" rel="noopener noreferrer" href="tel:+37360905200">+373 60 905 200</a>.</p>
    </div>
    `
    body.appendChild(infoBlock);
  }
}

class ComandProdRu {
  constructor() {
    const infoBlock = document.createElement('div');
    infoBlock.classList.add('comand-bg');
    infoBlock.innerHTML = `
    <div onclick="removeComandBlock()" class="remove-comand-block"></div>
    <div class="comand-block">
      <img onclick="removeComandBlock()" class="remove-comand-img" src="img/remove.png">
      <h4>Заказать</h4>
      <p>Для заказа звоните по номеру <a target="_blank" rel="noopener noreferrer" href="tel:+37360905200">+373 60 905 200</a>.</p>
    </div>
    `
    body.appendChild(infoBlock);
  }
}

loadEventListeners();
