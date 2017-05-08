require('locus')
export default class Pokemon {
  constructor(name) {
    this.name = name;
    this.attacks = {};
  };

  doThisAttack(attackName) {
    return !this.attacks[attackName] ? 'I dont know that attack'
                                     :`${this.name} used ${attackName} it dealt ${this.attacks[attackName]} damage!`
  };

  learnThisAttack(attackName, attackValue) {
    this.attacks[attackName] = attackValue
  };

  strongestAttack() {
    // i need to talk to the attacks attribute
    // i need itterate through the object
    // find the key and value that is the strongest inside of this object
    // return it as a string interp the key and value into the string
  }
};
