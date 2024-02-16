export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  toString() {
    let board = "";
    for (let y = this.height - 1; y >= 0; y--) {
      for (let x = 0; x < this.width; x++) {
        board += ".";
      }
      board += "\n";
    }
    return board;
  }
}
