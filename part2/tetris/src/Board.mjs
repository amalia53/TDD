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
          board += "X"
        } else {
          board += ".";
        }
      }
      board += "\n"
    }
    return board;
  }

  drop(shape) {
    this.pos = [1, 0]
  }
}
