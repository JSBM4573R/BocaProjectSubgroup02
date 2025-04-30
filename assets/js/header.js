const header = document.querySelector('.header');
var lastScrollTop = 0;

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.classList.remove('show__header');
    header.classList.add('hide__header');
  } else {
    if(window.scrollY === 0) {
      header.classList.remove('show__header');
    } else {
      header.classList.remove('hide__header');
      header.classList.add('show__header');
    }
  }
  lastScrollTop = scrollTop;
});


const bars = document.querySelector('.hamburger');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const menu__list = document.querySelector('.menu__list');
const menu_link = document.querySelectorAll('.menu__link');
const bg__menu = document.querySelector('.menu__background');
const body = document.querySelector('body');

bars.addEventListener('click', function() {
  line1.classList.toggle('line1--active');
  line2.classList.toggle('line2--active');
  line3.classList.toggle('line3--active');
  menu__list.classList.toggle('menu__list--active');
  bg__menu.classList.toggle('menu__background--active');
  body.classList.toggle('stop-scrolling');
});

menu_link.forEach(e => e.addEventListener('click', function() {
  var menuActive = menu__list.classList.contains('menu__list--active');
  var bodyActive = body.classList.contains('stop-scrolling');
  if(menuActive || bodyActive) {
    menu__list.classList.remove('menu__list--active');
    body.classList.remove('stop-scrolling');
    bg__menu.classList.remove('menu__background--active');
    line1.classList.remove('line1--active');
    line2.classList.remove('line2--active');
    line3.classList.remove('line3--active');
  }
}))