let slider = document.querySelector('.main__carousel'); 

let sliderList = slider.querySelector('.animal-item__slider'); // оболочка враппер
let sliderTrack = slider.querySelector('.animal-item__slider-track'); //все элементы
let slides = slider.querySelectorAll('.animal-item');   //8шт
let arrows = slider.querySelectorAll('.arrow-button'); //2шт

let prev = arrows[0];
let next = arrows[1];
let slideWidth = slides[0].offsetWidth;
let slideIndex = 0;
let posInit = 0;