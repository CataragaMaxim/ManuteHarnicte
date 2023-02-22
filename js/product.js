const productPage = document.querySelector('#product-page');

function removeBlock(){
  let removeItem = document.querySelector('.remove-item');
  removeItem.parentElement.remove();
}

function removeFullImg(){
  let removeItem = document.querySelector('.remove-full-img-item');
  removeItem.parentElement.remove();
}

function plus(e) {
  let price = parseInt(document.querySelector('.total-price').alt);
  let amount = parseInt(e.target.previousElementSibling.innerHTML);
  amount += 1;
  document.querySelector('.total-price').innerHTML = price * amount;
  e.target.previousElementSibling.innerHTML = amount;
}

function minus(e) {
  let price = parseInt(document.querySelector('.total-price').alt);
  let amount = parseInt(e.target.nextElementSibling.innerHTML);
  if (amount <= 1) {
    return e.target.nextElementSibling.innerHTML = 1;
  }
  amount = amount - 1;
  document.querySelector('.total-price').innerHTML = price * amount;
  return e.target.nextElementSibling.innerHTML = amount;
}

function prevImg() {
  let arr = document.querySelectorAll('.gallery div');
  let fullImage = document.querySelector('.full-img');
  let orderNum = parseInt(fullImage.alt);
  let arrSrc = [];
  for (let i = 0; i < arr.length; i++) {
    arrSrc.push(arr[i].alt);
  }
  if (orderNum == 0) {
    orderNum = parseInt(arrSrc.length) - 1;
    fullImage.src = arrSrc[orderNum];
    return fullImage.alt = orderNum;    
  }
  fullImage.src = arrSrc[--orderNum];
  fullImage.alt = orderNum;
}

function nextImg() {
  let arr = document.querySelectorAll('.gallery div');
  let fullImage = document.querySelector('.full-img');
  let orderNum = parseInt(fullImage.alt);
  let arrSrc = [];
  for (let i = 0; i < arr.length; i++) {
    arrSrc.push(arr[i].alt);
  }
  if (orderNum >= arrSrc.length - 1) {
    orderNum = 0;
    fullImage.src = arrSrc[orderNum];
    return fullImage.alt = orderNum;    
  }
  fullImage.src = arrSrc[++orderNum];
  fullImage.alt = orderNum;
}

function addMore() {
  productPage.innerHTML = `
  <div onclick="new Product('gallery/an0.jpg','Anul Nou','50','an',10)" class="product">
    <img src="gallery/an0.jpg" alt="">
    <p>50 lei</p>
  </div>
  <div onclick="new Product('gallery/b5.jpg','Bentițe','20','b',25)" class="product">
    <img src="gallery/b5.jpg" alt="">
    <p>20 lei</p>
  </div>
  <div onclick="new Product('gallery/c11.jpg','Cutiuțe','60','c',12)" class="product">
    <img src="gallery/c11.jpg" alt="">
    <p>60 lei</p>
  </div>
  <div onclick="new Product('gallery/e6.jpg','Ecusoane','30','e',13)" class="product">
    <img src="gallery/e6.jpg" alt="">
    <p>30 lei</p>
  </div>
  <div onclick="new Product('gallery/m4.jpg','Mărțișoare','10','m',19)" class="product">
    <img src="gallery/m4.jpg" alt="">
    <p>10 lei</p>
  </div>
  <div onclick="new Product('gallery/p4.jpg','Primăvara','40','p',12)" class="product">
    <img src="gallery/p4.jpg" alt="">
    <p>40 lei</p>
  </div>
  <div onclick="new Product('gallery/t3.jpg','Toamna de aur','100','t',3)" class="product">
    <img src="gallery/t3.jpg" alt="">
    <p>100 lei</p>
  </div>
  `;
}

function addMoreRu() {
  productPage.innerHTML = `
  <div onclick="new ProductRu('gallery/an0.jpg','Anul Nou','50','an',10)" class="product">
    <img src="gallery/an0.jpg" alt="">
    <p>50 lei</p>
  </div>
  <div onclick="new ProductRu('gallery/b5.jpg','Bentițe','20','b',25)" class="product">
    <img src="gallery/b5.jpg" alt="">
    <p>20 lei</p>
  </div>
  <div onclick="new ProductRu('gallery/c11.jpg','Cutiuțe','60','c',12)" class="product">
    <img src="gallery/c11.jpg" alt="">
    <p>60 lei</p>
  </div>
  <div onclick="new ProductRu('gallery/e6.jpg','Ecusoane','30','e',13)" class="product">
    <img src="gallery/e6.jpg" alt="">
    <p>30 lei</p>
  </div>
  <div onclick="new ProductRu('gallery/m4.jpg','Mărțișoare','10','m',19)" class="product">
    <img src="gallery/m4.jpg" alt="">
    <p>10 lei</p>
  </div>
  <div onclick="new ProductRu('gallery/p4.jpg','Primăvara','40','p',12)" class="product">
    <img src="gallery/p4.jpg" alt="">
    <p>40 lei</p>
  </div>
  <div onclick="new ProductRu('gallery/t3.jpg','Toamna de aur','100','t',3)" class="product">
    <img src="gallery/t3.jpg" alt="">
    <p>100 lei</p>
  </div>
  `;
}

