function sayHello(name) {
  return `Selamat pagi ${name}`;
}

console.log(sayHello("jauhar"));

// Function Expresion
let sayhello2 = function (name) {
  return `Selamat pagi ${name}`;
};

console.log(sayHello("Agung"));

// Arrow Function
let sayHello3 = (name) => {
  return `Selamat pagi ${name}`;
};
console.log(sayHello3("Juned"));

// Arrow Function implisit return
let sayHello4 = (name) => `Selamat pagi ${name}`;

console.log(sayHello4("Juned"));

// Example
let mahasiswa = ["jauhar", "juned", "agung", "subakir"];

let jumlahHuruf = mahasiswa.map(function (name) {
  return name.length;
});

console.log(jumlahHuruf);

// menggunakan arrow function
let mahasiswa2 = ["jauhar", "juned", "agung", "subakir"];
let jumlahHuruf2 = mahasiswa2.map((name) => name.length);

console.log(jumlahHuruf2);

// menggunakan arrow function -> object
let mahasiswa3 = ["jauhar", "juned", "agung", "subakir"];
let jumlahHuruf3 = mahasiswa3.map((name) => ({
  name: name,
  jmlHuruf: name.length,
}));

console.table(jumlahHuruf3);

// this pada arow function
const Books = function () {
  this.book = "Outlers";
  this.author = "Malcolm Gladwell";
  this.publish = 2010;
  this.reading = function () {
    console.log(
      `Saya membaca buku ${this.book} karya ${this.author} yang di publikasikan tahun ${this.publish}`
    );
  };
};

const bookReader = new Books();
console.log(bookReader.reading());
