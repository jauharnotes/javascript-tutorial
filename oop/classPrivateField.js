class Counter {
  #counter = 0;

  increment() {
    this.#counter++;
  }

  decrement() {
    this.#counter--;
  }

  get() {
    return this.#counter;
  }
}

const counter = new Counter();

counter.increment();
counter.increment();
console.log(counter.get());
