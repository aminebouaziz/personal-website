// select dom(docuement object model) items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

//set initial state of the menu
let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close')
        menuBranding.classList.add('show')
        menu.classList.add('show')
        navItems.forEach(item => item.classList.add('show'));
        menuNav.classList.add('show')

        //set menu state 
        showMenu = true;
    } else {
        menuBtn.classList.remove('close')
        menuBranding.classList.remove('show')
        menuNav.classList.remove('show')
        menu.classList.remove('show')
        navItems.forEach(item => item.classList.remove('show'));
        //set menu state 
        showMenu = false;
    }
}