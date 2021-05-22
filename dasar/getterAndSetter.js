// Tidak menggunakan Getter
// const person = {
//     firsName: "Jauhar",
//     lastName: "Uddin",
//     fullName: function() {
//       return `${this.firsName} ${this.lastName}`;
//     },
//   };

// Menggunakan Getter & Setter
const person = {
  firsName: "Jauhar",
  lastName: "Uddin",
  get fullName() {
    return `${this.firsName} ${this.lastName}`;
  },
  set fullName(value) {
    const array = value.split(" ");
    this.firsName = array[0];
    this.lastName = array[1];
  },
};

person.fullName = "Budi Nugraha";
console.table(person);

person.fullName = "Eko Susilo";
console.table(person);
