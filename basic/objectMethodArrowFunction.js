const person = {
  name: "Johar",
  sayHello: (name) => {
    console.log(`Hello ${name}`);
  },
};

console.log(person.name);
person.sayHello("Agung");

// Tidak dapat menggunakan kata kunci 'this' ketika menggunakan Arrow function
