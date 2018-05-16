var userRef = database.ref('users');
var profile_list = [];

userRef.on('value',function(snapshot){
	var userProfile = snapshot.val()
	profile_list = Object.values(userProfile)
	console.log(profile_list)
})


var category_name;
var image
var menu_list=[];

let menuTable = document.getElementById('menuTable')

function brandRow(brand, data) {
	var row = document.createElement('tr')
	var imgCell = row.insertCell(0)
	var dataCell = row.insertCell(1)
	var buttonCell = row.insertCell(2)

	var img = document.createElement('img')

	img.src = data['image']
	img.alt = 'failed to<br/>load image'
	img.width = 300

	imgCell.appendChild(img)
	imgCell.width = 300

	var brandtext = document.createElement('span')
	brandtext.innerHTML = brand
	brandtext.style = 'font-size: 60pt'

	dataCell.innerHTML = brandtext.outerHTML + '<br/>' + data['price'] + '<br/>' + data['runtime']
	dataCell.style = 'font-size: 40pt; font-family:"Do Hyeon";'

	buttonCell.innerHTML = 'Add to<br/>Cart' // change this to img in future
	buttonCell.style = 'text-align: center; background-color:#fa4e2d; font-family:"Do Hyeon"; font-size: 40pt; color: white;'

	// click call
	row.id = brand
	row.setAttribute('onclick', 'onSelectBrand("' + brand + '")')
	buttonCell.setAttribute('onclick', 'onAddToCart("' + brand + '")')

	return row
}

auth.signInAnonymously().then(function(user) {
	var category;
	console.log(user.uid)

	database.ref('users/'+user.uid).once('value').then(function(snapshot){
		category = snapshot.val().category;
		var menu = snapshot.val().menu[0];
		console.log(snapshot.val().menu)
		console.log(category)
		database.ref('list/'+category+'/'+menu+"/brand").once('value').then(function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
				var brand = childSnapshot.key
				var value = childSnapshot.val()

				// document.getElementById('columns').appendChild(brandFigure(brand, value))

				menuTable.insertRow(-1).outerHTML = brandRow(brand, value).outerHTML
			})
		})
	})
})

function onSelectBrand(brand) {
	row = document.getElementById(brand)
	row.setAttribute('onclick', 'onDeselectBrand("' + brand + '")')

	var nextRow = menuTable.insertRow(row.rowIndex + 1)
	var imgCell = nextRow.insertCell(0)
	var img = document.createElement('img')

	img.src = row.cells[0].childNodes[0].src
	imgCell.setAttribute('colspan', '3')
	imgCell.setAttribute('align', 'center')
	// imgCell.setAttribute
	imgCell.width = '100%'

	imgCell.appendChild(img)
	nextRow.appendChild(imgCell)

	var next2Row = menuTable.insertRow(row.rowIndex + 2)
	next2Row.innerHTML = '<td colspan="3" style="font-size:50pt; font-family: \'Do Hyeon\'; color:white; text-align: center;">Close</td>'
	next2Row.style = 'background-color: #fa4e2d;'
	next2Row.setAttribute('onclick', 'onDeselectBrand("' + brand + '")')

	row.classList.add('topSticky')
	next2Row.classList.add('bottomSticky')
}

function onDeselectBrand(brand) {
	row = document.getElementById(brand)
	row.setAttribute('onclick', 'onSelectBrand("' + brand + '")')

	menuTable.deleteRow(row.rowIndex + 1)
	menuTable.deleteRow(row.rowIndex + 1)

	row.classList.remove('topSticky')
}

function onAddToCart(brand) {
	console.log(brand)
	database.ref("users/"+user.uid+"/brand").set(brand);
	console.log(user.uid)

	window.location.href = " cart.html"
}


