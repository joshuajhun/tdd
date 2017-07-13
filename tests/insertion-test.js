import { expect } from 'chai';
import insertionSort from '../scripts/insertion.js'

describe('Insertion sort', () => {

  it('Should be a function', () => {
    expect(insertionSort).be.function;
  });

  it('Should be able to sort negative numbers', () => {
    let numberArray = [-4, -8, -1, -5, -9];

    expect(insertionSort(numberArray)).to.deep.equal([-9, -8, -5, -4, -1]);
  });

  it('Should be able to sort letters', () => {
    let letterArray = ['r', 'h', 'i', 'a', 'b'];

    expect(insertionSort(letterArray)).to.deep.equal(['a', 'b', 'h', 'i', 'r']);
  });

  it('Should not accept an Object as an argument', () => {
    const obj = {name: 'Dominic'};

    expect(insertionSort(obj)).to.equal('Error - argument must be an array')
  });

  it('Should be able to sort a large random generated array', () => {
    let randomArray = [];
    let randomNumberCount = 10000;

    for (let i = 0; i < randomNumberCount; i++) {
      randomArray.push(Math.floor(Math.random() * (1000 - 100 + 1)) + 100)
    }
    let randomArrayCopy = Array.from(randomArray);

    expect(randomArray).to.deep.equal(randomArray);
    insertionSort(randomArray);
    expect(randomArray).to.deep.equal(randomArrayCopy.sort(function (a, b) {
      return a - b;
    }));
  });
});
