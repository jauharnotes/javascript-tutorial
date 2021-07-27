const mhs = ["jauhar", "agung", "juned", "bakir"];

for (let i = 0; i < mhs.length; i++) {
  console.log(mhs[i]);
}

// menggunakan forEach
mhs.forEach((element) => {
  console.log(element);
});

// menggunakan for of
for (const a of mhs) {
  console.log(a);
}

// string
const mhs1 = "jauhar";
for (const iterator of mhs1) {
  console.log(iterator);
}

// mengambil index dan element menggunakan forEach
mhs.forEach((element, index) => {
  console.log(`Nama: ${element}, Index ke: ${index}`);
});

// mengambil index dan element menggunakan for of
for (const [index, element] of mhs.entries()) {
  console.log(`Nama: ${element}, Index ke: ${index}`);
}

// //Node List
// const names = document.querySelectorAll(".name");

// // menggumakan forEach
// names.forEach((element) => {
//   console.log(element.innerHTML);
// });

// // menggunakan for of
// for (const iterator of names) {
//   console.log(iterator.innerHTML);
// }

// arguments
function jumlahkanAngka() {
  let jumlah = 0;
  for (const iterator of arguments) {
    jumlah += iterator;
  }
  return jumlah;
}

console.log(jumlahkanAngka(1, 3, 4, 5));

// For in
const family = {
  name: "jauhar",
  usia: 26,
  email: "jauharnotes@gmail.com",
};

for (i in family) {
  console.log(family[i]);
}
