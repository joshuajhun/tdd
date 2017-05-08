import { expect } from 'chai';
import Pokemon from '../scripts/Pokemon.js'
require('locus')

describe('TDD with Pokemon cuz its lit', () => {

  const pikachu = new Pokemon('pikachu')

  it('should probably be an instance of pokemon...', () => {

    expect(pikachu).to.be.an.instanceof(Pokemon)
  });

  it('should have a name attribute assigned to it', () => {
    expect(pikachu.name).to.equal('pikachu')
  })

  it('should have an attacks property that is an object', () => {
    expect(pikachu.attacks).to.be.an('object')
  })

  it('should have the ability to do attacks', () => {
    // eval(locus)
    expect(pikachu.doThisAttack('thunder')).to.equal('I dont know that attack')

    pikachu.learnThisAttack('thunder', 100)

    expect(pikachu.attacks).to.deep.equal( {thunder: 100} )

    expect(pikachu.doThisAttack('thunder')).to.equal('pikachu used thunder it dealt 100 damage!')

  });

});
