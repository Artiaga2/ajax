
<?php
   
     $errores = array();
     $mensajes = array();
    
     $texto_nombre = "/^(?:[A-Z][a-z]\D[^0-9]{3,}\s?)+$/";
     $texto_apellidos = "/^(?:[A-Z]\D[^0-9]{5,}\s?)+$/";
    // Comprobar si se ha enviado el formulario:
    if( !empty($_POST) ) {
        echo "FORMULARIO RECIBIDO:<br/>";
        echo "====================<p/>";
        print_r($_POST);
        echo "<hr/>";
        
        if (isset($_POST['Nombre']) && isset($_POST['Apellidos']) && isset($_POST['Edad'])) {
            // Nombre:
            if (empty($_POST['Nombre'])){
                $errores[] = "Debes especificar el nombre";
                }else{
                        if (preg_match($texto_nombre, $_POST['Nombre'])) {
                    $mensajes[] = "Nombre: " . $_POST['Nombre'];
                }else {
                    $errores[] = "El nombre sólo puede contener letras, espacios y debe ser mayor a 3 caracteres";
                }
            }
            // Apellidos:
            if (empty($_POST['Apellidos'])){
                $errores[] = "Debes especificar los apellidos";
            }else {

                if (preg_match($texto_apellidos, $_POST['Apellidos'])) {
                    if (!preg_match($texto_apellidos, $texto_apellidos, $matches, PREG_OFFSET_CAPTURE)){
                        $mensajes[] = "Apellidos: " . $_POST['Apellidos'];
                    } else {
                    $errores[] = "Los apellidos sólo pueden contener letras, espacios y ser mayor a 5 caracteres";
                }
            }

            // Edad:
            if ((isset($_POST['Edad'])) && (!empty($_POST['Edad']))) {
                if (is_numeric($_POST['Edad']) && $_POST['Edad'] > 18)
                    $mensajes[] = "Edad: " . $_POST['Edad'];
                else
                    $errores[] = "El campo edad debe contener un número.";
            }
        }
    }

        echo json_encode($_POST['Nombre'], $_POST['Apellidos'], $_POST['Edad']);
}