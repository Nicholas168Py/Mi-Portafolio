
// ---------------------------------------------------------- Animaciones de inicio de pagina -------------------------------------- //

let tl = gsap.timeline();

tl.from(".start-animation", {
    duration: .5,
    y: -50,
    scale:0,
    stagger:0.1,
    delay: 0.1,
});


tl.from(".start-animation2", {
    duration: .5,
    y: 10,
    scale: 0,
    stagger:0.1,
    delay: 0.1,
}, '+=0.1');


// -------------------------------------------------------- Animaciones de cada seccion al hacer scroll ----------------------------------------- //

const elemento1 = document.querySelector('.elemento1');
const elemento2 = document.querySelector('.elemento2');
const elemento3 = document.querySelector('.elemento3');

gsap.registerPlugin(ScrollTrigger);

// ----------------------------------------- SECCION SOBRE MI ------------------------------------------//

gsap.from('.elemento1',{
    scrollTrigger: '.elemento1',
    start: 'top center',
    duration: .5,
    y: 10,
    scale:0,
})

// ------------------------------------------- SECCION PROYECTOS -----------------------------------------//

gsap.to('.elemento2',{
    scrollTrigger: '.elemento2',
    start: "top center",
    delay: 0.5,
    opacity: 1,
})

gsap.to('.elemento3',{
    scrollTrigger: '.elemento3',
    start: "top center",
    delay: 0.5,
    opacity: 1,
})

gsap.to('.elemento4',{
    scrollTrigger: '.elemento4',
    start: "top center",
    delay: 0.6,
    opacity: 1,
})

gsap.to('.elemento5',{
    scrollTrigger: '.elemento5',
    start: "top center",
    delay: 0.5,
    opacity: 1,
})

gsap.to('.elemento6',{
    scrollTrigger: '.elemento6',
    start: "top center",
    delay: 1,
    opacity: 1,
})



//------------------------------------------------------------------ Animacion del menu al hacer scroll ----------------------------------------------//

const secciones = document.querySelectorAll('.seccion');
const menuItems = document.querySelectorAll('.menu-item');

const funcionObserver = entries => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            const itemActual = Array.from(menuItems).find((item) => item.dataset.url === entry.target.id);
            itemActual.classList.add('activo');
            for (const item of menuItems){
                if (item != itemActual){
                    item.classList.remove('activo');
                }
            }
        };
    });
};

const observer = new IntersectionObserver(funcionObserver, {
    root: null,
    rootMargin: '0px',
    threshold: 0.8
});

secciones.forEach(seccion => observer.observe(seccion));



// ------------------------------------------- QUITAR EL FILTRO DE LA FOTO DE PERFIL EN RESPONSIVE   -----------------------------------------//

const imagenPerfil = document.querySelector('#foto-perfil');

imagenPerfil.addEventListener('click', () =>{
    imagenPerfil.classList.remove('filtro');
})


