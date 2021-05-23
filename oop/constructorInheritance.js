function Employee(firstName) {
  this.firstName = firstName;
  this.sayHello = function (name) {
    console.log(`Hello ${name}, My name is ${this.firstName}`);
  };
}

function Manager (firstName, lastName) {
    this.lastName = lastName;
    Employee.call(this, firstName);
}

const johar = new Manager("Johar", "Uddin");
console.log(johar);