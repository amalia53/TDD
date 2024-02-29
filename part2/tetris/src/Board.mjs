import { Block } from "./Block.mjs";
export class Board {
  width;
  height;
  curBlock;
  shape;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.curBlock = [-1, -1];
  }

  toString() {
    let board = "";
    let block = this.curBlock;
    if (this.curBlock[1] < 0) {
      block = [block[0], 0]
    }
    for (let y = this.height - 1; y >= 0; y--) {
      for (let x = 0; x < this.width; x++) {
        if (block[0] == x && block[1] == y) {
          board += this.shape;
        } else { board += "."; }
      }
      board += "\n";
    }
    return board;
  }

  drop(shape) {
    if (!this.hasFalling()) {
      this.curBlock = [(this.width - 1) / 2, this.height - 1]
      this.shape = shape;
    } else {
      throw "already falling";
    }
  }

  hasFalling() {
    return this.curBlock[1] > -1;
  }

  tick() {
    this.curBlock = [this.curBlock[0], this.curBlock[1] - 1]
  }
}