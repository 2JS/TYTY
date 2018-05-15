var config = {
    apiKey: "AIzaSyCgsjwYO1yXyHFGfhv5vQoyRGu41VCV6yY",
    databaseURL: "https://cs374-tyty.firebaseio.com/"
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
    
})