'use strict';

const HashMap = require('../../data-structures/hash-table/hash-table');

const firstDuplicateWord = str => {
  if (!str) return 'Invalid input';
  const map = new HashMap();
  const words = str.match(/\b\w+\b/g);
  for (let i = 0; i < words.length; i++) {
    let value = words[i];
    let key = value;
    if (map.contains(value)) {
      return value;
    }
    map.add(key, value);
  }
  return 'No Duplicate Words Found';
};


module.exports = firstDuplicateWord;