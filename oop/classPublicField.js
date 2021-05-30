class Customer {
  firsName;
  lastName;
  balance = 0;

  constructor(firsName, lastName) {
    this.firsName = firsName;
    this.lastName = lastName;
  }

  sayHello() {}
}

const johar = new Customer("Johar", "uddin");
console.log(johar);
