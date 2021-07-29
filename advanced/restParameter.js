function myFunc(...arg) {
  return arg;
  //   return Array.from(arguments);
  //   return [...arguments];
}

console.log(myFunc(1, 2, 3, 4, 5, 6));

function jumlahkan(...angka) {
  let total = 0;
  for (const iterator of angka) {
    total += iterator;
  }
  return total;
}

console.log(jumlahkan(1, 2, 3, 4, 5, 6));

// array ditructuring
const names = ["jauhar", "juned", "agung", "bakir"];
const [ketua, wakil, ...anggota] = names;

console.log(anggota);

// object distructuring
const team = {
  pm: "jauhar",
  frontEnd: "juned",
  backEnd: "agung",
  devOps: "subakir",
};

const { pm, ...myTeam } = team;
console.log(pm);
console.log(myTeam);

// filtering
function filterBy(type, ...values) {
  return values.filter((a) => typeof a === type);
}

console.log(filterBy("boolean", 1, 4, "johar", true, 10, "juned", false));
