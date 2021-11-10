function displayResponse(json) {
  const header = document.getElementById("header");
  header.textContent = json.response;
}

const ajax = new XMLHttpRequest();
ajax.open("GET", "api/hello.json");
ajax.addEventListener("load", function () {
  if (ajax.status === 200) {
    const json = JSON.parse(ajax.responseText);
    displayResponse(json);
  } else {
    displayResponse({
      response: `Terjadi kesalahan dengan status ${ajax.status}`,
    });
  }
});
ajax.send();
