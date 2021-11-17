function getProducts(product) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `api/${product}.json`);
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject(`Error Get Product with response: ${xhr.status}`);
      }
    };
    xhr.send();
  });
}

// getProducts()
//   .then((response) => JSON.parse(response))
//   .then((json) => {
//     document.getElementById("id").textContent = json.id;
//     document.getElementById("name").textContent = json.name;
//     document.getElementById("price").textContent = json.price;
//   })
//   .catch((error) => {
//     document.getElementById("id").textContent = error;
//     document.getElementById("name").textContent = error;
//     document.getElementById("price").textContent = error;
//   })
//   .finally(() => console.log("finished"));

const promise = Promise.all([
  getProducts("product1"),
  getProducts("product2"),
  getProducts("product3"),
]);

promise.then((value) => console.info(value));
