// const card = document.querySelector(".card");
// const closes = document.querySelector("span.close");
// closes.addEventListener("click", function () {
//   card.style.display = "none";
// });

// DOM Traversal
const close = document.querySelectorAll(".card");
// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (event) {
//     event.target.parentElement.style.display = "none";
//   });
// }

close.forEach((element) => {
  element.addEventListener("click", function (event) {
    event.target.parentElement.style.display = "none";
  });
});

const nama = document.querySelector(".nama");
console.log(nama.nextElementSibling.nextElementSibling);
