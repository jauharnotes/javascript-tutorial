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
  let foo = "1 jam sama dengan 60 menit, juga sama dengan 3600 detik";
  let pola = /\d+/g;

  let hasil = foo.match(pola);

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
