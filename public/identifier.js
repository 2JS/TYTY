var config = {
    apiKey: "AIzaSyCgsjwYO1yXyHFGfhv5vQoyRGu41VCV6yY",
    databaseURL: "https://cs374-tyty.firebaseio.com/"
}

var orderRef = database.ref('users')
var korean;
var brand;

orderRef.on('value', function(snapshot) {
    var orderObject = snapshot.val()
    order_list = Object.values(orderObject)
    key_list = Object.keys(orderObject)

    for (var i=0; i<key_list.length; i++) {
        if (key_list[i] === user.uid) {
            order = order_list[i]
        }
    }

    brand = order.brand
    if (brand==='KeunTong') {
        korean='큰통치킨'
    } else if (brand==='BHC') {
        korean='BHC'
    } else if (brand==='Hoolala') {
        korean='훌랄라'
    } else if (brand==='Student') {
        korean='대학생치킨'
    } else if (brand==='Domino') {
        korean='도미노피자'
    } else if (brand==='MrPizza') {
        korean='미스터피자'
    } else if (brand==='Wangbisung') {
        korean='왕비성'
    } else if (brand==='Jangchungdong') {
        korean='장충동'
    } else if (brand=='Mr bossam') {
        korean='미스터보쌈'
    } else if (brand==='Suriwang') {
        korean='수리왕'
    } else if (brand==='Gobongmin') {
        korean='고봉민김밥'
    } else if (brand==='Maru') {
        korean='마루'
    } else if (brand==='Woobin') {
        korean='우빈'
    }

    console.log(korean)
    console.log(brand)
    
    document.getElementById('brand').innerHTML = korean
    document.getElementById('english-brand').innerHTML = brand +'.'
})

function goOutIdentifier() {
    window.location.href = "https://cs374-tyty.firebaseapp.com/10.html"
}

