var $container = $("#container");

function update() {
   Draggable.create(".box", {
      bounds:$container,
      containment: "parent",
      edgeResistance:0.65,
      type:"x,y",
      throwProps:true,
    autoScroll:true,
   });
}
update();   

// $(this).draggable({
//     drag: function(event, ui) {
//         if (ui.position.top > 0) {
//             ui.position.top = 0;
//         }
//         var maxtop = ui.helper.parent().height() - ui.helper.height();
//         if ( ui.position.top < maxtop) {
//             ui.position.top = maxtop;
//         }
//         if ( ui.position.left > 0) {
//             ui.position.left = 0;
//         }
//         var maxleft = ui.helper.parent().width() - ui.helper.width();
//         if ( ui.position.left < maxleft) {
//             ui.position.left = maxleft;
//         }
//     }
// });


function draw_pin(x, y, loc_name, brand) { //example: x, y, loc_name = 810px, 160px, girls_dorm
<<<<<<< HEAD
   //initial setting below
   var table = document.getElementById("table");
   var pin = document.createElement("img");
   pin.setAttribute('class', "pin");
   pin.setAttribute('src', "./source/pin.png");
   pin.setAttribute('width', "50");
   pin.setAttribute('height', "auto");
   pin.setAttribute('position', "absolute");
   pin.setAttribute('id',"example_pin");
   pin.setAttribute('onclick',"pin_click(this)"); // onclick setting
   // pin.setAttribute('z-index',"1"); 
   pin.style.cursor = "pointer";
   //customized value below
   pin.setAttribute('info',loc_name);
   pin.setAttribute('brand',brand);
   pin.style.left = x; //x
   pin.style.top = y; //y
   // pin.setAttribute('left',x); 
   // pin.setAttribute('top',y); 
   table.appendChild(pin);   
   return;
}

function draw_all_pins(pins) {
   // reset all pin already existed
   var table = document.getElementById("table");
   table.setAttribute('position', "relatvie");
   while (table.firstChild) { //delete all pin for initailizing
       table.removeChild(table.firstChild);
   }

   var i=0;
   for (var elem in pins)
   { 
      // console.log(pins[i][0][0],pins[i][0][1],pins[i][0][2]);
      draw_pin(pins[i][0][0],pins[i][0][1],pins[i][0][2],pins[i][0][3]);
      i++;
   }
=======
	//initial setting below
	var table = document.getElementById("table");
	var pin = document.createElement("img");
	pin.setAttribute('class', "pin");
	pin.setAttribute('src', "./source/pin.png");
	pin.setAttribute('width', "50");
	pin.setAttribute('height', "auto");
	pin.setAttribute('position', "absolute");
	pin.setAttribute('id',"example_pin");
	pin.setAttribute('onclick',"pin_click(this)"); // onclick setting
	// pin.setAttribute('z-index',"1"); 
	pin.style.cursor = "pointer";
	//customized value below
	pin.setAttribute('info',loc_name);
	pin.setAttribute('brand',brand);
	pin.style.left = x; //x
	pin.style.top = y; //y
	// pin.setAttribute('left',x); 
	// pin.setAttribute('top',y); 
	table.appendChild(pin);	
	return;
}

function draw_all_pins(pins) {
	// reset all pin already existed
	var table = document.getElementById("table");
	table.setAttribute('position', "relatvie");
	while (table.firstChild) { //delete all pin for initailizing
	    table.removeChild(table.firstChild);
	}

	var i=0;
	for (var elem in pins)
	{ 
		// console.log(pins[i][0][0],pins[i][0][1],pins[i][0][2]);
		draw_pin(pins[i][0][0],pins[i][0][1],pins[i][0][2],pins[i][0][3]);
		i++;
	}
>>>>>>> Release
}

var pin_list =[];
var pin_data_pairs;

