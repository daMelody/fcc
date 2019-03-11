// Telephone Number Validator challenge from FreeCodeCamp

function telephoneCheck(str) {
	// make REGEX for numbers
	var regex = /[0-9]/;
	// make simplified number
	var simpleNum = "";

	// apply REGEX to STR
	for (var i=0; i<str.length; i++) {
		if (str[i].match(regex)) {
				simpleNum = simpleNum + str[i];
		} else if (str[i] != "(" || str[i] != ")") {
				return false;
		}
	}

	// check length of SIMPLE-NUM
	var numLength = simpleNum.length;

	// if NUM-LENGTH==11, check country code
	if (numLength === 11 && simpleNum[0] === 1) {
			return true;
	} else if (numLength === 10) {
			return true;
	} else {
			return false;
	}
}
