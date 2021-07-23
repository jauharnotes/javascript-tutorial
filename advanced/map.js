let num = [10, 2, 4, 6, 1, 8, 9, 3];

// kalihkan 2 setiap element di array
// menggunakan for loop
const newNumber = [];

for (let i = 0; i < num.length; i++) {
  newNumber.push(num[i] * 2);
}

console.log(newNumber);

// menggunakan map
const newNumber3 = num.map(function (a) {
  return a * 2;
});

console.log(newNumber3);

// menggunakan map arrow function
const newNumber2 = num.map((a) => a * 2);
console.log(newNumber2);
