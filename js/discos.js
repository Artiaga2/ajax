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

function funcionAjaxDiscos(){
    miXHR = objetoXHR();

    tratarResultadoJSON();
}



function tratarResultadoJSON(){
    miXHR.open("GET", "servidor/discos.php");
    miXHR.onreadystatechange = comprobarEstadoPeticion;
    miXHR.send(null);

}

function comprobarEstadoPeticion(){
    if (this.readyState == 4 && this.status == 200) {
        let resultados= JSON.parse(this.responseText);
        let salida="<table border='1'><tr><th>Nº</th></th><th>NOMBRE</th><th>AUTOR</th><th>ESTILO</th><th>FECHA</th></tr>";

        for (let i=0; i < resultados.length; i++){
            let objeto = resultados[i];
            salida+="<tr><td>"+objeto.id+"</td><td>"+
                objeto.Nombre+"</td><td>"+objeto.Author.Nombre+"</td><td>"+
                objeto.Author.Estilo +"</td><td>"+objeto.Fecha +"</td></tr>";
        }

        salida+="</table>";

        document.getElementById("resultadoAsincronoJSON").innerHTML=salida;
    }
}