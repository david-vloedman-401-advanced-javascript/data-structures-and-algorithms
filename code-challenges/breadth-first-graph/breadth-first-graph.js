const Graph = require('../../data-structures/graph/graph');
/**
 * @class BreadthFirst
 */
class BreadthFirst extends Graph {
  constructor() {
    super();
  }
  /**
   * Create a checklist for visited items
   * @returns arr
   */
  createVisitedObject() {
    let arr = {};
    for (let key of this.adjList.keys()) {
      arr[key] = false;
    }
    return arr;
  }
  /**
   * Traverse graph breadth-first
   * @param startingNode 
   */
  breadthFirst(startingNode) {
    let visited = this.createVisitedObject();
    let q = [];
    const nodes = [];
    
    visited[startingNode] = true;
    q.push(startingNode);

    while (q.length) {
      let current = q.pop();
      nodes.push(current);

      let arr = this.adjList.get(current);
      if(!arr) return [];
      for (let elem of arr) {
        if (!visited[elem]) {
          visited[elem] = true;
          q.unshift(elem);
        }
      }
    }
    return nodes;
  }  
}

module.exports = BreadthFirst;







