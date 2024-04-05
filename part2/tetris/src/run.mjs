import { Board } from "../src/Board.mjs";

let board = new Board(5,5);
board.drop("A")
console.log(board.getCurBlock());
console.log(board.toString());