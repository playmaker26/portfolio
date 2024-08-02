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
const navLinks = document.querySelectorAll('.nav-links');

navLinks.forEach(link => {
   const linkPath = link.getAttribute('href').split('/').pop();

    if(linkPath === activePage) {
        link.classList.add('active');
    }
});
}
activeLink();


//intersection observer

let intersectionObserver = function () {
    let leftImgs = document.querySelectorAll('.left');
    let rightImgs = document.querySelectorAll('.right');

    const options = {
        rootMargin: '0px 0px -200px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(!entry) {
                return;
            }
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    leftImgs.forEach(img => observer.observe(img));
    rightImgs.forEach(img => observer.observe(img));
};

intersectionObserver();

//modal
const projects = {
    traveler: {
        image: '../project-imge/traveler.jpeg',
        name: 'Traveler',
        description: 'Traveler is a beautifully designed website that serves as an inspiration hub for travel enthusiasts. It showcases breathtaking destinations, travel tips, and engaging stories to help you plan your next adventure. The site is built with a focus on visual appeal and user experience, making it easy to navigate and explore various travel ideas.',
        liveDemo: 'https://playmaker26.github.io/Traveler/',
        github: 'https://github.com/playmaker26/Traveler',
        figma: 'https://www.figma.com/design/0sZRy2wPSbDlHaSbgXMEXQ/Portfolio?node-id=0-1&t=t2TKaTmWS75ZDR0c-1'
    },
    memoryGame: {
        image: '../project-imge/memory-game.png',
        name: 'Memory Game',
        description: 'The Super Mario Memory Game is a fun and interactive web application designed to test and improve your memory skills. Inspired by the beloved Super Mario series, this game features iconic characters and items from the franchise. Players are challenged to find matching pairs of cards within a grid, with each successful match revealing a piece of the hidden image beneath.',
        liveDemo: 'https://playmaker26.github.io/Memory-Game/',
        github: 'https://github.com/playmaker26/Memory-Game',
        figma: 'https://www.figma.com/design/0PRMZRgRLvPIUUGS8bjglg/Super-Mario-Memory-Game?node-id=0-1&t=JoWzykj9TPSaOqZw-1'
    }
};

let modalFunction = function () {
    let modalLinks = document.querySelectorAll('.link-modal');

    modalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Determine which project details to use
            let projectKey = link.parentNode.querySelector('p').textContent.toLowerCase().replace(' ', '');
            let project = projects[projectKey];

            // Create modal elements
            let modal = document.createElement('dialog');

            modal.innerHTML = `
                <div>
                    <button id="close_modal" class="close">Close</button>
                    <figure>
                        <img src="${project.image}" alt="${project.name}">
                        <figcaption>
                            <header>
                                <h1>${project.name}</h1>
                            </header>
                            <p>${project.description}</p>
                            <article>
                                <header>
                                    <h2>Where to find ${project.name}</h2>
                                </header>
                                <figure>
                                    <i class="fa-solid fa-desktop"></i>
                                    <figcaption>
                                        <a href="${project.liveDemo}" target="_blank">Live Demo</a>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <i class="fa-brands fa-github"></i>
                                    <figcaption>
                                        <a href="${project.github}" target="_blank">GitHub</a>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <i class="fa-brands fa-figma"></i>
                                    <figcaption>
                                        <a href="${project.figma}" target="_blank">Figma</a>
                                    </figcaption>
                                </figure>
                            </article>
                            <article>
                                <header>
                                    <h3>Technologies used</h3>
                                </header>
                                <figure>
                                    <i class="fa-brands fa-html5"></i>
                                    <figcaption>
                                        <p>HTML</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <i class="fa-brands fa-css3-alt"></i>
                                    <figcaption>
                                        <p>CSS</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <i class="fa-brands fa-js"></i>
                                    <figcaption>
                                        <p>JavaScript</p>
                                    </figcaption>
                                </figure>
                            </article>
                        </figcaption>
                    </figure>
                </div>
            `;

            // Append modal to body
            document.body.appendChild(modal);

            // Show modal
            modal.showModal();

            // Close modal when the close button is clicked
            document.getElementById('close_modal').addEventListener('click', function() {
                modal.close();
                document.body.removeChild(modal);
            });

            // Close modal when clicking outside of it
            modal.addEventListener('click', function(event) {
                if (event.target === modal) {
                    modal.close();
                    document.body.removeChild(modal);
                }
            });
        });
    });
};

modalFunction();
