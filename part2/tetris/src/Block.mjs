export class Block {

  x;
  y;
  shape;

  constructor(shape, x, y) {
    this.x = x;
    this.y = y;
    this.shape = shape;
  }

  incrementY() {this.y = this.y - 1}

}