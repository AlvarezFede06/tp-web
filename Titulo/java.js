let txt = document.getElementById("txt");

let textInput = document.getElementById("text");

textInput.addEventListener("input", ()=>{
    if (textInput.value == "") {
        txt.innerHTML = "Titulo";
    }else{
        txt.innerHTML = textInput.value
    }
});

let ejemploColor = document.getElementById("ejemplo");

let colorSeleccionado = document.getElementById("color");

colorSeleccionado.addEventListener("change", ()=>{
    switch (colorSeleccionado.value) {
        case "rojo":
            ejemploColor.className = "ejemplo rojo"
            break;
        case "verde":
            ejemploColor.className = "ejemplo verde"
            break;
        case "azul":
            ejemploColor.className = "ejemplo azul"
            break;
        default:
            ejemploColor.className = "ejemplo"
            break;
    }
});

let radioButtons = document.querySelectorAll('input[name="texto"]');

radioButtons.forEach((radio) =>{
    radio.addEventListener("change", ()=>{
        switch (radio.value) {
            case "izquierda":
                txt.classList.remove("txtCentrado","txtDerecha");
                txt.classList.add("txtIzquierda");
                break;
            case "derecha":
                txt.classList.remove("txtCentrado","txtIzquierda");
                txt.classList.add("txtDerecha");
                break;
            default:
                txt.classList.remove("txtDerecha","txtIzquierda");
                txt.classList.add("txtCentrado");
                break;
        }
})
})