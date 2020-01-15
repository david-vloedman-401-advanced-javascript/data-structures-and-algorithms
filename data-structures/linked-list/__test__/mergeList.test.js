const LinkedList = require('../linkedList');

describe('Tests for the function mergeLists', ()=>{
 
  it('should return \'error\' when it is given two empty lists', ()=>{ 
    const list1 = new LinkedList.LinkedList();
    const list2 = new LinkedList.LinkedList();
    expect(LinkedList.mergeLists(list1, list2)).toBe('Error');
  });

  it('should return list1 if list2 is empty', ()=>{  
    const list1 = new LinkedList.LinkedList();
    const list2 = new LinkedList.LinkedList();
    list1.insert(1);
    list1.insert(2);
    list1.insert(3);
    
    const merged = LinkedList.mergeLists(list1, list2);
    
    expect(merged.toString()).toBe(' -> {3} -> {2} -> {1} -> {NULL}');    
  });

  it('should be able to merge two lists of different lengths', ()=>{
    const list1 = new LinkedList.LinkedList();
    const list2 = new LinkedList.LinkedList();
    list1.insert(1);
    list1.insert(2);
    list1.insert(3);
    list1.insert(4);
    list2.insert('a');
    list2.insert('b');
    list2.insert('c');

    const merged = LinkedList.mergeLists(list1, list2);
    
    expect(merged.toString()).toBe(' -> {1} -> {a} -> {2} -> {b} -> {3} -> {c} -> {4} -> {NULL}');
  });

  it('should be able to merge two lists of same lengths lengths', ()=>{
    const list1 = new LinkedList.LinkedList();
    const list2 = new LinkedList.LinkedList();
    list1.insert(1);
    list1.insert(2);
    list1.insert(3);
    
    list2.insert('a');
    list2.insert('b');
    list2.insert('c');

    const merged = LinkedList.mergeLists(list1, list2);
    
    expect(merged.toString()).toBe(' -> {a} -> {1} -> {b} -> {2} -> {c} -> {3} -> {NULL}');
  
  });
});