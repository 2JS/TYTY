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


function draw_pin(x, y, loc_name) { //example: x, y, loc_name = 810px, 160px, girls_dorm
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
	while (table.firstChild) {
	    table.removeChild(table.firstChild);
	}

	var i=0;
	for (var elem in pins)
	{ 
		// console.log(pins[i][0][0],pins[i][0][1],pins[i][0][2]);
		draw_pin(pins[i][0][0],pins[i][0][1],pins[i][0][2]);
		i++;
	}
}

var pin_list =[];
var pin_data_pairs;

function parse_pin_data(brand) {
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
		case("pizza"):
		{
			for (var elem in pin_data_pairs)
			{
				var this_data = [(Object.entries(pin_data_pairs)[idx][1]["Coordinate"]+","+Object.entries(pin_data_pairs)[idx][1]["Brand"]).split(",")];
				if (this_data[0][3] == "pizza") //this_data[idx][3]=brand of the pin
				{
					pin_list.push(this_data);
				}
				idx ++;
			}

		}; break;
		case("chicken"):
		{
			for (var elem in pin_data_pairs)
			{
				var this_data = [(Object.entries(pin_data_pairs)[idx][1]["Coordinate"]+","+Object.entries(pin_data_pairs)[idx][1]["Brand"]).split(",")];
				if (this_data[0][3] == "chicken") //this_data[idx][3]=brand of the pin
				{
					pin_list.push(this_data);
				}
				idx ++;
			}

		}; break;
		case("rice"):
		{
			for (var elem in pin_data_pairs)
			{
				var this_data = [(Object.entries(pin_data_pairs)[idx][1]["Coordinate"]+","+Object.entries(pin_data_pairs)[idx][1]["Brand"]).split(",")];
				if (this_data[0][3] == "rice") //this_data[idx][3]=brand of the pin
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
	var menu = document.getElementById('menu');
	var button_container = document.createElement('div');
	button_container.style.height = '70px';
	var i=0;
	for (var b in brand_list)
	{
		// console.log(brand_list[i]);
		var button = document.createElement('button');
		button.setAttribute('onclick',"button_click(this)");
		button.setAttribute('position',"absolute");
		button.style.cursor = "pointer";
		button.innerHTML = brand_list[i];
		button_container.appendChild(button);
		i++;
	}
	menu.appendChild(button_container);
}

function make_current_loc_button() {
	var container = document.getElementById('menu');
	var current_loc_button = document.createElement('img');
	current_loc_button.setAttribute('onclick',"current_loc_button()");
	current_loc_button.style.cursor = "pointer";
	current_loc_button.setAttribute('id',"current_loc_button");
	current_loc_button.setAttribute('src',"./source/current_loc_button.png");
	current_loc_button.setAttribute('width', "70");
	current_loc_button.setAttribute('height', "auto");
	current_loc_button.setAttribute('position',"absolute !important");
	// document.getElementById('table').setAttribute('z-index',"1"); 
	// current_loc_button.setAttribute('z-index',"2");
	current_loc_button.style.left = "400px"; //x
	current_loc_button.style.top = "0px"; //y
	// container.insertBefore(current_loc_button, container.firstChild);
	container.appendChild(current_loc_button);
}

function current_loc_button() { //go to current location
	getLocation();
	var table = document.getElementById('table');
	table.style.transform = "translate3d(-300px, -100px, 0px)";
	// document.getElementById('table').style.left = "-300px";
	// document.getElementById('table').style.top = "-100px";
	console.log("current_loc_button!!!");
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
}

window.brand; //brand name for showing all pins ot it
window.name;
$( document ).ready(function() {
	make_manue(); //create munu bar for showing all pins belonging to such brand
	make_current_loc_button();
	pin_data_pairs = pairs;
	parse_pin_data("all");
	// console.log("i'm all!!!");
	// draw_pin("810px","160px","girls_dorm");
	// draw_pin("1050px","270px","taxi_station"); //testing the pin's coordinate
});

function pin_click(x) {
    location.href = "./payment_method.html";
    window.name = [x.getAttribute('info')]; //passing the information of clicked pin to next page
}

function button_click(x) {
	console.log(x.innerHTML);
	parse_pin_data(x.innerHTML);
}

