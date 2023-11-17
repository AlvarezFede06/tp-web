let uni=document.getElementById("uni");
let seleccionar = document.querySelector('input[name="opcion"]:checked')
let color = document.querySelector('input[name="opcion"]:checked');

let variante =document.getElementById("variante");

uni.addEventListener("change", ()=>{
    switch (uni.value) {
        case "color1":
            variante.classList.add ('rojoTXT');
            break;
            
        case "color2":
            variante.classList.add ('verdeTXT');
            break;
        case "color3":
            variante.classList.add ('amarilloTXT');
            break;
        default:
            variante.classList.add ('variante');
            break;
    }

});
  
let radioButtons1 = document.querySelectorAll('input[name="seleccionar"]');
    radioButtons1.forEach((radio) => {
        radio.addEventListener("change", () => {

            switch (radio.value) {
                case "curso1":
                    variante.innerHTML= "HTML";
                    break;
                case "curso2":
                    variante.innerHTML= "CSS";
                    break;
                case "curso3":
                    variante.innerHTML = "JAVASCRIPT";
                    break;
                default:
                    variante.innerHTML = "CURSO"
                    
                    break;
            }
        });
    });

    let radioButtons = document.querySelectorAll('input[name="color"]');
    
    radioButtons.forEach((radio) => {
        radio.addEventListener("change", () => {
            variante.classList.remove(".verde", ".violeta", ".naranja");
    
            switch (radio.value) {
                case "1":
                    variante.className= "variante verde";
                    break;
                case "2":
                    variante.className= "variante violeta";
                    break;
                case "3":
                    variante.className = "variante naranja";
                    break;
                default:
                    
                    break;
            }
        });
    });


   