function parse_pin_data(brand) {
<<<<<<< HEAD
   pin_list = [];
   var idx = 0;   
   switch(brand)
   {
      case("all"):
      {
         for (var elem in pin_data_pairs)
         {
            var this_data = [(Object.entries(pin_data_pairs)[idx][1]["Coordinate"]+","+Object.entries(pin_data_pairs)[idx][1]["Brand"]).split(",")];
            // console.log(this_data[0][3]); //extract brand of it
            // console.log(this_data[this_data.length-1]);
            pin_list.push(this_data);
            idx ++;
         }
      }; break;
      case("BHC"):
      {
         for (var elem in pin_data_pairs)
         {
            var this_data = [(Object.entries(pin_data_pairs)[idx][1]["Coordinate"]+","+Object.entries(pin_data_pairs)[idx][1]["Brand"]).split(",")];
            if (this_data[0][3] == "BHC") //this_data[idx][3]=brand of the pin
            {
               pin_list.push(this_data);
            }
            idx ++;
         }
=======
	pin_list = [];
	var idx = 0;
	console.log((Object.entries(pin_data_pairs)[idx][1]["Coordinate"]+","+Object.entries(pin_data_pairs)[idx][1]["Brand"]).split(","));	
	switch(brand)
	{
		case("all"):
		{
			for (var elem in pin_data_pairs)
			{
				var this_data = [(Object.entries(pin_data_pairs)[idx][1]["Coordinate"]+","+Object.entries(pin_data_pairs)[idx][1]["Brand"]).split(",")];
				// console.log(this_data[0][3]); //extract brand of it
				// console.log(this_data[this_data.length-1]);
				pin_list.push(this_data);
				idx ++;
			}
		}; break;
		case("BHC"):
		{
			for (var elem in pin_data_pairs)
			{
				var this_data = [(Object.entries(pin_data_pairs)[idx][1]["Coordinate"]+","+Object.entries(pin_data_pairs)[idx][1]["Brand"]).split(",")];
				if (this_data[0][3] == "BHC") //this_data[idx][3]=brand of the pin
				{
					pin_list.push(this_data);
				}
				idx ++;
			}

		}; break;
		case("Hoolala"):
		{
			for (var elem in pin_data_pairs)
			{
				var this_data = [(Object.entries(pin_data_pairs)[idx][1]["Coordinate"]+","+Object.entries(pin_data_pairs)[idx][1]["Brand"]).split(",")];
				if (this_data[0][3] == "Hoolala") //this_data[idx][3]=brand of the pin
				{
					pin_list.push(this_data);
				}
				idx ++;
			}

		}; break;
		case("KeunTong"):
		{
			for (var elem in pin_data_pairs)
			{
				var this_data = [(Object.entries(pin_data_pairs)[idx][1]["Coordinate"]+","+Object.entries(pin_data_pairs)[idx][1]["Brand"]).split(",")];
				if (this_data[0][3] == "KeunTong") //this_data[idx][3]=brand of the pin
				{
					pin_list.push(this_data);
				}
				idx ++;
			}

		}; break;
		case("Student"):
		{
			for (var elem in pin_data_pairs)
			{
				var this_data = [(Object.entries(pin_data_pairs)[idx][1]["Coordinate"]+","+Object.entries(pin_data_pairs)[idx][1]["Brand"]).split(",")];
				if (this_data[0][3] == "Student") //this_data[idx][3]=brand of the pin
				{
					pin_list.push(this_data);
				}
				idx ++;
			}

		}; break;
		default: break;
	}
	// console.log(pin_list);
	draw_all_pins(pin_list);
}
>>>>>>> Release

      }; break;
      case("Hoolala"):
      {
         for (var elem in pin_data_pairs)
         {
            var this_data = [(Object.entries(pin_data_pairs)[idx][1]["Coordinate"]+","+Object.entries(pin_data_pairs)[idx][1]["Brand"]).split(",")];
            if (this_data[0][3] == "Hoolala") //this_data[idx][3]=brand of the pin
            {
               pin_list.push(this_data);
            }
            idx ++;
         }

<<<<<<< HEAD
      }; break;
      case("KeunTong"):
      {
         for (var elem in pin_data_pairs)
         {
            var this_data = [(Object.entries(pin_data_pairs)[idx][1]["Coordinate"]+","+Object.entries(pin_data_pairs)[idx][1]["Brand"]).split(",")];
            if (this_data[0][3] == "KeunTong") //this_data[idx][3]=brand of the pin
            {
               pin_list.push(this_data);
            }
            idx ++;
         }

      }; break;
      case("Student"):
      {
         for (var elem in pin_data_pairs)
         {
            var this_data = [(Object.entries(pin_data_pairs)[idx][1]["Coordinate"]+","+Object.entries(pin_data_pairs)[idx][1]["Brand"]).split(",")];
            if (this_data[0][3] == "Student") //this_data[idx][3]=brand of the pin
            {
               pin_list.push(this_data);
            }
            idx ++;
         }

      }; break;
      default: break;
   }
   // console.log(pin_list);
   draw_all_pins(pin_list);
}

