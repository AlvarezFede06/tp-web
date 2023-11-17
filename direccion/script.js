const barritaDeBusqueda= document.querySelector("#texto");
const desplegable= document.querySelector("#selector");
const direccion= document.querySelector("#direccion");
const art1= document.querySelector("#art1")

barritaDeBusqueda.addEventListener('keyup', ()=>{
    direccion.innerHTML=barritaDeBusqueda.value;
})

desplegable.addEventListener('change',()=>{
    art1.classList.remove("rojo", "verde", "azul", "letraBlanca")
    if(desplegable.value==='rojo'){
        art1.classList.add("rojo")
        art1.classList.add("letraBlanca")
    }else if(desplegable.value==='azul'){
        art1.classList.add("azul")
        art1.classList.add("letraBlanca")
    }else if(desplegable.value==='verde'){
        art1.classList.add("verde")
        art1.classList.add("letraBlanca")
    }

})