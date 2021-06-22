function isPrime(x) {
  for (let i = 2, count = 1; i <= (x / 2); i++) {
    if (x % i == 0) count++;
    if (count != 1) return false;
  }
  return true
}

num = 1;
while (num <= 100) {
  if (isPrime(num)) console.log(num);
  num++;
}
