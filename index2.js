const menu = document.getElementById('menu');
const indicador = document.getElementById('indicador');
const secciones = document.querySelectorAll('.seccion');

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


// ----------------------------------------------------------------

let Home = document.getElementById('home');
let Portafolio = document.getElementById('Portafolio');
let About = document.getElementById('About');
let Contact = document.getElementById('Contact');
let Projects = document.getElementById('Projects');

const mostrar = () => {
	if (window.innerWidth < 400){
		menu.classList.remove('como')
		menu.classList.add('cama')
	}else{
		menu.classList.remove('como')
		menu.classList.remove('cama')
	}
}

const imprimir = () => {
	if (window.innerWidth < 400){
		menu.classList.remove('cama')
		menu.classList.add('como')
	}else{
		menu.classList.remove('como')
		menu.classList.remove('cama')
	}
}

Home.addEventListener('click', () => imprimir());
Portafolio.addEventListener('click', () => mostrar());
About.addEventListener('click', () => mostrar());
Contact.addEventListener('click', () => mostrar());
Projects.addEventListener('click', () => mostrar());