var brand_list = ["all", "chicken", "pizza", "rice"]

function make_manue() {
   // var menu = document.getElementById('menu');
   // var button_container = document.createElement('div');
   // button_container.style.height = '25px';
   // var i=0;
   // for (var b in brand_list)
   // {
   //    // console.log(brand_list[i]);
   //    var button = document.createElement('button');
   //    button.setAttribute('onclick',"button_click(this)");
   //    button.setAttribute('position',"absolute");
   //    button.style.cursor = "pointer";
   //    button.innerHTML = brand_list[i];
   //    button_container.appendChild(button);
   //    i++;
   // }
   // menu.appendChild(button_container);
}

// window.brand; //brand name for showing all pins ot it
window.name;
$( document ).ready(function() {
   get_brand();
   make_manue(); //create munu bar for showing all pins belonging to such brand
   // make_current_loc_button();
   pin_data_pairs = pairs;
   console.log("pre_location=",name);
   // console.log("i'm all!!!");
   // draw_pin("810px","160px","girls_dorm");
   // draw_pin("1050px","270px","taxi_station"); //testing the pin's coordinate
});

function pin_click(x) {
   window.name = [x.getAttribute('info')]; //passing the information of clicked pin to next page
   update_location(x.getAttribute('info'));
=======
function make_manue() {
	// var menu = document.getElementById('menu');
	// var button_container = document.createElement('div');
	// button_container.style.height = '25px';
	// var i=0;
	// for (var b in brand_list)
	// {
	// 	// console.log(brand_list[i]);
	// 	var button = document.createElement('button');
	// 	button.setAttribute('onclick',"button_click(this)");
	// 	button.setAttribute('position',"absolute");
	// 	button.style.cursor = "pointer";
	// 	button.innerHTML = brand_list[i];
	// 	button_container.appendChild(button);
	// 	i++;
	// }
	// menu.appendChild(button_container);
}

// window.brand; //brand name for showing all pins ot it
window.name;
$( document ).ready(function() {
	get_brand();
	make_manue(); //create munu bar for showing all pins belonging to such brand
	// make_current_loc_button();
	pin_data_pairs = pairs;
	console.log("pre_location=",name);
	// console.log("i'm all!!!");
	// draw_pin("810px","160px","girls_dorm");
	// draw_pin("1050px","270px","taxi_station"); //testing the pin's coordinate
});

function pin_click(x) {
	window.name = [x.getAttribute('info')]; //passing the information of clicked pin to next page
	update_location(x.getAttribute('info'));
>>>>>>> Release
}

function button_click(x) {
   console.log(x.innerHTML);
   parse_pin_data(x.innerHTML);
}

//current_loc_ralated code
// function make_current_loc_button() {
//    var container = document.getElementById('menu');
//    var current_loc_button = document.createElement('img');
//    current_loc_button.setAttribute('onclick',"current_loc_button()");
//    current_loc_button.style.cursor = "pointer";
//    current_loc_button.setAttribute('id',"current_loc_button");
//    current_loc_button.setAttribute('src',"./source/current_loc_button.png");
//    current_loc_button.setAttribute('width', "70");
//    current_loc_button.setAttribute('height', "auto");
//    current_loc_button.setAttribute('position',"absolute !important");
//    // document.getElementById('table').setAttribute('z-index',"1"); 
//    // current_loc_button.setAttribute('z-index',"2");
//    current_loc_button.style.left = "200px"; //x
//    current_loc_button.style.top = "0px"; //y
//    // container.insertBefore(current_loc_button, container.firstChild);
//    container.appendChild(current_loc_button);
// }

// function current_loc_button() { //go to current location
//    getLocation();
//    var table = document.getElementById('table');
//    table.style.transform = "translate3d(-300px, -100px, 0px)";
//    // document.getElementById('table').style.left = "-300px";
//    // document.getElementById('table').style.top = "-100px";
//    console.log("current_loc_button!!!");
// }

// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else { 
//         console.log("Geolocation is not supported by this browser.");
//     }
// }

// function showPosition(position) {
//     console.log("Latitude: " + position.coords.latitude);
//     console.log("Longitude: " + position.coords.longitude);
//     calc_current_px(position.coords.latitude,position.coords.longitude);
//     // calc_current_px(36.373855, 127.365911); // n1
//     // calc_current_px(36.370463, 127.360012); //w8
//     // calc_current_px(36.373504, 127.360506); //lottelia
//     // calc_current_px(36.369685, 127.369175); // papalado
//  //       var degree = 29.489;
//    // var cosine = Math.cos(degree/180 * Math.PI);
//    // var sine = Math.sin(degree/180 * Math.PI);
//    // console.log(cosine, sine);
// }

// function calc_current_px(Latitude, Longitude) {
//    var current_y = Latitude*1.5;
//    var current_x = Longitude;
//    var origin_y = 36.363604*1.5;
//    var origin_x = 127.359408;

//    var h_y = 36.373004*1.5;
//    var h_x = 127.352241;
//    var w_y = 36.369444*1.5;
//    var w_x = 127.370008;

//    var origin_w = Math.sqrt( Math.pow( (w_x - origin_x) , 2 ) + Math.pow( (w_y - origin_y) , 2 ) ); //0.01307081;
//    var origin_h = Math.sqrt( Math.pow( (h_x - origin_x) , 2 ) + Math.pow( (h_y - origin_y) , 2 ) ); //0.01337322;
//    // console.log("w, h = ",origin_w, origin_h);

//    var degree = -29.489;
//    var cosine = Math.cos(degree/180 * Math.PI);
//    var sine = Math.sin(degree/180 * Math.PI);

//    var c_x_rotated = ((current_x - origin_x)*cosine) - ((current_y - origin_y)*sine);
//    var c_y_rotated = ((current_x - origin_x)*sine) + ((current_y - origin_y)*cosine);
//    var p_x = (c_x_rotated/origin_w)*(1800-300) + 300;
//    // console.log("own_p_x = ", (c_x_rotated/0.0115985)*(1800-300) + 300);   
//    var p_y = (1-(c_y_rotated/origin_y))*(1100-160)-160; //1100-160

//    console.log("p_x=",p_x,"p_y=",p_y);
//    draw_current(p_x.toString()+"px",p_y.toString()+"px");
// }


// function draw_current(x, y) { //example: x, y, loc_name = 810px, 160px, girls_dorm
//    var table = document.getElementById("table");
//    var div = document.createElement("div");
//    div.setAttribute('id',"current_loc");
//    var pin = document.createElement("img");
//    pin.setAttribute('class', "pin");
//    pin.setAttribute('src',"./source/current_loc_button.png");
//    pin.setAttribute('width', "70");
//    pin.setAttribute('height', "auto");
//    pin.setAttribute('position', "absolute");
//    pin.setAttribute('onclick',"current_loc(this)");
//    pin.style.left = x; //x
//    pin.style.top = y; //y
//    div.appendChild(pin)
//    table.appendChild(div);   
//    return;
// }

// function current_loc(x) {
//    x.parentNode.innerHTML = '';
// }

// var config = {
//    // han.q 's
//    // apiKey: "AIzaSyDHIOVan7gpQKKfif-NFS7DikSmjqZ8pS4",
//    // databaseURL: "https://database-c714e.firebaseio.com",
//    // authDomain: "database-c714e.firebaseapp.com",      
//    // projectId: "database-c714e",
//    // storageBucket: "database-c714e.appspot.com",
//    // messagingSenderId: "994435977792"
//     apiKey: "AIzaSyCgsjwYO1yXyHFGfhv5vQoyRGu41VCV6yY",
//     databaseURL: "https://cs374-tyty.firebaseio.com/",
//     messagingSenderId: "694504679263"
// };

// firebase.initializeApp(config);
// var database = firebase.database();
var usersRef = database.ref('users');

// usersRef.on('value', function(snapshot) { //when the brand is updated, then go to next pages.
   
// });

function update_location(location) {
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
                  console.log("find user!!!!!", this_data_id, location);
                  database.ref("users/"+user.uid+"/location").set(location);
               }
            }
            window.location.href = "./payment_method.html"; //go to payment method page
         });
      } else {
         console.log("Firebase: any_data_exists (except undo)? ", exists);
      }
   });
}


