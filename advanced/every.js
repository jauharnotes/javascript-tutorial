{
  // ganjil atau genap
  function ganjil(element) {
    return element % 2 === 0;
  }

  let foo = [2, 4, 6, 8, 10];
  console.log(foo.every(ganjil));

  let bar = [1, 3, 5, 7, 9, 11];
  console.log(bar.every(ganjil));
}

{
  // cek angka lebih besar dari 10
  function besarDari10(element) {
    return element > 10;
  }

  let foo = [2, 4, 6, 8, 5];
  console.log(foo.every(besarDari10));

  let bar = [12, 11, 13, 15, 20, 40];
  console.log(bar.every(besarDari10));
}
