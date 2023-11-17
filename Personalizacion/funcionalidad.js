let vistaPrevia = document.querySelector(".recuadro");
let texto = document.querySelector("#texto");

texto.addEventListener("keyup", ()=>{
    vistaPrevia.innerHTML= texto.value;
});

let color_fondo = document.querySelector("#color_fondo");

color_fondo.addEventListener("change", ()=>{

vistaPrevia.classList.remove("Rojo", "Azul", "Violeta");
vistaPrevia.classList.add(color_fondo.value);




});

let color_texto = document.querySelectorAll("#color_texto");

/*color_texto.forEach((color_texto) =>{
    color_texto.addEventListener("click", ()=>{
        vistaPrevia.classList.remove("Amarillo", "Verde", "Blanco");
        vistaPrevia.classList.add(color_texto.value);
        

    })
}); */


color_texto.forEach((color_texto) =>{
    color_texto.addEventListener("click", ()=>{
        vistaPrevia.classList.remove("Amarillo", "Verde", "Blanco");
        vistaPrevia.classList.add(color_texto.value);
    })
})
    
