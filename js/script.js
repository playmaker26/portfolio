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

function intersectionObserver() {
    let figures = document.querySelectorAll('figure');
    
    const options = {
        rootMargin: '0px 0px -100px 0px' // Adjust this if necessary
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(entry.target); // Debug: Log each observed entry
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    figures.forEach(figure => {
        observer.observe(figure);
    });
}

document.addEventListener('DOMContentLoaded', intersectionObserver);



//modal
// Define the projects object
let projects = {
    traveler: {
        image: '../project-imge/traveler.jpeg',
        name: 'Traveler',
        description: 'Traveler is a beautifully designed website that serves as an inspiration hub for travel enthusiasts. It showcases breathtaking destinations, travel tips, and engaging stories to help you plan your next adventure. The site is built with a focus on visual appeal and user experience, making it easy to navigate and explore various travel ideas.',
        headingH3: 'Technologies used',
        technologies: [
            { icon: '<i class="fa-brands fa-html5"></i>', title: 'HTML' },
            { icon: '<i class="fa-brands fa-css3-alt"></i>', title: 'CSS' },
            { icon: '<i class="fa-brands fa-js"></i>', title: 'JavaScript' }
        ],
        headingH2: 'Where to find the project',
        icons: [
            {icon: '<i class="fa-solid fa-desktop"></i>', title: 'Live Demo', url: 'https://playmaker26.github.io/Traveler/'},
            {icon: '<i class="fa-brands fa-github"></i>', title: 'GitHub', url: 'https://github.com/playmaker26/Traveler'},
            {icon: '<i class="fa-brands fa-figma"></i>', title: 'Figma', url: 'https://www.figma.com/design/pwi3NYzVNWOfdIVilOg1xF/Traveler?node-id=0-1&t=6wwobPewmHA2jZR7-1'}
        ]
    },
    memoryGame: {
        image: '../project-imge/memory-game.png',
        name: 'Memory Game',
        description: 'The Super Mario Memory Game is a fun and interactive web application designed to test and improve your memory skills. Inspired by the beloved Super Mario series, this game features iconic characters and items from the franchise. Players are challenged to find matching pairs of cards within a grid, with each successful match revealing a piece of the hidden image beneath.',
        headingH3: 'Technologies used',
        technologies: [
            { icon: '<i class="fa-brands fa-html5"></i>', title: 'HTML' },
            { icon: '<i class="fa-brands fa-css3-alt"></i>', title: 'CSS' },
            { icon: '<i class="fa-brands fa-js"></i>', title: 'JavaScript' }
        ],
        headingH2: 'Where to find the project',
        icons: [
            {icon: '<i class="fa-solid fa-desktop"></i>', title: 'Live Demo', url: 'https://playmaker26.github.io/Memory-Game/'},
            {icon: '<i class="fa-brands fa-github"></i>', title: 'GitHub', url: 'https://github.com/playmaker26/Memory-Game'},
            {icon: '<i class="fa-brands fa-figma"></i>', title: 'Figma', url: 'https://www.figma.com/design/0PRMZRgRLvPIUUGS8bjglg/Super-Mario-Memory-Game?node-id=0-1&t=19JarZvH9PtJP5M1-1'}
        ]
    }
};

// Function to create and display the modal
function createModal(project) {
    let modalContent = `
    <section class="modal-content">
        <button class='close'>Close</button>
        <figure class="project-img">
            <img src="${project.image}" alt="${project.name}">
            <figcaption>
                <header>
                    <h1>${project.name}</h1>
                </header>
                <p>${project.description}</p>
            </figcaption>
        </figure>
        <article class="project-info">
            <header>
                <h2>${project.headingH2}</h2>
            </header>
            <div>
            ${project.icons.map(icon => `
                <figure class="project-icon">
                    ${icon.icon}
                    <figcaption>
                        <a href='${icon.url}' target='_blank'>${icon.title}</a>
                    </figcaption>
                </figure>
            `).join('')}
            </div>
        </article>
        <article class='tech-used'>
            <header>
                <h3>${project.headingH3}</h3>
            </header>
            <div>
            ${project.technologies.map(tech => `
                <figure class="tech-icon">
                    ${tech.icon}
                    <figcaption>
                        <p>${tech.title}</p>
                    </figcaption>
                </figure>
            `).join('')}
            </div>
        </article>
    </section>
    `;
    return modalContent;
}

// Event listener to open the modal
let modalLinks = document.querySelectorAll('.link-modal');
modalLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        let projectKey = link.dataset.project;
        let project = projects[projectKey];

        if (!project) {
            console.error(`Project not found: ${projectKey}`);
            return;
        }

        let overlay = document.createElement('div');
        overlay.id = 'modal-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.45)';
        overlay.style.zIndex = '1000';

        let modal = document.createElement('dialog');
        modal.id = 'modal';
        modal.style.position = 'relative';
        modal.style.zIndex = '1001';
        modal.innerHTML = createModal(project);
        document.body.appendChild(overlay);
        document.body.appendChild(modal);

        modal.showModal();

        document.querySelector('.close').addEventListener('click', () => {
            modal.close();
            document.body.removeChild(modal);
            document.body.removeChild(overlay);
        });

        overlay.addEventListener('click', () => {
            modal.close();
            document.body.removeChild(modal);
            document.body.removeChild(overlay);
        });
    });
});

  
    
  
  

