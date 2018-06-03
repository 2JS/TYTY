
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

	var category
	console.log(user.uid)
	database.ref('users/'+user.uid).once('value').then(function(snapshot){
		category = snapshot.val().category;
		database.ref('list/'+category).once('value').then(function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
				var menu = childSnapshot.key
				var value = childSnapshot.val()

				var figure = document.createElement('figure')
				figure.setAttribute('onclick', 'onSelectMenu("'+menu+'"); return false;')

				var img = document.createElement('img')
				img.src = value['image']

				var figcaption = document.createElement('figcaption')
				// figcaption.style = "font-family: BMJUA"

				figcaption.innerHTML = menu

				figure.appendChild(img)
				figure.appendChild(figcaption)

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



function onSelectMenu(menu){
  console.log(menu)
  database.ref("users/"+user.uid+"/menu").set([menu]);
  // var menuRef = database.ref("users/"+user.uid+"/menu");
 
  
  console.log(user.uid)
  
  
  window.location.href = "2.html"
}