function get_brand() {
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
                  var this_brand = Object.entries(snapshot.val())[i][1]['brand'];
                  console.log("find user!!!!!", this_data_id, this_brand);
                  parse_pin_data(this_brand);
               }
            }
         });
      } else {
         console.log("Firebase: any_data_exists (except undo)? ", exists);
      }
   });
}

<<<<<<< HEAD
=======
//current_loc_ralated code
// function make_current_loc_button() {
// 	var container = document.getElementById('menu');
// 	var current_loc_button = document.createElement('img');
// 	current_loc_button.setAttribute('onclick',"current_loc_button()");
// 	current_loc_button.style.cursor = "pointer";
// 	current_loc_button.setAttribute('id',"current_loc_button");
// 	current_loc_button.setAttribute('src',"./source/current_loc_button.png");
// 	current_loc_button.setAttribute('width', "70");
// 	current_loc_button.setAttribute('height', "auto");
// 	current_loc_button.setAttribute('position',"absolute !important");
// 	// document.getElementById('table').setAttribute('z-index',"1"); 
// 	// current_loc_button.setAttribute('z-index',"2");
// 	current_loc_button.style.left = "200px"; //x
// 	current_loc_button.style.top = "0px"; //y
// 	// container.insertBefore(current_loc_button, container.firstChild);
// 	container.appendChild(current_loc_button);
// }

