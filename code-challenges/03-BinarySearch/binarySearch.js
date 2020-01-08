function binarySearch(arr, target) {
  let right = arr.length - 1;
  let left = 0;

  while (left <= right) {
    let m = Math.ceil((left + right) / 2);

    if (arr[m] < target) {
      left = m + 1;
    } else if (arr[m] > target) {
      right = m - 1;
    } else {
      return m;
    }
  }

  return -1;
}

module.exports = binarySearch;