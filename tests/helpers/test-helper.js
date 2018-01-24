export const assertKeys = (object, expectations, expect) => {
  Object.keys(object).forEach((objKey, index) => {
    expect(objKey).equals(expectations[index])
  })
}
export const checkIfValid = (val) => val >= 0

export const validHelper = (cleanedValues, checkIfValid, expect) => {
  Object.values(cleanedValues).forEach(num => expect(num).to.satisfy(checkIfValid))
}

export const checkObjectValues= (result, expectations, expect) => {
  Object.values(result).forEach((res, index) => expect(res).to.deep.equal(expectations[index]))
}
