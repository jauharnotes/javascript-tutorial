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
