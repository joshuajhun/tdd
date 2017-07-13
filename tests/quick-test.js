import { expect } from 'chai';
import quickSort from '../scripts/quick.js'

describe('Quick sort', () => {

  it('Should be a function', () => {
    expect(quickSort).be.function;
  });

  it('Should be able to sort negative numbers', () => {
    let numberArray = [-4, -8, -1, -5, -9];

    expect(quickSort(numberArray)).to.deep.equal([-9, -8, -5, -4, -1]);
  });

  it('Should be able to sort letters', () => {
    let letterArray = ['r', 'h', 'i', 'a', 'b'];

    expect(quickSort(letterArray)).to.deep.equal(['a', 'b', 'h', 'i', 'r']);
  });

  it('Should not accept an Object as an argument', () => {
    const obj = {name: 'Dominic'};

    expect(quickSort(obj)).to.equal('Error - argument must be an array')
  });

  it('Should be able to sort a large random generated array', () => {
    let randomArray = [];
    let randomNumberCount = 250000;

    for (let i = 0; i < randomNumberCount; i++) {
      randomArray.push(Math.floor(Math.random() * (1000 - 100 + 1)) + 100)
    }
    let randomArrayCopy = Array.from(randomArray);

    expect(randomArray).to.deep.equal(randomArray);
    let sortedArray = quickSort(randomArray);

    expect(sortedArray).to.deep.equal(randomArrayCopy.sort(function (a, b) {
      return a - b;
    }));
  });

});
