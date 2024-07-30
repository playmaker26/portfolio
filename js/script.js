//navigation

let toggleNav = function () {
    let burger = document.querySelector('.burger');
    let openNav = false;
    burger.addEventListener('click', () => {
        if(!openNav) {
            openNav = true;
            burger.classList.add('active');
            document.querySelector('.index-ul').style.opacity = 1;
        }else {
            openNav = false;
            burger.classList.remove('active');
            document.querySelector('.index-ul').style.opacity = 0; 
        }
    });
}
toggleNav();

//active link 

let activeLink = function () {
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-links')

navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;

    if(linkPath === activePage) {
        link.classList.add('active');
    }
});
}
activeLink();