let letters = ["d", "b", "a", "c"]

const mergeSort = array => {

  if (Array.isArray(array)) {
    if (array.length < 2) {
      return array;
    }

    let splitArray = Math.floor(array.length / 2);
    let leftArray = array.slice(0, splitArray);
    let rightArray = array.slice(splitArray);

    return mergeSplit(mergeSort(leftArray), mergeSort(rightArray));
  } else {
    return 'Error - argument must be an array';
  }
}

const mergeSplit = (leftArray, rightArray) => {
  let array = [];

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      array.push(leftArray.shift());
    } else {
      array.push(rightArray.shift());
    }
  }
  return array.concat(leftArray.slice()).concat(rightArray.slice());
}


mergeSort(letters);

export default mergeSort;
