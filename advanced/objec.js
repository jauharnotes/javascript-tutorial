// Cara untuk membuat object di javascript
// 1. Object Literal
// let mahasiswa = {
//   name1: "jauhar",
//   energi: 10,
//   eat: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.name1}, selamat makan `);
//   },
// };

// mahasiswa.eat(10);
// console.log(mahasiswa);

// 2. Function declaration
// function Mahasiswa(name, energy) {
//   let mahasiswa = [];
//   mahasiswa.name = name;
//   mahasiswa.energy = energy;

//   mahasiswa.eat = function (porsi) {
//     this.energy += porsi;
//     console.log(`halo ${this.name}, selamat makan`);
//   };

//   mahasiswa.playing = function (time) {
//     this.energy -= time;
//     console.log(`halo ${this.name}, selamat bermain`);
//   };

//   return mahasiswa;
// }

// let jauhar = Mahasiswa("jauhar", 10);
// jauhar.playing(5);
// jauhar.eat(10);
// console.log(jauhar);

// let agung = Mahasiswa("agung", 15);
// agung.playing(5);
// agung.eat(20);
// console.log(agung);

// Constructor Function
// function Mahasiswa(name, energy) {
//   this.name = name;
//   this.energy = energy;

//   this.eat = function (porsi) {
//     this.energy += porsi;
//     return `halo ${this.name}, selamat makan`;
//   };

//   this.playing = function (time) {
//     this.energy -= time;
//     return `halo ${this.name}, selamat bermain`;
//   };

//   this.sleep = function (time) {
//     this.energy += time;
//     return `helo ${this.name}, selamat tidur`;
//   };
// }

// let jauhar = new Mahasiswa("jauhar", 10);
// jauhar.sleep(10);
// jauhar.playing(5);
// jauhar.eat(10);
// console.log(jauhar);

// let agung = new Mahasiswa("agung", 15);
// agung.playing(5);
// agung.eat(20);
// console.log(agung);

// Class
class Mahasiswa {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }

  eat(porsi) {
    this.energy += porsi;
    return `helo ${this.name} selamat makan`;
  }

  playing(time) {
    this.energy -= time;
    return `helo ${this.name} selamat bermain`;
  }

  sleep(time) {
    this.energy += time;
    return `helo ${this.name} selamat tidur`;
  }
}

let jauhar = new Mahasiswa("jauhar", 10);
console.log(jauhar);
jauhar.eat(10);
console.log(jauhar);
jauhar.playing(5);
console.log(jauhar);
jauhar.sleep(10);
console.log(jauhar);
