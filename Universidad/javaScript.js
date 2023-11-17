
let universidad = document.getElementById("universidad");

let text = document.getElementById("text");

universidad.addEventListener("change", ()=>{
    switch (universidad.value) {
        case "unlam":
            text.innerHTML = "UNLAM"
            break;
        case "uai":
            text.innerHTML = "UAI"
            break;
        case "unsam":
            text.innerHTML = "UNSAM"
            break;
        default:
            text.innerHTML = "Universidad"
            break;
    }
});

let colorFondo = document.getElementById("colorFondo");

let view = document.getElementById("view");

colorFondo.addEventListener("change", ()=>{
    switch (colorFondo.value) {
        case "rojo":
            view.className = "view rojo"
            break;
        case "verde":
            view.className = "view verde"
            break;
        case "azul":
            view.className = "view azul"
            break;
        default:
            view.className = "view"
            break;
    }
})

let radioButtons = document.querySelectorAll('input[name="color"]');
let colorView = document.getElementById("text");


radioButtons.forEach((radio) => {
    radio.addEventListener("change", () => {
        colorView.classList.remove("blanco", "gris", "amarillo");
        switch (radio.value) {
            case "blanco":
                colorView.classList.add("blanco");
                break;
            case "gris":
                colorView.classList.add("gris");
                break;
            case "amarillo":
                colorView.classList.add("amarillo");
                break;
            default:
                break;
        }
    });
});

