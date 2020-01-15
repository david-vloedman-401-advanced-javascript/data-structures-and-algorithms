const LinkedList = require('../linkedList');

describe('Test to ensure the LinkedList class is full functioning', ()=>{
  const list = new LinkedList.LinkedList();

  it('should instantiate an empty list', ()=> {
    expect(list.head).toBeNull();
  });

  it('should be able to properly insert a value into the list ', ()=>{
    list.insert('David');
    expect(list.head.val).toEqual('David');
  });

  it('should be able to insert a multiple values into the list and correctly reference the head', () => {
    list.insert('has');
    list.insert('a');
    list.insert('cool');
    list.insert('linked');
    list.insert('list');
    expect(list.head.val).toEqual('list');
  });

  it('should return true when a given value is within the list', ()=> {
    expect(list.includes('linked')).toBeTruthy();
  });

  it('should return false when a given value is not within the list', () => {
    expect(list.includes('honor roll')).toBeFalsy();
  });

  it('should be able to return a string with all the values in the list', ()=>{
    const myList = new LinkedList.LinkedList();
    myList.insert(1);
    myList.insert(2);
    myList.insert(3);

    expect(myList.toString()).toEqual(' -> {3} -> {2} -> {1} -> {NULL}');
  });



});