// function current_loc_button() { //go to current location
// 	getLocation();
// 	var table = document.getElementById('table');
// 	table.style.transform = "translate3d(-300px, -100px, 0px)";
// 	// document.getElementById('table').style.left = "-300px";
// 	// document.getElementById('table').style.top = "-100px";
// 	console.log("current_loc_button!!!");
// }

// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else { 
//         console.log("Geolocation is not supported by this browser.");
//     }
// }

// function showPosition(position) {
//     console.log("Latitude: " + position.coords.latitude);
//     console.log("Longitude: " + position.coords.longitude);
//     calc_current_px(position.coords.latitude,position.coords.longitude);
//     // calc_current_px(36.373855, 127.365911); // n1
//     // calc_current_px(36.370463, 127.360012); //w8
//     // calc_current_px(36.373504, 127.360506); //lottelia
//     // calc_current_px(36.369685, 127.369175); // papalado
//  //    	var degree = 29.489;
// 	// var cosine = Math.cos(degree/180 * Math.PI);
// 	// var sine = Math.sin(degree/180 * Math.PI);
// 	// console.log(cosine, sine);
// }

// function calc_current_px(Latitude, Longitude) {
// 	var current_y = Latitude*1.5;
// 	var current_x = Longitude;
// 	var origin_y = 36.363604*1.5;
// 	var origin_x = 127.359408;

// 	var h_y = 36.373004*1.5;
// 	var h_x = 127.352241;
// 	var w_y = 36.369444*1.5;
// 	var w_x = 127.370008;

