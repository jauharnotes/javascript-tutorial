const person = {
  // address: {
  //     country: "indonesia"
  // }
};
let country = person?.address?.country;

// if (person.address !== undefined && person.address !== null) {
//     country = person.address.country;
// }

document.writeln(`<p>${country}</p>`);
