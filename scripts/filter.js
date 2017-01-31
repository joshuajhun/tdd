import validateString from './validate-string.js'
const filterMe = (array, string) => {

  validateString(string);

  let filtered = array.filter((value) => {
    return value !== string
  });

  return filtered;
}

export default filterMe
