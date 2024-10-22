let toggleNavigation = function() {
    const burger = document.querySelector('.burger');
    let openNavigation = false;

    burger.addEventListener('click', () => {
        openNavigation = !openNavigation;
        document.querySelector('.nav-ul').style.opacity = openNavigation ? '1' : '0';
        burger.classList.toggle('active');
    });
}
toggleNavigation();

let initializeScrollNavigation = function() {
    document.addEventListener('DOMContentLoaded', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links');
        const nav = document.querySelector('.main-nav');

        function activateNavLinks(sectionId) {
            navLinks.forEach(link => {
                if(link.getAttribute('href') ===`#${sectionId}`) {
                    link.classList.add('active');
                }else {
                    link.classList.remove('active');
                }
            });
        }

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute('id');
                    activateNavLinks(sectionId);
                }
            });
        }, {threshold: 0.5});

        sections.forEach(section => {
            observer.observe(section);
        });

        window.addEventListener('scroll', () => {
            const lastSection = sections[sections.length - 1];
            const lastSectionPosition = lastSection.getBoundingClientRect();

            if(lastSectionPosition.bottom < window.innerHeight) {
                nav.style.display = 'none';
            }else {
                nav.style.display = 'flex';
            }
        });

        navLinks.forEach(function(link){
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetSections = document.querySelector(this.getAttribute('href'));
                targetSections.scrollIntoView({behavior: 'smooth'});

                if(this.getAttribute('href') === '#home'){
                    window.scrollTo({top: 0, behavior: 'smooth'});
                }
            });
        });
    });
}
initializeScrollNavigation();