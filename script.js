const botonEmpezar = document.getElementById("botonEmpezar");

const pantallaInicio = document.getElementById("pantallaInicio");

const capituloUno = document.getElementById("capituloUno");
const capituloDos = document.getElementById("capituloDos");
const capituloTres = document.getElementById("capituloTres");
const capituloCuatro = document.getElementById("capituloCuatro");
const capituloCinco = document.getElementById("capituloCinco");
const capituloSeis = document.getElementById("capituloSeis");
const capituloSiete = document.getElementById("capituloSiete");


/* =========================
   CAPÍTULO 1
========================= */

const pasosUno = document.querySelectorAll("#capituloUno .paso");
const botonSiguiente = document.getElementById("botonSiguiente");

let pasoActualUno = 0;


/* =========================
   CAPÍTULO 2
========================= */

const pasosDos = document.querySelectorAll("#capituloDos .paso-dos");
const botonSiguienteDos = document.getElementById("botonSiguienteDos");

let pasoActualDos = 0;


/* =========================
   CAPÍTULO 3
========================= */

const pasosTres = document.querySelectorAll("#capituloTres .paso-tres");
const botonSiguienteTres = document.getElementById("botonSiguienteTres");

let pasoActualTres = 0;


/* =========================
   CAPÍTULO 4
========================= */

const pasosCuatro = document.querySelectorAll("#capituloCuatro .paso-cuatro");
const botonSiguienteCuatro = document.getElementById("botonSiguienteCuatro");

let pasoActualCuatro = 0;


/* =========================
   CAPÍTULO 5
========================= */

const pasosCinco = document.querySelectorAll("#capituloCinco .paso-cinco");
const botonSiguienteCinco = document.getElementById("botonSiguienteCinco");

let pasoActualCinco = 0;


/* =========================
   CAPÍTULO 6
========================= */

const pasosSeis = document.querySelectorAll("#capituloSeis .paso-seis");
const botonSiguienteSeis = document.getElementById("botonSiguienteSeis");

let pasoActualSeis = 0;


/* =========================
   INICIO
========================= */

botonEmpezar.addEventListener("click", function () {

    pantallaInicio.classList.remove("activa");

    capituloUno.classList.add("activa");

    botonSiguiente.classList.remove("oculto");

    mostrarSiguientePasoUno();

});


/* =========================
   CAPÍTULO 1
========================= */

botonSiguiente.addEventListener("click", function () {

    if (pasoActualUno < pasosUno.length) {

        mostrarSiguientePasoUno();

    } else {

        capituloUno.classList.remove("activa");

        capituloDos.classList.add("activa");

        botonSiguienteDos.classList.remove("oculto");

        mostrarSiguientePasoDos();

    }

});


function mostrarSiguientePasoUno() {

    if (pasoActualUno < pasosUno.length) {

        pasosUno[pasoActualUno].classList.remove("oculto");

        pasosUno[pasoActualUno].classList.add("visible");

        pasoActualUno++;

    }

}


/* =========================
   CAPÍTULO 2
========================= */

botonSiguienteDos.addEventListener("click", function () {

    if (pasoActualDos < pasosDos.length) {

        mostrarSiguientePasoDos();

    } else {

        capituloDos.classList.remove("activa");

        capituloTres.classList.add("activa");

        botonSiguienteTres.classList.remove("oculto");

        mostrarSiguientePasoTres();

    }

});


function mostrarSiguientePasoDos() {

    if (pasoActualDos < pasosDos.length) {

        pasosDos[pasoActualDos].classList.remove("oculto");

        pasosDos[pasoActualDos].classList.add("visible");

        pasoActualDos++;

    }

}


/* =========================
   CAPÍTULO 3
========================= */

botonSiguienteTres.addEventListener("click", function () {

    if (pasoActualTres < pasosTres.length) {

        mostrarSiguientePasoTres();

    } else {

        capituloTres.classList.remove("activa");

        capituloCuatro.classList.add("activa");

        botonSiguienteCuatro.classList.remove("oculto");

        mostrarSiguientePasoCuatro();

    }

});


function mostrarSiguientePasoTres() {

    if (pasoActualTres < pasosTres.length) {

        pasosTres[pasoActualTres].classList.remove("oculto");

        pasosTres[pasoActualTres].classList.add("visible");

        pasoActualTres++;

    }

}


/* =========================
   CAPÍTULO 4
========================= */

botonSiguienteCuatro.addEventListener("click", function () {

    if (pasoActualCuatro < pasosCuatro.length) {

        mostrarSiguientePasoCuatro();

    } else {

        capituloCuatro.classList.remove("activa");

        capituloCinco.classList.add("activa");

        botonSiguienteCinco.classList.remove("oculto");

        mostrarSiguientePasoCinco();

    }

});


