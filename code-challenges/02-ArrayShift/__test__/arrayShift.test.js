const arrayShift = require('../arrayShift.js');

describe('arrayShift', () => {
  const even = [1, 2, 3, 4];
  const odd = [1, 2, 3];
  const val = 333;
  const none = [];
  it('Can work with an odd count array', () => {
    expect(arrayShift(odd, val)).toStrictEqual([1, 2, val, 3]);
  });
  it('Can work with an even count array', () => {
    expect(arrayShift(even, val)).toStrictEqual([1, 2, val, 3, 4]);
  });
  it('Can work with an empty array', () => {
    expect(arrayShift(none, val)).toStrictEqual([val]);
  });
});