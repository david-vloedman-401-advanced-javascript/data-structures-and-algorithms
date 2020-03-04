'use strict';

const Graph = require('../../../data-structures/graph/graph');
const checkFlights = require('../check-flights.js');

describe('Check Flights', () => {
  const graph = new Graph();

  graph.addVertex('bend');
  graph.addVertex('portland');
  graph.addVertex('seattle');
  graph.addVertex('san fransico');
  
  graph.addEdge('bend', 'portland', 100);
  graph.addEdge('portland', 'seattle', 150);
  graph.addEdge('portland', 'san fransico', 200);


  it('should return total cost and flight is direct', () => {
    expect(checkFlights(['bend', 'portland', 'seattle'], graph)).toEqual({isDirect: true, total: 250});
  });

  it('should return 0 cost and flight is not direct', ()=>{
    expect(checkFlights(['bend', 'seattle'], graph)).toEqual({isDirect: false, total: 0});
  });

  it('should return 1 if any of the destinations do not exist in the graph', ()=>{
    expect(checkFlights(['Turkey', 'Montreal'], graph)).toEqual(1);
  });

});
