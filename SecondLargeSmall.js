/* 1. Write a program in the following steps
a. Generates 10 Random 3 Digit number.
b. Store this random numbers into a array.
c. Then find the 2nd largest and the 2nd smallest element without sorting the array. */
// Generate 10 random 3-digit numbers (100–999)
let arr = [];
for (let i = 0; i < 10; i++) {
  let num = Math.floor(Math.random() * 900) + 100; 
  arr.push(num);
}
console.log("Array:", arr);

let smallest = Infinity;
let secondSmallest = Infinity;

let largest = -Infinity;
let secondLargest = -Infinity;

 for(let i = 0; i < arr.length; i++) {
  let n = arr[i];
  if (n < smallest) {
    secondSmallest = smallest;
    smallest = n;
  } else if (n < secondSmallest && n !== smallest) {
    secondSmallest = n;
  }

  if (n > largest) {
    secondLargest = largest;
    largest = n;
  } else if (n > secondLargest && n !== largest) {
    secondLargest = n;
  }
}

console.log("Smallest:", smallest);
console.log("2nd Smallest:", secondSmallest);

console.log("Largest:", largest);
console.log("2nd Largest:", secondLargest);
