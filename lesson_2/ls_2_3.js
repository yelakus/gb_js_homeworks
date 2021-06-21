let a = -30;
let b = -10;

if (a >= 0 && b >= 0) {
  console.log('Разница = ' + Math.abs(b-a));
} else if (a < 0 && b < 0){
  console.log("Произведение = " + (b*a));
} else {
  console.log("Сумма = " + (b+a));
}
