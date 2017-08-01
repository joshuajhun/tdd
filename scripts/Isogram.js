export default class Isogram {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase()
  }

  determainIso(splitPhrase) {
    var result = true
    var key = {}
    for(let i = 0; i < splitPhrase.length; i++) {
      delete key['-'] && delete key[' ']
      key[splitPhrase[i]] ? key[splitPhrase[i]]++ : key[splitPhrase[i]] = 1
      if (key[splitPhrase[i]] > 1) {
        result = false
        break
      }
    }
    return result
  }

  isIsogram() {
    return this.determainIso(this.phrase.split(''))
  }
}
