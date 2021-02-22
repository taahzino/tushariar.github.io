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