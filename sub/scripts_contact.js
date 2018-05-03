function contactFormShow() {
	$('.backgroundForm').animate({top: '0vh'},);
	$('.contactForm').animate({top: '10vh'},);
	$('.contactForm').animate({opacity: '1'}, "medium");
	$('.backgroundForm').animate({opacity: '0.5'}, "medium");
}

function contactFormHidden() {

	$('.contactForm').animate({opacity: '0'}, "medium");
	$('.backgroundForm').animate({opacity: '00'}, "medium");
	$('.backgroundForm').animate({top: '-100vh'},);
	$('.contactForm').animate({top: '-100vh'},);
}