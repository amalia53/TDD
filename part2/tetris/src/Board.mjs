export class Board {
  width;
  height;
  curBlock;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.curBlock = { x: -1, y: -1 }
  }

  toString() {
    let board = "";
    for (let y = this.height - 1; y >= 0; y--) {
      for (let x = 0; x < this.width; x++) {
        if (x == this.curBlock.x && y == this.curBlock.y) {
          board += "X";
        } else {
          board += ".";
        }
      }
      board += "\n";
    }
    return board;
  }

  drop(shape) {
    if (this.curBlock.x == -1 || this.curBlock.y == -1) {
      this.curBlock = { x: (this.width - 1) / 2, y: this.height - 1 }
    } else {
      throw "already falling";
    }
  }

  tick() {
    this.curBlock = { x: this.curBlock.x, y: this.curBlock.y - 1 }
  }

  hasFalling() {
    return this.curBlock.y >= 0
  }
}
