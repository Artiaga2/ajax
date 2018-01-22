function objetoXHR(){
    if (window.XMLHttpRequest){
        return new XMLHttpRequest();
    }else if (window.ActiveXObject){
        var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0',
            'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesIE.length; i++){
            try{
                return new ActiveXObject(versionesIE[i]);
            } catch (errorControlado) {}
        }
    }
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}


function funcionAjaxUsuarios(){
    miXHR = objetoXHR();

    llamadaAsincronaUsuarios();
}


function llamadaAsincronaUsuarios(){

    miXHR.open("POST", "servidor/usuarios.php");
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var nombre = "Nombre= "+document.getElementById("Nombre").value;
    var apellidos =  "Apellidos= "+document.getElementById("Apellidos");
    var edad = "Edad= "+document.getElementById("Edad");
    miXHR.send(nombre);
    miXHR.send(apellidos);
    miXHR.send(edad);
}
