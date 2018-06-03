// var navbar = document.getElementById("navbar")
// var selected = document.getElementById('selected')

// function refreshOrderButtonPosition() {
//   if (window.pageYOffset >= selected.offsetTop + selected.offsetHeight - 240) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

// $( document ).ready(function() {
//     $("order_button").mouseover(function(){
//         $("order_button").css("background-color", "#ff8058");
//     });
// });

auth.signInAnonymously().then(function(user) {
	console.log(user.uid)
	var category;
	var selected_menu = [];
	var brand;
	console.log(user.uid)

	

	// database.ref('users/'+user.uid+'/menu').on('value', function(snapshot){
	// 	sticky = navbar.offsetTop;
	// 	console.log(sticky);
	// })

	database.ref('users/'+user.uid).once('value').then(function(snapshot){
		category = snapshot.val().category;
		selected_menu = snapshot.val().menu || [];
		brand = snapshot.val().brand;
		console.log(category)
		console.log(selected_menu)
		console.log(brand)

		snapshot.child('menu').forEach(function(childSnapshot) {
			var menu = childSnapshot.val()

			database.ref('list/'+category+'/'+menu).once('value').then(function(snapshot){
				console.log(category)
				console.log(menu)
				
				var value = snapshot.val();
				var tr = document.createElement('tr');
				tr.setAttribute('class', 'row')

				var td = document.createElement('td');
				td.setAttribute('id','selected_elem');
				td.setAttribute('class','cell');

				
				console.log(menu)
				var img = document.createElement('img');
				img.src = value['image']
				
				img.setAttribute('class','item_img')

				// var span = document.createElement('span');
				// span.innerHTML=menu

				// data part
				var data_ul = document.createElement('ul');
				data_ul.setAttribute('class',"data_ul");
				var li_brand = document.createElement("li");
				var li_menu = document.createElement("li");
				var li_price = document.createElement("li");
				li_brand.setAttribute('id',"li_brand");
				li_brand.setAttribute('class',"li_brand data_li");
				li_menu.setAttribute('id',"li_menu");
				li_menu.setAttribute('class',"li_menu data_li");
				li_price.setAttribute('id',"li_price");
				li_price.setAttribute('class',"li_price data_li");
				li_brand.innerHTML = brand;
				li_menu.innerHTML = menu;
				li_price.innerHTML = value['brand'][brand]['price'] + '₩'; //₩
				// console.log("li_brand=", li_brand);
				// console.log("li_menu=", li_menu);
				// console.log("li_price=", li_price);
				data_ul.appendChild(li_brand);
				data_ul.appendChild(li_menu);
				// data_ul.appendChild(li_price);
				var table_tr_price = document.createElement('tr');
				table_tr_price.setAttribute('class','data_tr');
				table_tr_price.setAttribute('id','data_tr_price');
				table_tr_price.appendChild(li_price);
				// data part

				var table = document.createElement('table')
				table.setAttribute('class','count');

				var table_tr = document.createElement('tr')
				table_tr.setAttribute('class','select_tr')

				var minus_td = document.createElement('td')
				var minus_img = document.createElement('img')
				minus_img.setAttribute('class','minus')
				minus_img.setAttribute('onclick','minus(this)')
				minus_img.setAttribute('style','cursor:pointer')
				minus_img.src = "./source/minus.png"
				minus_td.appendChild(minus_img);

				var number_td = document.createElement('td')
				var number_div = document.createElement('div')
				number_div.setAttribute('class','center')	
				number_div.innerHTML = 1;
				number_td.appendChild(number_div);

				var plus_td = document.createElement('td')
				var plus_img = document.createElement('img')
				plus_img.setAttribute('class','plus')
				plus_img.setAttribute('onclick','plus(this)')
				plus_img.setAttribute('style','cursor:pointer')
				plus_img.src="./source/plus.png"
				plus_td.appendChild(plus_img)

				table_tr.appendChild(minus_td)
				table_tr.appendChild(number_td)
				table_tr.appendChild(plus_td)

				table.appendChild(table_tr)

				//data_price
				table.appendChild(table_tr_price);
				//data_price

				td.appendChild(img)
				// td.appendChild(span)
				td.appendChild(data_ul);
				td.appendChild(table)

				tr.appendChild(td)

				document.getElementById('selected').appendChild(tr)
			})
			// if (init == 0)
			// {			
				// sticky = navbar.offsetTop;
				// console.log(sticky);
			// }
	
		})

		// for(i=0; i<selected_menu.length; i++){
			
		// 	var menu = selected_menu[i]
		// 	console.log(menu)
		// 	database.ref('list/'+category+'/'+menu).once('value').then(function(snapshot){
		// 		console.log(category)
		// 		console.log(menu)
				
		// 		var value = snapshot.val();
		// 		var tr = document.createElement('tr');
		// 		tr.setAttribute('class', 'row')

		// 		var td = document.createElement('td');
		// 		td.setAttribute('id','selected_elem');
		// 		td.setAttribute('class','cell');

				
		// 		console.log(menu)
		// 		var img = document.createElement('img');
		// 		img.src = value['image']
				
		// 		img.setAttribute('class','item_img')

		// 		var span = document.createElement('span');
		// 		span.innerHTML=menu

		// 		var table = document.createElement('table')
		// 		table.setAttribute('class','count');

		// 		var table_tr = document.createElement('tr')
		// 		table_tr.setAttribute('class','select_tr')

		// 		var minus_td = document.createElement('td')
		// 		var minus_img = document.createElement('img')
		// 		minus_img.setAttribute('class','minus')
		// 		minus_img.setAttribute('onclick','minus(this)')
		// 		minus_img.setAttribute('style','cursor:pointer')
		// 		minus_img.src = "./source/minus.png"
		// 		minus_td.appendChild(minus_img);

		// 		var number_td = document.createElement('td')
		// 		var number_div = document.createElement('div')
		// 		number_div.setAttribute('class','center')
		// 		number_div.innerHTML = 1;
		// 		number_td.appendChild(number_div);

		// 		var plus_td = document.createElement('td')
		// 		var plus_img = document.createElement('img')
		// 		plus_img.setAttribute('class','plus')
		// 		plus_img.setAttribute('onclick','plus(this)')
		// 		plus_img.setAttribute('style','cursor:pointer')
		// 		plus_img.src="./source/plus.png"
		// 		plus_td.appendChild(plus_img)

		// 		table_tr.appendChild(minus_td)
		// 		table_tr.appendChild(number_td)
		// 		table_tr.appendChild(plus_td)

		// 		table.appendChild(table_tr)

		// 		td.appendChild(img)
		// 		td.appendChild(span)
		// 		td.appendChild(table)

		// 		tr.appendChild(td)

		// 		document.getElementById('selected_body').appendChild(tr)
		// 	})
		// 	// img.src = snapshot.child(selected_menu).val()['image'];
			
			
		// }


		database.ref('list/'+category).once('value').then(function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
				var menu = childSnapshot.key
				var value = childSnapshot.val()

				if (selected_menu.indexOf(menu)==-1){
				
					var tr1 = document.createElement('tr')
					tr1.setAttribute('class','row')

					var td1 = document.createElement('td')
					td1.setAttribute('id','selectable_elem')
					td1.setAttribute('class', 'cell')

					var img1 = document.createElement('img')
					img1.setAttribute('class','item_img')
					img1. src = value['image']

					// var span1 = document.createElement('span')
					// span1.innerHTML = menu;

					// data part
					var data_ul = document.createElement('ul');
					data_ul.setAttribute('class',"data_ul");
					var li_brand = document.createElement("li");
					var li_menu = document.createElement("li");
					var li_price = document.createElement("li");
					li_brand.setAttribute('id',"li_brand");
					li_brand.setAttribute('class',"li_brand data_li");
					li_menu.setAttribute('id',"li_menu");
					li_menu.setAttribute('class',"li_menu data_li");
					li_price.setAttribute('id',"li_price");
					li_price.setAttribute('class',"li_price data_li");
					li_brand.innerHTML = brand;
					li_menu.innerHTML = menu;
					li_price.innerHTML = value['brand'][brand]['price'] + '₩'; // ₩
					// console.log("li_brand=", li_brand);
					// console.log("li_menu=", li_menu);
					// console.log("li_price=", li_price);
					data_ul.appendChild(li_brand);
					data_ul.appendChild(li_menu);
					// data_ul.appendChild(li_price);
					var table_tr_price = document.createElement('tr');
					table_tr_price.setAttribute('class','data_tr');
					table_tr_price.setAttribute('id','data_tr_price');
					table_tr_price.appendChild(li_price);
					// data part


					var table1 = document.createElement('table')
					table1.setAttribute('class','count')

					var table1_tr = document.createElement('tr')
					table1_tr.setAttribute('class','select_tr')

					var table1_td = document.createElement('td')

					var table1_img = document.createElement('img')
					table1_img.setAttribute('class','plus')
					table1_img.setAttribute('onclick','selectable_elem_plus(this)')
					table1_img.setAttribute('cursor','pointer')
					table1_img.src ="./source/plus.png"

					table1_td.appendChild(table1_img)
					table1_tr.appendChild(table1_td)
					table1.appendChild(table1_tr)
					//data_price
					table1.appendChild(table_tr_price);
					//data_price

					td1.appendChild(img1)
					td1.appendChild(data_ul)
					td1.appendChild(table1)

					tr1.appendChild(td1)

					document.getElementById('selectable').appendChild(tr1)
				}	
				// console.log("selectable done");
			})
		calc_total_price();
		})
	})
})	

