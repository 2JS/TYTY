var helperOrNot = 0;

function clickIdentifier() {
    window.location.href = "https://cs374-tyty.firebaseapp.com/identifier.html"
}

function toggleHelper() {
	if (helperOrNot === 0) {
		// $('#helper').append("<p id='triangle'>&#9650;</p>")
		$('#helper').append("<div class='speech-bubble'>Show identifier in order to find out the right deliverer!</div>")
		helperOrNot = 1
	} else {
		$('#helper').empty()
		helperOrNot = 0
	}
	
}
