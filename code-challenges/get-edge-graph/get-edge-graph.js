'use strict';

const Graph = require('../../data-structures/graph/graph');

function getEdge(destinations, graph){
  for(let location of destinations){

    if(!graph.adjList.has(location)){
      return 'error 1';
    }
  }

  let startLocation;
  let vertexLocation = graph.getNodes();
  let vertexLocationValue = vertexLocation.map(key => key.value);
  for (let location of destinations) {
    if (!vertexLocationValue.includes(location)) {
      return 'error 2';
    }
  }

  let total = 0;

  for (let location of vertexLocation) {
    if (location.value === destinations[0]) {
      startLocation = location;
    }
  }

  for (let i = 1; i < destinations.length; i++) {
    let neighbors = graph.getNeighbors(startLocation);
    for (let location of neighbors) {
      if (location.vertex.value === destinations[i]) {
        startLocation = location.vertex;
        total += location.weight;
      }
    }
  }
  return total;
}

// const graph = new Graph();

// graph.addVertex(1);
// graph.addVertex(2);
// graph.addVertex(3);
// graph.addEdge(1, 2, 34);
// graph.addEdge(2, 3, 21);

// let destinations = [1, 2, 3];
// let result = getEdge(destinations, graph);
// console.log(result);
module.exports = getEdge;
