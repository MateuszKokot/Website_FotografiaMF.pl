$(document).ready(function(){

        
    var x = $( window ).width();
	$('.primaryBanner').css('width',x);
    var y = $( window ).height();
	$('.primaryBanner').css('height',y);
    alert("Hello! I am an alert box!!");
    
    



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

