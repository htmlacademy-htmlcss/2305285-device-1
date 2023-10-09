const menu = document.querySelector('.navigation-sublist');
const menuBtn = document.querySelector('.navigation-catalog');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('is-active');
})

const cartPopover = document.querySelector('.popover-cart');
const cartBtn = document.querySelector('.basket-button');

cartBtn.addEventListener('click', (e) => {
  e.preventDefault();
  cartPopover.classList.toggle('popover-open');
})
