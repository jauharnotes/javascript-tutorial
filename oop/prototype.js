function Employee(firstName) {
    this.firstName = firstName;
    this.sayHello = function (name) {
      console.log(`Hello ${name}, My name is ${this.firstName}`);
    };
  }
  
  const johar = new Employee("Johar", "Uddin");
  const agung = new Employee("Agung", "Pramono");

  console.log(johar);
  console.log(agung);
  