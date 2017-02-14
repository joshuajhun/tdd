export default class Node {
  constructor({data, nextNode}){
    this.data = data;
    this.nextNode = nextNode || null
  }

}
