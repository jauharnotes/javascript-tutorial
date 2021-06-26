const map = new Map();
map.set("Name", "Jauhar");
map.set("Address", "Indonesia");

console.log(map);
console.log(map.get("Name"));
console.log(map.get("Address"));
console.log(map.get("Age"));

for (const element of map) {
  console.log(`${element[0]}: ${element[1]}`);
}

map.forEach((value, key) => console.log(`${key}: ${value}`));

const foo = [1, 2, 3, 4, 5, 6, 7];

const bar = foo.map(function (element, index, array) {
  return element * 2;
});

console.log(bar);

function kaliDua(element) {
  return element * 2;
}

const foo2 = [1, 2, 3, 4, 5, 6, 7];
const bar2 = foo2.map(kaliDua);
console.log(bar2);

// Mencari akaar kuadrat dengan method map
function akarKuadrat(element) {
  return Math.sqrt(element);
}

const input = [49, 81, 4, 9, 36, 121];
const result = input.map(akarKuadrat);
console.log(result);

// menghitung pankat 3
function pangkatTiga(element) {
  return Math.pow(element, 3);
}

const input2 = [8, 4, 7, 9, 3, 2];
const result2 = input2.map(pangkatTiga);
console.log(result2);

function genap(element) {
  if (element % 2 === 0) {
    return element;
  } else {
    return 0;
  }
}

const nilai = [8, 4, 7, 9, 2, 10];
const hasil = nilai.map(genap);
console.log(hasil);

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
