const closeButton = document.querySelector(".menu-button")
const mobileMenu= document.querySelector("#mobile-menu")
const openBurgerButton = document.querySelector(".menu-toggle")


const toggleMobile = () => {

    mobileMenu.classList.toggle('is-open');

}


closeButton.addEventListener('click', toggleMobile)

openBurgerButton.addEventListener('click', toggleMobile)