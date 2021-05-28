class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    const result = value.split(" ");
    this.firstName = result[0];
    this.lastName = result[1];
  }
}

const johar = new Person("johar", "uddin");
console.log(johar);
console.log(johar.fullName);

johar.fullName = "johar batubara";
console.log(johar);
console.log(johar.fullName);
