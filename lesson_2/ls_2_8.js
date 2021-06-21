function power(val, pow) {
  if (pow == 0) return 1;
  if (pow == 1) return val;
  return power(val, pow-1) * val;
}

console.log(power(2,3));
