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

// memfilter element yang bertype string dg for loop
let foo = [1, "a", 3, "b", 4];

let huruf = [];
let angka = [];
// for (let i = 0; i < foo.length; i++) {
//   if (typeof foo[i] === "string") {
//     bar.push(foo[i]);
//   }
// }

// memfilter element yang bertype number dg filter
foo.filter(function (a) {
  typeof a === "number" ? angka.push(a) : huruf.push(a);
});
console.log(huruf);
console.log(angka);

// terpisah dengan function
function fType(element) {
  if (typeof element === "number") {
    return huruf1.push(element);
  } else if (typeof element === "string") {
    return angka2.push(element);
  } else {
    console.log("not string or number");
  }
}

let alfabet = [1, 3, "a", "b", 5, null];

let huruf1 = [];
let angka2 = [];
alfabet.filter(fType);

console.log(huruf1);
console.log(angka2);
