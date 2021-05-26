function Employee(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function (name) {
      console.log(`Hello ${name}, My name is ${this.firstName}`);
    };
  }

  Employee.prototype.sayBye = function() {
    console.log("Good Bye");
  }

  Employee.prototype.run = function() {
    console.log(`${this.firstName} is running`);
  }
  
  const johar = new Employee("Johar", "Uddin");
  const agung = new Employee("Agung", "Pramono");

  johar.sayHello("Juned");

  johar.sayBye();
  agung.run();

  console.log(johar);
  console.log(agung);

  