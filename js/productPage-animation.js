const cartItems = [];

$(document).ready(function() {
	//Open cart panel
	$("img.cartImg").mouseenter(function() {
		$(".checkout").css({"left": "80%"});
		$("img.cartImg").css({"right": "20%"});
	});
	$(".checkout").mouseleave(function() {
		$(".checkout").css({"left": "100%"});
		$("img.cartImg").css({"right": "0%"});
	});


	//Add to cart
	$(".addToCart").click(function() {
		addItemToCart();
		displayItems();
	});

	starsRating();

	
});




//Add item to cart array
function addItemToCart() {
	for (var m = 0; m <= cartItems.length-1; m++) {
		if (cartItems[m].name === productParam) {
			cartItems[m].quantity += 1;
			return;
		}
	}
	cartItems.push({
		name: productParam,
		quantity: 1
	});
}


//Display items in cart
function displayItems() {
	$(".itemsTxt").empty();

	for (var n = 0; n <= cartItems.length-1; n++) {
		
		//i = item
		const iName = cartItems[n].name;
		const iQuantity = cartItems[n].quantity;

		//add "item x quantity" to cart + delete button
		$(".itemsTxt").append("<li id='" + iName + "Li'>" + iName +
			" x" + iQuantity +
			"<button id='" + iName + "Remove'>X</button></li>");

		document.getElementById(iName + "Remove").onclick = function() {
			console.log(iQuantity);
			$("#"+iName + "Li").remove(); //remove entire article button
		}
	}
}


//turn on stars according to hover + rating out of 5
function starsRating() {
	$("img.starImg").mouseenter(function() { 

		switch(this.id) {
			case "1":
				$("#1").addClass("hovered");
				$("#2").removeClass("hovered");
				$("#3").removeClass("hovered");
				$("#4").removeClass("hovered");
				$("#5").removeClass("hovered");

				$(".feedbackNote").val("1/5");
				break;
			case "2":
				$("#1").addClass("hovered");
				$("#2").addClass("hovered");
				$("#3").removeClass("hovered");
				$("#4").removeClass("hovered");
				$("#5").removeClass("hovered");

				$(".feedbackNote").val("2/5");
				break;
			case "3":
				$("#1").addClass("hovered");
				$("#2").addClass("hovered");
				$("#3").addClass("hovered");
				$("#4").removeClass("hovered");
				$("#5").removeClass("hovered");

				$(".feedbackNote").val("3/5");
				break;
			case "4":
				$("#1").addClass("hovered");
				$("#2").addClass("hovered");
				$("#3").addClass("hovered");
				$("#4").addClass("hovered");
				$("#5").removeClass("hovered");

				$(".feedbackNote").val("4/5");
				break;
			case "5":
				$("#1").addClass("hovered");
				$("#2").addClass("hovered");
				$("#3").addClass("hovered");
				$("#4").addClass("hovered");
				$("#5").addClass("hovered");

				$(".feedbackNote").val("5/5");
				break;
		}
	});
}