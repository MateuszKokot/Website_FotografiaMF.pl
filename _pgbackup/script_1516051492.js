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
