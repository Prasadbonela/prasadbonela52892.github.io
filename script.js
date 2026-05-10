// script.js

// ================= PROJECTS =================

const projects = [

    {
        title: "FBAR Filter Design",

        description:
        "Designed high-frequency FBAR filters using COMSOL with bandwidth optimization and Q-factor enhancement.",

        tech: ["COMSOL", "MATLAB", "RF MEMS"]
    },

    {
        title: "Disaster Prediction System",

        description:
        "Built a machine learning based disaster warning system with email alerts and live monitoring.",

        tech: ["Python", "Flask", "Machine Learning"]
    },

    {
        title: "Portfolio Website",

        description:
        "Developed a modern responsive portfolio website inspired by professional UI/UX layouts.",

        tech: ["HTML", "CSS", "JavaScript"]
    }

];

// ================= DYNAMIC PROJECT CARDS =================

const container = document.getElementById("projectContainer");

projects.forEach(project => {

    const card = document.createElement("div");

    card.classList.add("project-card");

    card.innerHTML = `

        <h3>${project.title}</h3>

        <p>${project.description}</p>

        <div class="tags">

            ${project.tech.map(tech =>

                `<span class="tag">${tech}</span>`

            ).join("")}

        </div>

    `;

    container.appendChild(card);

});

// ================= SCROLL ANIMATION =================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0px)";

        }

    });

});

const elements = document.querySelectorAll(
    ".about-card, .skill-box, .project-card, .contact-form"
);

elements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform = "translateY(40px)";

    el.style.transition = "all 1s ease";

    observer.observe(el);

});
    const card = document.createElement("div");

    card.classList.add("project-card", "hidden");

    card.innerHTML = `
    
        <h3>${project.title}</h3>

        <p>${project.description}</p>

        <div class="tags">

            ${project.tech.map(tech =>

                `<span class="tag">${tech}</span>`

            ).join("")}

        </div>

    `;

    container.appendChild(card);

});

// Scroll Animation

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach(el => observer.observe(el));
