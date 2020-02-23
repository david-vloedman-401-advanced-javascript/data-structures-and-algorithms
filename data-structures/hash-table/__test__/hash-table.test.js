'use strict';

const HashTable = require('../hash-table');

describe('Hash Table', () => {
  it('Should be able to create a table', () => {    
    let table = new HashTable();
    expect(table).toBeInstanceOf(HashTable);

  });

  
  it('should successfully hash a key', () => {      
    let table = new HashTable(5);
    let result = table.hash('david');
    expect(result).toBe(0);
  });

  it('should add a key value pair', () => {
    let key = 'david';
    let value = 30;
    let table = new HashTable(5);

    table.add(key, value);
    let result = table.hash(key);
    expect(table.buckets[result].head.value[1]).toBe(30);
  });

  it('Should be able to handle a collision', () => {
    let table = new HashTable(5);
    table.add('david', 30);
    table.add('divad', 'name');
    expect(table.get('divad')).toBe('name');
    expect(table.get('david')).toBe(30);
  });
  

  
  it('should given a key, return the value', () => {
    let table = new HashTable(5);
    table.add('david', 'vloedman');
    expect(table.get('david')).toBe('vloedman');
  });

  it('should return null if key does not exist', () => {
    let table = new HashTable(5);
    table.add('david', 'vloedman');
    expect(table.get('psych!')).toBe(null);
  });

  it('should return a value after a collision', () => {
    let table = new HashTable(5);

    table.add('david', 'vloedman');
    table.add('divad', 'vloedmanjr');

    table.hash('david');
    table.hash('divad');

    expect(table.get('david')).toBe('vloedman');
    expect(table.get('divad')).toBe('vloedmanjr');
  }); 

  
  it('Should return true if the key exists', () => {
    let table = new HashTable(5);
    table.add('key', 'value');
    expect(table.contains('key')).toBeTruthy();
  });

  it('Should return false if the key does not exists', () => {
    let table = new HashTable(5);
    table.add('key', 'value');
    expect(table.contains('someeee')).not.toBeTruthy();
  });
});


