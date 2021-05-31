class Employee {}

class Manager extends Employee {}

const johar = new Employee();
const juned = new Manager();

console.log(typeof johar);
console.log(typeof juned);

console.log(johar instanceof Employee);
console.log(juned instanceof Employee);

console.log(johar instanceof Manager);
console.log(juned instanceof Employee);
