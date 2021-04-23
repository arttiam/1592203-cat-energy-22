let btnHamburger = document.querySelector(".main-nav__toggle");
let mainMenu = document.querySelector(".main-nav__list");

btnHamburger.classList.remove("main-nav__toggle--closed");
mainMenu.classList.add("main-nav--closed");

btnHamburger.addEventListener("click", function(){
  btnHamburger.classList.toggle("main-nav__toggle--closed");
  mainMenu.classList.toggle("main-nav--closed");
})
