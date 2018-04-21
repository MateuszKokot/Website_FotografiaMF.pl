//Po wczytaniu plików odpal to
$(document).ready(function(){

$('.activ').click(function(){
  $('.thisPage').removeClass('thisPage');
  $(this).addClass('thisPage');
  unactiveGallery();
});

$('.activeGallery').click(function(){
  $('.thisGallery').removeClass('thisGallery');
  $(this).addClass('thisGallery');
});

$('#gallery').click(function(){
  $('.gallerymenu').animate({'left': '0%' }, 'fast');
});

$('.hiddenGallery').click(function(){
$('.gallerymenu').animate({'left': '-20vw' }, 'fast');
});

$('#rightGate').html('<iframe src="sub/home.html"></iframe>');

});



// Jeśli zmieni się wielkość ekranu
$(window).resize(function(){

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

            $('.rightGate').animate({'left': '+=14%' }, 'medium');
            $('.leftGate').animate({'left': '-=6%' }, 'medium');
          
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

            $('.rightGate').animate({'left': '-=14%' }, 'medium');
            $('.leftGate').animate({'left': '+=6%' }, 'medium');

      }
      open = !open;
    });

})





function openHome() {

  unactiveGallery()
  $('#rightGate').html('<iframe src="sub/home.html"></iframe>');
}    


function slubne() {

  $('#rightGate').html('<iframe id="iframe" src="sub/śluby.html"></iframe>');

  $('.activeGallery').click(function(){
    $('.thisPage').removeClass('thisPage');
    $('#gallery').addClass('thisPage');
    });

  document.getElementById('iframe').focus();
}

function dzieci() {

  $('#rightGate').html('<iframe id="iframe" src="sub/dzieci.html"></iframe>');

  $('.activeGallery').click(function(){
    $('.thisPage').removeClass('thisPage');
    $('#gallery').addClass('thisPage');
    });

  document.getElementById('iframe').focus();
}    

function rodzinne() {

  $('#rightGate').html('<iframe id="iframe" src="sub/rodzinne.html"></iframe>');

  $('.activeGallery').click(function(){
    $('.thisPage').removeClass('thisPage');
    $('#gallery').addClass('thisPage');
    });

  document.getElementById('iframe').focus();
}    

function brzuszkowe() {

  $('#rightGate').html('<iframe id="iframe" src="sub/brzuszkowe.html"></iframe>');

  $('.activeGallery').click(function(){
    $('.thisPage').removeClass('thisPage');
    $('#gallery').addClass('thisPage');
    });

  document.getElementById('iframe').focus();
}    

function portrety() {

  $('#rightGate').html('<iframe id="iframe" src="sub/portrety.html"></iframe>');

  $('.activeGallery').click(function(){
    $('.thisPage').removeClass('thisPage');
    $('#gallery').addClass('thisPage');
    });

  document.getElementById('iframe').focus();
}    

function imprezy() {

  $('#rightGate').html('<iframe id="iframe" src="sub/okolicznościowe.html"></iframe>');

  $('.activeGallery').click(function(){
    $('.thisPage').removeClass('thisPage');
    $('#gallery').addClass('thisPage');
    });

  document.getElementById('iframe').focus();
}    


function openAboutMe() {

  unactiveGallery()
  $('#rightGate').html('<iframe src="sub/aboutme.html"></iframe>');
}    


function openContact() {

  unactiveGallery()
  $('#rightGate').html('<iframe src="sub/contact.html"></iframe>');
}    

function unactiveGallery() {
  $('.thisGallery').removeClass('thisGallery');
}

