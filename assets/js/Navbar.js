const burger = document.querySelector('.navbar-burger');
const menu = document.querySelector('.menu1');
burger.addEventListener('click', () => {
    menu.classList.toggle('open');
    document.body.classList.toggle('open');
});