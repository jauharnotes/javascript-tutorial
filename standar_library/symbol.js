{
  // Symbol
  const firstName = Symbol("firsName");
  const lastName = Symbol("lastName");

  const person = {};
  person[firstName] = "Jauhar";
  person[lastName] = "Uddin";

  console.log(person);
  console.log(person[firstName]);
  console.log(person[lastName]);
}

{
  // Symbol For
  console.log(Symbol("firstName") === Symbol("firstName"));
  console.log(Symbol.for("firstName") === Symbol.for("firstName"));

  const person = {};
  person[Symbol.for("firstName")] = "Jauhar";
  person[Symbol.for("lastName")] = "Uddin";

  console.log(person);
  console.log(person[Symbol.for("firstName")]);
  console.log(person[Symbol.for("lastName")]);
}
