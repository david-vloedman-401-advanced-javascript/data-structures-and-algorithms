function shiftArray(arr, val) {
  const outArr = [];
  const inArr = arr;
  const middle = Math.round(arr.length / 2);


  let i = 0;
  console.log(middle);
  while (i < middle) {
    console.log('in', inArr[i]);
    outArr[i] = inArr[i];
    console.log(outArr);
    i++
  }

  outArr[i] = val;
  i++

  while (i <= arr.length) {
    outArr[i] = inArr[i - 1];
    i++
  }

  return outArr;
}

module.exports = shiftArray;