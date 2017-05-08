import { expect } from 'chai';
import Pokemon from '../scripts/Pokemon.js'

describe('TDD with Pokemon cuz its lit', () => {
  it('should probably be an instance of pokemon...', () => {
    const charizard = new Pokemon()
    expect(charizard).to.be.an.instanceof(Pokemon)
  });
});
