// Checks

function actualizarTitulo(radio) {
    if (radio.checked) {
        // Obtener el elemento h3 con clase "ache" dentro del radio seleccionado
        let h3 = radio.parentNode.querySelector('.ache');
        
        // Obtener el texto del h3
        let nuevoTitulo = h3.innerText;
        
        // Obtener el elemento con el ID 'tit' que es el título actual
        let titulo = document.getElementById('tit');
        
        // Actualizar el contenido del título con el texto del h3 del radio seleccionado
        titulo.innerText = nuevoTitulo;
    }
}

// Select fondo

document.addEventListener("DOMContentLoaded", function() {
    
    const select = document.querySelector("#selectColorFondo");
    const colores = {
        gris: "grey",
        cian: "cyan",
        amarillo: "yellow"
    };

    select.addEventListener("change", function() {
        const colorSeleccionado = select.value;

        // Corrección del selector para acceder al artículo con clase "special"
        const articleDelTitulo = document.querySelector(".articlecuaderno.special");

        articleDelTitulo.style.backgroundColor = colores[colorSeleccionado];
    });

// Select texto

    const selectTexto = document.querySelector("#selectColorTexto");

    const coloresTexto = {
        rojo: "red",
        verde: "green",
        naranja: "orange"
    }

    selectTexto.addEventListener("change", function() {
        const colorSeleccionado = selectTexto.value;

        const textoAModificar = document.getElementById('tit');

        textoAModificar.style.color = coloresTexto[colorSeleccionado]
    })

});