function mostrarSiguientePasoCuatro() {

    if (pasoActualCuatro < pasosCuatro.length) {

        pasosCuatro[pasoActualCuatro].classList.remove("oculto");

        pasosCuatro[pasoActualCuatro].classList.add("visible");

        pasoActualCuatro++;

    }

}


/* =========================
   CAPÍTULO 5
========================= */

botonSiguienteCinco.addEventListener("click", function () {

    if (pasoActualCinco < pasosCinco.length) {

        mostrarSiguientePasoCinco();

    } else {

    capituloCinco.classList.remove("activa");

    capituloSeis.classList.add("activa");

    botonSiguienteSeis.classList.remove("oculto");

    mostrarSiguientePasoSeis();

}

});


function mostrarSiguientePasoCinco() {

    if (pasoActualCinco < pasosCinco.length) {

        pasosCinco[pasoActualCinco].classList.remove("oculto");

        pasosCinco[pasoActualCinco].classList.add("visible");

        pasoActualCinco++;

    }

}


/* =========================
   CAPÍTULO 6
   INTRODUCCIÓN
========================= */

function mostrarSiguientePasoSeis() {

    if (pasoActualSeis < pasosSeis.length) {

        pasosSeis[pasoActualSeis].classList.remove("oculto");

        pasosSeis[pasoActualSeis].classList.add("visible");

        pasoActualSeis++;

    }

}
/* =========================
   BOTÓN CAPÍTULO 6
========================= */

botonSiguienteSeis.addEventListener("click", function () {

    if (pasoActualSeis < pasosSeis.length) {

        mostrarSiguientePasoSeis();

    }

    if (pasoActualSeis === pasosSeis.length) {

        botonSiguienteSeis.classList.add("oculto");

    }

});


/* =========================
   ELEMENTOS DE LA CARTA
========================= */

const sobreCarta = document.getElementById("sobreCarta");

const cartaCompleta = document.getElementById("cartaCompleta");

const imagenCarta = document.getElementById("imagenCarta");

const botonPaginaCarta = document.getElementById("botonPaginaCarta");

const finalCarta = document.getElementById("finalCarta");

const botonFinalCarta = document.getElementById("botonFinalCarta");


/* =========================
   ABRIR SOBRE
========================= */

sobreCarta.addEventListener("click", function () {

    if (sobreCarta.classList.contains("abierto")) {
        return;
    }

    sobreCarta.classList.add("abierto");

    setTimeout(function () {

        sobreCarta.classList.add("oculto");

        cartaCompleta.classList.remove("oculto");

    }, 900);

});


/* =========================
   PASAR PÁGINA
========================= */

let paginaCarta = 1;


botonPaginaCarta.addEventListener("click", function () {

    if (paginaCarta === 1) {

        imagenCarta.src = "Fotos/Cartas/Pagina 2.jpeg";

        paginaCarta = 2;

        botonPaginaCarta.textContent =
            "Terminar de leer ❤️";

    } else {

        cartaCompleta.classList.add("oculto");

        finalCarta.classList.remove("oculto");

    }

});


/* =========================
   CONTINUAR DESPUÉS DE LA CARTA
========================= */

botonFinalCarta.addEventListener("click", function () {

    // Cerramos el capítulo anterior
    capituloSeis.classList.remove("activa");

    // Abrimos el capítulo 7
    capituloSiete.classList.add("activa");

    // Después de una pequeña pausa,
    // mostramos la pregunta
    setTimeout(function () {

        document
            .getElementById("frasePropuesta")
            .classList.add("oculto");

        document
            .getElementById("preguntaPropuesta")
            .classList.remove("oculto");

    }, 3500);

});


/* =========================
   RECUERDOS INTERACTIVOS
========================= */

const tarjetasRecuerdo =
    document.querySelectorAll(".tarjeta-recuerdo");

const modalRecuerdo =
    document.getElementById("modalRecuerdo");

const contenidoModal =
    document.getElementById("contenidoModal");

const cerrarModal =
    document.getElementById("cerrarModal");


/* =========================
   INFORMACIÓN DE RECUERDOS
========================= */

