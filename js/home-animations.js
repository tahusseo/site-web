$(document).ready(function() {

	//Decoche la checkbox jour/nuit
	$(".switch input").prop("checked", false);

	//Jour / Nuit (checkbox)
	$(".switch input").change(function() { //Check si la checkbox change d'état
		$(".modeNuitTexte").toggleClass("active", 1000); //Change le texte jour / nuit
		$(".background").toggleClass("active", 1000); //Change l'arriere plan
		$(".navbar").toggleClass("active", 1000); //Change la barre de navigation
	});

	//Fade-in logos
	$("img.logo").delay(200).animate({
		opacity: 1,
		width: "50%"}, 800);
	$("img.separation").delay(500).animate({opacity: 1}, 1000);

	//Go to ?? from separation
	$("img.separation").click(function (){
		$("body, html").animate({
			scrollTop: $("#presentation").offset().top -100
			}, 800);
	});
});


$(window).scroll(function() {

	//Fade-out scroll
	$("img.logo").css("opacity", 1 - $(window).scrollTop() / 400); //Logo_home
	$("img.separation").css("opacity", 1 - $(window).scrollTop() / 700); //Separation fleche

	//Fade in-scroll
	$("img.presentationImg").css("opacity", 0 + $(window).scrollTop() / 400); //Img Presentation

});

