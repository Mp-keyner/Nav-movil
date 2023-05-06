const menu = document.getElementById('menu');
const indicador = document.getElementById('indicador');
const home = document.getElementById('home');
const Projects = document.getElementById('Projects');
const About = document.getElementById('About');
const Portafolio = document.getElementById('Portafolio');
const Contact = document.getElementById('Contact');
const secciones = document.querySelectorAll('.Contact');

let tamañoIndicador = menu.querySelector('a').offsetWidth;
indicador.style.width = tamañoIndicador + 'px';

let indexSeccionActiva;

// Observer
const observer = new IntersectionObserver((entradas, observer) => {
	entradas.forEach(entrada => {
		if(entrada.isIntersecting){
			// Obtenemos cual es la seccion que esta entrando en pantalla.
			// console.log(`La entrada ${entrada.target.id} esta intersectando`);

			// Creamos un arreglo con las secciones y luego obtenemos el index del la seccion que esta en pantalla.
			indexSeccionActiva = [...secciones].indexOf(entrada.target);
			indicador.style.transform = `translateX(${tamañoIndicador * indexSeccionActiva}px)`;
		}
	});
}, {
	rootMargin: '-80px 0px 0px 0px',
	threshold: 0.2
});

// Agregamos un observador para el hero.
observer.observe(document.getElementById('hero'));

// Asignamos un observador a cada una de las secciones
secciones.forEach(seccion => observer.observe(seccion));

// Evento para cuando la pantalla cambie de tamaño.
const onResize = () => {
	// Calculamos el nuevo tamaño que deberia tener el indicador.
	tamañoIndicador = menu.querySelector('a').offsetWidth;

	// Cambiamos el tamaño del indicador.
	indicador.style.width = `${tamañoIndicador}px`;

	// Volvemos a posicionar el indicador.
	indicador.style.transform = `translateX(${tamañoIndicador * indexSeccionActiva}px)`;
}

window.addEventListener('resize', onResize);

home.addEventListener('click', () =>{
    menu.style = 'top: 0;'
})

Projects.addEventListener('click', () =>{
    menu.style = 'top: 619px;'
})
About.addEventListener('click', () =>{
    menu.style = 'top: 619px;'
})
Portafolio.addEventListener('click', () =>{
    menu.style = 'top: 619px;'
})
Contact.addEventListener('click', () =>{
    menu.style = 'top: 619px;'
})

