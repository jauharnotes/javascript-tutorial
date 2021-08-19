function getProductsUrl() {
  let key = document.getElementById("keyword").value;
  return `http://www.omdbapi.com/?apikey=15a20b3e&s=${key}`;
}

// function getProducts(keyword) {
//   return new Promise(function (resolve, reject) {
//     const ajax = new XMLHttpRequest();
//     ajax.onload = function () {
//       if (ajax.response === 4 && ajax.status === 200) {
//         const data = JSON.parse(ajax.responseText);
//         resolve(data);
//       } else {
//         reject(Error(ajax.statusText));
//       }
//     };
//     ajax.open("GET", getProductsUrl(keyword));
//     ajax.send();
//   });
// }
const ajax = new XMLHttpRequest();
ajax.onreadystatechange = function () {
  ajax.onload = function () {
    if (ajax.response === 4 && ajax.status === 200) {
      const data = JSON.parse(ajax.responseText);
      document
        .getElementById("btn-search")
        .addEventListener("click", function () {
          console.log(data);
        });
    } else {
      alert("Error");
    }
  };
};
const url = getProductsUrl();
ajax.open("GET", url);
ajax.send();

function clearProducts() {
  const productUl = document.getElementById("products");
  productUl.textContent = "";
}

// function buttonClick() {
//   // Code Async Await Here!
//   let key = document.getElementById("keyword").value;
//   getProductsUrl(key);
// }
