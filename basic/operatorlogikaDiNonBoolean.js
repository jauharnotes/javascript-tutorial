console.info("helo" || "");
console.info("" || []);
console.info("0" || "NOL");
console.info(null || "NULL");
console.info(undefined || "UNDIFINE");
console.info(0 || false);

// contoh kasus
const person = {
  firsName: "",
  lastName: "Uddin",
};

const name = person.firsName || person.lastName;
console.info(name);
