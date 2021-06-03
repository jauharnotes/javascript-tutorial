function getProducstUrl(keyword) {
  return "https://www.blibli.com/backend/search/products?searchTerm=${keyword}";
}

function getProducs(keyword) {
  //Code AJAX Here!
  const ajax = new XMLHttpRequest();
  const url = getProducstUrl(keyword);
  ajax.open("GET", url);
  ajax.send();

  const response = JSON.parse(ajax.responseText);
  console.log(response);
}

function clarProducts(keyword) {
  const productUI = document.getElementById("products");
  productUI.textContent = "";
}

function displyProducts(data) {
  data.data.products.forEach((product) => displyProducts(product));
}

function displyProduct(product) {
  const productLi = document.getElementById("li");
  productLi.textContent = product.name;

  const productUI = document.getElementById("product");
  product.appendChild(productLi);
}

function clearTableProducts() {
  const productUI = document.getElementById("table-products");
  productUI.textContent = "";
}

function displayTableproducts(data) {
  const table = document.createElement("table");
  table.setAttribute("border", 1);

  let index = 0;
  data.data.products.forEach((product) => {
    table.insertRow(index).insertCell(0).innerText = product.name;
    index++;
  });

  const tableProduct = document.getElementById("table-products");
  tableProduct.appendChild(table);
}

function buttonClick() {
  getProducts(
    document.getElementById("keyword").value,
    function (data) {
      console.log(data);
    },
    function () {
      console.log("Error");
    }
  );

  getProducts(
    document.getElementById("keyword").value,
    function (data) {
      clearProducts();
      displayProducts(data);
    },
    function () {
      getProductsError();
    }
  );

  getProducts(
    document.getElementById("keyword").value,
    function (data) {
      clearTableProducts();
      displayTableProducts(data);
    },
    function () {
      getProductsError();
    }
  );

  console.log("Success Click Button");
}
