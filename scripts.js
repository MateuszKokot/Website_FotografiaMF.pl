
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

          // Tutaj mogę dopisać swoje skrypty dla pozycji otwartej
          
          
          $('.rightGate').animate({'left': '+=170px' }, 'medium');
          $('.leftGate').animate({'left': '-=100px' }, 'medium');
          
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

        // Tutaj mogę dopisać swoje skrypty dla pozycji zamkniętej
        $('.rightGate').animate({'left': '-=170px'}, 'medium');
        $('.leftGate').animate({'left': '+=100px'}, 'medium');
        
      }
      open = !open;
    });

})

$(document).ready(function(){

var warunek = true

if (warunek) {

  $('#slider').animate({'width': '110%'}, 5000);
  $('#slider').animate({'opacity': '0.0'}, 500);
  warunek = false
}

if (!warunek) {
  $('#slider').removeClass('slider');
  $('#slider').addClass('sliderTwo');
  $('#slider').animate({'opacity': '1.0'}, 500);
  $('#slider').animate({'width': '100%'}, 5000);
}

});

          