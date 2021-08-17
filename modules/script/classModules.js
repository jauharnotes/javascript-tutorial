export class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello(name) {
    console.log(`Hello ${this.name} my name is ${name}`);
  }
}
