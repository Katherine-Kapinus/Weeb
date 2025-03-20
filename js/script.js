// Select the icon-menu element
const iconMenu = document.querySelector('.icon-menu');
// Select the header menu-and-buttons element
const menuAndButtons = document.querySelector('.header__menu-and-buttons');

iconMenu.addEventListener('click', () => {
    menuAndButtons.classList.toggle('active');
});
