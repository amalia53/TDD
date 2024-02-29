import { Block } from "./Block.mjs";
export class Board {
  width;
  height;
  curBlock;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.curBlock = new Block(".", -1, -1);
  }

  toString() {
    let board = "";
    let block = this.curBlock;
    if (this.curBlock.getY() < 0) {
      block = new Block(block.getShape(), block.getX(), 0)
    }
    for (let y = this.height - 1; y >= 0; y--) {
      for (let x = 0; x < this.width; x++) {
        if (block.getX() == x && block.getY() == y) {
          board += block.getShape();
        } else { board += "."; }
      }
      board += "\n";
    }
    return board;
  }

  drop(shape) {
    if (!this.hasFalling()) {
      this.curBlock = new Block(shape, (this.width - 1) / 2, this.height - 1);
    } else {
      throw "already falling";
    }
  }

  hasFalling() {
    return this.curBlock.getY() > -1;
  }

  tick() {
    this.curBlock.incrementY();
  }
}