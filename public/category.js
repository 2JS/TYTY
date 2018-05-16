

var userRef = database.ref('users');
var profile_list = [];

userRef.on('value',function(snapshot){
	var userProfile = snapshot.val()
	profile_list = Object.values(userProfile)
	console.log(profile_list)
	
})

var category;
function onSelectCategory(item){
	category=item;
	console.log(category)
	database.ref("users/"+user.uid+"/category").set(category)
	console.log(user.uid)
	window.location.href = "3.html"
}
