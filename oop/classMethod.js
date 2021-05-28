class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello(name) {
    console.log(`Hello ${name}, my name is ${this.name}`);
  }
}

const johar = new Person("johar");
console.log(johar);
console.log(johar.name);
johar.sayHello("johar");

const agung = new Person("agung");
console.log(agung);
console.log(agung.name);
agung.sayHello(johar.name);
