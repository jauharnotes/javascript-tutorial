const person = {
  firsName: "Juahar",
  middleName: "Uddin",
  lastName: "Khannnady",
  address: {
    country: "Indonesia",
    city: "Lamongan",
  },
  hobbies: ["Coding", "Reading", "Traveling"],
};

// Mengkonversi javascript object to JSON
const json = JSON.stringify(person);
console.log(json);

// Mengkonversi JSON to javascript object
const jsonParse = JSON.parse(json);
console.log(jsonParse);
