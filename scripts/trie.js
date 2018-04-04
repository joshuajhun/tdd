import Node from './Node.js'
class Trie {
  constructor() {
    this.root = new Node(null)
    this.wordCount = 0; 
    this.suggestions = [];   
  }

  add(word) {
    let wordArray = Array.from(word)
    let currentNode = this.root;
    let childExistCount = 0;

    while (wordArray.length) {
      let letter = wordArray.shift();
      let child = currentNode.children[letter];
      if (!child) {
        child = new Node(letter);
        currentNode.children[letter] = child;
      } else {
        childExistCount++;
      }
      currentNode = currentNode.children[letter];
    }

    currentNode.isWord = true;
    this.increaseWordCount(childExistCount, word.length);
  }

  increaseWordCount(noNewLetters, addedWord) {
    if (noNewLetters != addedWord) {
      this.wordCount++;
    }
  }

  suggest(str) {
    let strArray = Array.from(str); 
    let currentNode = this.root;

    while (strArray.length) {
      let letter = strArray.shift();
      let child = currentNode.children[letter];

      currentNode = child; 
    }

    this.findWordSuggestions(currentNode, str);

    return this.suggestions
  }
  
  findWordSuggestions(startingNode, prefix) {
    Object.keys(startingNode.children).forEach( childLetter => {
      let currentNode = startingNode.children[childLetter];
      
      if (currentNode.isWord) {
        this.suggestions.push(prefix + childLetter);
      }
      return this.findWordSuggestions(currentNode, prefix + childLetter);      
    })
  }

  populate(data) {
    data.forEach( word => this.add(data));
  }
  // createWord(prefix, letter) {
  //   this.suggestions.push(
  //     {
  //       word: prefix + letter
  //     }
  //   )
  //   return;
  // }
  

}

module.exports = Trie;

