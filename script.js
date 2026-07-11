/* ===========================================================
   CURSOR SPOTLIGHT
=========================================================== */

const glow = document.getElementById("cursor-glow");

window.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});


/* ===========================================================
   TYPING EFFECT
=========================================================== */

const typingWords = [
    "Embedded Systems Engineer",
    "VLSI Enthusiast",
    "COMSOL Researcher",
    "Verilog RTL Designer",
    "C Programmer"
];

const typingElement = document.getElementById("typing");

if (typingElement) {

    let word = 0;
    let letter = 0;
    let deleting = false;

    function typingAnimation() {

        const current = typingWords[word];

        if (!deleting) {

            typingElement.textContent =
                current.substring(0, letter + 1);

            letter++;

            if (letter === current.length) {

                deleting = true;

                setTimeout(typingAnimation, 1800);

                return;
            }

        } else {

            typingElement.textContent =
                current.substring(0, letter - 1);

            letter--;

            if (letter === 0) {

                deleting = false;

                word++;

                if (word >= typingWords.length)
                    word = 0;

            }

        }

        setTimeout(
            typingAnimation,
            deleting ? 45 : 90
        );

    }

    typingAnimation();

}


/* ===========================================================
   HERO FADE IN
=========================================================== */

window.addEventListener("load", () => {

    document.querySelector(".hero").animate([

        {
            opacity: 0,
            transform: "translateY(60px)"
        },

        {
            opacity: 1,
            transform: "translateY(0)"
        }

    ], {

        duration: 1200,
        easing: "ease-out"

    });

});


/* ===========================================================
   STICKY HEADER
=========================================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.top = "12px";

        header.style.transition = ".4s";

    }

});


/* ===========================================================
   SMOOTH SCROLL
=========================================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", e => {

        e.preventDefault();

        document.querySelector(

            link.getAttribute("href")

        ).scrollIntoView({

            behavior: "smooth"

        });

    });

});

/* ===========================================================
   FLOATING PARTICLES
=========================================================== */

const particleContainer = document.createElement("div");

particleContainer.id = "particles";

document.body.appendChild(particleContainer);

function createParticle(){

    const particle = document.createElement("span");

    const size = Math.random()*5+3;

    particle.style.position = "absolute";

    particle.style.width = size+"px";

    particle.style.height = size+"px";

    particle.style.borderRadius = "50%";

    particle.style.left = Math.random()*100+"vw";

    particle.style.top = "100vh";

    particle.style.pointerEvents = "none";

    particle.style.opacity = Math.random();

    particle.style.background = "#9b6cff";

    particle.style.boxShadow =

    "0 0 15px #8b5cf6";

    particleContainer.appendChild(particle);

    const duration =

    Math.random()*6000+6000;

    particle.animate([

        {

            transform:"translateY(0) scale(1)",

            opacity:.8

        },

        {

            transform:"translateY(-120vh) scale(.2)",

            opacity:0

        }

    ],{

        duration:duration,

        easing:"linear"

    });

    setTimeout(()=>{

        particle.remove();

    },duration);

}

setInterval(createParticle,180);


/* ===========================================================
   SCROLL REVEAL
=========================================================== */

const revealObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.15

}

);

document.querySelectorAll("section").forEach(sec=>{

sec.classList.add("hidden");

revealObserver.observe(sec);

});


/* ===========================================================
   ACTIVE NAVIGATION
=========================================================== */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-180;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/* ===========================================================
   PROJECT CARD HOVER
=========================================================== */

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=(rect.height/2-y)/18;

const rotateY=(x-rect.width/2)/18;

card.style.transform=

`perspective(1200px)

rotateX(${rotateX}deg)

rotateY(${rotateY}deg)

scale(1.03)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";

});

});


/* ===========================================================
   PARALLAX HERO
=========================================================== */

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

if(hero){

hero.style.transform=

`translateY(${window.scrollY*0.15}px)`;

}

});


/* ===========================================================
   BUTTON RIPPLE EFFECT
=========================================================== */

document.querySelectorAll(".primary,.secondary").forEach(button=>{

button.addEventListener("click",(e)=>{

const ripple=document.createElement("span");

const rect=button.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=(e.clientX-rect.left-size/2)+"px";

ripple.style.top=(e.clientY-rect.top-size/2)+"px";

ripple.style.position="absolute";

ripple.style.borderRadius="50%";

ripple.style.background="rgba(255,255,255,.35)";

ripple.style.transform="scale(0)";

ripple.style.animation="ripple .6s linear";

button.style.position="relative";

button.style.overflow="hidden";

button.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/* ===========================================================
   ANIMATE SKILL BARS
=========================================================== */

const bars = document.querySelectorAll(".bar");

const barObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const bar = entry.target;

            const targetWidth = bar.style.width;

            bar.style.width = "0";

            setTimeout(() => {

                bar.style.transition = "width 2s ease";

                bar.style.width = targetWidth;

            }, 150);

        }

    });

}, {
    threshold: 0.4
});

bars.forEach(bar => {

    barObserver.observe(bar);

});


/* ===========================================================
   MAGNETIC BUTTON EFFECT
=========================================================== */

document.querySelectorAll(".primary,.secondary").forEach(button => {

    button.addEventListener("mousemove", (e) => {

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        button.style.transform =
            `translate(${x * 0.12}px,${y * 0.12}px)`;

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});


/* ===========================================================
   GLOW PULSE
=========================================================== */

setInterval(() => {

    document.querySelectorAll(".primary").forEach(btn => {

        btn.animate([

            {
                boxShadow: "0 0 20px rgba(139,92,246,.3)"
            },

            {
                boxShadow: "0 0 45px rgba(139,92,246,.8)"
            },

            {
                boxShadow: "0 0 20px rgba(139,92,246,.3)"
            }

        ], {

            duration: 1800

        });

    });

}, 2500);


/* ===========================================================
   TWINKLING STARS
=========================================================== */

const starLayer = document.createElement("div");

starLayer.id = "stars";

document.body.appendChild(starLayer);

for (let i = 0; i < 120; i++) {

    const star = document.createElement("span");

    const size = Math.random() * 3 + 1;

    star.style.position = "absolute";

    star.style.width = size + "px";

    star.style.height = size + "px";

    star.style.borderRadius = "50%";

    star.style.background = "#ffffff";

    star.style.left = Math.random() * 100 + "vw";

    star.style.top = Math.random() * 100 + "vh";

    star.style.opacity = Math.random();

    star.style.animation =
        `twinkle ${2 + Math.random() * 3}s infinite`;

    starLayer.appendChild(star);

}


/* ===========================================================
   SCROLL TO TOP
=========================================================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        topButton.classList.add("showTop");

    } else {

        topButton.classList.remove("showTop");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
