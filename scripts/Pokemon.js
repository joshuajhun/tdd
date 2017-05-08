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
};
