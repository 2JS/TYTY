// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');


var config = {
    apiKey: "AIzaSyCgsjwYO1yXyHFGfhv5vQoyRGu41VCV6yY",
    databaseURL: "https://cs374-tyty.firebaseio.com/",
    messagingSenderId: "694504679263"
}
firebase.initializeApp(config)

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Food is being delivered!';
    const notificationOptions = {
      body: 'Go to location in 5 min.',
      icon: '/firebase-logo.png'
    };
  
    return self.registration.showNotification(notificationTitle, notificationOptions);
});