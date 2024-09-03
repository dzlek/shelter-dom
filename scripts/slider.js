
// https://www.w3schools.com/howto/howto_js_slideshow.asp

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("animal-item");
  console.log(n); 
  if (n > slides.length - 4) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length - 2;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  } 
  for (i = slideIndex; i < slideIndex + 3; i++) {
    slides[i - 1].style.display = "flex";
  }
}

