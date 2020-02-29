/**
 * @class Graph
 * 
 */
class Graph {
  constructor() {
    this.adjList = new Map();
  }
  /**
   * Add a vertex to the grid
   * @param {*} vertex 
   * @returns number
   */
  addVertex(vertex) {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, []);
      return 0;
    } else {
      return 1;
    }
  }
  /**
   * Add an edge between two vertices 
   * @param {*} vertex 
   * @param {*} node 
   * @returns number
   */
  addEdge(vertex, node) {
    if (this.adjList.has(vertex)) {
      if (this.adjList.has(node)) {
        let arr = this.adjList.get(vertex);
        if (!arr.includes(node)) {
          arr.push(node);
        }
      } else {
        return 1;
      }
    } else {
      return 1;
    }
  }
  /**
   * Gets all the nodes in the graph
   * @returns nodes
   */
  getNodes(){
    if(this.adjList.size === 0) return null;
    const nodes = [];
    for (let [key, value] of this.adjList){
      nodes.push(key);
    }
    return nodes;
  }
  /**
   * Returns all neighbors of a given node
   * @param {*} node 
   * @return ndoes
   */
  getNeighbors(node){
    if(!this.adjList.has(node)) return 1;
    return this.adjList.get(node);
  }
  /**
   * Returns the count of vertices within the graph
   * @return size
   */
  size(){
    return this.adjList.size;
  }
  /**
   * Print the nodes with their edges in list form
   */
  print() {
    for (let [key, value] of this.adjList) {
      console.log(key, value);
    }
  }
}

module.exports = Graph;

