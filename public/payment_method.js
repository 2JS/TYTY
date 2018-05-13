/*main code*/
document.getElementById("card").onclick = function () { //go to card page
    location.href = "./card.html";
};

document.getElementById("cash").onclick = function () { //go to cash page
    location.href = "./cash.html";
};

/*delete this after real connecting , the ORDER of each onclick is important*/ 
try{
	document.getElementById("myButton").onclick = function () { //go to main page(payment_method page)
	    location.href = "./payment_method.html";
	};
} catch {
	console.log("detected the home page!!");
}

// location button
try{
	document.getElementById("location").onclick = function () { //go to main page(payment_method page)
	    location.href = "./select_location.html";
	};
} catch {
	console.log("detected the sub page!!");
}


console.log(window.name);
