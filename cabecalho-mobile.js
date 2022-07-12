
class CabecalhoMobile {
    constructor(cabecalhoMenu, mobileMenu, itemMenu) {
        this.cabecalhoMenu = document.querySelector(cabecalhoMenu);
        this.mobileMenu = document.querySelector(mobileMenu);
        this.itemMenu = document.querySelectorAll(itemMenu);
        this.active = "active";
    }
}