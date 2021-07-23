let num = [10, 2, 4, 6, 1, 8, 9, 3];

// cari angka yang lebih besar atau sama dengan 3
// case 1. menggunakan foor loop
let newNum = [];

for (let i = 0; i < num.length; i++) {
  if (num[i] >= 3) {
    newNum.push(num[i]);
  }
}

console.log(newNum);

// menggunakan filter
const newNumber = num.filter(function (a) {
  return a >= 3;
});

console.log(newNumber);

// arrow function
const newNumber2 = num.filter((a) => a >= 3);
console.log(newNumber2);
