console.log(this);

function sample() {
  console.log(this);

  function inner() {
    console.log(this);
  }

  inner();
}

const person = {
  name: "Johar",
  sayHello: function (value) {
    console.log(`Hello ${value} My Name is ${this.name}`);
  },
};

person.sayHello("Agung");
person.sayHello("Juned");
