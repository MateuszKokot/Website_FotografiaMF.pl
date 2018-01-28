//Po wczytaniu plików odpal to
$(document).ready(function(){

wwSmallwwBig()
scrollthumbList()
mousePosition()
});



// Jeśli zmieni się wielkość ekranu
$(window).resize(function(){

wwSmallwwBig()

});


//kod do generowania animowanego hamburger menu
$(function() {
  var open = false,
  duration = 0.9,
  timing = 'cubic-bezier(0.7, 0, 0.3, 1)';
  Moveit.put(first, {
    start: '0%',
    end: '14%',
    visibility: 1
  });
  Moveit.put(second, {
    start: '0%',
    end: '11.5%',
    visibility: 1
  });
  Moveit.put(middle, {
    start: '0%',
    end: '100%',
    visibility: 1
  });
  $('.trigger').click(function() {
    if (!open) {
      Moveit.animate(first, {
        visibility: 1,
        start: '78%',
        end: '93%',
        duration: duration,
        delay: 0,
        timing: timing
      });
      Moveit.animate(middle, {
        visibility: 1,
        start: '50%',
        end: '50%',
        duration: duration,
        delay: 0,
        timing: timing
      });
      Moveit.animate(second, {
        visibility: 1,
        start: '81.5%',
        end: '94%',
        duration: duration,
        delay: 0,
        timing: timing
      });

          // Tutaj mogę dopisać swoje skrypty dla pozycji "OTWIERAJ"
          
          var szerEkranu = $( window ).width();
          var wysEkranu = $( window ).height();

          if (szerEkranu <= wysEkranu) {

            $('.rightGate').animate({'left': '+=85%' }, 'medium');
            $('.leftGate').animate({'left': '-=15%' }, 'medium');
          
          } else {

            $('.rightGate').animate({'left': '+=14%' }, 'medium');
            $('.leftGate').animate({'left': '-=6%' }, 'medium');
          }


          
        } else {
          Moveit.animate(middle, {
            visibility: 1,
            start: '0%',
            end: '100%',
            duration: duration,
            delay: 0,
            timing: timing
          });
          Moveit.animate(middle, {
            visibility: 1,
            duration: duration,
            delay: 0,
            timing: timing
          });
          Moveit.animate(first, {
            visibility: 1,
            start: '0%',
            end: '14%',
            duration: duration,
            delay: 0,
            timing: timing
          });
          Moveit.animate(second, {
            visibility: 1,
            start: '0%',
            end: '11.5%',
            duration: duration,
            delay: 0,
            timing: timing
          });

        // Tutaj mogę dopisać swoje skrypty dla pozycji "ZAMYKAJ"


          var szerEkranu = $( window ).width();
          var wysEkranu = $( window ).height(); 

          if (szerEkranu <= wysEkranu) {

            $('.rightGate').animate({'left': '-=85%' }, 'medium');
            $('.leftGate').animate({'left': '+=15%' }, 'medium');
          
          } else {

            $('.rightGate').animate({'left': '-=14%' }, 'medium');
            $('.leftGate').animate({'left': '+=6%' }, 'medium');
          }

      }
      open = !open;
    });

})


// Główna metoda przechowująca warunki kiedy szerokość ekranu jest mniejsza niż wysokość (msartfon)
// oraz odwrotnie kiedy szerokość ekranu jest większa niz wysokość (smartfon horyzontalnie lub pc)
function wwSmallwwBig() {
  
  var szerEkranu = $( window ).width();
  var wysEkranu = $( window ).height();  
  if (szerEkranu <= wysEkranu) {
    
    $('.leftGate').css('width','15%');
    $('.rightGate').css('width','85%');
    $('.menu').css('width','100%');
    $('.rightGate').css('left','15%');

    //baner
    
  
  } else {
    $('.leftGate').css('width','6%');
    $('.rightGate').css('width','94%');
    $('.menu').css('width','20%');
    $('.rightGate').css('left','6%');
  }
}

function openHome() {

  location.reload();
}    

function openGallery() {

  $('#rightGate').html('<iframe src="sub/gallery.html"></iframe>');
   
}     

function openAboutMe() {

  alert("O mnie");
   
}    

function openContact() {

  alert("Kontakt");
   
}    

function scrollthumbList() {


}

function mousePosition() {
  $( window ).on( "mousemove", function( event ) {
    var pageX = event.pageX;
    var pageY = event.pageY;
    $( "#log" ).text( "pageX: " + pageX + ", pageY: " + pageY );
  });
}


// TO do przeanalizowania i zrobić z tego drag and dropea i slidera
 var ball = document.querySelector('.thumbList');
 ball.style('background-color','red');

ball.onmousedown = function(event) {

  let shiftX = event.clientX - ball.getBoundingClientRect().left;
  let shiftY = event.clientY - ball.getBoundingClientRect().top;

  ball.style.position = 'absolute';
  ball.style.zIndex = 1000;
  document.body.append(ball);

  moveAt(event.pageX, event.pageY);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    ball.style.left = pageX - shiftX + 'px';
    ball.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (3) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (4) drop the ball, remove unneeded handlers
  ball.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    ball.onmouseup = null;
  };

};

ball.ondragstart = function() {
  return false;
};