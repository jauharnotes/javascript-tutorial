function loadContent() {
  let ajax = new XMLHttpRequest();
  let url = "https://api.github.com/users/jauharnotes";
  ajax.onloadstart = function () {
    document.getElementById("button").innerHTML = "Loading....";
  };

  // ajax.onerror = function () {
  //   alert("Gagal mengambil data");
  // };

  function getProductError() {
    alert("Gagal mengambil data");
    console.log("Gagal mengambil data");
  }

  ajax.onloadend = function () {
    if (ajax.status === 200 && ajax.responseText != "") {
      let data = JSON.parse(this.responseText);
      let img = document.createElement("img");
      img.src = data.avatar_url;
      let name = document.createElement("h3");
      name.innerHTML = data.login;

      document.getElementById("hasil").append(img, name);
      document.getElementById("button").innerHTML = "Done";

      setTimeout(function () {
        document.getElementById("button").innerHTML = "Load Lagi...";
      }, 3000);
    } else {
      getProductError();
    }
  };

  ajax.open("GET", url, true);
  ajax.send();
}

function clearResult() {
  document.getElementById("hasil").innerHTML = "";
}
