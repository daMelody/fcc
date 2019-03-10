// Palindrome Checker challenge from FCC

function palindrome(str) {
  // use REGEX to keep alphanumeric characters
  var regex = /[a-z0-9]/ig;

  // build NEWSTRING of proper chars
  var newString = "";
  for (var i=0; i<str.length; i++) {
   if (str[i].test(regex)) {
      newString = newString + str[i];  
    }
  }

  // convert NEWSTRING to lowercase
  newString = newString.toLowerCase();

  // build REVERSE of NEWSTRING
  var reverse = newString.split("").reverse().join("");

  // compare NEWSTRING and REVERSE
  if (newString === reverse) {
    return true;
  } else {
    return false;
  }
}

palindrome("eye");
