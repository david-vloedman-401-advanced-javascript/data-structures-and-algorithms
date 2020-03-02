'use strict';

const Graph = require('../graph');

describe('Testing the graph data structure', ()=>{

  // beforeAll(()=>{
  //   const graph = new Graph();
  // });

  it('should successfully add a node', ()=> {
    const graph = new Graph();
    graph.addVertex('david');
    expect(graph.size()).toEqual(1);
  });

  it('should successfully add an edge', ()=>{
    const graph = new Graph();
    graph.addVertex('david');
    graph.addVertex('vloedman');
    graph.addEdge('david', 'vloedman');

    expect(graph.size()).toEqual(2);
    expect(graph.getNeighbors('david')).toEqual(['vloedman']);
  });

  it('should successfully retrieve all nodes', ()=>{
    const graph = new Graph();
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    expect(graph.getNodes()).toEqual([1,2,3]);
  });

  it('should retrieve all neighbors of a given node', ()=>{
    const graph = new Graph();
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);

    graph.addEdge(1,2);
    graph.addEdge(1, 3);

    expect(graph.getNeighbors(1)).toEqual([2,3]);
  });

  it('should return the number of nodes in the graph', ()=>{
    const graph = new Graph();
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);

    expect(graph.size()).toEqual(3);
  });

  it('should return a graph with only one node and edge', ()=>{
    const graph = new Graph();
    graph.addVertex(1);
    graph.addEdge(1, 1);
    expect(graph.getNeighbors(1)).toEqual([1]);
  });

  it('should return null if the graph is empty', ()=>{
    const graph = new Graph();
    expect(graph.getNodes()).toBeNull();
  });
});