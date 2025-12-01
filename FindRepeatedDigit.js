/*  Take a range from 0 – 100, find the digits that are repeated twice like 33, 77,
etc and store them in an array */

let repeatedDigits = [];
for (let i = 0; i <= 100; i++) {
  let str = i.toString();
  if (str.length === 2 && str[0] === str[1]) {
    repeatedDigits.push(i);
  }
}
console.log("Repeated digits array:", repeatedDigits);
