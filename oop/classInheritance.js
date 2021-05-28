class Employee {
  sayHello(name) {
    console.log(`Hello ${name}, my name is employee ${this.name}`);
  }
}

class Manager extends Employee {
  sayHello(name) {
    console.log(`Hello ${name}, my name is manager ${this.name}`);
  }
}

const johar = new Employee();
johar.name = "Johar";
johar.sayHello("Agung");

const agung = new Manager();
agung.name = "Agung";
agung.sayHello("Johar");
