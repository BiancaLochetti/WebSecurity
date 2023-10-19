class ModileNavBar{
    constructor(mobileMenu, NavList, NavLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.NavList = document.querySelector(NavList);
        this.NavLinks = document.querySelectorAll(NavLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
       this.NavLinks.forEach((link, index) => {
            /*console.log(index / 5 + 0.3);*/
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = 'navLinkFade 0.5s ease forwards 0.4s');
       });
    }

    handleClick(){
        this.NavList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init(){
       if(this.mobileMenu){
        this.addClickEvent();
       } 
       return this;
    }
}

const mobileNavBar = new ModileNavBar (
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

mobileNavBar.init();