function getProductsUrl(keyword) {
  return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
}

function getProducts(keyword) {
  return new Promise(function (resolve, reject) {
    const ajax = new XMLHttpRequest();
    ajax.onload = function () {
      if (ajax.status === 200) {
        const data = JSON.parse(ajax.responseText);
        resolve(data);
      } else {
        reject(Error(ajax.statusText));
      }
    };
    ajax.open("GET", getProductsUrl(keyword));
    ajax.send();
  });
}

function clearProducts() {
  const productUl = document.getElementById("products");
  productUl.textContent = "";
}

function displayProducts(data) {
  data.data.products.forEach((product) => displayProduct(product));
}

function displayProduct(product) {
  const productLi = document.createElement("li");
  productLi.textContent = product.name;

  const productUl = document.getElementById("products");
  productUl.appendChild(productLi);
}

function buttonClick() {
  // Code Async Await Here!
}
