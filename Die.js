/* Map Practice Problems

1. Write a program in the following steps
a. Roll a die and find the number between 1 to 6
b. Repeat the Die roll and find the result each time
c. Store the result in a dictionary
d. Repeat till any one of the number has reached 10 times
e. Find the number that reached maximum times and the one that was for
minimum times */
let dieCount = new Map();
for (let i = 1; i <= 6; i++) {
  dieCount.set(i, 0);
}
let maxRolls = 10;
while (true) {
  let roll = Math.floor(Math.random() * 6) + 1; 
  dieCount.set(roll, dieCount.get(roll) + 1);

  if (dieCount.get(roll) === maxRolls) {
    break;
  }
}

console.log("Die Roll Counts:");
for (let [key, value] of dieCount) {
  console.log(`${key}: ${value}`);
}
let maxNum = null, minNum = null;
let maxValue = -Infinity, minValue = Infinity;

for (let [key, value] of dieCount) {
  if (value > maxValue) {
    maxValue = value;
    maxNum = key;
  }
  if (value < minValue) {
    minValue = value;
    minNum = key;
  }
}

console.log(`\nNumber that reached maximum times: ${maxNum} (${maxValue} times)`);
console.log(`Number that reached minimum times: ${minNum} (${minValue} times)`);
