const Graph = require('../depth-first');


describe('Testing the depth first traversal extension of the graph class', ()=>{
  it('should return an orderd collection of nodes traversed', ()=>{
    const test = new Graph();
    test.addVertex(1);
    test.addVertex(2);
    test.addVertex(3);
    test.addVertex(4);
    test.addEdge(1, 4, 0);
    test.addEdge(1, 3, 0);
    test.addEdge(1, 2, 0);
    test.addEdge(2, 4, 0);
    test.addEdge(3, 2, 0);
    test.addEdge(3, 4, 0);

    expect(test.depthFirst(1)).toEqual([1, 4, 3, 2]);
    expect(test.depthFirst(2)).toEqual([2, 4]);
    expect(test.depthFirst(3)).toEqual([3, 2, 4]);
    expect(test.depthFirst(4)).toEqual([4]);
  });
});