$(document).ready(function() {

	//Ouvrir search-panel
	$("img.logo").click(function() {
		$(".searchPanel").toggleClass("active", 1000);
	});

	//Fade in Fade out trait sous le texte
	$(".search").focus(function() {
		$(".decorationSearch").css({"opacity": 1}, 1000);
	});
	$(".search").blur(function() {
		$(".decorationSearch").css({"opacity": 0}, 1000);
	});
});