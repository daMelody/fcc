// Roman Numeral Converter challenge from FCC

function convertToRoman(num) {
  var roman = "";

  // iterate while NUM > 0
  while (num > 0) {
    // check 3 and under
    if (num <= 3) {
         roman = roman + "I";
         num = num - 1;
    }  else if (num <= 4) {
         roman = roman + "IV";
         num = num - 4;
    }  else if (num <= 5) {
         roman = roman + "V";
         num = num - 5;
    }  else if (num <= 10) {
         roman = roman + "X";
         num = num - 10;
    }
  }

    
  // return ROMAN string value
  return roman;
}
