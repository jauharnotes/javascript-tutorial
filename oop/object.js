// menggunakan huruf kapital diawal
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function (name) {
    console.log(`Hello ${name}, my name is ${this.firstName}`);
  };
}

const johar = new Person("Johar", "Uddin");
// johar.firstName = "Johar";
// johar.lastName = "Uddin";
johar.sayHello("Juned");

const agung = new Person("Agung", "Nugraha");
// agung.firstName = "Agung";
// agung.lastName = "Nugraha";
agung.sayHello("Bakir");

console.log(johar);
console.log(agung);
