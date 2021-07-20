// Contoh 1
function sayhello(time) {
  return function (name) {
    console.log(`Hey ${name}, Selamat ${time} apa kabar?`);
  };
}

let selamatPagi = sayhello("Pagi");
let selamatSore = sayhello("Sore");
let selamatMalam = sayhello("Malam");

selamatPagi("jauhar");
selamatSore("Juned");

// Contoh 2
let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

// let a = add();
console.log(add());
console.log(add());
console.log(add());
