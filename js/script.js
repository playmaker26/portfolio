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
    },

    gamer: {
        image: '../project-imge/gamer.jpg',
        name: '100% Gamer',
        description: 'The "100% Gamer" landing page is a single-page responsive website designed to help gamers conquer the most challenging levels and achieve 100% completion in their favorite games. The site serves as a hub for guides, tips, and walkthroughs, providing gamers with the tools they need to master their gaming experience.',
        headingH3: 'Technologies used',
        technologies: [
            { icon: '<i class="fa-brands fa-html5"></i>', title: 'HTML' },
            { icon: '<i class="fa-brands fa-css3-alt"></i>', title: 'CSS' },
            { icon: '<i class="fa-brands fa-js"></i>', title: 'JavaScript' }
        ],
        headingH2: 'Where to find the project',
        icons: [
            {icon: '<i class="fa-solid fa-desktop"></i>', title: 'Live Demo', url: 'https://playmaker26.github.io/100-gamer/'},
            {icon: '<i class="fa-brands fa-github"></i>', title: 'GitHub', url: 'https://github.com/playmaker26/100-gamer'},
            {icon: '<i class="fa-brands fa-figma"></i>', title: 'Figma', url: 'https://www.figma.com/design/7JXc2jRRsBPPqbkagUd0x7/100%25-gamer?node-id=1-2&t=oFGk06OvW4NXiMcg-1'}
        ],
    },

    taskly: {
        image: '../project-imge/taskly.png',
        name: 'Taskly',
        description: 'Taskly is a dynamic and user-friendly to-do list application designed to streamline task management. Developed with HTML, CSS, and JavaScript, Taskly features a clean and responsive interface that allows users to efficiently manage their daily tasks. The app includes CRUD (Create, Read, Update, Delete) functionality, enabling users to add, edit, and remove tasks with ease.',
        headingH3: 'Technologies used',
        technologies: [
            { icon: '<i class="fa-brands fa-html5"></i>', title: 'HTML' },
            { icon: '<i class="fa-brands fa-css3-alt"></i>', title: 'CSS' },
            { icon: '<i class="fa-brands fa-js"></i>', title: 'JavaScript' }
        ], 
        headingH2: 'Where to find the project',
        icons: [
            {icon: '<i class="fa-solid fa-desktop"></i>', title: 'Live Demo', url: 'https://playmaker26.github.io/Taskly/'},
            {icon: '<i class="fa-brands fa-github"></i>', title: 'GitHub', url: 'https://github.com/playmaker26/Taskly'},
            {icon: '<i class="fa-brands fa-figma"></i>', title: 'Figma', url: 'https://www.figma.com/design/sfYQ5dgmr2EJlKHXT9crwE/Taskly?node-id=0-1&t=6HhGwwgiHvHHmRRF-1'}
        ],
    },
    canvasCraft: {
        image: '../project-imge/canvas-craft.png',
        name: 'CanvasCraft',
        description: 'Developed an interactive canvas drawing application that allows users to create, edit, and manage their drawings with various tools and features. The app provides a dynamic and user-friendly interface, enabling users to draw, erase, zoom in and out, undo and redo actions, and clear the canvas.',
        headingH3: 'Technologies used',
        technologies: [
            { icon: '<i class="fa-brands fa-html5"></i>', title: 'HTML' },
            { icon: '<i class="fa-brands fa-css3-alt"></i>', title: 'CSS' },
            { icon: '<i class="fa-brands fa-js"></i>', title: 'JavaScript' }
        ], 
        headingH2: 'Where to find the project',
        icons: [
            {icon: '<i class="fa-solid fa-desktop"></i>', title: 'Live Demo', url: 'https://playmaker26.github.io/canvascraft/'},
            {icon: '<i class="fa-brands fa-github"></i>', title: 'GitHub', url: 'https://github.com/playmaker26/canvascraft'},
            {icon: '<i class="fa-brands fa-figma"></i>', title: 'Figma', url: 'https://www.figma.com/design/adqsMqVi55q8uAUuRjT6rd/CanvasCraft?node-id=0-1&t=sJlF0zIRjEtqd12i-1'}
        ],
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

  //contact form


    
  
  

