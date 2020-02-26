'use strict';

const HashTable = require('../../data-structures/hash-table/hash-table');

function leftJoin(left, right){
  const joinedData = [];

  left.buckets.forEach(bucket => {
    //console.log(bucket.head.value);
    let key = bucket.head.value[0];
    right.contains(key) ? joinedData.push([...bucket.head.value, right.get(key)]) : joinedData.push(bucket.head.value);    
  });

  return joinedData;
}


const table = new HashTable();
const table1 = new HashTable();

table.add('david', 'vloedman');
table.add('gloria', 'rockwell');
table.add('trevor', 'thompson');

table1.add('david', 'other table');
table1.add('gloria', 'other other');
table1.add('turtle', 'should not be');

console.log(leftJoin(table, table1));