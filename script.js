const mensaje = `
A pesar de la distancia y del tiempo
que estaremos incomunicados…

quiero que sepas que desde aquí
te deseo lo mejor, que vas a lograr
muchas cosas hermosas en tu vida.

Te quiero mucho, Sofi.
`;

let index = 0;

/* ESPERAR A QUE EL DOM CARGUE (CLAVE PARA GITHUB PAGES) */
document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("intro");
    if (intro) {
        intro.addEventListener("click", entrar);
    }

    const sobre = document.querySelector(".sobre");
    if (sobre) {
        sobre.addEventListener("click", abrirCarta);
    }
});

function entrar() {
    const intro = document.getElementById("intro");
    const contenido = document.getElementById("contenido");

    if (intro) intro.style.display = "none";
    if (contenido) contenido.classList.remove("oculto");
}

function abrirCarta() {
    const sobre = document.querySelector(".sobre");
    const texto = document.getElementById("texto");
    const corazon = document.getElementById("corazonCarta");

    if (!sobre || !texto || !corazon) return;

    sobre.classList.add("abierto");

    texto.innerHTML = "";
    corazon.innerHTML = "";
    corazon.style.opacity = 0;

    index = 0;
    escribirTexto();
}

function escribirTexto() {
    const texto = document.getElementById("texto");
    const corazon = document.getElementById("corazonCarta");

    if (!texto || !corazon) return;

    if (index < mensaje.length) {
        texto.innerHTML += mensaje.charAt(index);
        index++;
        setTimeout(escribirTexto, 120);
    } else {
        corazon.innerHTML = "❤️";
        corazon.style.opacity = 1;
    }
}
