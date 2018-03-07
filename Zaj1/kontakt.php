<?php

// Tworzymy zmienną dla imienia i nazwiska
$name = $_POST['name'];
$sname = $_POST['sname'];

// Tworzymy zmienną dla adresu email
$email = $_POST['email'];

// Tworzymy zmienną dla wiadomości
$message = $_POST['message'];

// Podajesz adres email z którego ma być wysłana wiadomość
$odkogo = "mailer@mikgor.000webhostapp.com";

// Podajesz adres email na który chcesz otrzymać wiadomość
$dokogo = "m.szumigalski@op.pl";

// Podajesz tytuł jaki ma mieć ta wiadomość email
$tytul = "Wiadomość z pracy domowej";

// Przygotowujesz treść wiadomości
$wiadomosc = "";
$wiadomosc .= "Imie i nazwisko: " . $name . " " . $sname . "\n";
$wiadomosc .= "Email: " . $email . "\n";
$wiadomosc .= "Wiadomość: " . $message . "\n";

// Wysyłamy wiadomość
$sukces = mail($dokogo, $tytul, $wiadomosc, "Od: <$odkogo>");

// Przekierowywujemy na potwierdzenie
if ($sukces){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=potwierdzenie.php\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.html\">";
}
?>
