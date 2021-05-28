const person = {
  firsName: "jauhar",
  middleName: "uddin",
  lastName: "batubara",
};

for (const property in person) {
  console.log(`${property}: ${person[property]}`);
}

const names = ["jauhar", "uddin", "batubara"];
for (const index in names) {
  console.log(`${index}: ${names[index]}`);
}
