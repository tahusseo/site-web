//get URL parameters
const urlParam = new URLSearchParams(window.location.search);
const productParam = urlParam.get("q");

let listAll = [];
let listNames = [];


//------------------------------------------------
$(document).on("keyup", checkMatch); //suggestions

$(document).ready(function() {
	//fade out voile erreur
	$(".invalidParamVoile").animate({opacity: 1}, 200);

	$.getJSON("json/data-products.json", function(data) {
		//push all data
		$.each(data, function(key, value) {
			listAll.push(key, value);
		});
		//push only names
		$.each(data["products"], function(h) {
			listNames.push(data["products"][h].name);
		});

	enableInfos();
	});
});
//-----------------------------------------------


//TOGGLE PRODUCTS INFOS
function enableInfos() {
		
		//if (product = url param) > toggle everthing, else > voileErreur
		for (var i = 0; i <= listAll[1].length-1; i++) {
			if (productParam === listAll[1][i].name) {

				//productName, productImage...
				const pName = listAll[1][i].name;
				const pImage = listAll[1][i].spec[0].image;
				const pPrice = listAll[1][i].spec[0].price;
				const pDescription = listAll[1][i].spec[0].description;

				//toggle product info
				$(".invalidParamVoile").hide();
				$("#title").append(pName);
				$(".image").attr("src", pImage);
				$(".price").append(pPrice + "€");
				$(".description").append("Description: " + pDescription);

				if (listAll[1][i].spec[0].evaluation[0].user != null) { //si aucun commentaire > skip
					for (var j = 0; j <= listAll[1][i].spec[0].evaluation.length-1; j++) {

						//feedbackUser, feedbackComment...
						const fUser = listAll[1][i].spec[0].evaluation[j].user;
						const fComment = listAll[1][i].spec[0].evaluation[j].comment;
						const fNote = listAll[1][i].spec[0].evaluation[j].note;
						
						//toggle feedbacks
						$(".feedback").append(
							"<p class='user'>User: "+ fUser +"</p>"+
							"<p class='comment'>Comment: "+ fComment + "</p>"+
							"<p class='note'>Note: "+ fNote +"</p>");
					}
				}
			}
		}
};


//SUGGESTIONS
function checkMatch() {
	if ($(".search").is(":focus")) { //If search is on focus
		const search = $(".search").val().toLowerCase(); //get query lowercase

		if (search == "") { //If query is empty v
			$(".suggest").empty(); //Clear suggestions
		}

		else {
			$(".suggest").empty(); //Clear after each keystroke(clean)

			for (const k in listNames) { //For all elements in array (names)
				if (listNames[k].startsWith(search)) { //If query matches names beginning
					$(".suggest").append("<li><a href='productPage.html?q=" + listNames[k] + "'>" + listNames[k] + "</a></li>");
				}
			}
		}
	}
};


//SEND FEEDBACK BACK TO SERVER
function sendFeedback() {
}