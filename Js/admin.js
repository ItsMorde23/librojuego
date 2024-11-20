function obtenerParametro(parametro) {
    const params = new URLSearchParams(window.location.search);
    return params.get(parametro);
}

document.addEventListener("DOMContentLoaded", function() {
    const usuario = obtenerParametro("usuario");
    const bienvenidaDiv = document.getElementById("bienvenida");
    
    if (usuario) {
        bienvenidaDiv.textContent = `Bienvenido/a ${usuario}`;
    } else {
        bienvenidaDiv.textContent = "Bienvenido/a Invitado";
    }

    bienvenidaDiv.classList.add("mensaje-bienvenida");
});
