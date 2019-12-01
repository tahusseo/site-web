$(document).ready(function() {

	//------------------ Voile OnLoad -----------------------
		$(".voile").delay(200).fadeOut(200);


	//------------------- Fade-in logos n---------------------------
		$("img.logo").delay(200).animate({
			opacity: 1,
			width: "50%"}, 800);
		$("img.separation").delay(500).animate({opacity: 1}, 1000);

	//----------------- Scroll to anchor ------------------------------
		$("img.separation").click(function (){ //from separation to presentation1
			$("body, html").animate({
				scrollTop: $("#presentation").offset().top -100
			}, 800);
		});
});


$(window).scroll(function() {

	//------------------- Fade-out scroll -------------------
		$("img.logo").css("opacity", 1 - $(window).scrollTop() / 400); //Logo_home
		$("img.separation").css("opacity", 1 - $(window).scrollTop() / 700); //Separation fleche

	//-------------------- Fade in-scroll --------------------
		$("img.presentationImg").css("opacity", 0 + $(window).scrollTop() / 400); //Img Presentation

});

