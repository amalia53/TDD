export class RotatingShape {

  shape;

  constructor(shape) {
    const lines = shape.split('\n');
    const line1 = lines[0].trim();
    const line2 = lines[1].trim();
    const line3 = lines[2].trim();
    this.shape = [[line1[0], line1[1], line1[2]],
    [line2[0], line2[1], line2[2]],
    [line3[0], line3[1], line3[2]]];
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