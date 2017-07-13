let letters = ["d", "b", "a", "c"];


const bubbleSort = array => {

  if (Array.isArray(array)) {

    array.forEach((val, i, array) => {

      for (let j = 0; j < array.length; j++) {

        if (array[j] > array[j + 1]) {

          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    });
    return array;
  } else {
    return 'Error - argument must be an array';
  }
}

bubbleSort(letters);

export default bubbleSort
