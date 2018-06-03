var userRef = database.ref('users');
var profile_list = [];

userRef.on('value',function(snapshot){
  var userProfile = snapshot.val()
  profile_list = Object.values(userProfile)
  console.log(profile_list)
  
}
)


var category_name;
var image
var menu_list=[];

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

				var figure = document.createElement('figure')
				// figure.setAttribute('onclick', 'onSelectMenu("' + menu + '"); return false; ')

				var img = document.createElement('img')
				img.src = value['image']

				var figcaption = document.createElement('figcaption')
				// figcaption.style = "font-family: BMJUA"

				figcaption.innerHTML = "  "+brand

				var price = document.createElement('p')
				price.setAttribute('class', 'price')
				price.innerHTML = value['price']+" KRW"

				var runtime = document.createElement('p')
				runtime.setAttribute('class','runtime')
				runtime.innerHTML = value['runtime']

				var button = document.createElement('button')
				button.setAttribute('class', 'button')
				button.setAttribute('type','button')
				button.setAttribute('onclick', 'onSelectBrand("'+brand+'");return false;')
				button.innerHTML = "Add to Cart";


				figcaption.appendChild(price)
				figcaption.appendChild(runtime)
				figure.appendChild(img)
				figure.appendChild(figcaption)
				figure.appendChild(button)

				document.getElementById('columns').appendChild(figure)
			})
		})
	})
})	

//var userId = firebase.auth().currentUser.uid;
//return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
//  var category = (snapshot.val() && snapshot.val().category) || 'Anonymous'

  // ...
//});

//console.log(category)



function onSelectBrand(brand){
  console.log(brand)
  database.ref("users/"+user.uid+"/brand").set(brand);
  console.log(user.uid)
  
  
  window.location.href = " cart.html"
}


