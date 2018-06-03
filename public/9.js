var order_list = []
var key_list = []
var order

var config = {
    apiKey: "AIzaSyCgsjwYO1yXyHFGfhv5vQoyRGu41VCV6yY",
    databaseURL: "https://cs374-tyty.firebaseio.com/",
    messagingSenderId: "694504679263"
}

var orderRef = database.ref('users')

orderRef.on('value', function(snapshot) {
    var orderObject = snapshot.val()
    order_list = Object.values(orderObject)
    key_list = Object.keys(orderObject)

    for (var i=0; i<key_list.length; i++) {
        if (key_list[i] === user.uid) {
            order = order_list[i]
        }
    }
    
    if (order.delivered === 2) {
        window.location.href = 'https://cs374-tyty.firebaseapp.com/10.html'
    }
})


var messaging = firebase.messaging()

messaging.requestPermission()
.then(function() {
    console.log('Notification permission granted.')
    return messaging.getToken()
})
.then(function(token) {
    console.log(token)
    database.ref("users/"+user.uid+"/token").set(token)
})
.catch(function(err) {
    console.log('Unable to get permission to notify.', err)
})

messaging.onTokenRefresh(function() {
    messaging.getToken()
    .then(function(refreshedToken) {
      console.log('Token refreshed.');
      // Indicate that the new Instance ID token has not yet been sent to the
      // app server.
    //   setTokenSentToServer(false);
      // Send Instance ID token to app server.
    //   sendTokenToServer(refreshedToken);
      // ...
    })
    .catch(function(err) {
      console.log('Unable to retrieve refreshed token ', err);
    //   showToken('Unable to retrieve refreshed token ', err);
    });
});

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a sevice worker
//   `messaging.setBackgroundMessageHandler` handler.
messaging.onMessage(function(payload) {
    console.log("Message received. ", payload);
});
// messaging.setBackgroundMessageHandler(function(payload) {
//     console.log("Message received.", payload);
// })