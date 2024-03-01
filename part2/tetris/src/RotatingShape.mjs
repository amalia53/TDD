export class RotatingShape {

  shape;

  constructor(shape) {
    const lines = shape.split('\n');
    this.shape = [];
    for (let x = 0; x < lines.length; x++) {
      let lineAsString = lines[x].trim();
      let lineAsList = [];
      for (let y = 0; y < shape.length; y++) {
        lineAsList.push(lineAsString[y]);
      }
      this.shape.push(lineAsList);
    }
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
      rotated += '\n';
    }
    return rotated;
  }

  rotateLeft() {
    let rotated = "";
    for (let x = this.shape.length - 1; x >= 0; x--) {
      for (let y = 0; y < this.shape.length; y++) {
        rotated += this.shape[y][x]
      }
      rotated += '\n';
    }
    return rotated;
  }

}