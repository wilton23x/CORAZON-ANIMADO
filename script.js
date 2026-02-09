const texto = document.getElementById("texto");
const sobre = document.querySelector(".sobre");
const corazon = document.getElementById("corazonCarta");
const intro = document.getElementById("intro");
const contenido = document.getElementById("contenido");

const mensaje = `A pesar de la distancia y del tiempo que estaremos incomunicados,
quiero desearte lo mejor de corazón.

Sé que vas a lograr muchas cosas hermosas,
porque eres fuerte, capaz y muy especial.

Te quiero mucho, Sofi.`;

let i = 0;
let escribiendo = false;

function entrar() {
    intro.style.display = "none";
    contenido.classList.remove("oculto");
}

function abrirCarta() {
    if (!sobre.classList.contains("abierto")) {
        sobre.classList.add("abierto");
        if (!escribiendo) {
            escribiendo = true;
            escribirTexto();
        }
    }
}

function escribirTexto() {
    if (i < mensaje.length) {
        texto.innerHTML += mensaje.charAt(i);
        i++;
        setTimeout(escribirTexto, 45);
    } else {
        corazon.innerHTML = "❤️";
        corazon.style.opacity = "1";
    }
}
