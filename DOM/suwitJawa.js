function comChoice() {
  const comp = Math.random();

  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function rules(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "orang") return comp == "gajah" ? "KALAH" : "MENANG";
  if (player == "gajah") return comp == "orang" ? "MENANG" : "KALAH";
  if (player == "semut") return comp == "orang" ? "KALAH" : "MENANG";
}

// membuat animasi gambar berputar acak
function turn() {
  const imgComputer = document.querySelector(".img-komputer");
  const images = ["orang", "gajah", "semut"];
  let counter = 0;
  const startTime = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - startTime > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", `img/${images[counter++]}.png`);
    if (counter == images.length) counter = 0;
  }, 100);
}

const choices = document.querySelectorAll("li img");
choices.forEach((results) => {
  results.addEventListener("click", function () {
    const compChoice = comChoice();
    const playerChoice = results.className;
    const result = rules(compChoice, playerChoice);

    turn();
    setTimeout(function () {
      const imgComp = document.querySelector(".img-komputer");
      imgComp.setAttribute("src", `img/${compChoice}.png`);

      const info = document.querySelector(".info");
      info.innerHTML = result;
    }, 1000);
  });
});

// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//   const compChoice = comChoice();
//   const playerChoice = pGajah.className;
//   const result = rules(compChoice, playerChoice);

//   const imgComp = document.querySelector(".img-komputer");
//   imgComp.setAttribute("src", `img/${compChoice}.png`);

//   const info = document.querySelector(".info");
//   info.innerHTML = result;
// });

// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function () {
//   const compChoice = comChoice();
//   const playerChoice = pOrang.className;
//   const result = rules(compChoice, playerChoice);

//   const imgComp = document.querySelector(".img-komputer");
//   imgComp.setAttribute("src", `img/${compChoice}.png`);

//   const info = document.querySelector(".info");
//   info.innerHTML = result;
// });

// const pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", function () {
//   const compChoice = comChoice();
//   const playerChoice = pGajah.className;
//   const result = rules(compChoice, playerChoice);

//   const imgComp = document.querySelector(".img-komputer");
//   imgComp.setAttribute("src", `img/${compChoice}.png`);

//   const info = document.querySelector(".info");
//   info.innerHTML = result;
// });
