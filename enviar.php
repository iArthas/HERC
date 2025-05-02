<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre   = htmlspecialchars($_POST['nombre']);
    $email    = htmlspecialchars($_POST['email']);
    $telefono = htmlspecialchars($_POST['telefono']);
    $mensaje  = htmlspecialchars($_POST['mensaje']);

    $destinatario = "administracion@hercperforaciones.com";
    $asunto = "Nuevo mensaje de contacto";

    $contenido = "Nombre: $nombre\n";
    $contenido .= "Correo: $email\n";
    $contenido .= "Teléfono: $telefono\n";
    $contenido .= "Mensaje:\n$mensaje";

    $headers = "From: $email";

    if (mail($destinatario, $asunto, $contenido, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}

