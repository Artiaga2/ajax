function realizarPeticion(url,tipo,datos,tipoRespuesta,funcionCallback){
    $.ajax({
        url: "servidor/datosSuma5.php",
        method: "GET",
        data: {numero: $("#numero").val()},
        type: html,
    })  .done(function(datos) {
        $("divResultado").text(datos)
    })
}
