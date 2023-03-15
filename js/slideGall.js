const mainPageGall = document.querySelector('#main-page');

let i = 0;

const slideGallImages = ["url('gallery/m4.jpg')", "url('gallery/p12.jpg')", "url('gallery/p13.jpg')"];

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