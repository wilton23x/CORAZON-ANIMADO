const mensaje =
"A pesar de la distancia\n" +
"y del tiempo que estaremos incomunicados...\n\n" +
"quiero que sepas que desde aquí\n" +
"te deseo lo mejor con todo mi corazón 🌷\n\n" +
"Sé que vas a lograr muchas cosas hermosas,\n" +
"porque eres increíble ✨\n\n" +
"Te quiero mucho, Sofi";

let i = 0;
let corazonMostrado = false;

function abrirCarta() {
    const sobre = document.querySelector(".sobre");
    const texto = document.getElementById("texto");

    if (!sobre.classList.contains("abierto")) {
        sobre.classList.add("abierto");
        escribirTexto(texto);
    }
}

function escribirTexto(elemento) {
    if (i < mensaje.length) {
        elemento.innerHTML += mensaje.charAt(i) === "\n" ? "<br>" : mensaje.charAt(i);
        i++;
        setTimeout(() => escribirTexto(elemento), 60);
    } else {
        if (!corazonMostrado) {
            mostrarCorazon();
            corazonMostrado = true;
        }
    }
}

function mostrarCorazon() {
    const corazon = document.getElementById("corazonCarta");
    corazon.innerHTML = "❤️";
    corazon.style.opacity = 1;
}
