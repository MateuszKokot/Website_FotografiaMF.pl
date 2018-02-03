//Po wczytaniu plików odpal to
$(document).ready(function(){

mousePosition()
createGallery()
});



// Jeśli zmieni się wielkość ekranu
$(window).resize(function(){

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
var i = document.width;
console.log(i);
}
