function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case '+': return addition(arg1, arg2);
    case '-': return subtraction(arg1, arg2);
    case '*': return multiplication(arg1, arg2);
    case '/': return division(arg1, arg2);
  }
}

function addition(a,b) {
  return a+b;
}
function subtraction(a,b) {
  return a-b;
}
function multiplication(a,b) {
  return a*b;
}
function division(a,b) {
  return a/b;
}
let a = 10
let b = 5
console.log(mathOperation(a,b, '+'))
console.log(mathOperation(a,b, '-'))
console.log(mathOperation(a,b, '*'))
console.log(mathOperation(a,b, '/'))
