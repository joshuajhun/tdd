const Trie = require('./..//scripts/trie');
const chai = require('chai');
const assert = chai.assert;
import fs from 'fs';

const text = "/usr/share/dict/words"
const dictionary = fs.readFileSync(text).toString().trim().split('\n');

describe ('Trie', () => {

  describe('insert', () => {
    it('should add new words to the trie', () => {
      // const trie = new Trie();

      // trie.add('pizza');
      // trie.add('pizzeria');
      
      // assert.equal(trie, )
    })

    it('should not increase wordcount of trie contains word', () => {
      const trie = new Trie();

      trie.add('apple')
      trie.add('apple')
      trie.add('pizza')
      trie.add('party')

      assert.equal(trie.wordCount, 3)
    })

    it('should take in a large data set and add to trie', () => {
      const completion = new Trie()

      completion.populate(dictionary);

      assert.equal(completion.wordCount, 235886);
      
    })
  }),

  describe('suggest', () => {
    it('should suggest possible words from a given prefix', () => {
      const trie = new Trie();

      trie.add('puppy');
      trie.add('puppers');


      let suggested = trie.suggest('pup');
      console.log(suggested)
      assert.deepEqual(suggested, ['puppy', 'puppers']);

      // console.log(JSON.stringify(trie, null, 2));
      // console.log(trie)
    })
  })

})