function callback() {
  console.log("Hello World");
}

function buttonClick() {
  //async
  // setTimeout(callback, 5000);
  setTimeout(function () {
    callback();
  }, 5000);
  console.log("Succes Click Button");
}

buttonClick();
