/**
 * Project: Portfolio - DevTahsin
 * Author: Tahsin Ahmed Tushar
 * Date: 22 February, 2021
 * Github: https://github.com/tushariar
 */

let toggle = document.querySelector('.menu-toggle');
let nav = document.querySelector('nav');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    toggle.classList.toggle('active');
});


let moveTop = document.querySelector('#top');
moveTop.addEventListener('click', (e) => {
    // e.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

window.addEventListener('scroll', ()=>{
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
    header.style.paddingBottom = '12px';
});