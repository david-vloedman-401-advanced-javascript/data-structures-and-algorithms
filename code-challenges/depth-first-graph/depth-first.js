const Graph = require('../breadth-first-graph/breadth-first-graph');

class DepthFirst extends Graph {
  constructor(){
    super();
    this.dfNodes = [];
  }
  /**
   * Depth first traversal extension of graph
   * @param {*} startingNode 
   * @returns nodes
   */
  depthFirst(startingNode) {
    this.dfNodes = [];
    let visited = this.createVisitedObject();
    this._depthFirst(startingNode, visited);
    return this.dfNodes;
  }
  /**
   * recursive helper for depthFirst
   * @param {*} startingNode 
   * @param {*} visited 
   */
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


