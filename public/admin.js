var order_list = []
var key_list = []
var currentToken = 0;

var config = {
    apiKey: "AIzaSyCgsjwYO1yXyHFGfhv5vQoyRGu41VCV6yY",
    databaseURL: "https://cs374-tyty.firebaseio.com/"
}
var orderRef = database.ref('users')

orderRef.on('value', function(snapshot) {
    var orderObject = snapshot.val()
    order_list = Object.values(orderObject)
    key_list = Object.keys(orderObject)
    makeTable(order_list)

    for (var i=0; i<order_list.length; i++) {
        if (order_list[i].delivered === 1) {
            currentToken = order_list[i].token
            console.log(currentToken)
            $.ajax({
                url: "https://fcm.googleapis.com/fcm/send",
                type: 'POST',
                beforeSend: function(xhr) {
                    xhr.setRequestHeader('Content-type', 'application/json')
                    xhr.setRequestHeader('Authorization', 'key=AAAAobO0Z18:APA91bG0HjgV9iBUd4SBPtzS77mFhe3xTZGGTgmPyT0BnbkQHTz82dtF5SvhyeUTIx5Qi6DTRMvTxejlMw1Uf3HliG-zrOJkKgNg2xwPjt54IJquH1D6DlmqTFa1uXYq696FKeWA9mkR')
                },
                data: JSON.stringify({
                    "to": currentToken,
                    "notification" : {
                      "body" : "Go to location in 5 min.",
                      "title" : "Food is being delivered!",
                    }
                }),
                success: function(data) {
                    console.log(data)
                },
                error: function(jqXHR, textStatus, errorThrow) {
                    console.log(jqXHR['responseText'])
                }
            })
        }
    }
})

function makeTable(list) {
    var table = document.getElementById("order-list")

    if (table.rows.length >= 2) {
        $("#order-list").find('tr').slice(1).remove()
    }
  
    for (var i=0; i<list.length; i++) {
      var row = table.insertRow(1)
      var cell0 = row.insertCell(0)
      var cell1 = row.insertCell(1)
      var cell2 = row.insertCell(2)
      var cell3 = row.insertCell(3)
      var cell4 = row.insertCell(4)
      var cell5 = row.insertCell(5)
      var cell6 = row.insertCell(6)
      var cell7 = row.insertCell(7)
      var cell8 = row.insertCell(8)
      var cell9 = row.insertCell(9)
      var cell10 = row.insertCell(10)
      var cell11 = row.insertCell(11)

      cell0.innerHTML = key_list[i]
      cell1.innerHTML = list[i].store
      cell2.innerHTML = list[i].menu
      cell3.innerHTML = list[i].loca
      cell4.innerHTML = list[i].pay
      cell5.innerHTML = list[i].requested
      cell6.innerHTML = list[i].cancelled
      cell7.innerHTML = list[i].rejected
      cell8.innerHTML = list[i].delivered
      cell9.innerHTML = "<button class='request'>Request</button>"
      cell10.innerHTML = "<button class='reject'>Reject</button>"
      cell11.innerHTML = "<button class='deliver'>Deliver</button>"
      $('.request').bind('click', function() {
        uid = $(this).parent().parent()[0].firstChild.innerHTML;
        database.ref("users/"+uid+"/requested").set(1)
      })
      $('.reject').bind('click', function() {
        uid = $(this).parent().parent()[0].firstChild.innerHTML;
        database.ref("users/"+uid+"/rejecteded").set(1)
      })
      $('.deliver').bind('click', function() {
        uid = $(this).parent().parent()[0].firstChild.innerHTML;
        database.ref("users/"+uid+"/delivered").set(1)

      })
    }
}

function getAccessToken() {
    return new Promise(function(resolve, reject) {
      var key = require('./cs374-tyty-firebase-adminsdk-Ophhj-72965ebbf0.json')
      var jwtClient = new google.auth.JWT(
        key.client_email,
        null,
        key.private_key,
        SCOPES,
        null
      );
      jwtClient.authorize(function(err, tokens) {
        if (err) {
          reject(err);
          return;
        }
        resolve(tokens.access_token);
      });
    });
  }