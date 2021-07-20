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
