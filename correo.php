<?php
$myemail = 'tekel.jonathan@gmail.com';
$name = $_POST['nombre'];
$email = $_POST['email'];
$asunto = $_POST['asunto'];
$message = $_POST['mensaje'];

$to = $myemail;
$email_subject = "Nuevo mensaje: $asunto";
$email_body = "Haz recibido un nuevo mensaje. \n Nombre: $name \n Correo: $email \n Mensaje: \n $message";
$headers = "From: $email";

mail($to, $email_subject, $email_body, $headers);
echo "El mensaje se ha enviado correctamente";

?>