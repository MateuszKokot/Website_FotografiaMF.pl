<html> 
<head> 
  <meta charset="utf-8"> 
  <title>Contact</title>         
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> 
  <link rel="stylesheet" href="../reset.css"> 
  <link rel="stylesheet" href="style_contact.css">
  <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
  <script src="../moveit.js"></script>         
  <script src="../jquery.js"></script>      
  <script src="scripts_contact.js"></script>         
  <style></style>         
</head> 
<!--BODY-->
<body class="bodyContact" onselectstart="return false;">
  <div class="leftBar">
    <div class="contactBar">
      <h1>Kontakt</h1>
      <p>Cieszę się, że chcesz się ze mną skontaktować. Razem możemy stworzyć coś niezapomnianego</p>
      <h3>Adres</h3>
      <p>ul. Chartowo 27<br>61-245 Poznań</p>
      <div class="separator"></div>
      <h3>Dane Kontaktowe</h3>
      <p>milena.fleter@gmail.com</p>
      <p>+48 881 234 825</p>
      <div class="separator"></div>
      <h3>Social Media</h3>
      <div class="socialMedia">
        <a class="facebook" href="https://web.facebook.com/MilenaFlet/" target="_blank"></a>
        <a class="instagram" href="https://www.instagram.com/milena_fleter_fotografia/" target="_blank"></a>
      </div>
      <div class="button" onclick="contactFormShow()">Napisz do nas !</dvi>
    </div>
  </div>
  <div class="mapBar">
    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9741.435188185736!2d16.958635446167662!3d52.382045724268686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045bb008d2f16d%3A0x23d7a7506a661b02!2sTarasy+Malty!5e0!3m2!1spl!2spl!4v1523386090753" 
    allowfullscreen></iframe>
  </div>

  <div class="backgroundForm" onclick="contactFormHidden()"></div>
    <div class="contactForm">
        <form action="../skrypt.php" method="post"> 
            <!--nazwa strony na której znajduje się formularz-->
            <h1>Napisz do nas</h1>
            <p>Imię i Nazwisko:</p>
            <input class="form" type="text" name="imienazwisko"/>
            <p>E-Mail:</p>
            <input class="form" type="text" name="email"/>
            <p>Treść wiadomości:</p>
            <textarea class="form" name="trescwiadomosci" cols="30" rows="6"></textarea>
            <br>
            <input class="formButton" type="submit" name="submit" value="Wyślij formularz" /> 
        </form>
    </div>
</body>     
</html>