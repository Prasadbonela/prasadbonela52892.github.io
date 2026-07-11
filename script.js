/* ============================================
   TYPING ANIMATION
============================================ */

const typingElement = document.getElementById("typing");

const words = [
    "Embedded Systems Engineer",
    "VLSI Design Enthusiast",
    "COMSOL Multiphysics Researcher",
    "C Programmer",
    "Verilog RTL Designer"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;
        }
    }

    setTimeout(typeEffect, deleting ? 45 : 90);
}

typeEffect();


/* ============================================
   SCROLL REVEAL
============================================ */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},
{
    threshold:0.2
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});


/* ============================================
   NAVBAR BACKGROUND
============================================ */

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.background="rgba(5,8,22,.85)";
        header.style.backdropFilter="blur(18px)";

    }
    else{

        header.style.background="transparent";

    }

});


/* ============================================
   SMOOTH NAVIGATION
============================================ */

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const section=document.querySelector(this.getAttribute("href"));

        section.scrollIntoView({

            behavior:"smooth"

        });

    });

});


/* ============================================
   MOBILE MENU
============================================ */

const menuBtn=document.querySelector(".menu-btn");

const nav=document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

    nav.classList.toggle("mobile");

});


/* ============================================
   FLOATING PARTICLES
============================================ */

const particleContainer=document.getElementById("particles");

function createParticle(){

    const particle=document.createElement("span");

    const size=Math.random()*6+3;

    particle.style.position="absolute";

    particle.style.width=size+"px";

    particle.style.height=size+"px";

    particle.style.borderRadius="50%";

    particle.style.background="rgba(139,92,246,.75)";

    particle.style.left=Math.random()*100+"vw";

    particle.style.top="100vh";

    particle.style.boxShadow="0 0 15px #8b5cf6";

    particle.style.pointerEvents="none";

    particle.style.opacity=Math.random();

    particle.style.transition="transform linear";

    particleContainer.appendChild(particle);

    const duration=Math.random()*7000+5000;

    particle.animate([

        {
            transform:"translateY(0)"
        },

        {
            transform:"translateY(-120vh)"
        }

    ],{

        duration:duration,

        easing:"linear"

    });

    setTimeout(()=>{

        particle.remove();

    },duration);

}

setInterval(createParticle,220);


/* ============================================
   MOUSE GLOW
============================================ */

const glow=document.createElement("div");

glow.style.position="fixed";

glow.style.width="300px";

glow.style.height="300px";

glow.style.borderRadius="50%";

glow.style.pointerEvents="none";

glow.style.background="radial-gradient(circle,rgba(139,92,246,.20),transparent 70%)";

glow.style.filter="blur(25px)";

glow.style.zIndex="-1";

document.body.appendChild(glow);

window.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX-150+"px";

    glow.style.top=e.clientY-150+"px";

});


/* ============================================
   HERO FADE IN
============================================ */

window.addEventListener("load",()=>{

    document.querySelector(".hero").animate([

        {

            opacity:0,

            transform:"translateY(50px)"

        },

        {

            opacity:1,

            transform:"translateY(0)"

        }

    ],{

        duration:1200,

        easing:"ease"

    });

});


/* ============================================
   ACTIVE NAVIGATION
============================================ */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});


/* ============================================
   PROJECT CARD TILT
============================================ */

document.querySelectorAll(".project-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        const rotateY=(x-rect.width/2)/18;

        const rotateX=(rect.height/2-y)/18;

        card.style.transform=
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="rotateX(0) rotateY(0)";

    });

});
