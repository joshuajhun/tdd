import * as merger from '../scripts/merge'
import * as testHelper from './helpers/test-helper.js'
import { object1, object2 } from '../data/objects'
import chai, { expect } from 'chai';

  describe('cleaner function', () => {
    it('should have a function that cleans one object with valid values', () => {
      const cleaned = merger.cleaner(object1)
      testHelper.validHelper(cleaned, testHelper.checkIfValid, expect)
    })

    it('should clean another object with to ensure that it only has valid values', () => {
      const cleaned = merger.cleaner(object2)
      testHelper.validHelper(cleaned, testHelper.checkIfValid, expect)
    })
  })

  describe('onlyValid tests', () => {
    it('should take an array of invalid values and return a valid value', () => {
      const invalidValues = [undefined, NaN, 0, '']
      const expectation = 0

      invalidValues.forEach(value => {
        expect(merger.onlyValid(value)).equals(expectation)
      })
    })

    it('If I pass in an object it will return to me all values added together', () => {
      const expectation = 10
      const objectInQuestion = { banana: 5, tacos: 3, iceCream: 2 }

      expect(merger.onlyValid(objectInQuestion)).equals(expectation)
    })
  })

  describe('extend test', () => {
    it('should return the correct keys with a single object' , () => {
      const expectations = ['taco', 'burritos']
      const objectInQuestion1 = { taco: 'foo', burritos: 'bar' }
      const mergedObject = merger.extend(objectInQuestion1)

      testHelper.assertKeys(mergedObject, expectations, expect)
    })

    it('should be argument length agnostic: small set', () => {
      const expectations = ['taco', 'burritos', 'sandiego', 'whytho']
      const objectInQuestion1 = { taco: 'foo', burritos: 'bar' }
      const objectInQuestion2 = { sandiego: 'foo', whytho: 'bar' }
      const mergedObject = merger.extend(objectInQuestion1, objectInQuestion2)

      testHelper.assertKeys(mergedObject, expectations, expect)
    })

    it('should be object length agnostic: large set', () => {
      const expectations = ['taco', 'burritos', 'sandiego', 'whytho', 'suh',
      'dude', 'lit', 'fam']
      const objectInQuestion1 = { taco: 'foo', burritos: 'bar' }
      const objectInQuestion2 = { sandiego: 'foo', whytho: 'bar' }
      const objectInQuestion3 = { suh: 'dude' }
      const objectInQuestion4 = { dude: 'suh' }
      const objectInQuestion5 = { lit: 'suh' }
      const objectInQuestion6 = { fam: 'suh' }
      const mergedObject = merger.extend(objectInQuestion1, objectInQuestion2,
        objectInQuestion3, objectInQuestion3,
        objectInQuestion4, objectInQuestion5,
        objectInQuestion6)

        testHelper.assertKeys(mergedObject, expectations, expect)
    })
  })

  describe('addValues tests', () => {
    it('should take values and add them together', () => {
      const expectation = 5
      const result = merger.addValues(3, 2)

      expect(result).equals(expectation)
    })

    it('should work if I pass in negative values', () => {
      const expectation = 1
      const result = merger.addValues(3, -2)

      expect(result).equals(expectation)
    })

    it('should still run if I pass in functions as values', () => {
      const expectation = 10
      const result = merger.addValues(merger.onlyValid({something: 10}), merger.onlyValid(NaN))

      expect(result).equals(expectation)
    })
  })

  describe('cleanedObjects tests', () => {
    it('should create an object with the correct values', () => {
      const objectInQuestion1 = { taco: 10 }
      const objectInQuestion2 = { sandiego: 20 }
      const expectations = [ objectInQuestion1, objectInQuestion2 ]
      const result = merger.cleanedObjects(objectInQuestion1, objectInQuestion2)

      testHelper.checkObjectValues(result, expectations, expect)
    })
  })

  describe('merge test', () => {
    it('should return an object', () => {
      const expectation = 'object'
      const result = merger.merge(object1, object2)

      expect(result).to.be.an(expectation)
    })

    it('should return the correct value', () => {
      const expectation = { orange: 2, grape: 5, avocado: 3, banana: 22, apple: 8, pear: 1 }
      const result = merger.merge(object1, object2)
      expect(result).to.deep.equal(expectation)
    })
  })
