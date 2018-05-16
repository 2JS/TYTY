

var userRef = database.ref('users');
var profile_list = [];

userRef.on('value',function(snapshot){
	var userProfile = snapshot.val()
	profile_list = Object.values(userProfile)
	console.log(profile_list)
	
}
)
	//var uid="";

// Database Transactions
/*firebase.auth().signInAnonymously().catch(function(error) {
	// Handle Errors here.
	var errorCode = error.code;
	var errorMessage = error.message;
	console.log('anonymous login failed!')
});

firebase.auth().onAuthStateChanged(function(user) {
	console.log("logged in")
	if (user) {
		// User is signed in.
		var isAnonymous = user.isAnonymous;
		uid = user.uid;
		console.log(uid);
		// ...

	} else {
		// User is signed out.
		// ...
	}
	// ...
});*/

/*firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(function() {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().signInAnonymously();
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });*/
var category;
function onSelectCategory(item){
	category=item;
	console.log(category)
	database.ref("users/"+user.uid+"/category").set(category)
	console.log(user.uid)
	window.location.href = "https://cs374-tyty.firebaseapp.com/3.html"
}
