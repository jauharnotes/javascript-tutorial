function useStrictMode() {
    'use strict'
  const person = {
    name: "Jauhar",
  };

  // ERROR
  with (person) {
    console.log(name);
  }
}

useStrictMode();