// var img = document.getElementByClass("selected_elem_img1");
// img.setAttribute('src',"./source/chicken.png");

function selectable_elem_plus(x) {

	// menu.push(x)
	

	// console.log(x.parentNode.parentNode.parentNode.parentNode.getAttribute('id'));
	// console.log(x.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("class")); //row
	var tr = x.parentNode.parentNode;
	tr.setAttribute('class',"select_tr");
	tr.innerHTML = ""
	var td_plus = document.createElement("td");
	var td_minus = document.createElement("td");
	var td_center = document.createElement("td");
	var img_plus = document.createElement("img");
	var img_minus = document.createElement("img");
	var div_center = document.createElement("div");
	img_plus.setAttribute('class',"plus");
	img_plus.style.cursor = "pointer";
	img_plus.setAttribute('onclick',"plus(this)");
	img_plus.src="./source/plus.png"
	td_plus.appendChild(img_plus);
	div_center.setAttribute('class', "center");
	div_center.innerHTML = 1;
	td_center.appendChild(div_center);
	img_minus.setAttribute('class',"minus");
	img_minus.style.cursor = "pointer";
	img_minus.setAttribute('onclick',"minus(this)");
	img_minus.src="./source/minus.png"
	td_minus.appendChild(img_minus);
	tr.insertBefore(td_plus, tr.firstChild);
	tr.insertBefore(td_center, tr.firstChild);
	tr.insertBefore(td_minus, tr.firstChild);

	// console.log(x.parentNode.parseIntNode);
	// move from selectable table to selected table
	var row = tr.parentNode.parentNode.parentNode;

	console.log(x)
	move_to_selected(row);
	calc_total_price ();
	var menu;
	
	var table = tr.parentNode.parentNode;
	var span = table.childNodes[1].lastChild;
	// console.log(table.childNodes[1]);
	database.ref('users/'+user.uid).once('value').then(function(snapshot){
		// console.log(span);
		menu = snapshot.val().menu || [];
		menu.push(span.innerHTML);
		console.log(menu)
		console.log(span.innerHTML)
		database.ref('users/'+user.uid+"/menu").set(menu);	
	})
}

