
//Zmienne globalne

var counter = 0;


//Po wczytaniu plików odpal to
$(document).ready(function(){

createGallery()
arrowClick()

});



// Jeśli zmieni się wielkość ekranu
$(window).resize(function(){
location.reload();
});




// Pojedyńcze funkcje

function createGallery() {
var tab = document.getElementsByClassName("obrazek");
var howMuchImg = tab.length;
var rightGateWidth = $(document).width();
var summaryWidth = howMuchImg * rightGateWidth;

$('.gallery').after('<div class="mainImg"></div>');
$('.mainImg').css('width', summaryWidth);
$('.mainImg').after('<div class="listImg"></div>');
$('.listImg').css('width', rightGateWidth / 9 * howMuchImg);
$('.listImg').after('<div class="ctrlBar"><div class="arrow leftArrow"></div><span class="arrow counter">txt</span><span class="arrow counterTotal">/'+howMuchImg+'</span><div class="arrow rightArrow"></div></div>');

for (var i = 1; i < howMuchImg+1; i++) {
	var source = $('.obrazek:nth-child('+i+')').attr('src'); // Pobiera SRC obrazków podstawionych do DIV przechowującego galeria
	$('.mainImg').append('<div class="bigImg" style="background-image: url('+source+')"></div>'); // Tworzy kolejne DVI'y w mainImg i doaje do nich tło z SRC
	$('.listImg').append('<div class="smallImgOwn"><div id="'+(i-1)+'" class="smallImg" style="background-image: url('+source+')"></div></div>');
}

$('.bigImg').css('width', rightGateWidth); // Ustawia dla wstawionych DIV szerokość taką jak szerokość rightGate
$('.smallImgOwn').css('width', rightGateWidth / 9);
$('.counter').html(''+(counter+1)+'');
$('.ctrlBar').css('width', (rightGateWidth / 9 * 1.5));
$('.ctrlBar').css('height', (rightGateWidth / 9 * 1.5 / 5));
}





function arrowClick() {

var tab = document.getElementsByClassName("obrazek"); //wczytuje obrazki z niewidocznego div
var howMuchImg = tab.length; // sprawdza ile ich jest
var rightGateWidth = $('body').width(); // sprawdza obecną szerokość okna
var smallImgWidth = rightGateWidth / 9;
$('#0').addClass('activImg');


$('.leftArrow').click(function(){  // event wykonywany po kliknięciu lewej strzałki

var position = $('.mainImg').position().left; // sprawdza obecną pozycje DIV'a

	if (counter  != 0) {
		$('#'+counter+'').removeClass('activImg');
		counter = counter - 1;
		$('#'+counter+'').addClass('activImg');
		$('.mainImg').css('opacity', 0.0);
		$('.mainImg').css("left", ( -(counter * rightGateWidth)));
		$('.mainImg').animate({opacity: 1.0});
		$('.counter').html(''+(counter+1)+'');
		
		for (var i = 0; i <= (howMuchImg / 9); i++) {

			if (counter == ((i*9)+8) ) {
				console.log('zmianalewo');
				$('.listImg').animate({left: ( -( (i*9) * smallImgWidth))});
			}
		}
		
	}
})

$('.rightArrow').click(function(){  // event wykonywany po kliknięciu prawej strzałki

var position = $('.mainImg').position().left; // sprawdza obecną pozycje DIV'a

	if (counter < howMuchImg - 1) {
		$('#'+counter+'').removeClass('activImg');
		counter = counter + 1;
		$('#'+counter+'').addClass('activImg');
		$('.mainImg').css('opacity', 0.0);
		$('.mainImg').css("left", ( -(counter * rightGateWidth)));
		$('.mainImg').animate({opacity: 1.0});
		$('.counter').html(''+(counter+1)+'');
		
		for (var i = 0; i <= (howMuchImg / 9); i++) {

			if (counter == ((i*9)+9) ) {
				console.log('zmianaprawo');
				$('.listImg').animate({left: ( -( ((i*9)+9) * smallImgWidth))});
			}
		}

	}


})


$('.smallImg').click(function(){  // event po kliknięciu na miniature

		$('#'+counter+'').removeClass('activImg');
		counter = Number($(this).attr('id'));
		$('#'+counter+'').addClass('activImg');
		$('.mainImg').css('opacity', 0.0);
		$('.mainImg').css("left", ( -(counter * rightGateWidth)));
		$('.mainImg').animate({opacity: 1.0});
		$('.counter').html(''+(counter+1)+'');
	});

$(document).keypress(function(event){

	var key = Number(event.which); // Nie czyta strzałek
	if (key == 38) {
		console.log('klik');
		
	}
});


}




