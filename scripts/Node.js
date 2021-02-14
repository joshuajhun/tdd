export default class Node {
  constructor(letter = "") {
    this.letter = letter;
    this.children = {};
    this.isWord = false;
    this.suggestions = [];
  }
}