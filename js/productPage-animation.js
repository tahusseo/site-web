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
});


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