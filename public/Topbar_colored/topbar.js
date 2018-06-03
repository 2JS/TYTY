// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.

let links = ['index.html', '3.html', '2.html', 'cart.html', 'select_location.html', 'payment_method.html', '8.html']

let images = ['service_bell', 'meal', 'restaurant_building', 'shopping_cart', 'marker', 'bank_cards', 'indeterminate_checkbox']

let topbar = document.getElementById('topbar')

function onTopClick(id) {
	console.log(id + " clicked")

	// document.getElementById('topbar').scrollLeft = 200 * id
	
	parent.location.href = "../" + links[id];
}