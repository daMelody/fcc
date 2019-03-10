// Caesar Cipher challenge from FreeCodeCamp

function rot13(str) {
	// make REGEX for alphabetic chars
	var regex = /a-z/ig;
	// make cipher accumulator
	var cipher = "";

	// iterate through STR by character
	for (var i=0; i<str.length; i++) {
		var ch = str[i];	
		// check CH against REGEX
		if (ch[i].match(regex)) {
			// if CH+13 results in wrapping around
			if (ch+13 < 90) {
				ch = ch - 13;
			} else {
				ch = ch + 13;
			}
		}
		
		// add rotated CH to cipher
		cipher = cipher + ch;
	}

	return cipher;
}
