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


const foo = [1,2,3,4,5,6,7];

const bar = foo.map(
  function(element, index, array) {
    return element * 2;
  }
);

console.log(bar);

function kaliDua(element) {
  return element * 2;
}

const foo2 = [1,2,3,4,5,6,7];
const bar2 = foo2.map(kaliDua);
console.log(bar2);