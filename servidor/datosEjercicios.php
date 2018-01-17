<?php
    if(isset($_GET["nombre"])){
        echo "PETICIÓN EJERCICIO GET: ".$_GET["nombre"]." ".$_GET["apellidos"];
    }else if(isset($_POST["nombre"])){
        echo "PETICIÓN EJERCICIO POST: ".$_POST["nombre"]." ".$_POST["apellidos"];
    }else{
        echo "HOLA EJERCICIO DE PRUEBA";
    }
?>