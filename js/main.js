let burgerButton= document.querySelector('.header__burger');
let menu=document.querySelector('.header__menu');
let index=document.querySelector('.page');


burgerButton.addEventListener('click',e=>{
    menu.classList.toggle('open-menu')
    index.classList.toggle('isOpen')
    
})


