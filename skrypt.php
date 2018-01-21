 <?php
if(empty($_POST['submit'])){
?>

<?php
/*sprawdzenie wypełnienia wszystkich pól*/
}elseif(!empty($_POST['imienazwisko']) && !empty($_POST['email']) && !empty($_POST['trescwiadomosci'])){
/* Funkcja sprawdzająca poprawność E-Maila */
function SprawdzEmail($email) {
 if (!eregi("^[_.0-9a-z-]+@([0-9a-z][0-9a-z-]+.)+[a-z]{2,4}$" , $email)){
  return false;
 }
 return true;
}
if(SprawdzEmail($_POST['email'])){
/* Tworzymy szkielet wysyłanej wiadomości */
$adresemail='ever1942@gmail.com'; /* Wpisz swój adres e-mail */
/* Wybierz kodowanie znaków usuwając // */
//$charset = 'iso-8859-2';
//$charset = 'utf-8';
$wiadomosc="Od: $_POST[imienazwisko] ($_POST[email])\n\n$_POST[trescwiadomosci]";
$nadawca="From: $_POST[email]";
@mail($adresemail, "Formularz kontaktowy z www.FotografiaFP.pl", "$wiadomosc", "$nadawca");
echo "<script>alert('Dziękujemy, formularz został wysłany.'); document.location.href='../index.php';</script>";;
}else{ echo "<script>alert('Wprowadzony adres e-mail jest niepoprawny.'); document.location.href='../index.php';</script>"; }
}else{ echo "<script>alert('Wypełnij wszystkie pola formularza.'); document.location.href='../index.php';</script>"; }
?>