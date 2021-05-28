function register(name, gender = "UNKNOWN") {
  console.log(name);
  console.log(gender);
}

register();
console.log("=============");

register("johar");
console.log("=============");

register("johar", "MALE");
console.log("=============");

register("johar", undefined);
console.log("=============");

register("johar", null);
console.log("=============");
