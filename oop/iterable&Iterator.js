class CounterIteratorResult {
  constructor(value, done) {
    this.value = value;
    this.done = done;
  }
}

class CounterIterator {
  constructor(value, max) {
    this.value = value;
    this.max = max;
  }

  nex() {
    try {
      if (this.value > this.max) {
        return new CounterIteratorResult(this.value, true);
      } else {
        return new CounterIteratorResult(this.value, false);
      }
    } finally {
      this.value++;
    }
  }
}

class Counter {
  constructor(value, max) {
    this.value = value;
    this.max = max;
  }

  [Symbol.iterator]() {
    return new CounterIterator(this.value, this.max);
  }
}

const counter = new Counter(1, 10);
for (let value of counter) {
  console.log(value);
}
