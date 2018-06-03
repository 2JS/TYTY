/*main code*/
document.getElementById("card").onclick = function () { //go to card page
    // location.href = "./card.html";
    console.log("card is selected!!!");
    update_payment("card");
};

document.getElementById("cash").onclick = function () { //go to cash page
    // location.href = "./cash.html";
    console.log("cash is selected!!!");
    update_payment("cash");
};

/*delete this after real connecting , the ORDER of each onclick is important*/ 
// try{
// 	document.getElementById("myButton").onclick = function () { //go to main page(payment_method page)
// 	    location.href = "./payment_method.html";
// 	};
// } catch {
// 	console.log("detected the home page!!");
// }

// location button

// document.getElementById("location").onclick = function () { //go to main page(payment_method page)
//     location.href = "./select_location.html";
// };


console.log("passed_data=",window.name);

// var config = {
// 	// han.q 's
// 	// apiKey: "AIzaSyDHIOVan7gpQKKfif-NFS7DikSmjqZ8pS4",
// 	// databaseURL: "https://database-c714e.firebaseio.com",
// 	// authDomain: "database-c714e.firebaseapp.com",		
// 	// projectId: "database-c714e",
// 	// storageBucket: "database-c714e.appspot.com",
// 	// messagingSenderId: "994435977792"
//     apiKey: "AIzaSyCgsjwYO1yXyHFGfhv5vQoyRGu41VCV6yY",
//     databaseURL: "https://cs374-tyty.firebaseio.com/",
//     messagingSenderId: "694504679263"
// };

// firebase.initializeApp(config);
// var database = firebase.database();
// var usersRef = database.ref('users');

// usersRef.on('value', function(snapshot) { //when the brand is updated, then go to next pages.
	
// });

function update_payment(payment) {
	var usersRef = database.ref('users');
	usersRef.once('value', function(snapshot) {
		var exists = (snapshot.val() !== null);
		if (exists) //check if database is empt
		{
			usersRef.once('value', function(snapshot) {
				var childData = [];
				childData = Object.entries(snapshot.val());
				// console.log(childData);
				for (var i=0;i<childData.length;i++)
				{
					var this_data_id = Object.entries(snapshot.val())[i][0];  // uid
					// console.log(this_data_id);
					if (user.uid == this_data_id)
					{
						console.log("find user!!!!!", this_data_id, payment);
						database.ref("users/"+user.uid+"/payment").set(payment);
					}
				}
				database.ref("users/"+ user.uid + "/requested").set(0)
				window.location.href = "https://cs374-tyty.firebaseapp.com/8.html"; //go to 8th page
			});
		} else {
			console.log("Firebase: any_data_exists (except undo)? ", exists);
		}
	});
}	