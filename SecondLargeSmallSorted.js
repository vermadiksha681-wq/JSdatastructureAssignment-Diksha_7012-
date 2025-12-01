/* Extend the above program to sort the array and then find the 2nd largest
and the 2nd smallest element. */
// Step 1 & 2: Generate 10 random 3-digit numbers
let arr = [];
for (let i = 0; i < 10; i++) {
  let num = Math.floor(Math.random() * 900) + 100; 
  arr.push(num);
}
console.log("Original Array:", arr);
arr.sort((a, b) => a - b); 
console.log("Sorted Array:", arr);
let secondSmallest = arr[1];
let secondLargest = arr[arr.length - 2];

console.log("2nd Smallest:", secondSmallest);
console.log("2nd Largest:", secondLargest);
