// Telephone Number Validator challenge from FreeCodeCamp

function telephoneCheck(str) {
  var regexDigits = /\d/;
  var regexIllegal = /[!@#$%^&*=+<>?/.,;:]/;
  
  // check proper parens placement
  var lParen = str.indexOf('(');
  var rParen = str.indexOf(')');

  parens: if (lParen > -1 || rParen > -1) {    
      if (lParen === 0 && rParen === 4) {
          break parens;
      } else if (lParen === 1 && rParen === 5) {
          break parens;;
      } else if (lParen === 2 && rParen === 6) {
          break parens;
      } // NOT 0 && 4, NOT 1 && 5, NOT 2 && 6
      else if ((lParen != 0 && rParen != 4) ||
          (lParen != 1 && rParen != 5) ||
          (lParen != 2 && rParen != 6)) {
              return false;
      }
  }

  // build DIGITS string
  var digits = "";
  for (var i=0; i<str.length; i++) {
    // illegal characters
    if (str[i].match(regexIllegal)) {
        return false;
    }
    // add only digits to string
    if (str[i].match(regexDigits)) {
      digits = digits + str[i];
    }
  }

  // check size of DIGITS
  if (digits.length < 10 || digits.length > 11) {
      return false;
  } else if (digits.length === 11 && digits[0] != '1') {
      return false;
  }

  return true;
}
