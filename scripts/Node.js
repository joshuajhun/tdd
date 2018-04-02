export default class Node {
  constructor(letter = "") {
    this.letter = letter;
    this.children = [
                    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'j', 
                    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 
                    'w', 'x', 'y', 'z'];
    this.isWord = false;
  }
}