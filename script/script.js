let $=document
let hamburgerMenu=$.querySelector(".hamburger-menu")
let openMenu=$.querySelector(".menu")
let btnHeaderOpen=$.querySelector(".nav-btn")
// let hamburgerMenuLine=$.querySelector(".hamburger-menu__line")
hamburgerMenu.addEventListener("click",function (){
    this.classList.toggle("open")
    openMenu.classList.toggle("open-menu")
    btnHeaderOpen.classList.toggle("open-btn__header")
})