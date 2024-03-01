export class RotatingShape {

  shape;

  constructor(shape) {
    this.shape = this.fromString(shape);
  }

  fromString(string) {
    const lines = string.split('\n');
    const table = [];
    for (let x = 0; x < lines.length; x++) {
      let lineAsString = lines[x].trim();
      let lineAsList = [];
      for (let y = 0; y < lineAsString.length; y++) {
        lineAsList.push(lineAsString[y]);
      }
      table.push(lineAsList);
    }
    return table;
  }

  toString() {
    let shapeToString = "";
    for (let y = 0; y < this.shape.length; y++) {
      for (let x = 0; x < this.shape.length; x++) {
        shapeToString += this.shape[y][x]
      }
      shapeToString += '\n';
    }
    return shapeToString;
  }

  rotateRight() {
    let rotated = "";
    for (let x = 0; x < this.shape.length; x++) {
      for (let y = this.shape.length - 1; y >= 0; y--) {
        rotated += this.shape[y][x]
      }
      if (x < this.shape.length - 1)
        rotated += '\n';
    }
    return new RotatingShape(rotated);
  }

  rotateLeft() {
    return this.rotateRight().rotateRight().rotateRight();
  }

}