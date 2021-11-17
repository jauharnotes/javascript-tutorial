function getProduct() {
  return fetch("api/product1.json", {
    method: "GET",
  }).then((response) => response.json());
}

// menggunakan promise
function getProductPromise() {
  return new Promise((resolve, reject) => {
    getProduct()
      .then((response) => resolve(response.name))
      .catch((err) => reject(err));
  });
}

// menggunakan await
async function getProductNameAwait() {
  try {
    response = await getProduct();
    return response.name;
  } catch (err) {
    console.log(err);
  }
}

getProductPromise().then((name) => console.log(name));

getProductNameAwait().then((name) => console.log(name));
