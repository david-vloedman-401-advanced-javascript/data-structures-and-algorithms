const Graph = require('../../data-structures/graph/graph');


function checkFlights(destinations, graph){
  let isDirect = true;
  let total = 0;
  let isValid = true;

  destinations.forEach(dest => {
    isValid = graph.adjList.has(dest);
  });
  if(!isValid) return 1;
  
  destinations.forEach((dest, index, arr) => {
    
    if(index + 1 >= arr.length) return;
    
    let edge = graph.getEdge(dest, arr[index+1]);
    
    if(!edge) {
      isDirect = false;
      return;
    }
    total += edge.weight;
  });

  return {isDirect, total};
  

}

module.exports = checkFlights;

// const graph = new Graph();

// graph.addVertex(1);
// graph.addVertex(2);
// graph.addVertex(3);
// graph.addEdge(1, 2, 34);
// graph.addEdge(2, 3, 21);

// let destinations = [1, 2, 3];
// let result = checkFlights(destinations, graph);
// console.log(result);