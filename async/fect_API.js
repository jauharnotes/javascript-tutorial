function doLogin() {
  const request = new Request("https://hookb.in/qBdpW6xlm9CEwPllwe79", {
    method: "POST",
    header: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    }),
  });

  // Promise<Response>
  const response = fetch(request);

  response
    .then((response) => response.json())
    .then((json) => {
      document.getElementById("response").textContent = json.success;
    })
    .catch((error) => {
      document.getElementById("response").textContent = error;
    });
}

document.getElementById("login").onclick = doLogin;
