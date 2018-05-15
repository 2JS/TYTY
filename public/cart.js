window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var selected = document.getElementById('selected')

function myFunction() {
  if (window.pageYOffset >= selected.offsetTop + selected.offsetHeight) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

auth.signInAnonymously().then(function(user) {
	console.log(user.uid)
	var category;
	var selected_menu = [];
	var brand;
	console.log(user.uid)

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

				var span = document.createElement('span');
				span.innerHTML=menu

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

				td.appendChild(img)
				td.appendChild(span)
				td.appendChild(table)

				tr.appendChild(td)

				document.getElementById('selected_body').appendChild(tr)
			})
			// img.src = snapshot.child(selected_menu).val()['image'];
			
			
		}


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

					var span1 = document.createElement('span')
					span1.innerHTML = menu;

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

					td1.appendChild(img1)
					td1.appendChild(span1)
					td1.appendChild(table1)

					tr1.appendChild(td1)

					document.getElementById('selectable_body').appendChild(tr1)


				}	
				
			})
		})
	})
})	

// var img = document.getElementByClass("selected_elem_img1");
// img.setAttribute('src',"./source/chicken.png");

function selectable_elem_plus(x) {
	console.log(x)
	var menu;
	var tr = x.parentNode.parentNode;
	var table = tr.parentNode;
	var span = table.previousSibling;
	database.ref('users/'+user.uid).once('value').then(function(snapshot){
		menu = snapshot.val().menu;
		menu.push(span.innerHTML);
		console.log(menu)
		console.log(span.innerHTML)

		database.ref('users/'+user.uid+"/menu").set(menu);	
	})
	// menu.push(x)
	

	// console.log(x.parentNode.parentNode.parentNode.parentNode.getAttribute('id'));
	// console.log(x.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("class")); //row
	
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
	var row = tr.parentNode.parentNode.parentNode.parentNode;
	move_to_selected(row);
}

function move_to_selected(tr) {
	var selected = document.getElementById("selected");
	selected.appendChild(tr);
	sticky = navbar.offsetTop;
}

function move_to_selectable(tr) {
	var selectable = document.getElementById("selectable");
	selectable.insertBefore(tr, selectable.firstChild);
	sticky = navbar.offsetTop;
}

function plus(p) {
	var div_center = p.parentNode.parentNode.getElementsByClassName("center")[0];
	div_center.innerHTML = parseInt(div_center.innerHTML) + 1;
	var tr = p.parentNode.parentNode;
	var table = tr.parentNode;
	var span = table.previousSibling;
	console.log(span.innerHTML)
	database.ref('users/'+user.uid).once('value').then(function(snapshot){
		menu = snapshot.val().menu;
		menu.push(span.innerHTML);
		console.log(menu)
		console.log(span.innerHTML)

		database.ref('users/'+user.uid+"/menu").set(menu);	
	})
}

function minus(m) {
	// console.log(m.parentNode.parentNode);
	var div_center = m.parentNode.parentNode.getElementsByClassName("center")[0];
	if ((parseInt(div_center.innerHTML) - 1) > 0)
	{	var tr = m.parentNode.parentNode;
		var table = tr.parentNode;
		var span = table.previousSibling;
		database.ref('users/'+user.uid).once('value').then(function(snapshot){
			menu = snapshot.val().menu;
			menu.splice(menu.indexOf(span.innerHTML),1);
			console.log(menu)
			console.log(span.innerHTML)

			database.ref('users/'+user.uid+"/menu").set(menu);	
		})
		div_center.innerHTML = parseInt(div_center.innerHTML) - 1;		
	} else if ((parseInt(div_center.innerHTML) - 1) == 0)
	{	
		var tr = m.parentNode.parentNode;
		var table = tr.parentNode;
		var span = table.previousSibling;
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

		var row = tr.parentNode.parentNode.parentNode.parentNode;
		move_to_selectable(row);
	}
}

order_button.onclick = function() {
	window.location.href = "./select_location.html";
}