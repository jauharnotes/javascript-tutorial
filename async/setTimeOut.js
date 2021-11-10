console.log("Start");

function callback() {
  console.log("Hello World");
}

function buttonClick() {
  //async
  // setTimeout(callback, 5000);
  setTimeout(function () {
    callback();
  }, 5000);
  console.log("Succes Click Button");
}

buttonClick();

console.log("Akhir");

function addElement() {
  const header = document.createElement("h1");
  header.textContent = "Hello Johar";

  document.body.appendChild(header);
}

setTimeout(addElement, 5000);
console.log("program ini akan dieksekusi terlebih dahulu");

function setTime() {
  const header2 = document.getElementById("header");
  header2.textContent = new Date().toString();
}

setInterval(setTime, 1000);
