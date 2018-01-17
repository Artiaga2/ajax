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

function LlamadaAsincronaUsuario() {
    miXHR.open("POST", "servidor/datosUsuario.php");
    miXHR.onreadystatechange = comprobarEstadoPeticionUsuario;
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
}