// // template literal
// const name = "jauhar";
// const hobby = "Reading";
// const age = 26;

// console.log(`Nama saya ${name}, usia saya ${age}, hobby saya ${hobby}`);

// // Embedded Expression
// console.log(`${2 * 2 + 4}`);

// const foo = 10;
// console.log(`${foo % 2 == 0 ? "genap" : "ganjil"}`);

// // HTMML Fragments
// const mhs = {
//   nama: "Jauhar",
//   umur: 26,
//   NIM: 12346778,
//   email: "jauharnotes@gmail.com",
// };

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nim">${mhs.NIM}</span>
// </div>`;
// console.log(el);

// case: HTML Fragments
const mahasiswa = [
  {
    names: "Jauhar",
    email: "jauharnotes@gmail.com",
  },
  {
    names: "Agusng",
    email: "agungnotes@gmail.com",
  },
  {
    names: "Juned",
    email: "junednotes@gmail.com",
  },
];

const foo = `<div class="mhs">
${mahasiswa
  .map(
    (a) => `<ul>
<li>${a.names}</li>
<li>${a.email}</li>
</ul>`
  )
  .join("")}
</div>`;

document.body.innerHTML = foo;
