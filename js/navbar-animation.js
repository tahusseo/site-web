$(document).ready(function() {

//-------------------SEARCH----------------------------
	//Ouvrir searchPanel
	$("img.loupeImg").click(function() {
		$(".search").val(""); //Efface le texte de recherche
		$(".searchPanel").toggleClass("active", 1000);
	});
	
	//Fade in Fade out trait sous le texte
	$(".search").focus(function() {
		$(".decorationSearch").css({"opacity": 1}, 1000);
	});

	//Fermer searchPanel (perte de focus)
	$(".search").blur(function() {
		$(".searchPanel").toggleClass("active", 1000);
		$(".decorationSearch").css({"opacity": 1}, 1000);
	});


//----------------------MENU--------------------------
	//Ouvrir menuPanel
	$("img.menuImg").click(function() {
		$(".menuPanel").toggleClass("active", 1000);
	});



});