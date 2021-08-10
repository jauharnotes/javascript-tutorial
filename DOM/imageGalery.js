const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");
const thumb = document.querySelectorAll(".thumb");

container.addEventListener("click", function (event) {
  if (event.target.className == "thumb") {
    jumbo.src = event.target.src;
    jumbo.classList.add("fade");
    setTimeout(function () {
      jumbo.classList.remove("fade");
    }, 500);

    thumb.forEach(function (result) {
      result.className = "thumb";
    });
    event.target.classList.add("active");
  }
});