const recuerdos = {

    "primer-dia": {

        titulo: "El primer día 🤝❤️",

        texto:
            "Después de tanto hablar, finalmente nos vimos. Y todavía me parece increíble lo natural que se sintió estar con vos desde ese primer momento.",

        tipo: "imagen",

        archivo: "Fotos/Primer dia.jpeg"

    },


    "llamaditas": {

        titulo: "Nuestras llamaditas 📞❤️",

        texto:
            "Espero el final del día para poder compartir con vos un momento, contarnos cómo estuvo nuestro día y ver la carita más linda de este mundo.",

        tipo: "imagen",

        archivo: "Fotos/Llamada.jpeg"

    },


    "paseos": {

        titulo: "Salir a pasear 🚶❤️",

        texto:
            "Porque caminar con vos nunca es solamente caminar. Con vos, hasta perder el tiempo juntos se siente como aprovecharlo.",

        tipo: "imagen",

        archivo: "Fotos/Paseo.jpeg"

    },


    "mundial": {

        titulo: "Mirar partidos juntos ⚽❤️",

        texto:
            "Hasta mirar un partido se siente diferente cuando lo comparto con vos.",

        tipo: "video",

        archivo: "Videos/Mundial.mp4"

    },


    "flores": {

        titulo: "Las flores 💐❤️",

        texto:
            "Ir a buscarte con flores fue una de esas cosas que parecen simples, pero que para mí significaron muchísimo.",

        tipo: "imagen",

        archivo: "Fotos/Flores.jpeg"

    },


    "dormir": {

        titulo: "Dormir juntos 🛏️❤️",

        texto:
            "Hay una tranquilidad muy especial en simplemente estar cerca tuyo.",

        tipo: "imagen",

        archivo: "Fotos/Dormir.jpeg"

    }

};


/* =========================
   ABRIR RECUERDO
========================= */

tarjetasRecuerdo.forEach(function (tarjeta) {

    tarjeta.addEventListener("click", function () {

        const id = tarjeta.dataset.recuerdo;

        const recuerdo = recuerdos[id];


        if (!recuerdo) {

            console.error(
                "No se encontró el recuerdo:",
                id
            );

            return;

        }


        let mediaHTML = "";


        /* FOTO */

        if (recuerdo.tipo === "imagen") {

            mediaHTML = `

                <img
                    src="${recuerdo.archivo}"
                    class="imagen-recuerdo"
                    alt="${recuerdo.titulo}"
                >

            `;

        }


        /* VIDEO */

        if (recuerdo.tipo === "video") {

            mediaHTML = `

                <video
                    class="video-recuerdo"
                    controls
                    playsinline
                >

                    <source
                        src="${recuerdo.archivo}"
                        type="video/mp4"
                    >

                    Tu navegador no puede reproducir este video.

                </video>

            `;

        }


        /* CONTENIDO MODAL */

        contenidoModal.innerHTML = `

            <h2>
                ${recuerdo.titulo}
            </h2>

            <p class="texto-modal">
                ${recuerdo.texto}
            </p>

            ${mediaHTML}

        `;


        modalRecuerdo.classList.remove("oculto");

    });

});


/* =========================
   CERRAR RECUERDO
========================= */

cerrarModal.addEventListener("click", function () {

    modalRecuerdo.classList.add("oculto");

});


/* =========================
   CERRAR AL TOCAR AFUERA
========================= */

modalRecuerdo.addEventListener("click", function (event) {

    if (event.target === modalRecuerdo) {

        modalRecuerdo.classList.add("oculto");

    }

});
/* =========================
   CAPÍTULO 7
   PROPUESTA
========================= */

const botonNo = document.getElementById("botonNo");
const botonObvio = document.getElementById("botonObvio");
const botonVolverPregunta =
    document.getElementById("botonVolverPregunta");

const preguntaPropuesta =
    document.getElementById("preguntaPropuesta");

const rechazoPropuesta =
    document.getElementById("rechazoPropuesta");

const respuestaPropuesta =
    document.getElementById("respuestaPropuesta");


/* SI ELIGE "QUE ASCO, NO" */

function rechazarPropuesta() {

    preguntaPropuesta.classList.add("oculto");

    respuestaPropuesta.classList.add("oculto");

    rechazoPropuesta.classList.remove("oculto");

}


/* SI ELIGE "OBVIO QUE SÍ" */

function aceptarPropuesta() {

    preguntaPropuesta.classList.add("oculto");

    rechazoPropuesta.classList.add("oculto");

    respuestaPropuesta.classList.remove("oculto");

}


/* VOLVER A LA PREGUNTA */

function volverAPregunta() {

    rechazoPropuesta.classList.add("oculto");

    respuestaPropuesta.classList.add("oculto");

    preguntaPropuesta.classList.remove("oculto");

}


if (botonNo) {
    botonNo.addEventListener("click", rechazarPropuesta);
}

if (botonObvio) {
    botonObvio.addEventListener("click", aceptarPropuesta);
}

if (botonVolverPregunta) {
    botonVolverPregunta.addEventListener("click", volverAPregunta);
}
