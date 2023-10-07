const menu = document.querySelector('.navigation-sublist')
const menuBtn = document.querySelector('.navigation-catalog')

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('is-active');
})
