const binary = require('../binarySearch.js');

describe('binary search', ()=> {
  const evenLength = [0,1,2,3,4,5,6,7,8,9,10,11,12];
  const oddLength = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
  const leftSide = 3;
  const rightSide = 11;
  const notIncluded = 34;

  it('Search for index of value in the left side of an odd lengthed array', ()=>{
    expect(binary(oddLength, leftSide)).toStrictEqual(3);
  });

  it('Should return the index of the value from the right half of an odd length array', ()=>{
    expect(binary(oddLength, rightSide)).toStrictEqual(11);
  });

  it('Shoud return the index of the value from the left side of an even length array', ()=>{
    expect(binary(evenLength, leftSide)).toStrictEqual(3);
  });

  it('Should return the index of the value from the right side of an even length array', ()=>{
    expect(binary(evenLength, rightSide)).toStrictEqual(11);
  });

  it('Should return -1 or falsey when given a value that is not within an even length array', ()=>{
    expect(binary(evenLength, notIncluded)).toStrictEqual(-1);
  });

  it('Should return -1 or falsey when given a value that is not within an odd length array', ()=>{
    expect(binary(oddLength, notIncluded)).toStrictEqual(-1);
  });
});