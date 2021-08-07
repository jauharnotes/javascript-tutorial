// const judul = document.getElementById("judul");
// judul.innerHTML = "<em>Jauharuddin</em>";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "paragrap ini diubah";

// const sectionA = document.querySelector("section#a a");
// sectionA.setAttribute("class", "paragrapA");

// buat element baru
const newP = document.createElement("p");
const textPNew = document.createTextNode("Paragraf baru");

// simpan tulisan ke dalam paragraf
newP.appendChild(textPNew);

// simpan newP di akhir section A
const sectionA = document.getElementById("a");
sectionA.appendChild(newP);
