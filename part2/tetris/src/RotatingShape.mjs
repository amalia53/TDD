export class RotatingShape {

  line1;
  line2;
  line3;

  constructor(shape) {
    let lines = shape.split('\n');
    this.line1 = lines[0].trim();
    this.line2 = lines[1].trim();
    this.line3 = lines[2].trim();
  }

  toString() {
    return this.line1  + '\n' + this.line2 + '\n' + this.line3 + '\n';
  }
}