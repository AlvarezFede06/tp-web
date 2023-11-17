let vistaPrevia = document.querySelector("#vista-previa");
let titulo = document.querySelector("#titulo");
let texto = document.querySelector("#texto");
let colores = document.querySelector("#colores");
let alineaciones = document.getElementsByName("aling");

alineaciones.forEach((item)=>{
    item.addEventListener("click", ()=>{
        vistaPrevia.classList.remove("izquierda","derecha","centrado");
        vistaPrevia.classList.add(item.value);
    });
});

colores.addEventListener("change", ()=>{
    vistaPrevia.classList.remove("azul","verde","rojo");
    vistaPrevia.classList.add(colores.value);
});

texto.addEventListener("keydown", ()=>{
    titulo.innerHTML = texto.value;
});