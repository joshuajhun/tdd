import Node from './Node'
require('locus')
export default class List {
  constructor() {
    this.head = null
    this.length = 0
  }

  findTail() {
    let currentNode = this.head
    while(currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode
    }
    return currentNode
  }

  append(data) {
    if(this.head === null) {
      this.head = new Node({data: data})
      this.length ++
    } else {
      let currentNode = this.findTail()
      currentNode.nextNode = new Node({ data: data})
      this.length++
    }
  }

  prepend(data){
    let currentNode = this.head
    let newNode = new Node({data:data})
    this.head = newNode
    newNode.nextNode = currentNode
    this.length++
  }

  pop(){
    if(this.head === null) {
      return
    } else {
      let currentNode = this.head
      while(currentNode !== this.findTail()) {
        currentNode = currentNode.nextNode
      }
      currentNode.nextNode = null
      this.length--
      return currentNode
    }
  }

  includes(data) {
    let currentNode = this.head
    while(currentNode.nextNode !== null) {
      if (currentNode.data === data){return true}
      currentNode = currentNode.nextNode
    }
    return false
  }

  find(data) {
    let currentNode = this.head
    while(currentNode.data !== data) {
      if(currentNode.nextNode === null) {return null}
      currentNode = currentNode.nextNode
    }
    return currentNode
  }

  intoArray() {
    let array = [this.head.data]
    let currentNode = this.head
    while(currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode
      array.push(currentNode.data)
    }
    return array
  }

  insert(data, position) {
    let counter = 0
    let currentNode = this.head

    if(currentNode.nextNode === null || this.intoArray().length < position) {
      this.append(data)
    } else {
      while (counter !== position){
        var previous     = currentNode
        currentNode      = currentNode.nextNode
        counter++
      }
      let newNode = new Node({data: data})
      previous.nextNode = newNode
      newNode.nextNode = currentNode
    }
  }
}
