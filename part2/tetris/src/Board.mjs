export class Board {
  width;
  height;
  position;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.position = { x: -1, y: -1 }
  }

  toString() {
    let board = "";
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        if (x == this.position.x && y == this.position.y) {
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
    if (this.position.x == -1 || this.position.y == -1) {
      this.position = { x: (this.width - 1) / 2, y: 0 }
    } else {
      throw "already falling";
    }
  }

  tick() {
    this.position = { x: this.position.x, y: this.position.y + 1 }
  }

  hasFalling() {
    return this.position.y < this.height
  }

  convertPos(oldPos) {
    return { x: this.pos[0], y: this.pos[1] }
  }
}
