var order_list = []
var key_list = []
var order

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
    
    if (order.requested === 1) {
        window.location.href = 'https://cs374-tyty.firebaseapp.com/9.html'
    }
    if (order.rejected === 1) {
        window.location.href = 'https://cs374-tyty.firebaseapp.com/8_2.html'
    }
})

function clickCancel() {
    database.ref("users/"+ user.uid+"/cancelled").set(1)
    window.location.href='https://cs374-tyty.firebaseapp.com/8_1.html'
}

