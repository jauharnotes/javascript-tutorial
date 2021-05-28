{
  const names = ["Jauhar", "Uddin", "Batubara", "Juned", "Agung"];

  // *Exstrac menggunakan index
  // const firsName = names[0];
  // const middleName = names[1];
  // const lastName = names[2];

  // *Exstrac menggunakan destructuring
  const [firsName, middleName, lastName, ...others] = names;

  console.log(firsName);
  console.log(middleName);
  console.log(lastName);
  console.log(others);
}

console.log("=======================");

{
  const person = {
    firsName: "jauhar",
    lastName: "Uddin",
    address: {
      street: "Jalan Kenangan",
      city: "jakarta",
      country: "Indonesia",
    },
    hobby: "Koding",
    bahasa: "Javascript",
  };

  const {
    firsName,
    lastName,
    address: { street, city, country },
    ...others
  } = person;
  console.log(firsName);
  console.log(lastName);
  console.log(street);
  console.log(city);
  console.log(country);
  console.log(others);
}

console.log("============================");

{
  function displayperson({ firsName, middleName, lastName }) {
    console.log(firsName);
    console.log(middleName);
    console.log(lastName);
  }

  const person = {
    firsName: "Jauhar",
    middleName: "Uddin",
    lastName: "Batubara",
  };

  displayperson(person);
}

console.log("============================");

{
  function sum([first, second]) {
    return first + second;
  }

  console.log(sum([2, 4]));
}
