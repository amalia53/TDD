import { Block } from "./Block.mjs";
export class Board {
  width;
  height;
  curBlock;
  blocks;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.curBlock = null;
    this.blocks = [];
  }

  toString() {
    let board = "";
    let blocksToString = this.blocks;
    if (this.curBlock !== null) { blocksToString.push(this.curBlock); }
    for (let y = this.height - 1; y >= 0; y--) {
      for (let x = 0; x < this.width; x++) {
        let symbol = "."
        blocksToString.forEach((block) => {
          if (block.getX() == x && block.getY() == y) {
            symbol = block.getShape();
          }
        });
        board += symbol;
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
    return this.curBlock !== null;
  }

  tick() {
    if (this.curBlock.getY() == 0) {
      this.blocks.push(this.curBlock)
      this.curBlock = null;
    } else {
      this.curBlock.incrementY();
    }
  }
}