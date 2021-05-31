var hamburger = document.querySelector('#hamburger');
hamburger.addEventListener('click', animateBurger);

function animateBurger() {
  hamburger.classList.toggle("change");
}