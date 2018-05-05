<!--
2.Preloader z animowanym logo
3. W mozzilli jest zwalone styloanie galerri. Tylko elementy, które sa tworzone w JS. Dodanie parametru vh vw w JS powinno załątwić sprawe. Galeria się zoomuje
4. Podlinkować napisy w home + 
 -->

<html>
<head> 
  <meta charset="utf-8">
  <title>Milena Fleter Fotografia</title>  
  <link rel="Shortcut icon" href="images/logo.png" />       
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> 
  <link rel="stylesheet" href="reset.css"> 
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
  <script src="moveit.js"></script>         
  <script src="jquery.js"></script>      
  <script src="scripts.js"></script>         
          
</head> 
<body onselectstart="return false"> 

  <nav role="navigation">
    <div class="hamburgerMenu">
      <input id="checkbox" type="checkbox" class="trigger" />
        <span class="ml menuLineOne"></span> 
        <span class="ml menuLineTwo"></span> 
       <span class="ml menuLineThree"></span>        
    </div>
  </nav>

  <!-- MENU - ukryte pod bramami-->      
  <div class="menu">
      <div class="bigLogo"> 
      </div>
        <ul class="nav">
          <li class="activ menuitem trigger thisPage" id="home" onclick="openHome ()">Home</li>
          <div class="separatorMenu"></div>
          <li class="activ menuitem trigger" id="aboutMe" onclick="openAboutMe ()">O mnie</li>
          <div class="separatorMenu"></div>
          <li class="menuitem" id="gallery" >Galerie</li>
          <div class="separatorMenu"></div>
          <li class="activ menuitem trigger" id="contact" onclick="openContact ()">Kontakt</li>
        </ul>
  </div>
  <div class="gallerymenu">
        <ul >
          <li class=" gallerymenuitem bar galleryBar hiddenGallery"> &#9001&#9001&#9001&nbsp&nbsp&nbsp Powrót do Menu</li>
          <div class="separatorMenu"></div>
          <li class=" activeGallery gallerymenuitem trigger hiddenGallery" onclick="slubne()">Śluby</li>
          <div class="separatorMenu"></div>
          <li class=" activeGallery gallerymenuitem trigger hiddenGallery" onclick="dzieci()">Dzieci</li>
          <div class="separatorMenu"></div>
          <li class=" activeGallery gallerymenuitem trigger hiddenGallery" onclick="rodzinne()">Rodzinne</li>
          <div class="separatorMenu"></div>
          <li class=" activeGallery gallerymenuitem trigger hiddenGallery" onclick="brzuszkowe()">Brzuszkowe</li>
          <div class="separatorMenu"></div>
          <li class=" activeGallery gallerymenuitem trigger hiddenGallery" onclick="portrety()">Portrety</li>
          <div class="separatorMenu"></div>
          <li class=" activeGallery gallerymenuitem trigger hiddenGallery" onclick="imprezy()">Okolicznościowe</li>
        </ul>
  </div>

    <!-- LEWA BRAMA-->      
      <div class="leftGate trigger" id="leftGate">
        <div class="smallLogo"></div>

      </div>    

    <!-- PRAWA BRAMA-->           
      <div class="rightGate" id="rightGate">
 
      </div>           
  <script>function injectCss(evt) {    
  var newCss = evt.data;    
  var newStyle = document.createElement("style");    
  newStyle.className = "kodnest-auto-reload";    
  if (newStyle.stylesheet) {        
  newStyle.stylesheet.cssText = newCss;    
  } else {        
  newStyle.appendChild(document.createTextNode(newCss));    
  }    
  document.head.appendChild(newStyle);    
  newStyle.parentNode.removeChild(document.querySelector(".kodnest-auto-reload"));}if (window.addEventListener) {    
  window.addEventListener("message", injectCss, false);}else {    window.attachEvent("onmessage", injectCss);
  }</script>
</body>     
</html>