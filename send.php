<?php

$fio = $_POST['username'];

$email = $_POST['email'];

$message = $_POST['message'];

$fio = htmlspecialchars($fio);

$email = htmlspecialchars($email);

$message = htmlspecialchars($message);

$fio = urldecode($fio);

$email = urldecode($email);

$message = urldecode($message);

$fio = trim($fio);

$email = trim($email);

$message = trim($message);

if (mail("sannnna30@gmail.com", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email."Сообщение:".$message))

 {     header('Location: index.html'); ; 

} else { 

    echo "при отправке сообщения возникли ошибки";

}?>