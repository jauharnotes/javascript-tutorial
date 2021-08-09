// const p3 = document.querySelector(".p3");

// function changeColor() {
//   p3.style.backgroundColor = "green";
// }

const paragraf4 = document.querySelector("section#b p");
paragraf4.addEventListener("click", function () {
  const ul = document.querySelector("section#b ul");
  const liNew = document.createElement("li");
  const textNew = document.createTextNode("Paragraf baru");
  liNew.appendChild(textNew);
  ul.append(liNew);
});

const p3 = document.querySelector(".p3");
// p3.onclick = function () {
//   p3.style.backgroundColor = "red";
// };

// p3.onclick = function () {
//   p3.style.color = "yellow";
// };

p3.addEventListener("click", function () {
  p3.style.backgroundColor = "red";
});

p3.addEventListener("click", function () {
  p3.style.color = "yellow";
});
