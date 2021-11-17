// return Promise<String>
function getNamePromise() {
  return new Promise(function (resolve, reject) {
    resolve("Jauhar Promise");
  });
}

// return Promise<String>
async function getNameAsync() {
  return "Jauhar Async";
}

getNamePromise().then((name) => console.log(name));

getNameAsync().then((name) => console.log(name));
