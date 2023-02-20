const mainPageGall = document.querySelector('#main-page');

let i = 0;

const slideGallImages = ["url('gallery/m5.jpg')", "url('gallery/an1.jpg')", "url('gallery/p11.jpg')"];

function repeatChange() {
    if (i < slideGallImages.length - 1) {
      i++
      mainPageGall.style.backgroundImage = slideGallImages[i];
    } else {
      i = 0;
      mainPageGall.style.backgroundImage = slideGallImages[i];
    }
}

setInterval(repeatChange, 4000);