class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, []);
      return 0;
    } else {
      return 1;
    }
  }

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

  getNodes(){
    if(this.adjList.size === 0) return null;
    const nodes = [];
    for (let [key, value] of this.adjList){
      nodes.push(key);
    }
    return nodes;
  }

  getNeighbors(node){
    if(!this.adjList.has(node)) return 1;
    return this.adjList.get(node);
  }

  size(){
    return this.adjList.size;
  }

  print() {
    for (let [key, value] of this.adjList) {
      console.log(key, value);
    }
  }
}

module.exports = Graph;

