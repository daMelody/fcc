// Caesar Cipher challenge from FreeCodeCamp

function rot13(str) {
	// make REGEX for alphabetic chars
	var regex = /[a-z]/ig;
	// make cipher accumulator
	var cipher = "";

	// iterate through STR by character
	for (var i=0; i<str.length; i++) {
		var ch = str[i];	
		// check CH against REGEX
		if (ch.match(regex)) {
			// get ASCII code
			var ascii = str.charCodeAt(i);
			// if CH+13 is valid
			if (ascii+13 <= 90) {
				ascii = ascii + 13;
				ch = String.fromCharCode(ascii);
			} else {
				ascii = ascii - 13;
				ch = String.fromCharCode(ascii);
			}
		}
		
		// add rotated CH to cipher
		cipher = cipher + ch;
	}

	return cipher;
}
