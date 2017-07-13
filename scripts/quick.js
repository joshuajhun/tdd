let letters = ["d", "b", "a", "c"];

const quickSort = array => {

  if (Array.isArray(array)) {

    if (array.length < 2) {
      return array;
    }

    let pivotIndex = array[0];
    let lessArray = [];
    let greatArray = [];

    for (let i = 1; i < array.length; i++) {
      if (array[i] < pivotIndex) {
        lessArray.push(array[i]);
      } else {
        greatArray.push(array[i]);
      }
    }
    return quickSort(lessArray).concat(pivotIndex, quickSort(greatArray));
  } else {
    return 'Error - argument must be an array';
  }
}

quickSort(letters);



export default quickSort
