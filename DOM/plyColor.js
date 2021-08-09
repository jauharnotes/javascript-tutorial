const btnSolid = document.querySelector("button.btn-solid");

// menggunakan addEventListener
btnSolid.addEventListener("click", function () {
  document.body.classList.toggle("biru-muda");
});

// menggunakan Event Handler
// button.onclick = function () {
//   document.body.classList.toggle("biru-muda");
// };

// membuat color random dengan button click
const btnRandom = document.querySelector("button.btn-random");
btnRandom.addEventListener("click", function () {
  const r = Math.floor(Math.random() * 255 + 1);
  const g = Math.floor(Math.random() * 255 + 1);
  const b = Math.floor(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// membuat color random dengan range
const red = document.querySelector("input[name=red]");
const green = document.querySelector("input[name=green");
const blue = document.querySelector("input[name=blue");

red.addEventListener("input", function () {
  const r = red.value;
  const g = green.value;
  const b = blue.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

green.addEventListener("input", function () {
  const r = red.value;
  const g = green.value;
  const b = blue.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

blue.addEventListener("input", function () {
  const r = red.value;
  const g = green.value;
  const b = blue.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

// membuat color random dengan mousemove
document.body.addEventListener("mousemove", function (event) {
  const xPosition = Math.round(
    Math.random(event.clientX / window.innerWidth) * 255
  );
  const yPosition = Math.round(
    Math.random(event.clientY / window.innerHeight) * 255
  );

  document.body.style.backgroundColor =
    "rgb(" + xPosition + ", " + yPosition + ", 100)";
});
