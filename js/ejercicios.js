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


function funcionAjaxAsincrona(){
    miXHR = objetoXHR();

    llamadaAsincrona();
}

function llamadaAsincrona(){

    miXHR.open("GET", "servidor/datosEjercicios.php");
    miXHR.onreadystatechange = comprobarEstadoPeticion;
    miXHR.send(null);

}

function comprobarEstadoPeticion(){
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("resultado").innerHTML = this.responseText;
    }
}

function funcionAjaxAsincronaGET(){
    miXHR = objetoXHR();

    llamadaAsincronaGET();
}

function llamadaAsincronaGET(){

    miXHR.open("GET", "servidor/datosEjercicios.php?nombre=PRUEBA&apellidos=EJERCICIO");
    miXHR.onreadystatechange = comprobarEstadoPeticion;
    miXHR.send(null);
}

function funcionAjaxAsincronaPOST(){
    miXHR = objetoXHR();

    llamadaAsincronaPOST();
}

function llamadaAsincronaPOST(){

    miXHR.open("POST", "servidor/datosEjercicios.php");
    miXHR.onreadystatechange = comprobarEstadoPeticion;
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var datos = "nombre=PRUEBA&apellidos=EJERCICIO";
    miXHR.send(datos);
}

function funcionAjaxSuma5(){
    miXHR = objetoXHR();

    llamadaAsincronaSuma5();
}

function funcionAjaxMultiplicacion(){
    miXHR = objetoXHR();

    llamadaAsincronaMultiplicacion();
}

function llamadaAsincronaSuma5(){

    miXHR.open("POST", "servidor/datosSuma5.php");
    miXHR.onreadystatechange = comprobarEstadoPeticionSuma5;
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var datos = "numero="+document.getElementById("numero").value;
    miXHR.send(datos);
}

function comprobarEstadoPeticionSuma5(){
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("resultadoSuma5").innerHTML = this.responseText;
        llamadaAsincronaMultiplicacion(this.responseText)
    }
}

function llamadaAsincronaMultiplicacion(num1){
    miXHR.open("POST", "servidor/datosMultiplicacion.php");
    miXHR.onreadystatechange = comprobarEstadoMultiplicacion;
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var num2 = document.getElementById("numero2").value;
    var datos = "numero="+ num1 +"&numero2="  + num2;
    miXHR.send(datos);
}

function comprobarEstadoMultiplicacion (){
    if(this.readyState == 4 && this.status == 200){
        document.getElementById("resultadoMultiplicacion").innerHTML = this.responseText;
    }
}

