let form = document.querySelector("#form");
let mensaje = document.querySelector("#mensaje");
var caracteres = /\S+@\S+\.\S+/;

form.addEventListener("submit", (e)=>{
e.preventDefault();
validar();


})

function validar(){
let mensajeError = "";
let nombre = document.querySelector("#nombre").value;
let apellido = document.querySelector("#apellido").value;
let contra = document.querySelector("#contra");
let repetir_contra = document.querySelector("#repetir_contra");
let error = false;
let email = document.querySelector("#email").value;

if(nombre == ""){
    error = true;
    mensajeError+= "<p> El campo nombre no puede estar vacio </p>";

}

if(apellido == ""){
    error = true;
    mensajeError+= "<p> El campo apellido no puede estar vacio </p>";
}

if(!caracteres.test(email)){
    error = true;
    mensajeError+= "<p> El email tiene que contener @ </p>";
}

if(contra.value.length < 4){
    error = true;
    mensajeError+= "<p> La contra tiene que contener mas de 4 caracteres </p>";
}

if(repetir_contra.value != contra.value){
    error = true;
    mensajeError+= "<p> La contra tiene que ser igual </p>";
}



if(error){
    mensaje.innerHTML=mensajeError;
}else{
    alert("Validacion completada");
    form.submit();
}


}