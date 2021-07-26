{
  const fruits = ["anggur", "mangga", "jambu", "alpukat"];

  // const [a, b, c, d] = fruits;

  // skipping items
  const [a, , , d] = fruits;
  console.log(a);
  console.log(d);
}

{
  // swap item
  let foo = 1;
  let bar = 2;
  console.log(foo);

  [foo, bar] = [bar, foo];
  console.log(foo);
}

{
  //Return value pada function
  function count() {
    return [1, 2];
  }

  const [one, two] = count();
  console.log(one);
}

{
  //Rest parameter
  const [a, ...values] = [1, 2, 3, 4, 5, 6, 7];
  console.log(values[0]);
}

{
  //Distructuring object
  const mhs = {
    name: "jauhar",
    age: 26,
    addres: "Depok",
  };

  const { name, age, addres } = mhs;
  console.log(name);
}

{
  // Assigment tanpa deklarasi object
  ({ name, age, addres } = { name: "jauhar", age: 26, addres: "Depok" });
  console.log(age);
}

{
  // Assign ke variabel baru
  const mhs = {
    name: "jauhar",
    age: 26,
    addres: "Depok",
  };

  const { name: nama, age: umur, addres: griyo } = mhs;
  console.log(griyo);
}

{
  //Memberi nilai default
  const mhs = {
    name: "jauhar",
    age: 26,
    addres: "Depok",
  };

  const {
    name: nama,
    age: umur,
    addres: griyo,
    email = "default@gmail.com",
  } = mhs;
  console.log(email);
}

{
  //Rest parameter
  const mhs = {
    name: "jauhar",
    age: 26,
    addres: "Depok",
  };

  const { name, ...values } = mhs;
  console.log(values);
}

{
  //Mengambil field pada object, setelah dikirim sebagai function
  const mhs = {
    id: 123,
    name: "jauhar",
    age: 26,
    addres: "Depok",
  };

  function getIdMahasiswa({ id }) {
    return id;
  }

  console.log(getIdMahasiswa(mhs));
}
