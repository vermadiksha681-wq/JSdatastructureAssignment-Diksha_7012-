/*Write a Program to generate a birth month of 50 individuals
between the year 92 & 93. Find all the individuals having birthdays
in the same month. Store it to finally print. */
// Step 1: Initialize Map to store month -> list of individuals
let birthMonthMap = new Map();
for (let i = 1; i <= 12; i++) {
  birthMonthMap.set(i, []);
}
for (let id = 1; id <= 50; id++) {
  let year = 1992 + Math.floor(Math.random() * 2);
  let month = Math.floor(Math.random() * 12) + 1;
  let day = Math.floor(Math.random() * 28) + 1;
  let person = `Person${id} (${day}/${month}/${year})`;
  birthMonthMap.get(month).push(person);
}

for (let [month, persons] of birthMonthMap) {
  if (persons.length > 0) {
    console.log(`\nMonth ${month} has ${persons.length} birthdays:`);
    console.log(persons.join(", "));
  }
}
