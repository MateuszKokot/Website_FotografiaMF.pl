$(document).ready(function(){

        
    var x = $( window ).width();
	$('.primaryBanner').css('width',x);
    var y = $( window ).height();
	$('.primaryBanner').css('height',y);
    
    
        $('.galeria').animate({width: 100px}, "slow");


$(window).resize(function(){
    
    var x = $( window ).width();
	$('.primaryBanner').css('width',x);
    var y = $( window ).height();
	$('.primaryBanner').css('height',y);

    if(){
        console.log("ok")
    }
});
})

function myMove() {
    var elem = document.getElementById("galeria"); 
    var i = 0;
    var pos = $('body').width();
    var id = setInterval(frame, 5);
    function frame() {
        if (i == pos) {
            clearInterval(id);
        } else {
            i++; 
            elem.style.width = i + 'px';  
        }
    }
}