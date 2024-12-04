<?php
    $name = $_POST["name"];
    $email = $_POST["email"];
    $comment = $_POST["comment"];

    $name = trim(urldecode(htmlspecialchars($name)));
    $email = trim(urldecode(htmlspecialchars($email)));
    $comment = trim(urldecode(htmlspecialchars($comment)));

    if (mail("dajsaev@mail.ru", "Новый запрос на создание сайта",
    "<h1>На вашем сайте была оставлена заявка!</h1><br>
    от: <strong>$name</strong><br>
    email: <strong>$email</strong><br>
    Пользователь оставил комментарий: <em>$comment</em><br>
    Поздравляем с новой заявкой! Чувствуете? Это запах денег.",
    "From: KAMIN-web-evelopment.ru\r\nContent-type: text/html\r\n")) {
        echo '{"status": "ok"}';
    } else {
        echo '{"status": "error"}';
    }
?>