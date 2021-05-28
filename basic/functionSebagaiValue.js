function sayHello(name) {
  console.log(`Hello ${name}`);
}

sayHello("johar");

const say = sayHello;

say("agung");

function giveMeName(callback) {
  callback("johar");
}

giveMeName(sayHello);
giveMeName(say);
