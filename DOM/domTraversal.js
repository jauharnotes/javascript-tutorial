// const card = document.querySelector(".card");
// const closes = document.querySelector("span.close");
// closes.addEventListener("click", function () {
//   card.style.display = "none";
// });

// DOM Traversal
// const close = document.querySelectorAll(".close");
// // for (let i = 0; i < close.length; i++) {
// //   close[i].addEventListener("click", function (event) {
// //     event.target.parentElement.style.display = "none";
// //   });
// // }

// close.forEach((element) => {
//   element.addEventListener("click", function (event) {
//     event.target.parentElement.style.display = "none";
//     // Prevent Default
//     event.preventDefault();
//     event.stopPropagation();
//   });
// });

// const cards = document.querySelectorAll(".card");
// cards.forEach((element) => {
//   element.addEventListener("click", function (event) {
//     console.log(event);
//   });
// });

const container = document.querySelector(".container");
container.addEventListener("click", function (event) {
  if (event.target.className == "close") {
    event.target.parentElement.style.display = "none";
    event.preventDefault();
  }
});
