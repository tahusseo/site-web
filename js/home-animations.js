$(document).ready(function() {

	//-----------------------Fade-in logos---------------------------
		$("img.logo").delay(200).animate({
			opacity: 1,
			width: "50%"}, 800);
		$("img.separation").delay(500).animate({opacity: 1}, 1000);

	//-----------------Scroll to anchor------------------------------
		$("img.homeImg").click(function (){ //from anywhere to accueil
			$("body, html").animate({
				scrollTop: $("img.logo").offset().top -100
			}, 600);
		});	
		$("img.separation").click(function (){ //from separation to presentation1
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

