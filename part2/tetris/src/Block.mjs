export class Block {

  x;
  y;
  shape;

  constructor(shape, x, y) {
    this.x = x;
    this.y = y;
    this.shape = shape;
  }

  setY(y) {this.y = y}

  y() { return this.y }
  shape() { return this.shape }

}