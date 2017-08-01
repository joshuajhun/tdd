import { expect } from 'chai';
import filterMe from '../scripts/filter'

import Isogram from '../scripts/Isogram';

describe('Isogram Test Suite', function () {
  it('duplicates', function () {
    var word = new Isogram('duplicates');

    expect(word.isIsogram()).to.equal(true);
  });

  it('eleven', function () {
    var word = new Isogram('eleven');

    expect(word.isIsogram()).to.equal(false);
  });

  it('subdermatoglyphic', function () {
    var word = new Isogram('subdermatoglyphic');

    expect(word.isIsogram()).to.equal(true);
  });

  it('Alphabet', function () {
    var word = new Isogram('Alphabet');

    expect(word.isIsogram()).to.equal(false);
  });

  it('thumbscrew-japingly', function () {
    var word = new Isogram('thumbscrew-japingly');

    expect(word.isIsogram()).to.equal(true);
  });

  it('Hjelmqvist-Gryb-Zock-Pfund-Wax', function () {
    var word = new Isogram('Hjelmqvist-Gryb-Zock-Pfund-Wax');

    expect(word.isIsogram()).to.equal(true);
  });

  it('Heizölrückstoßabdämpfung', function () {
    var word = new Isogram('Heizölrückstoßabdämpfung');

    expect(word.isIsogram()).to.equal(true);
  });

  it('the quick brown fox', function () {
    var word = new Isogram('the quick brown fox');

    expect(word.isIsogram()).to.equal(false);
  });

  it('Emily Jung Schwartzkopf', function () {
    var word = new Isogram('Emily Jung Schwartzkopf');

    expect(word.isIsogram()).to.equal(true);
  });

  it('éléphant', function () {
    var word = new Isogram('éléphant');

    expect(word.isIsogram()).to.equal(false);
  });

  it('Àcrobàt', function () {
    var word = new Isogram('Àcrobàt');

    expect(word.isIsogram()).to.equal(false);
  });

});
