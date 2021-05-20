function outer() {
  function inner() {
    console.log("Inner");
  }

  inner();
  inner();
}

outer();
inner();
