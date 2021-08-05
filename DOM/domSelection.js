// DOM Selection
// document.getElementById() -> element
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "yellow";
judul.innerHTML = "Jauharuddin";

// document.getElementsByTagName() -> HTMLColections
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}
// p[2].style.backgroundColor = "lightblue";

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "40px";

// document.getElementsByClassName() -> HTMLColection
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "Ini diubah dari JavaScript";