class Gall {
  constructor() {
    let arr = document.querySelectorAll('.gallery div');
    let orderNum = 0;
    let arrSrc = [];
    for (let i = 0; i < arr.length; i++) {
      arrSrc.push(arr[i].alt);
    }
    const fullImg = document.createElement('div');
    fullImg.classList.add('full-img-bg');
    fullImg.innerHTML = `
    <div onclick="removeFullImg()" class="remove-full-img-item"></div>
    <div class="full-img-block">
    <div class="go-prev" onclick="prevImg()"><img src="img/arrow.png"></div>
    <div class="go-next" onclick="nextImg()"><img style="transform: rotate(180deg);" src="img/arrow.png"></div>
    <img onclick="removeFullImg()"class="full-img" src="${arrSrc[orderNum]}">
    </div>
    `
    productPage.appendChild(fullImg);
    let fullImage = document.querySelector('.full-img');
    fullImage.alt = orderNum;
  }
}

function newGallery() {
  new Gall;
}

class Product {
    constructor(img, name, price, gallId, gallEnd) {
      const product = document.createElement('div');
      product.classList.add('prod-bg');
      product.innerHTML = `
      <div onclick="removeBlock()" class="remove-item"></div>
      <div class="prod-item">
        <div class="remove-item-img"><img onclick="removeBlock()" src="img/remove.png"></div>
        <div class="product-info">
          <img src="${img}">
          <div class="base-info">
            <h5>${name}</h5>
            <p>${price} lei</p>
            <div class="buy-product">
              <div class="calc-block">  
                <button class="minus">-</button>
                <p class="amount">1</p>
                <button class="plus">+</button>
              </div>
              <div class="total-price-block">
                <p>Total Price:&nbsp;</p><p class="total-price">${price}</p><p>&nbsp;lei</p>
              </div>
              <button class="add-to-cart">Add to cart</button>
            </div>
          </div>
        </div>
        <h4>Gallery</h4>
        <div class="gallery">
        </div>
      </div>
      `;
      productPage.appendChild(product);
      document.querySelector('.total-price').alt = price;
      const gall = document.querySelector('.gallery');
      const baseProd = document.querySelector('.product-info');
      const plusEl = document.querySelector('.plus');
      const minusEl = document.querySelector('.minus');
      baseProd.addEventListener('click', buyProduct);
      minusEl.addEventListener('click', minus);
      plusEl.addEventListener('click', plus);
      for (let i = 0; i < gallEnd; i++) {
        let imageBlock = document.createElement('div');
        imageBlock.style.backgroundImage = `url('gallery/${gallId + i}.jpg')`;
        imageBlock.alt = `gallery/${gallId + i}.jpg`;
        imageBlock.number = i;
        imageBlock.addEventListener('click', newGallery);
        gall.appendChild(imageBlock);
      }
    }
}

class ProductRu {
  constructor(img, name, price, gallId, gallEnd) {
    const product = document.createElement('div');
    product.classList.add('prod-bg');
    product.innerHTML = `
    <div onclick="removeBlock()" class="remove-item"></div>
    <div class="prod-item">
      <div class="remove-item-img"><img onclick="removeBlock()" src="img/remove.png"></div>
      <div class="product-info">
        <img src="${img}">
        <div class="base-info">
          <h5>${name}</h5>
          <p>${price} lei</p>
          <div class="buy-product">
            <div class="calc-block">  
              <button class="minus">-</button>
              <p class="amount">1</p>
              <button class="plus">+</button>
            </div>
            <div class="total-price-block">
              <p>Общая стоимость:&nbsp;</p><p class="total-price">${price}</p><p>&nbsp;lei</p>
            </div>
            <button class="add-to-cart">Добавить в корзину</button>
          </div>
        </div>
      </div>
      <h4>Gallery</h4>
      <div class="gallery">
      </div>
    </div>
    `;
    productPage.appendChild(product);
    document.querySelector('.total-price').alt = price;
    const gall = document.querySelector('.gallery');
    const baseProd = document.querySelector('.product-info');
    const plusEl = document.querySelector('.plus');
    const minusEl = document.querySelector('.minus');
    baseProd.addEventListener('click', buyProduct);
    minusEl.addEventListener('click', minus);
    plusEl.addEventListener('click', plus);
    for (let i = 0; i < gallEnd; i++) {
      let imageBlock = document.createElement('div');
      imageBlock.style.backgroundImage = `url('gallery/${gallId + i}.jpg')`;
      imageBlock.alt = `gallery/${gallId + i}.jpg`;
      imageBlock.number = i;
      imageBlock.addEventListener('click', newGallery);
      gall.appendChild(imageBlock);
    }
  }
}