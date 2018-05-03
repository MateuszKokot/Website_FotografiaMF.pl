<!--
1.Hamburger menu zrobiony z divów
2.Preloader z animowanym logo
3.Stworzenie i podpięcie formularza zgłoszeniowego
4. W mozzilli jest zwalone styloanie galerri. Tylko elementy, które sa tworzone w JS. Dodanie parametru vh vw w JS powinno załątwić sprawe. Galeria się zoomuje
 -->

<html>
<head> 
  <meta charset="utf-8"> 
  <title>Milena Fleter Fotografia</title>  
  <link rel="Shortcut icon" href="images/logo.png" />       
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> 
  <link rel="stylesheet" href="reset.css"> 
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" type="text/css" href="css/demo.css" />
  <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
  <script src="moveit.js"></script>         
  <script src="jquery.js"></script>      
  <script src="scripts.js"></script>         
          
</head>     
<body onselectstart="return false"> 
  <div class="container"> 
    <svg width="6vw" height="6vw"> 
      <path id="first" d="M 30 40 L 70 40 C 90 40 90 75 60 85 A 40 40 0 0 1 20 20 L 80 80" style="visibility: visible; stroke-dasharray: 43.5236, 246.634; stroke-dashoffset: 63.8346; transition: stroke-dashoffset 0.9s cubic-bezier(0.7, 0, 0.3, 1), stroke-dasharray 0.9s cubic-bezier(0.7, 0, 0.3, 1); stroke-opacity: 1;"></path>                 
      <path id="middle" d="M 30 50 L 70 50" style="visibility: visible; stroke-dasharray: 0, 40; stroke-dashoffset: 20; transition: stroke-dashoffset 0.9s cubic-bezier(0.7, 0, 0.3, 1), stroke-dasharray 0.9s cubic-bezier(0.7, 0, 0.3, 1); stroke-opacity: 1;"></path>                 
      <path id="second" d="M 70 60 L 30 60 C 10 60 10 20 40 15 A 40 38 0 1 1 20 80 L 80 20" style="visibility: visible; stroke-dasharray: 43.707, 305.949; stroke-dashoffset: 64.6863; transition: stroke-dashoffset 0.9s cubic-bezier(0.7, 0, 0.3, 1), stroke-dasharray 0.9s cubic-bezier(0.7, 0, 0.3, 1); stroke-opacity: 1;"></path>                 
    </svg>             
    <div class="trigger"></div>             
  </div>

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