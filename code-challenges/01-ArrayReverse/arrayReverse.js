function reverseArray(target) {
  const reversed = [];
  let counter = 0;

  for (let i = target.length - 1; i >= 0; i--) {
    reversed[counter] = target[i];
    counter++;
  }
  return reversed;
}



module.exports = reverseArray;