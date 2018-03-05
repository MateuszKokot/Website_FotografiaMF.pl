//Zmienne globalne

var counter = 0;


//Po wczytaniu plików odpal to
$(document).ready(function(){

mousePosition()
createGallery()
arrowClick()
activSmallImg()
});



// Jeśli zmieni się wielkość ekranu
$(window).resize(function(){
location.reload();
});



// Pojedyńcze funkcje
function mousePosition() {
  $( window ).on( "mousemove", function( event ) {
    var pageX = event.pageX;
    var pageY = event.pageY;
    $( "#log" ).text( "pageX: " + pageX + ", pageY: " + pageY );
  });
}





function createGallery() {
var tab = document.getElementsByClassName("obrazek");
var howMuchImg = tab.length;
var rightGateWidth = $(document).width();
var summaryWidth = howMuchImg * rightGateWidth;

$('.gallery').after('<div class="mainImg"></div>');
$('.mainImg').css('width', summaryWidth);
$('.mainImg').after('<div class="listImg"></div>');
$('.listImg').css('width', rightGateWidth / 9 * howMuchImg);
$('.listImg').after('<div class="ctrlBar"><div class="arrow leftArrow"></div><div class="arrow rightArrow"></div></div>');

for (var i = 1; i < howMuchImg+1; i++) {
	var source = $('.obrazek:nth-child('+i+')').attr('src'); // Pobiera SRC obrazków podstawionych do DIV przechowującego galeria
	$('.mainImg').append('<div class="bigImg" style="background-image: url('+source+')"></div>'); // Tworzy kolejne DVI'y w mainImg i doaje do nich tło z SRC
	$('.listImg').append('<div id="'+(i-1)+'" class="smallImg" style="background-image: url('+source+')"></div>');
}

$('.bigImg').css('width', rightGateWidth); // Ustawia dla wstawionych DIV szerokość taką jak szerokość rightGate
$('.smallImg').css('width', rightGateWidth / 9);
}





function arrowClick() {

var tab = document.getElementsByClassName("obrazek"); //wczytuje obrazki z niewidocznego div
var howMuchImg = tab.length; // sprawdza ile ich jest
var rightGateWidth = $('body').width(); // sprawdza obecną szerokość okna
var smallImgWidth = rightGateWidth / 9;
activSmallImg()


$('.leftArrow').click(function(){  // event wykonywany po kliknięciu lewej strzałki

var position = $('.mainImg').position().left; // sprawdza obecną pozycje DIV'a

	if (counter  != 0) {
		$('#'+counter+'').removeClass('activImg');
		counter = counter - 1;
		console.log(counter);
		$('#'+counter+'').addClass('activImg');
		$('.mainImg').css("left", ( -(counter * rightGateWidth)));
		
	}
})

$('.rightArrow').click(function(){  // event wykonywany po kliknięciu prawej strzałki

var position = $('.mainImg').position().left; // sprawdza obecną pozycje DIV'a

	if (counter < howMuchImg - 1) {
		$('#'+counter+'').removeClass('activImg');
		counter = counter + 1;
		console.log(counter);
		$('#'+counter+'').addClass('activImg');
		$('.mainImg').css("left", ( -(counter * rightGateWidth)));
		
	}
})





function activSmallImg() {

	$('#0').addClass('activImg');

	$('.smallImg').click(function(){  // event po kliknięciu na miniature

		$('#'+counter+'').removeClass('activImg');
		counter = Number($(this).attr('id'));
		console.log(counter);
		$('#'+counter+'').addClass('activImg');
		$('.mainImg').css("left", ( -(counter * rightGateWidth)));
	});

}

}






