function Employee(name) {
  this.name = name;
}

function Manager(name) {
  this.name = name;
}

// Manager.prototype = Employee.prototype; // penggunanaan yang salah
Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.sayHello = function (name) {
  console.log(`Hello ${name}, my name is Manager ${this.name}`);
};

Employee.prototype.sayHello = function (name) {
  console.log(`Hello ${name}, my name is Employee ${this.name}`);
};

const employee = new Employee("Johar");
employee.sayHello("Juned");

const manager = new Manager("Johar");
manager.sayHello("Juned");
