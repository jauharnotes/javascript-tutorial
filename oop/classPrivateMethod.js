class Person {
  say(name) {
    if (name) {
      this.#sayWithName(name);
    } else {
      this.#sayWithoutName();
    }
  }

  #sayWithoutName() {
    console.log("Hello");
  }

  #sayWithName(name) {
    console.log(`Hello ${name}`);
  }
}

const johar = new Person();
johar.say("Juned");
