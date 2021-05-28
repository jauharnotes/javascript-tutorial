class Employee {
  constructor(firstName) {
    this.firstName = firstName;
  }

  sayHello(name) {
    console.log(`Hello ${name} my name is Employee ${this.firstName}`);
  }
}

class Manager extends Employee {
  constructor(firstName, lastName) {
    super(firstName);
    this.lastName = lastName;
  }
  sayHello(name) {
    console.log(
      `Hello ${name} my name is Manager ${this.firstName} ${this.lastName}`
    );
  }
}

const johar = new Employee("Johar");
johar.sayHello("agung");

const agung = new Manager("agung", "Prayoga");
agung.sayHello(johar.name);
