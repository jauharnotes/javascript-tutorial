class Configuration {
  static name = "Belajar JavaScript";
  static version = 1.0;
  static outhor = "Jauharuddin";
}

const config = new Configuration();
console.log(config);

Configuration.outhor = "Agung";

console.log(Configuration.name);
console.log(Configuration.version);
console.log(Configuration.outhor);
