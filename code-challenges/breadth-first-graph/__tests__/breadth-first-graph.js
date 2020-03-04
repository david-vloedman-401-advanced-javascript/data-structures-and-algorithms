const Graph = require('../breadth-first-graph');


xdescribe('Testing the breadth first traversal method', ()=> {
  it('should return an array of nodes in the order they were traversed', ()=>{
    const graph = new Graph();
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);

    graph.addEdge(1, 2);
    graph.addEdge(4, 1);
    graph.addEdge(3, 4);

    expect(graph.breadthFirst(3)).toEqual([3, 4, 1, 2]);
    expect(graph.breadthFirst(1)).toEqual([1 ,2]);
    graph.addEdge(1, 3);    
    expect(graph.breadthFirst(1)).toEqual([1, 2, 3, 4]);
    graph.addEdge(2, 4);
    expect(graph.breadthFirst(2)).toEqual([2, 4, 1, 3]);    
  });

  it('should return an empty array when run on a list with no nodes', ()=>{
    const graph = new Graph();
    expect(graph.breadthFirst('david')).toEqual([]);
  });

  it('should return one node if the graph only contains one node', ()=>{
    const graph = new Graph();
    graph.addVertex('david');

    expect(graph.breadthFirst('david')).toEqual(['david']);
  });

});