import { RotatingShape } from "./RotatingShape.mjs";
export class Tetromino {

  static T_SHAPE = Tetromino.fromString(`.T.\nTTT\n...`, 4, 0);

  static I_SHAPE = Tetromino.fromString(`.....\n.....\nIIII.\n.....\n.....`, 2, 0);

  orientations;
  curOrientation;

  static fromString(shape, n, curOrientation) {
    const piece = new RotatingShape(shape)
    const orientations = [piece, piece.rotateRight(), piece.rotateRight().rotateRight(), piece.rotateLeft()].slice(0, n);
    return new Tetromino(curOrientation, orientations)
  }

  constructor(curOrientation, orientations) {
    this.orientations = orientations;
    this.curOrientation = (curOrientation + orientations.length) % orientations.length;
  }

  toString() {
    return this.orientations[this.curOrientation].toString()
  }

  rotateRight() {
    return new Tetromino(this.curOrientation + 1, this.orientations);
  }

  rotateLeft() {
    return new Tetromino(this.curOrientation - 1, this.orientations);
  }
}