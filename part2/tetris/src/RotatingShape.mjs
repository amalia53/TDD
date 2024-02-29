export class RotatingShape {

  shape;

  constructor(shape) {
    let lines = shape.split('\n');
    this.shape = lines[0].trim() + '\n' + lines[1].trim() + '\n' +lines[2].trim() + '\n';
  }

  toString() {
    return this.shape;
  }
}