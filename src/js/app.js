
$(document).ready(function(){
  $('.slider-wrapper').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});

const burgerMenu = document.querySelector('.burger-btn');
const navMenu = document.querySelector('.header-navigation-list'); // ваше меню

burgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});