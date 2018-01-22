//Po wczytaniu plików odpal to
$(document).ready(function(){

wwSmallwwBig()

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
          