// const judul = document.getElementById("judul");
// judul.innerHTML = "<em>Jauharuddin</em>";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "paragrap ini diubah";

// const sectionA = document.querySelector("section#a a");
// sectionA.setAttribute("class", "paragrapA");

// buat element baru
const newP = document.createElement("p");
const textPNew = document.createTextNode("Paragraf baru");

// // simpan tulisan ke dalam paragraf
newP.appendChild(textPNew);

// // simpan newP di akhir section A
const sectionA = document.getElementById("a");
sectionA.appendChild(newP);

// menambahkan element baru menggunakan inserBefore
const newLi = document.createElement("li");
const textNew = document.createTextNode("Item baru");
newLi.appendChild(textNew);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

ul.insertBefore(newLi, li2);

// menghapus element
const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

// menganti element baru menggunakan replaceChild
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2New = document.createElement("h2");
const newTextH2 = document.createTextNode("Judul Baru");
h2New.appendChild(newTextH2);

sectionB.replaceChild(h2New, p4);

h2New.style.backgroundColor = "green";
newP.style.backgroundColor = "green";
newLi.style.backgroundColor = "green";
