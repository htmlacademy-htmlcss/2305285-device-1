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


const modal = document.querySelector('.modal-container');
const modalBtn = document.querySelector('.delivery-service-button');

if (modal) {
  modalBtn.addEventListener('click', () => {
    modal.classList.remove('modal-container-close');
    modal.querySelector('input').focus();
  })

  modal.querySelector('.modal-close-button').addEventListener('click', () => {
    modal.classList.add('modal-container-close');
  })
}
