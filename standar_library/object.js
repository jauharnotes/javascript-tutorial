{
  // Object freeze & Seal
  const person = {
    firstName: "Jauhar",
    lastName: "Uddin",
  };

  Object.freeze(person);

  person.lastName = "Juned"; // Tidak berubah
  delete person.firstName; // Tidak berunah
  console.log(person);

  const person2 = {
    firstName: "Jauhar",
    lastName: "Uddin",
  };

  Object.seal(person2);

  person2.lastName = "Juned"; // berubah
  delete person2.firstName; // Tidak berunah
  console.log(person2);
}

console.log("=============================");

{
  // Object Asign
  const target = {
    firstName: "Jauhar",
    middleName: "Batubara",
  };

  const source = {
    lastName: "Uddin",
  };

  Object.assign(target, source);
  console.log(target);
}

console.log("=============================");

{
  // object property name & value
  const person = {
    firstName: "Jauhar",
    lastName: "Uddin",
  };

  console.log(Object.values(person));
  console.log(Object.getOwnPropertyNames(person));
}
