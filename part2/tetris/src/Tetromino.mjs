import { RotatingShape } from "./RotatingShape.mjs";
export class Tetromino {

  static T_SHAPE = new Tetromino(`.T.\nTTT\n...\n`);

  static I_SHAPE = new Tetromino(`.....\n.....\nIIII.\n.....\n.....\n`);

  shape;

  constructor(shape) {
    this.shape = shape.substring(0, shape.length - 1);
  }

  toString() {
    return this.shape + "\n";
  }

  rotateRight() {
    return new Tetromino(new RotatingShape(this.shape).rotateRight().toString());
  }

  rotateLeft() {
    return new Tetromino(new RotatingShape(this.shape).rotateLeft().toString());
  }
}