function move_to_selected(tr) {
	var selected = document.getElementById("selected");
	selected.appendChild(tr);
}

function move_to_selectable(tr) {
	var selectable = document.getElementById("selectable");
	selectable.insertBefore(tr, selectable.firstChild);
}

function plus(p) {
	database.ref('users/'+user.uid).once('value').then(function(snapshot){
		var tr = p.parentNode.parentNode;
		var table = tr.parentNode.parentNode;
		var span = table.childNodes[1].lastChild;
		console.log(span.innerHTML)

		menu = snapshot.val().menu || [];
		menu.push(span.innerHTML);
		console.log(menu)
		console.log(span.innerHTML)

		database.ref('users/'+user.uid+"/menu").set(menu);	

		var div_center = p.parentNode.parentNode.getElementsByClassName("center")[0];
		div_center.innerHTML = parseInt(div_center.innerHTML) + 1;
		var price = p.parentNode.parentNode.parentNode.childNodes[1].firstChild.innerHTML.split("₩")[0];
		console.log(price);
		p.parentNode.parentNode.parentNode.childNodes[1].firstChild.innerHTML = String(parseInt(price) + parseInt(price)/parseInt(div_center.innerHTML-1))+"₩"
		calc_total_price ()
	})
}

function minus(m) {
	// console.log(m.parentNode.parentNode);
	var div_center = m.parentNode.parentNode.getElementsByClassName("center")[0];
	var price = m.parentNode.parentNode.parentNode.childNodes[1].firstChild.innerHTML.split("₩")[0];
	console.log(price);
	if ((parseInt(div_center.innerHTML) - 1) > 0)
	{	var tr = m.parentNode.parentNode;
		var table = tr.parentNode.parentNode;
		var span = table.childNodes[1].lastChild;
		database.ref('users/'+user.uid).once('value').then(function(snapshot){
			menu = snapshot.val().menu;
			menu.splice(menu.indexOf(span.innerHTML),1);
			console.log(menu)
			console.log(span.innerHTML)

			database.ref('users/'+user.uid+"/menu").set(menu);	
			m.parentNode.parentNode.parentNode.childNodes[1].firstChild.innerHTML = String(parseInt(price) - parseInt(price)/parseInt(div_center.innerHTML))+"₩"
			div_center.innerHTML = parseInt(div_center.innerHTML) - 1;
			calc_total_price ()	
		})	 
	} else if ((parseInt(div_center.innerHTML) - 1) == 0)
	{	
		var tr = m.parentNode.parentNode;
		var table = tr.parentNode.parentNode;
		var span = table.childNodes[1].lastChild;
		database.ref('users/'+user.uid).once('value').then(function(snapshot){
			menu = snapshot.val().menu;
			
			menu.splice(menu.indexOf(span.innerHTML),1);
			console.log(menu)
			console.log(span.innerHTML)

			database.ref('users/'+user.uid+"/menu").set(menu);
			
		})
		tr.setAttribute('class',"select_tr");
		tr.innerHTML = "";
		var td_plus = document.createElement("td");
		var img_plus = document.createElement("img");
		img_plus.setAttribute('class',"plus");
		img_plus.setAttribute('float',"rignt");
		img_plus.style.cursor = "pointer";
		img_plus.setAttribute('onclick',"selectable_elem_plus(this)");
		img_plus.src="./source/plus.png"
		td_plus.appendChild(img_plus);
		tr.appendChild(td_plus);

		var row = tr.parentNode.parentNode.parentNode;
		move_to_selectable(row);
		calc_total_price ()
	}
}

order_button.onclick = function() {
	window.location.href = "./select_location.html";
}

function calc_total_price () {
	var total_price = 0;
	var selected_table = document.getElementById('selected');
	var price_li = selected_table.getElementsByClassName('li_price');
	// console.log(price_li);
	for (var li_i=0;li_i<price_li.length;li_i++)
	{
		total_price += parseInt(price_li[li_i].innerHTML.split("₩")[0]);
		// console.log(price_li[li_i].innerHTML);
	}
	console.log("total_price=",total_price);
	var total_price_div = document.getElementById("total_price");
	total_price_div.innerHTML = "TOTAL: " + String(total_price) + "₩";
}
