const productPage = document.querySelector('#product-page');

class Product {
    constructor(img, name, price, gallId, gallEnd) {
      const product = document.createElement('div');
      product.classList.add('prod-bg');
      product.innerHTML = `
      <div class="prod-item">
        <div class="product-info">
          <img src="${img}">
          <div>
            <h5>${name}</h5>
            <p>${price}</p>
            <div class="buy-product">
              <div>  
                <button class="minus">-</button>
                <p class="amount">1</p>
                <button class="plus">+</button>
              </div>
              <button onclick="buyProduct()" class="add-to-cart">Add to cart</button>
            </div>
          </div>
        </div>
        <div class="gallery">
        </div>
      </div>
      `;
      productPage.appendChild(product);
      const baseProd = document.querySelector('.product-info');
      const plusEl = document.querySelector('.plus');
      const minusEl = document.querySelector('.minus');
      baseProd.addEventListener('click', buyProduct);
      minusEl.addEventListener('click', minus);
      plusEl.addEventListener('click', plus);
    }
}