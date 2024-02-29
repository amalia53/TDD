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
    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 3; x++) {
        shapeToString += this.shape[y][x]
      }
      shapeToString += '\n';
    }
    return shapeToString;
  }

  rotateRight() {
    const newLine1 = this.shape[2][0] + this.shape[1][0] + this.shape[0][0];
    const newLine2 = this.shape[2][1] + this.shape[1][1] + this.shape[0][1];
    const newLine3 = this.shape[2][2] + this.shape[1][2] + this.shape[0][2];
    return newLine1 + '\n' + newLine2 + '\n' + newLine3 + '\n';
  }

  rotateLeft() {
    const newLine1 = this.shape[0][2] + this.shape[1][2] + this.shape[2][2];
    const newLine2 = this.shape[0][1] + this.shape[1][1] + this.shape[2][1];
    const newLine3 = this.shape[0][0] + this.shape[1][0] + this.shape[2][0];
    return newLine1 + '\n' + newLine2 + '\n' + newLine3 + '\n';
  }

}