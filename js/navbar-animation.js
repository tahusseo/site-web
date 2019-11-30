$(document).ready(function() {

	//fade in navbar loading page
	$(".navbar").animate({"opacity": 1}, 1000);

//------------------- SEARCH ----------------------------
	//Ouvrir searchPanel
	$("img.loupeImg").click(function() {
		$(".suggest").empty(); //Efface les suggestions
		$(".search").val(""); //Efface le texte de recherche
		$(".searchPanel").delay(1000).toggleClass("active", 1000);
		$(".search").focus();

	});
	
	//Fade in Fade out trait sous le texte
	$(".search").focus(function() {
		$(".decorationSearch").css({"opacity": 1}, 1000);
	});

	//Fermer searchPanel (perte de focus)
	$(".search").blur(function() {
		$(".searchPanel").toggleClass("active", 1000);
		$(".decorationSearch").css({"opacity": 0}, 1000);
	});


//---------------------- MENU --------------------------
	//Ouvrir menuPanel
	$("img.menuImg").click(function() {
		$(".menuPanel").toggleClass("active", 1000);
	});
	
//-------------------------------------- Jour / Nuit (checkbox) -----------------------------------
	$(".switch input").prop("checked", false);	//Decoche la checkbox jour/nuit

	$(".switch").click(function() {

			//NIGHT MODE
		if ($(".checkboxClass").is(':checked')) {
			$("img.logo").css({"filter": "invert(1)"}); //logo inverted nuit
			
			$(".background").css({"background-image": "url(images/bg_home_nuit.png)"}); //background nuit
			
			$(".navbar").css({"background-color": "#3e4b61"}, 1000); // navbar nuit
				$("img.homeImg").css({"filter": "invert(1)"}); //home inverted nuit
				$("img.loupeImg").css({"filter": "invert(1)"}); //loupe inverted nuit
				$("img.menuImg").css({"filter": "invert(1)"}); //menu inverted nuit
				
				$(".searchPanel").css({"background-color": "#3e4b61"}); //search box nuit

					$(".search").css({"color": "#dae1ed"}); //search text nuit
						$(".decorationSearch").css({"color": "#dae1ed"}); //search decoration nuit
				
				$(".menuPanel").css({"background-color": "#505f7a"}); //menu nuit
					$(".switchText").text("Mode nuit: Activé"); //texte slider activé nuit

			//DAY MODE
		} else {
			$("img.logo").css({"filter": "invert(0)"}); //logo normal jour
			
			$(".background").css({"background-image": "url(images/bg_home.png)"}); //background jour
			
			$(".navbar").css({"background-color": "#ebf5ff"}); //navbar jour
				$("img.homeImg").css({"filter": "invert(0)"}); //home normal jour
				$("img.loupeImg").css({"filter": "invert(0)"});//loupe normal jour
				$("img.menuImg").css({"filter": "invert(0)"});//menu normal jour
				
				$(".searchPanel").css({"background-color": "#ebf5ff"}); //search box jour
					$(".search").css({"color": "#3e4b61"}); //search text jour
						$(".decorationSearch").css({"color": "#5f6f73"}); //search decoration jour
				
				$(".menuPanel").css({"background-color": "#f6ebf7"}); //menu jour
					$(".switchText").text("Mode nuit: Désactivé"); //texte slider désactivé jour

		}
	});
});