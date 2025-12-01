/* Extend the Prime Factorization Program to store all the Prime Factors of a
number n into an array and finally display the output */
// Take input from user using readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter a number: ", function (num) {
  let n = parseInt(num);
  let factors = [];

  while (n % 2 === 0) {
    factors.push(2);
    n = n / 2;
  }

  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      factors.push(i);
      n = n / i;
    }
  }
  if (n > 2) {
    factors.push(n);
  }

  console.log("Prime Factors are:", factors);

  rl.close();
});
