'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    if (!value) throw new Error('Invalid value');

    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = node;
  }

  getKey(key) {
    if (!this.head) return;

    let current = this.head;

    while (current) {
      if (current.value[0] === key) return current.value[1];
      current = current.next;
    }

    return;
  }

  values() {
    let values = [];
    let current = this.head;

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    return values;
  }
}
/**
 * @class HashTable
 * A hashtable
 */
class HashTable {
  constructor(size) {
    this.size = size || 5;
    this.buckets = new Array(this.size);
  }
  /**
 * Hashes the given key
 * @param {*} key 
 * @returns key
 */
  hash(key) {
    const str = key.toString();
    return (
      (str.split('').reduce((p, n) => {
        return p + n.charCodeAt(0);
      }, 0) *
        599) %
      this.size
    );
  }
  /**
 * Adds a key value pair to the table
 * @param {*} key 
 * @param {*} value 
 */
  add(key, value) {
    if (!key) throw new Error('Invalud key');
    
    if (this.contains(key)) return 'Duplicate key';

    let index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = new LinkedList();
    }
    this.buckets[index].add([key, value]);
  }
  /**
   * Gets the value of a given key
   * @param {*} key 
   * @returns value
   */
  get(key) {
    if (!key) throw new Error('Invalid key');

    let index = this.hash(key);

    if (!this.buckets[index]) {
      return null;
    }

    return this.buckets[index].getKey(key);
  }
  /**
   * Returns the value is the table contains the given key
   * @param {*} key 
   * @returns value
   */
  contains(key) {
    if (!key) throw new Error('Invalid Key');

    let index = this.hash(key);

    if (!this.buckets[index]) {
      return false;
    }

    return this.buckets[index].getKey(key);
  }
}

module.exports = HashTable;
