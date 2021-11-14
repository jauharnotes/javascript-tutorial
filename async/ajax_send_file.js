function doRegister() {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://hookb.in/JK1MVePo1OTg0l990R7j");
  xhr.onload = function () {
    console.info(xhr.responseText);
  };

  const form = new FormData();
  form.append("username", document.getElementById("username").value);
  form.append("name", document.getElementById("name").value);

  const file = document.getElementById("profile").files;
  const firstFile = file.item(0);

  form.append("profile", firstFile);

  xhr.send(form);
}

document.getElementById("register").onclick = doRegister;
