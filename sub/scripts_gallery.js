//Po wczytaniu plików odpal to
$(document).ready(function(){

mousePosition()
createGallery()

});



// Jeśli zmieni się wielkość ekranu
$(window).resize(function(){
location.reload();
});



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
$('.listImg').css('width', summaryWidth - 300); //Tutja do poprawy żeby ustawało szerowkóść zgodniez szerokością miniatur
$('.listImg').after('<div class="ctrlBar"><div class="arrow leftArrow"></div><div class="arrow rightArrow"></div></div>');

for (var i = 1; i < howMuchImg+1; i++) {
	var source = $('.obrazek:nth-child('+i+')').attr('src'); // Pobiera SRC obrazków podstawionych do DIV przechowującego galeria
	$('.mainImg').append('<div class="bigImg" style="background-image: url('+source+')"></div>'); // Tworzy kolejne DVI'y w mainImg i doaje do nich tło z SRC
}

$('.bigImg').css('width', rightGateWidth); // Ustawia dla wstawionych DIV szerokość taką jak szerokość rightGate

}

var poozycjaObrazka = 0;

$(function() {

	
	$('.leftArrow').click(function(){
	var tab = document.getElementsByClassName("obrazek"); //wczytuje obrazki z niewidocznego div
	var howMuchImg = tab.length; // sprawdza ile ich jest
	var rightGateWidth = $('body').width(); // sprawdza obecną szerokość okna
	var summaryWidth = howMuchImg * rightGateWidth; //mnoży szerokość okna razy ilość obrazków
	var position = $('.mainImg').position().left; // sprawdza obecną pozycje DIV'a
	
	

		if (summaryWidth - rightGateWidth > Math.abs(position)) {
			var summary = position - rightGateWidth;
			$('.mainImg').css('left', summary);
		};

	console.log(summaryWidth - rightGateWidth);
	console.log(position);

	}) // działa ale kulawo, może faktycznie zrobie licznik i tyle


});




