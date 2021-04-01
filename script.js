const ham = document.querySelector('.hamburger-img');
const menu = document.querySelector('.menu');

ham.addEventListener('click',function() {
    menu.classList.toggle('open')
})