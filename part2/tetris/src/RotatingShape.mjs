export class RotatingShape {

  line1;
  line2;
  line3;
  shape;

  constructor(shape) {
    let lines = shape.split('\n');
    this.line1 = lines[0].trim();
    this.line2 = lines[1].trim();
    this.line3 = lines[2].trim();
    this.shape = this.line1  + '\n' + this.line2 + '\n' + this.line3 + '\n';
  }

  toString() {
    return this.shape;
  }

  rotateRight() {
    const newLine1 = this.line3[0] + this.line2[0] + this.line1[0];
    const newLine2 = this.line3[1] + this.line2[1] + this.line1[1];
    const newLine3 = this.line3[2] + this.line2[2] + this.line1[2];
    return newLine1 + '\n' + newLine2 + '\n' + newLine3 + '\n';
  }
}