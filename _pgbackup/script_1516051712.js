$(document).ready(function(){

        
    var x = $( window ).width();
	$('.primaryBanner').css('width',x);
    var y = $( window ).height();
	$('.primaryBanner').css('height',y);
    alert("Hello! I am an alert box!!");
    
    
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

