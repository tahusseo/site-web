//get URL parameters
const urlParam = new URLSearchParams(window.location.search);
const productParam = urlParam.get("q");

let data = []; //all product data
let dataNames = []; //product names only

//------------------------------------------------
$(document).on("keyup", checkMatch); //suggestions

$(document).ready(function() {
	//fade out voile erreur
	$(".invalidParamVoile").animate({opacity: 1}, 200);

	//get product infos & names
	$.getJSON("json/data-products.json", function(i) {
		//push json into object
		data.push(i);
		//convert data to array / easier loop for names checking
		dataNames = Object.keys(data[0]);

		enableInfos();
		Setupfeedback();
	});
});
//-----------------------------------------------


//TOGGLE PRODUCTS INFOS
function enableInfos() {

	//if (product = url param) > toggle everthing, else > voileErreur
	for (var i = 0; i <= dataNames.length-1; i++) {
		if (productParam === dataNames[i]) {

			//productName, productImage...
			const pName = productParam;
			const pImage = data[0][pName][0].image;
			const pPrice = data[0][pName][0].price;
			const pDescription = data[0][pName][0].description;

			//toggle product info
			$(".invalidParamVoile").hide();
			$("#title").append(pName);
			$(".image").attr("src", pImage);
			$(".price").append(pPrice + "€");
			$(".description").append("Description: " + pDescription);


			//Feedback
			const isFeedbackEmpty = !Object.keys(data[0][pName][0].evaluation[0]).length;
			const pFeedback = data[0][pName][0].evaluation;

			if (isFeedbackEmpty === false) { //si aucun commentaire > skip
				for (var j = 0; j <= pFeedback.length-1; j++) {
					
					//feedbackUser, feedbackComment...
					const fUser = data[0][pName][0].evaluation[j].user;
					const fComment = data[0][pName][0].evaluation[j].comment;
					const fNote = data[0][pName][0].evaluation[j].note;
					
					//toggle feedbacks
					$(".productFeedback").append(
						"<div class='feedbackBox'><div class='userFeedback'>"+
						"<p class='user'><strong>"+ fUser +" </strong>:</p>"+ 
						"<p class='comment'>"+ fComment + "</p>"+
						"<p class='note'><i>Note: </i><strong>"+ fNote +"</strong></p></div></div>");
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

			for (const k in dataNames) { //For all elements in array (names)
				if (dataNames[k].startsWith(search)) { //If query matches names beginning
					$(".suggest").append("<li><a href='productPage.html?q=" + dataNames[k] + "'>" + dataNames[k] + "</a></li>");
				}
			}
		}
	}
};


//SEND productParam TO PHP
function Setupfeedback() {
	$(".pNameToPHP").val(productParam);
};