const Graph = require('../breadth-first-graph/breadth-first-graph');

class DepthFirst extends Graph {
  constructor(){
    super();
    this.dfNodes = [];
  }
  depthFirst(startingNode) {
    this.dfNodes = [];
    let visited = this.createVisitedObject();
    this._depthFirst(startingNode, visited);
    return this.dfNodes;
  }
  _depthFirst(startingNode, visited) {
    visited[startingNode] = true;   
    this.dfNodes.push(startingNode);    
    let arr = this.adjList.get(startingNode);
    if(!arr) return;
    for (let elem of arr) {      
      if (!visited[elem.node]) {
        this._depthFirst(elem.node, visited);
      }
    }    
  }  
}


module.exports = DepthFirst;


