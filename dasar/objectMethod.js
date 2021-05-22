// Function di dalam object versi1
const person = {
  name: "Johar",
  sayHello: function (name) {
    console.log(`Hello ${name}`);
  },
};

console.log(person.name);
person.sayHello("Agung");

console.log("=================");

// Function di dalam object versi2
function sayHello(name) {
  console.log(`Hello ${name}`);
}

const person2 = {
  name: "Juned",
  sayHello: sayHello,
};

console.log(person2.name);
person2.sayHello("Subakir");

// Function di dalam object versi 3
const person3 = {
  name: "Saida",
};

person3.sayHello = function (name) {
  console.log(`hello ${name}`);
};

person3.sayHello("Sazan");
