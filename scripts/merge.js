export const cleanedObjects = (obj1, obj2) => ({ a: obj1, b: obj2 })

export const addValues = (val1, val2) => val1 + val2

export const onlyValid = (value) => {
  if(typeof value === 'object') {
    return Object.values(value).reduce(addValues, 0)
  }
  return value || 0
}

const cleanValues = (accu, [key, value]) => ({...accu, [key]: onlyValid(value) })

export const cleaner = object => Object.entries(object).reduce(cleanValues, {})

export const extend = (...args) => Object.assign({}, ...args)

export const merge = (obj1, obj2) => {
  const truth = extend(obj1, obj2)
  const { a, b } = cleanedObjects(cleaner(obj1), cleaner(obj2))
  return Object.keys(truth).reduce((acc, fruit) => (
    { ...acc, [fruit]: addValues(onlyValid(a[fruit]), onlyValid(b[fruit])) }
  ), {})
}
