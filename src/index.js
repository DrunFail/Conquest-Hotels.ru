import './styles/index.scss';


const btn = document.querySelector('.mobile-nav');
const menu = document.querySelector('.header-nav');

btn.addEventListener('click', () => {
    menu.classList.toggle('mobile-menu-opened');
})