const mainSlideGall = document.querySelector('#main-page img');
let i = 0;

const slideGallImages = ["asets/gHouse.jpg", "asets/gHouse2.jpg", "asets/gHouse3.png"];

function repeatChange() {
  if (i >= 2) {
    i = 0;
    mainSlideGall.src = slideGallImages[i];
  } else {
    i++
    mainSlideGall.src = slideGallImages[i];
  }
}

setInterval(repeatChange, 6000);