'use strict';

const HashTable = require('../../data-structures/hash-table/hash-table');

function leftJoin(left, right){

  if(!(left instanceof  HashTable) || !(right instanceof  HashTable)) return 1;

  const joinedData = [];

  left.buckets.forEach(bucket => {    
    let key = bucket.head.value[0];
    right.contains(key) ? joinedData.push([...bucket.head.value, right.get(key)]) : joinedData.push(bucket.head.value);    
  });

  return joinedData;
}

module.exports = leftJoin;
