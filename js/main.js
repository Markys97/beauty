let burgerButton= document.querySelector('.header__burger');
let menu=document.querySelector('.header__menu');


burgerButton.addEventListener('click',e=>{
    menu.classList.toggle('open-menu')
})

