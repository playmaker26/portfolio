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
const activePage = window.location.pathname.split('/').pop();
console.log('Active page:', activePage);
const navLinks = document.querySelectorAll('.nav-links');

navLinks.forEach(link => {
   const linkPath = link.getAttribute('href').split('/').pop();
   console.log('Link path:', linkPath);

    if(linkPath === activePage) {
        link.classList.add('active');
        console.log('Active Link:', link.href);
    }
});
}
activeLink();