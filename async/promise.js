const promise = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "api/product.json");
  xhr.onload = () => {
    if (xhr.status === 200) {
      resolve(xhr.responseText);
    } else {
      reject(`Error Get Product with response: ${xhr.responseText}`);
    }
  };
  xhr.send();
});

console.info(promise);
