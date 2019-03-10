// Roman Numeral Converter challenge from FCC

function convertToRoman(num) {
  var roman = "";

  // iterate while NUM > 0
  while (num > 0) {

  // if-else chain
  if (num > 1000) {
    roman = roman + "M";
    num = num - 1000;
  } else if (num > 500) {
    roman = roman + "D";
    num = num - 500;
  } else if (num > 100) {
    roman = roman + "C";
    num = num - 100;
  } else if (num > 50) {
    roman = roman + "L";
    num = num - 50;
  } else if (num > 10) {
    roman = roman + "X";
    num = num - 10;
  } else if (num > 5) {
    roman = roman + "V";
    num = num - 5;
  } else {
    roman = roman + "I";
    num = num - 1;
  }

  // return ROMAN string value
  return roman;
}
