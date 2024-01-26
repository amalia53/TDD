export class Board {
  width;
  height;
  pos;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.pos = [-1, -1]
  }

  toString() {
    let board = "";
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        if (x == this.pos[0] && y == this.pos[1]) {
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
    if (this.pos[0] == -1 || this.pos[1] == -1) {
    this.pos = [1, 0];
    } else {
      throw "already falling";
    }
  }

  tick() {
    this.pos = [this.pos[0], this.pos[1] + 1];
  }

  hasFalling() {
    return this.pos[1] < this.height
  }
}
