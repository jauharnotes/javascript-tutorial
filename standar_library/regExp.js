{
  // Create RegExp
  const regex1 = /jauhar/;
  const regex2 = new RegExp("Jauhar");
  const regex3 = new RegExp(/jauhar/);

  console.log(regex1);
  console.log(regex2);
  console.log(regex3);

  console.log(typeof regex1);
  console.log(typeof regex2);
  console.log(typeof regex3);
}

{
  // Pola RegExp sebagai string
  const foo = "Belajar JavaScript";

  // case sensintif
  console.log(/JavaScript/.test(foo));
  console.log(/javaScript/.test(foo));
  console.log(/Belajar/.test(foo));
  console.log(/belajar/.test(foo));
  console.log(/Java/.test(foo));
  console.log(/ajar/.test(foo));

  console.log("===========================");

  // case insensitif dengan penambahan sebuah flag karakter 'i' setelah tanda forward
  console.log(/JavaScript/i.test(foo));
  console.log(/javaScript/i.test(foo));
  console.log(/Belajar/i.test(foo));
  console.log(/belajar/i.test(foo));
  console.log(/Java/i.test(foo));
  console.log(/ajar/i.test(foo));
}

console.log("===========================");

{
  // Wildcard
  const pola = /.b../;

  console.log(pola.test("abaa"));
  console.log(pola.test("aba"));
  console.log(pola.test("abbaa"));
  console.log(pola.test("1b11"));
  console.log(pola.test(" b  "));

  console.log("===========================");

  const pola2 = /^.b..$/;

  console.log(pola2.test("abaa"));
  console.log(pola2.test("aba"));
  console.log(pola2.test("abbaa"));
  console.log(pola2.test("1b11"));
  console.log(pola2.test(" b  "));
}

console.log("===========================");

{
  // Pola negasi character set
  const pola1 = /^[a-e]../;
  const pola2 = /[^a-e]../;

  console.log(pola1.test("abaa"));
  console.log(pola1.test("fba"));
  console.log(pola1.test("1dd"));
  console.log(pola1.test(" dd"));
  console.log(pola1.test("belajar"));

  console.log("===========================");

  console.log(pola2.test("abaa"));
  console.log(pola2.test("fba"));
  console.log(pola2.test("1dd"));
  console.log(pola2.test(" dd"));
  console.log(pola2.test("belajar"));
}

console.log("===========================");

{
  const pola1 = /A{2}1{3}/;
  const pola2 = /A{2}1{2,3}/;

  console.log(pola1.test("AA111"));
  console.log(pola1.test("zzAAA111zz"));
  console.log(pola1.test("AA111"));
  console.log(pola1.test("A1111"));

  console.log(pola2.test("AA111"));
  console.log(pola2.test("zzAAA111zz"));
  console.log(pola2.test("AA111"));
  console.log(pola2.test("A1111"));
}

{
  let foo = "1 jam sama dengan 60 menit, juga sama dengan 3600 detik";
  let pola = /\d+/g;

  let hasil = foo.match(pola);

  console.log(hasil);

  // for (const iterator of hasil) {
  //   console.log(iterator);
  // }

  hasil.forEach((element) => {
    console.log(element);
  });
}

{
  const name = "jauhar uddin Jauhar khannedy";
  const regex = /jauhar/;

  const result = regex.exec(name);
  console.log(result);

  const test = regex.test(name);
  console.log(test);
}

console.log("==============================");

{
  // RegExp Modifier
  const name = "jauhar uddin\nJauhar khannedy\njuned Kurniawan";
  const regex1 = /jauhar/gi;
  const regex2 = /Kurniawan/g;

  let result;
  while ((result = regex1.exec(name)) !== null) {
    console.log(result);
  }

  while ((result = regex2.exec(name)) !== null) {
    console.log(result);
  }
}

console.log("==============================");

{
  // Regexp Advanced
  const regex = /ja[aiueo]/gi;
  const text = "jau jad jad jae jai dal";

  while ((result = regex.exec(text)) !== null) {
    console.log(result);
  }
}

{
  const text = "doe jau jad jad jae jai dal";

  console.log(text.match(/ja[aiueo]/gi));
  console.log(text.search(/ja[aiueo]/gi));
  console.log(text.replace(/ja[aiueo]/gi, "ganteng"));
  console.log(text.split(/j/gi));
}

{
  var myRe = /d(b+)d/g;
  var myArray = myRe.exec("cdbbdbsbz");
  console.log("The value of lastIndex is " + myRe.lastIndex);

  // "The value of lastIndex is 5"

  var myArray2 = /d(b+)d/g.exec("cdbbdbsbz");
  console.log("The value of lastIndex is " + /d(b+)d/g.lastIndex);

  // "The value of lastIndex is 0"
}

{
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
  }
}
