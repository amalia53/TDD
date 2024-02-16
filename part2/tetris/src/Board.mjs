export class Board {
  width;
  height;
  cutBlock;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.curBlock = [];
  }

  toString() {
    let board = "";
    for (let y = this.height - 1; y >= 0; y--) {
      for (let x = 0; x < this.width; x++) {
        if (this.curBlock[0] == x && this.curBlock[1] == y) {
          board += "X"
        } else {board += ".";}
      }
      board += "\n";
    }
    return board;
  }

  drop(shape) {
    this.curBlock = [(this.width - 1) / 2, this.height - 1]
  }
}
