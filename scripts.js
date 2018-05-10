//Po wczytaniu plików odpal to
$(document).ready(function(){


  var open = false;
  var bodyWidth = $(document).width();



if (bodyWidth < 680) {

  $('.trigger').click(function(){
    if (!open) {

          // Tutaj mogę dopisać swoje skrypty dla pozycji "OTWIERAJ"

            $('.rightGate').animate({'left': '+=100%' }, 'medium');
            $('.rightGate').animate({'width': '0%' }, 'fast');
          
        } else {

        // Tutaj mogę dopisać swoje skrypty dla pozycji "ZAMYKAJ"

            $('.rightGate').animate({'left': '-=100%' }, 'medium');
            $('.rightGate').animate({'width': '100%' }, 'fast');
            $('#checkbox').prop('checked', false);

      }
      open = !open;
    });

} else {

  $('.trigger').click(function(){
    if (!open) {

          // Tutaj mogę dopisać swoje skrypty dla pozycji "OTWIERAJ"

            $('.rightGate').animate({'left': '+=14%' }, 'medium');
            $('.leftGate').animate({'left': '-=6%' }, 'medium');
          
        } else {

        // Tutaj mogę dopisać swoje skrypty dla pozycji "ZAMYKAJ"

            $('.rightGate').animate({'left': '-=14%' }, 'medium');
            $('.leftGate').animate({'left': '+=6%' }, 'medium');
            $('#checkbox').prop('checked', false);

      }
      open = !open;
    });
}



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

  if (bodyWidth < 680) {

    $('.gallerymenu').animate({'left': '-100vw' }, 'fast');
  
  } else {

    $('.gallerymenu').animate({'left': '-20vw' }, 'fast');
}

});

$('#rightGate').html('<iframe src="sub/home.html"></iframe>');




});



// Jeśli zmieni się wielkość ekranu
$(window).resize(function(){


});



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
  $('#rightGate').html('<iframe src="sub/contact.php"></iframe>');
}    

function unactiveGallery() {
  $('.thisGallery').removeClass('thisGallery');
}

