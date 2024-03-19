import { RotatingShape } from "./RotatingShape.mjs";
export class Tetromino {

  static T_SHAPE = new Tetromino (`.T.
TTT
...
`);

  static shape;

  constructor(shape) {
    this.shape = shape;
  }

  toString() {
    return this.shape;
  }
}