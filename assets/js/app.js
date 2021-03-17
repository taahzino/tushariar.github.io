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
            toggleBtn.classList.remove('bx-x');
        }
    });
});

let body = document.querySelector('body');
let home = document.querySelector('.home');

let darkMode = document.querySelector('#darkMode');
let mode = localStorage.getItem('mode');
if(mode === 'light') {
    darkMode.classList.remove('bxs-toggle-right');
    body.classList.remove(`darkMode`);
}

darkMode.addEventListener('click', ()=>{
    let mode = localStorage.getItem('mode');
    darkMode.classList.toggle('bxs-toggle-right');
    body.classList.toggle(`darkMode`);
    if(mode) {
        if (mode === 'dark') {
            localStorage.setItem('mode', 'light');
        }else{
            localStorage.setItem('mode', 'dark');
        }
    }else {
        localStorage.setItem('mode', 'light');
    }
    if(nav.classList.contains('active')){
        toggle.classList.remove('active');
        nav.classList.remove('active');
        toggleBtn.classList.remove('bx-x');
    }
})