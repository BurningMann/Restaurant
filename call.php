<?php
$fio = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$fio = htmlspecialchars($fio);
$phone = htmlspecialchars($phone);
$message = htmlspecialchars($message);
$fio = urldecode($fio);
$phone = urldecode($phone);
$message = urldecode($message);
$fio = trim($fio);
$phone = trim($phone);
$message = trim($message);
if (mail("sannnnna@bk.ru", "Заявка с сайта", "ФИО:".$fio.". Phone: ".$phone."Сообщение:".$message ,"From: sassssha@bk.ru \r\n"))
 {     header('Location: index.html'); ; 
} else { 
    echo "при отправке сообщения возникли ошибки";
}?>