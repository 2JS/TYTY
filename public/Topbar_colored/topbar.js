// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.

let links = ['categories.html', 'menus.html', 'brand.html', 'cart.html', 'location.html', 'payment.html', 'pending.html', 'preparing.html']

let images = ['service_bell', 'meal', 'restaurant_building', 'shopping_cart', 'marker', 'bank_cards', 'indeterminate_checkbox']

let topbar = document.getElementById('topbar')

function onTopClick(id) {
	console.log(id + " clicked")
	for (i = 0; i < images.length; i++) {
		document.getElementById(i).src = 'assets/icons8-' + images[i] + ((i == id) ? '_filled' : '') + '.png'
	}

	document.getElementById('topbar').scrollLeft = 200 * id
	
	// window.location.href = 'https://cs374-tyty.firebaseapp.com/index.html'
	parent.location.href = "../index.html";
}