// 	var origin_w = Math.sqrt( Math.pow( (w_x - origin_x) , 2 ) + Math.pow( (w_y - origin_y) , 2 ) ); //0.01307081;
// 	var origin_h = Math.sqrt( Math.pow( (h_x - origin_x) , 2 ) + Math.pow( (h_y - origin_y) , 2 ) ); //0.01337322;
// 	// console.log("w, h = ",origin_w, origin_h);

// 	var degree = -29.489;
// 	var cosine = Math.cos(degree/180 * Math.PI);
// 	var sine = Math.sin(degree/180 * Math.PI);

// 	var c_x_rotated = ((current_x - origin_x)*cosine) - ((current_y - origin_y)*sine);
// 	var c_y_rotated = ((current_x - origin_x)*sine) + ((current_y - origin_y)*cosine);
// 	var p_x = (c_x_rotated/origin_w)*(1800-300) + 300;
// 	// console.log("own_p_x = ", (c_x_rotated/0.0115985)*(1800-300) + 300);	
// 	var p_y = (1-(c_y_rotated/origin_y))*(1100-160)-160; //1100-160

// 	console.log("p_x=",p_x,"p_y=",p_y);
// 	draw_current(p_x.toString()+"px",p_y.toString()+"px");
// }


// function draw_current(x, y) { //example: x, y, loc_name = 810px, 160px, girls_dorm
// 	var table = document.getElementById("table");
// 	var div = document.createElement("div");
// 	div.setAttribute('id',"current_loc");
// 	var pin = document.createElement("img");
// 	pin.setAttribute('class', "pin");
// 	pin.setAttribute('src',"./source/current_loc_button.png");
// 	pin.setAttribute('width', "70");
// 	pin.setAttribute('height', "auto");
// 	pin.setAttribute('position', "absolute");
// 	pin.setAttribute('onclick',"current_loc(this)");
// 	pin.style.left = x; //x
// 	pin.style.top = y; //y
// 	div.appendChild(pin)
// 	table.appendChild(div);	
// 	return;
// }

// function current_loc(x) {
// 	x.parentNode.innerHTML = '';
// }

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
var usersRef = database.ref('users');

// usersRef.on('value', function(snapshot) { //when the brand is updated, then go to next pages.
	
// });

function update_location(location) {
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
						console.log("find user!!!!!", this_data_id, location);
						database.ref("users/"+user.uid+"/location").set(location);
					}
				}
				window.location.href = "./payment_method.html"; //go to payment method page
			});
		} else {
			console.log("Firebase: any_data_exists (except undo)? ", exists);
		}
	});
}


function get_brand() {
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
						var this_brand = Object.entries(snapshot.val())[i][1]['brand'];
						console.log("find user!!!!!", this_data_id, this_brand);
						parse_pin_data(this_brand);
					}
				}
			});
		} else {
			console.log("Firebase: any_data_exists (except undo)? ", exists);
		}
	});
}

>>>>>>> Release
// console.log("uid=",uid);


// function removeFire(elem_name)
// {
<<<<<<< HEAD
//    history_list=[]
//    commentsRef.once('value', function(snapshot) {
//       var keys = Object.keys(snapshot.val());
//       // console.log(Object.keys(snapshot.val())[keys.length-1]);
//       snapshot.forEach(function(childSnapshot) {
//          // console.log(childSnapshot.key);
//          if (childSnapshot.val()['question'] == elem_name)
//          {
//             var recordReference = commentsRef.child(childSnapshot.key);
//             recordReference.remove();
//          }
//         });
//       updateHistory();
//    });
// }
=======
// 	history_list=[]
// 	commentsRef.once('value', function(snapshot) {
// 		var keys = Object.keys(snapshot.val());
// 		// console.log(Object.keys(snapshot.val())[keys.length-1]);
// 		snapshot.forEach(function(childSnapshot) {
// 			// console.log(childSnapshot.key);
// 			if (childSnapshot.val()['question'] == elem_name)
// 			{
// 				var recordReference = commentsRef.child(childSnapshot.key);
// 				recordReference.remove();
// 			}
//         });
// 		updateHistory();
// 	});
// }

>>>>>>> Release
