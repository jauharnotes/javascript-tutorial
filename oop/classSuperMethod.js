class Shape {
  paint() {
    console.log("Print Shape");
  }
}

class Circle extends Shape {
  paint() {
    super.paint();
    console.log("Print Cirle");
  }
}

const circle = new Circle();
circle.paint();
