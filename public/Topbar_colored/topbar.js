// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.

let links = ['categories.html', 'menus.html', 'brand.html', 'cart.html', 'location.html', 'payment.html', 'pending.html', 'preparing.html']

let images = ['service_bell', 'meal', 'restaurant_building', 'shopping_cart', 'marker', 'bank_cards', 'indeterminate_checkbox']

function onTopClick(id) {
	console.log(id + " clicked")
	for (i = 0; i < images.length; i++) {
		document.getElementById(i).src = 'assets/icons8-' + images[i] + ((i == id) ? '_filled' : '') + '.png'
	}

	document.getElementById('topbar').scrollLeft = 200 * id
}