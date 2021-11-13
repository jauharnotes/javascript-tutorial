function doLogin() {
  const ajax = new XMLHttpRequest();
  ajax.open("POST", "https://hookb.in/r197O7rgyPcqk2XXkMWn");
  ajax.onload = function () {
    console.info(ajax.responseText);
  };
  ajax.setRequestHeader("Content-Type", "application/json");
  ajax.send(
    JSON.stringify({
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    })
  );
}

document.getElementById("login").onclick = doLogin;

// function doLogin() {
//     document.getElementById("login");
//     if (xhr.status === 200) {
//         xhr.setRequestHeader("Content-Type", "application/json");
//         ajax.send(
//           JSON.stringify({
//             username: document.getElementById("username").value,
//             password: document.getElementById("password").value,
//           })
//         );
//       } else {
//         error(xhr.status);
//       }
// }

// const xhr = new XMLHttpRequest();
// xhr.open("POST", "https://hookb.in/r197O7rgyPcqk2XXkMWn");
// xhr.addEventListener("click", function () {

// });
