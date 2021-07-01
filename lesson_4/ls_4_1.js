'use strict';
let number = 5000;
const digits = {};

function convertToObj(num) {

  if (num > 999) return (`Число превышает 999`);
  if (num < 0) return (`Число меньше 0`);

  let strNum = num.toString();

if (num > 99) {
  digits.единицы = parseInt(strNum[2]);
  digits.десятки = parseInt(strNum[1]);
  digits.сотни = parseInt(strNum[0]);
} else if (num > 9) {
  digits.единицы = parseInt(strNum[1]);
  digits.десятки = parseInt(strNum[0]);
  digits.сотни = 0;
} else {
  digits.единицы = parseInt(strNum[0]);
  digits.десятки = 0;
  digits.сотни = 0;
};


  return digits;
};

console.log(convertToObj(number));
