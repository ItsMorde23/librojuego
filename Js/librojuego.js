const musicaFondo = document.getElementById('musicaFondo');
const playButton = document.getElementById('playAudio');
        
// Reproducir la música cuando el botón sea presionado
playButton.addEventListener('click', function() {
    musicaFondo.play();  // Reproducir la música
    playButton.textContent = "Pausar Música";  // Cambiar el texto del botón

    // Cambiar el texto del botón para pausar cuando la música se está reproduciendo
    playButton.addEventListener('click', function() {
        if (musicaFondo.paused) {
            musicaFondo.play();
            playButton.textContent = "Pausar Música";
        } else {
            musicaFondo.pause();
            playButton.textContent = "Reproducir Música";
        }
    });
});

document.querySelectorAll('.RegPun').forEach((regPunt) => {
    regPunt.closest('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Previene que el formulario se envíe
        alert("Puntaje registrado con éxito");
        window.location.href = './index.html'; // Redirección
    });
});

function seguirHistoria(opcion) {
    if (opcion === 'botoncap1.0') {
        window.location.href = './capitulo2A.html';
    } else if (opcion === 'botoncap1.1') {
        window.location.href = './capitulo2B.html';
    }

    if (opcion === 'botoncap2A.0') {
        window.location.href = './final1A.html';
    } else if (opcion === 'botoncap2A.1') {
        window.location.href = './final1B.html';
    }

    if (opcion === 'botoncap2B.0') {
        window.location.href = './final2A.html';
    } else if (opcion === 'botoncap2B.1') {
        window.location.href = './final2B.html';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.boton').forEach((boton) => {
        boton.addEventListener('click', (event) => {
            seguirHistoria(event.target.id); // Usamos el ID del botón
        });
    });
});