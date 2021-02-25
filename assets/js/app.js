/**
 * Project: Portfolio - DevTahsin
 * Author: Tahsin Ahmed Tushar
 * Date: 22 February, 2021
 * Github: https://github.com/tushariar
 */

let toggle = document.querySelector('.menu-toggle');
let toggleBtn = document.querySelector('.bx-menu');
let nav = document.querySelector('nav');

toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    toggle.classList.toggle('active');
    toggleBtn.classList.toggle('bx-x');
});

window.addEventListener('scroll', ()=>{
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

let moveTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let menuItems = document.querySelectorAll('.menuItem');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        if(nav.classList.contains('active')){
            toggle.classList.remove('active');
            nav.classList.remove('active');
        }
    });
});