import { expect } from 'chai';
import filterMe from '../scripts/filter'
require('locus')

describe('TDD with filter', () => {
  it('should return to me an array', ()=> {
    expect(Array.isArray(filterMe([],'hello'))).to.be.true
  });

  it('should return an array that is sorted correctly?', () => {
    let filterMeToo = filterMe(['suh','dude','dude','suh','tacos','skateboards'], 'suh')

    expect(filterMeToo).to.deep.equal(['dude','dude','tacos','skateboards']);
    expect(filterMeToo.length).to.equal(4)
  });

  it('should throw an error on non-string input for filter', () => {
     expect( () => filterMe(['a','c', 'b', 'f', 'd'], 5)).to.throw('error');
   });

  it('should throw an error if there is an empty string given', ()=>{
    expect( () =>
    filterMe(['a','c', 'b', 'f', 'd'], '')).to.throw('error');
  })
})
