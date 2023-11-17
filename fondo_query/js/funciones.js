$(document).ready(function(){
    $("input[name='fondo']").change(function(){
        //console.log($(this).val());
        /*1.-Sacarle a vista-previa las clases de fondo1,2 y 3*/
        $(".vista-previa").removeClass("fondo1 fondo2 fondo3");
        /*2.-En funcion de lo que venga, agregar la clase fondo1, 2 o 3*/
        switch($(this).val()){
            case "1":
                $(".vista-previa").addClass("fondo1");
            break;
            case "2":
                $(".vista-previa").addClass("fondo2");
            break;
            case "3":
                $(".vista-previa").addClass("fondo3");
            break;
        }
    });
    $("#nombre").keyup(function(){
        /*let nombre=$("#nombre").val();
        $("#texto").text(nombre);*/
        $("#texto").text($(this).val());
    });
    $("#tipografia").change(function(){
        /*1.-limpiar las clases*/
        $("#texto").removeClass();
        /*2.- agregar las clases de texto*/
        switch($(this).val()){
            case "roboto":
                $("#texto").addClass("fuente-roboto");
            break;
            case "yanone":
                $("#texto").addClass("fuente-yanone");
            break;
        }
        
    });

    $("input[name='color']").change(function(){
        //console.log($(this).val());
        /*1.-Sacarle a vista-previa las clases de fondo1,2 y 3*/
        $("#texto").removeClass("coltext1 coltext2");
        /*2.-En funcion de lo que venga, agregar la clase fondo1, 2 o 3*/
        switch($(this).val()){
            case "negro":
                $("#texto").addClass("coltext1");
            break;
            case "blanco":
                $("#texto").addClass("coltext2");
            break;
        }
    });
});

/*
    .text()//pisa el contenido
    .append()//agrega al final
    .empty()//vacia el contenido
*/