{
  // Array Loop
  const array = ["Jauhar", "Uddin", "Khannedy"];

  array.forEach(function (value, index) {
    console.log(`${index}: ${value}`);
  });

  console.log("===================");

  array.forEach((value, index) => console.log(`${index}: ${value}`));

  array.forEach((value) => console.log(value));
}

console.log("===================");

{
  // Array Queue
  const queue = [];

  queue.push("Jauhar");
  queue.push("Uddin");
  queue.push("Khannedy");

  console.log(queue.shift());
  console.log(queue.shift());
  console.log(queue.shift());
  console.log(queue.shift());
}

console.log("===================");

{
  // Array Stack
  const stack = [];

  stack.push("Jauhar");
  stack.push("Uddin");
  stack.push("Khannedy");

  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
}

{
  // Array Search
  const source = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

  console.log(source.find((value) => value > 3));
  console.log(source.findIndex((value) => value > 3));
  console.log(source.includes(7));
  console.log(source.indexOf(5));
  console.log(source.lastIndexOf(5));
}

{
  // Array Filter
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const ganjil = numbers.filter((value) => value % 2 == 1);
  const genab = numbers.filter((value) => value % 2 == 0);

  console.log(ganjil);
  console.log(genab);
}

{
  // Array Transform
  const names = ["Jauhar", "Uddin", "Khannedy"];

  const nameUpper = names.map((value) => value.toUpperCase());
  console.log(nameUpper);

  const nameReduce = names.reduce((before, value) => before + " " + value);
  console.log(nameReduce);

  const nameReduceRight = names.reduceRight(
    (before, value) => before + " " + value
  );
  console.log(nameReduceRight);

  const numbers = [1, 2, 3, 4, 5, 6, 7];

  const total = numbers.reduce((before, value) => before + value);
  console.log(total);
}

{
  // Array prototype reverse
  const foo = ["a", "b", "c", "d", "e"];

  const bar = foo.reverse();
  console.log(bar);
  console.log(foo);

  const back = bar.reverse();
  console.log(back);
}

{
  // Array prototype concat
  const foo = ["a", "b", "c", "d", "e"];
  const bar = [1, 2, 3, 4, 5];

  const fooBar = foo.concat(bar);
  console.log(fooBar);

  const barFoo = bar.concat(foo);
  console.log(barFoo);

  console.log(foo);
  console.log(bar);
}

{
  // Array prototype slice
  const foo = ["a", "b", "c", "d", "e", "f", "g"];

  console.log(foo.slice());
  console.log(foo.slice(3));
  console.log(foo.slice(3, 5));
  console.log(foo.slice(-5));
  console.log(foo.slice(-5, -2));
}

{
  // Array prototype splice
  const foo = [1, 2, 3, 4, 5, 6, 7, 8];
  foo.splice(1, 3, 5);
  console.log(foo);
}

{
  // Array prototype join
  const foo = ["a", "b", "c", "d", "e", "f", "g"];
  console.log(foo.join());
  console.log(foo.join("-"));
  console.log(foo.join("#"));
  console.log(foo.join(""));
  console.log(foo.join(" "));
}

{
  // Array prototype forEach
  const foo = ["a", "b", "c", "d", "e", "f", "g"];
  foo.forEach(function () {
    console.log("JavaScript");
  });

  // Array prototype forEach 2 argument
  const bar = ["a", "b", "c", "d", "e", "f", "g"];
  bar.forEach(function (element, index) {
    console.log(`Index ke: ${index} = ${element}`);
  });

  // Array prototype forEach 3 argument
  const bar2 = ["a", "b", "c", "d", "e", "f", "g"];
  bar2.forEach(function (element, index, array) {
    console.log(`Index ke: ${index} = ${element}`);
    console.log(array);
  });

  function tampil(element, index) {
    console.log(`Index ke: ${index} = ${element}`);
  }

  const name = ["Johar", "Juned", "Agung"];
  name.forEach(tampil);
  const name2 = ["Subakir", "Saidah", "Subki"];
  name2.forEach(tampil);
}

// Array filter
function genap2(element) {
  if (element % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const nilai2 = [8, 4, 7, 9, 2, 10];
const hasil2 = nilai2.filter(genap2);
console.log(hasil2);

function besar30(element) {
  if (element >= 30) {
    return true;
  } else {
    return false;
  }
}

const nilai3 = [10, 20, 30, 40, 50, 17];
const hasil3 = nilai3.filter(besar30);
console.log(hasil3);

// Array every
function genap3(element) {
  if (element % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const bilangan = [10, 20, 4, 6, 8, 12];
const hasil4 = bilangan.every(genap3);
console.log(hasil4);

const bilangan2 = [3, 10, 20, 4, 6, 8, 12];
const hasil5 = bilangan2.every(genap3);
console.log(hasil5);

function besar10(element) {
  return element >= 10;
}

const bilangan3 = [10, 20, 40, 50, 30, 12];
const hasil6 = bilangan3.every(besar10);
console.log(hasil6);

const bilangan4 = [7, 10, 20, 40, 50, 30, 12];
const hasil7 = bilangan4.every(besar10);
console.log(hasil7);

{
  // Array some
  function genap(element) {
    return element % 2 === 0;
  }

  const nilai = [10, 20, 40, 50, 30, 12];
  const result = nilai.some(genap);
  console.log(result);

  const nilai2 = [7, 10, 20, 40, 50, 30, 12];
  const result2 = nilai2.some(genap);
  console.log(result2);

  const nilai3 = [7, 11, 23, 45, 57, 31, 15];
  const result3 = nilai3.some(genap);
  console.log(result3);
}

{
  // Array find & findIndex
  function genap(element) {
    return element % 2 === 0;
  }

  const foo = [7, 11, 20, 45, 50, 31, 10];
  console.log(foo.find(genap));
  console.log(foo.findIndex(genap));
}
