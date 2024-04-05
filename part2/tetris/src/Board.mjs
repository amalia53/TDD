import { Block } from "./Block.mjs";
import { Tetromino } from "./Tetromino.mjs";
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

  getCurBlock() { return this.curBlock }

  toString() {
    let board = new Array();
    for (let i = 0; i < this.height; i++) {
      board[i] = Array.from({ length: this.width }, () => ".");
    }
    let boardAsString = "";
    let blocksToString = this.blocks;
    if (this.curBlock !== null) { blocksToString.push(this.curBlock); }
    blocksToString.forEach((block) => {
      board[block.x][block.y] = block.shape
    });
    for (let y = this.height - 1; y >= 0; y--) {
      for (let x = 0; x < this.width; x++) {
        boardAsString += board[x][y];
      }
      boardAsString += "\n";
    }
    return boardAsString;
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
    if (this.curBlock.getY() == this.checkHighest(this.curBlock.getX()) + 1) {
      this.blocks.push(this.curBlock)
      this.curBlock = null;
    } else {
      this.curBlock.incrementY();
    }
  }

  checkHighest(x) {
    let highestY = -1;
    this.blocks.forEach((block) => {
      if (block.getX() == x) {
        if (highestY < block.getY()) {
          highestY = block.getY();
        }
      }
    });
    return highestY;
  }
}