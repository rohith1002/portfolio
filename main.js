var typed = new Typed(".text", {
    strings: [" ML engineer", " Coder", " Frontend Developer"],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1000,
    loop: true
});

var nlp = new Typed(".NLP", {
    strings: [" NLP "," NATURAL LANGUAGE PROCESSING "],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1000,
    loop: true
});
var ml = new Typed(".ML", {
    strings: [" ML "," Machine Learning "],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1000,
    loop: true
});
var dl = new Typed(".DL", {
    strings: [" DL "," Deep Learning "],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1000,
    loop: true
});
// var p1 = new Typed(".project1", {
//     strings: [" Fashion Reccomendation system "],
//     typeSpeed: 50,
//     backSpeed: 25,
//     backDelay: 1000,
//     loop: true
// });
// var p2 = new Typed(".project2", {
//     strings: [" Smart healthcare system"],
//     typeSpeed: 50,
//     backSpeed: 25,
//     backDelay: 1000,
//     loop: true
// });
// var p3 = new Typed(".project3", {
//     strings: [" Spam detection from convesation"],
//     typeSpeed: 50,
//     backSpeed: 25,
//     backDelay: 1000,
//     loop: true
// });
// var p4 = new Typed(".project4", {
//     strings: [" virtual voice assistant "],
//     typeSpeed: 50,
//     backSpeed: 25,
//     backDelay: 1000,
//     loop: true
// });
// var p5 = new Typed(".project5", {
//     strings: [" face mask detection"],
//     typeSpeed: 50,
//     backSpeed: 25,
//     backDelay: 1000,
//     loop: true
// });
// var p6 = new Typed(".project6", {
//     strings: [" Distracted driver detection"],
//     typeSpeed: 50,
//     backSpeed: 25,
//     backDelay: 1000,
//     loop: true
// });
particlesJS("particles-js", { "particles": { "number": { "value": 100, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }); var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function () { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

let sections=document.querySelectorAll('section')
let navLink=document.querySelectorAll('header navbar a')

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>= offset && top<offset +height ){
            navLink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header navbar a[href*=' + id + ']').classList.add('active')
            });
        }
    })
}