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
		return true;}


	if(SprawdzEmail($_POST['email'])){
	/* Tworzymy szkielet wysyłanej wiadomości */
	$adresemail='ever1942@gmail.com'; /* Wpisz swój adres e-mail */
	$charset = 'utf-8';
	$wiadomosc="Od: $_POST[imienazwisko] ($_POST[email])\n\n$_POST[trescwiadomosci]";
	$nadawca="From: $_POST[email]";
	@mail($adresemail, "Formularz kontaktowy z www.FotografiaFP.pl", "$wiadomosc", "$nadawca");
	echo "<script> document.location.href='sub/contact.php'; </script>"; /* Tutaj między <script> </script> wpisujemy kod javascript który wykona się przy poprawnym wysłaniu wiadomości */
	}else{ echo "<script> document.location.href='sub/contact.php'; alert('Adres email niepoprawny - wyślij formularz ponownie');</script>"; } /* Tutaj między <script> </script> wpisujemy kod javascript który wykona się jeśli email jest niepoprawny */

}else{ echo "<script> document.location.href='sub/contact.php'; alert('Uzupełnij wszystkie pola i wyślij formularz ponownie') </script>"; } /* Tutaj między <script> </script> wpisujemy kod javascript który wykona się jeśli nie wypełniono wszystich pól formularza */
?>