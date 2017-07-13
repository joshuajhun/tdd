import { expect } from 'chai';
import mergeSort from '../scripts/merge.js'

describe('Merge sort', () => {

  it('Should be a function', () => {
    expect(mergeSort).be.function;
  });

  it('Should be able to sort negative numbers', () => {
    let numberArray = [-4, -8, -1, -5, -9];

    expect(mergeSort(numberArray)).to.deep.equal([-9, -8, -5, -4, -1]);
  });

  it('Should be able to sort letters', () => {
    let letterArray = ['r', 'h', 'i', 'a', 'b'];

    expect(mergeSort(letterArray)).to.deep.equal(['a', 'b', 'h', 'i', 'r']);
  });

  it('Should not accept an Object as an argument', () => {
    const obj = {name: 'Dominic'};

    expect(mergeSort(obj)).to.equal('Error - argument must be an array')
  });

  it('Should be able to sort a large random generated array', () => {
    let randomArray = [];
    let randomNumberCount = 150000;

    for (let i = 0; i < randomNumberCount; i++) {
      randomArray.push(Math.floor(Math.random() * (1000 - 100 + 1)) + 100)
    }
    let randomArrayCopy = Array.from(randomArray);

    expect(randomArray).to.deep.equal(randomArray);
    let sortedArray = mergeSort(randomArray);

    expect(sortedArray).to.deep.equal(randomArrayCopy.sort(function (a, b) {
      return a - b;
    }));
  });

});
