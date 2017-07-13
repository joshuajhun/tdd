let letters = ["d", "b", "a", "c"];

const insertionSort = array => {

  if (Array.isArray(array))  {

    for (let i = 0; i < array.length; i++) {
      let tempIndex = array[i];
      let j = i - 1;

      while (j >= 0 && array[j] > tempIndex) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = tempIndex;
    }
    return array;
  } else {
    return 'Error - argument must be an array';
  }
}

insertionSort(letters);

export default insertionSort
