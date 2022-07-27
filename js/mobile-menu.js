let menuBurger = document.querySelector(".header__mobile-button");
let menuBurgerIcon = document.querySelector(".header__mobile-button i");
let mobileMenu = document.querySelector(".header__menu-mobile");

let menuActive = () => {
    document.addEventListener('click', (event) => {
        if (event.target === menuBurger || event.target == menuBurgerIcon){
            mobileMenu.classList.add('display');
            menuBurger.classList.add('unactive');
        }else if (mobileMenu.classList.contains('display') && event.target !== mobileMenu) {
            mobileMenu.classList.remove('display');
            menuBurger.classList.remove('unactive');
        } 
    })

}

menuActive();
