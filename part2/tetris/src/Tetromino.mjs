import { RotatingShape } from "./RotatingShape.mjs";
export class Tetromino {

  static T_SHAPE = new Tetromino(`.T.\nTTT\n...\n`, 4);

  static I_SHAPE = new Tetromino(`.....\n.....\nIIII.\n.....\n.....\n`, 2);

  shape;
  orientations;
  curOrientatino;

  constructor(shape, orientations) {
    this.shape = shape.substring(0, shape.length - 1);
    const piece = new RotatingShape(shape)
    this.orientations = [piece, piece.rotateRight(), piece.rotateRight().rotateRight(), piece.rotateLeft()].slice(0, orientations);
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