//Po wczytaniu plików odpal to
$(document).ready(function(){

$('.activ').click(function(){
  $('.thisPage').removeClass('thisPage');
  $(this).addClass('thisPage');
});

$('.activeGallery').click(function(){
  $('.thisGallery').removeClass('thisGallery');
  $(this).addClass('thisGallery');
});

$('#gallery').click(function(){
  $('.gallerymenu').animate({'left': '0%' }, 'slow');
});

$('.bar').click(function(){
$('.gallerymenu').animate({'left': '-20vw' }, 'slow');

});

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
}    

function openGallery() {

  $('#rightGate').html('<iframe src="sub/gallery.html"></iframe>');
  
   
}     

function openAboutMe() {
unactiveGallery()
   
}    

function openContact() {
unactiveGallery()
   
}    

//TODO - ogarnąć żeby responsywnie działąo hamburger menu
function test() {

var windowWidth = $(document).width();
var mno = Number(windowWidth/1920);

var first = ["M ","30 ","40 ","L ","70 ","40 ","C ","90 ","40 ","90 ","75 ","60 ","85 ","A ","40 ","40 ","0 ","0 ","1 ","20 ","20 ","L ","80 ","80"];
var firstEnd = "M 30 40 L 70 40 C 90 40 90 75 60 85 A 40 40 0 0 1 20 20 L 80 80";
console.log(first);
//remakeTab(first);
console.log(firstEnd);

document.getElementById('first').setAttribute("d", firstEnd);


function remakeTab(tab) {

  for (var i = 0; i < tab.length; i++) {

   if (Number(isFinite(String(tab[i])))) {

     var before = tab[i] * mno;
     tab[i] = before.toString();
     firstEnd += tab[i] + " ";

     } else {

      firstEnd += tab[i] + " ";
      }  
    }
  }
}

function unactiveGallery() {

  $('.thisGallery').removeClass('thisGallery');
  $('.galleryBar').addClass('thisGallery');
}