const mhs = ["jauhar", "juned", "agung"];
const dosen = ["rhenald", "porter", "collins"];

console.log(...mhs[0]);
// menggabungkan array
console.log(...mhs, ...dosen);
// menggabungkan array dan menambahkan array baru
console.log(...mhs, "bakir", ...dosen);

//mengcopy array
const mhs1 = [...mhs];
mhs1[0] = "fajar";
console.log(mhs1);

//studi kasus dengasn HTML
const liMhs = document.querySelectorAll("li");

// menggunakan for loop
// const names = [];
// for (let i = 0; i > liMhs.length; i++) {
//   names.push(liMhs[i].textContent);
// }

// console.log(names);

//menggunakan spread operator
const names = [...liMhs].map((a) => a.textContent);
console.log(names);

// memecah per huruf dari element array [HTML]
const hNama = document.querySelector(".text");
const huruf = [...hNama.textContent].map((a) => `<span>${a}</span>`).join("");
hNama.innerHTML = huruf;
