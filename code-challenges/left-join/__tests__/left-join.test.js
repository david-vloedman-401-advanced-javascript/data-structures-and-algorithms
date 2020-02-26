const HashTable = require('../../../data-structures/hash-table/hash-table');
const leftJoin = require('../left-join');

describe('Left Join tests', ()=>{
  it('should return an empty array if passed empty hash maps', ()=>{
    const mapA = new HashTable();
    const mapB = new HashTable();

    expect(leftJoin(mapA, mapB)).toEqual([]);
  });

  it('should join two maps', ()=> {
    const mapA = new HashTable();
    const mapB = new HashTable();

    mapA.add('fond', 'enamored');
    mapA.add('wrath', 'anger');
    mapA.add('dilligent', 'employed');

    mapB.add('fond', 'averse');
    mapB.add('wrath', 'delight');
    mapB.add('guide', 'follow');

    expect(leftJoin(mapA, mapB)).toEqual([['wrath', 'anger', 'delight'], ['fond', 'enamored', 'averse'],['dilligent', 'employed'],
    ]);
  });

  it('should return 1 if the parameters are not of type HashTable', () => {
    expect(leftJoin('left', 'right')).toEqual(1);
  });
});