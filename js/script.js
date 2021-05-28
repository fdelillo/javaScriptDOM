// seleccinar elementos
/*
//querySelector
//const heading = document.querySelector('#nombre_id') // Utilizando el id del elemento
const heading = document.querySelector('.header__texto h2'); // Utilizando clases como CSS - en este caso utilizo la clase del contenedor y el elemento
//heading.textContent = 'Nuevo Heading';
//console.log(heading);


//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a'); //Retorna una lista como arreglo
//console.log(enlaces[0]);
enlaces[0].textContent = 'Nuevo texto para enlace';
enlaces[0].href = 'http://google.com';
enlaces[0].classList.add('nueva-clase');
//enlaces[0].classList.remove('navegacion__enlace');


//getElementById
const heading2 = document.getElementById('heading');
console.log(heading2);


//Generar codigo html con JS
const nuevoEnlace = document.createElement('A'); // JS recomienda agregar el nombre del elemento a crear en matusculas. este caso un en lase A
// en el caso de un enlace en html tenemos el href,la clase y el texto
// <a href="contacto.html" class="navegacion__enlace">Contacto</a>

// en JS tenemos que agregar por separado cada cosa
// Enlace
nuevoEnlace.href = 'nuevo-enlace.html';
// Texto
nuevoEnlace.textContent = 'Un nuevo Enlace';
// Clase
nuevoEnlace.classList.add('navegacion__enlace');

// Luego de crearlo hay que agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);
*/

// EVENTOS
/*
console.log(1);

window.addEventListener('load', function() { //load espera a que el HTML, CSS y JS esten listos para ejecutarse
    console.log(2);
})

window.onload = function() {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function() { //DOMContentLoaded solo espera que el HTML este listo para ejecutarse
    console.log(4);
})

document.addEventListener('DOMContentLoaded', imprimir)

console.log(5);

function imprimir() {
    console.log(6);
}

window.onscroll = function() {
    console.log('scrolling...')
}*/

// seleccionar elementos y asociarlo a un evento
/*const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento) {
    console.log(evento);
    evento.preventDefault(); // Se utiliza para prevenir la accion por defecto
    console.log('Enviando formulario');
})*/

// Eventos de los input's o textArea's
/*const nombre = document.querySelector('#nombre');
nombre.addEventListener('change', function() {
    console.log('Escribiendo...');
})

const nombre = document.querySelector('#nombre');
nombre.addEventListener('input', function(e) {
    console.log(e.target.value);
})*/

const datos = { // Recordar que llaves son obejtos y que corchetes son arreglos
    nombre : '',
    email : '',
    mensaje : ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
formulario.addEventListener('submit', function(e) { //IMPORTANTE QUE AL TRABAJAR CON FORMULARIOS USAR EL EVENTO SUBMIT Y NO EL EVENTO CLICK
    e.preventDefault();
    // Validar formulario
    const {nombre,email,mensaje} = datos;
    if(nombre === '', email === '', mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios.', 'error');
        return;
    }
    // Enviando formulario
    mostrarAlerta('Mensaje enviado correctamente.', 'correcto')
})

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
    console.log(datos);
}

function mostrarAlerta(mensaje,tipo) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if(tipo == 'error') {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 3000);
}