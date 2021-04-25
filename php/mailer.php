<?php header('Access-Control-Allow-Origin: *'); ?>

<?
    $adminEmail = "okekeugochukwu.dev@gmail.com";

    $senderName = $_POST["Name"];
    $senderEmail = trim($_POST["Email"]);

    $subject = "New Form Submission form Porfolio Page";

    $headers  = "MIME-Version: 1.0 \r\n";
    $headers .= "Content-type:text/html; charset=UTF-8\r\n";
    $headers .= "Content-Transfer-Encoding: 7bit\r\n"; 

    $message = $_POST["Message"];

    $mailFunction = mail($adminEmail, $subject, $message, $headers);

    if($mailFunction) {
        header (Location: "https://okeke-ugochukwu.github.io/confirmation_message.html");
    }
    else {
        echo "Something went wrong :(";
    }
?>