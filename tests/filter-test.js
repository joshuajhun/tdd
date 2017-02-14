import { assert } from 'chai';
import List from '../scripts/List'
require('locus')

describe('list should have a head', () => {
  var list
  beforeEach(() => {
    list = new List();
  });

  it('list should have null head',() => {
    assert.equal(list.head, null)
  })

  it('should allow me to add some nodes to the end', () => {
    list.append('new')
    assert.equal(list.findTail().data, 'new' )

    list.append('im the tail')
    assert.equal(list.findTail().data, 'im the tail' )
    assert.equal(list.length, 2)
  })

  it('should allow me to prepend' , () => {

    list.prepend('new head');
    assert.equal(list.head.data, 'new head');
    assert.equal(list.length, 1)
  })

  it('should assign a new head every time I prepend a new node', () => {
    assert.equal(list.head, null)

    list.prepend('new new')
    assert.equal(list.head.data, 'new new' )
    assert.equal(list.head.nextNode, null)

    list.prepend('new head')
    assert.equal(list.head.data, 'new head')
    assert.equal(list.head.nextNode.data, 'new new')
  })

  it('should append the nodes in order', () => {
    assert.equal(list.head, null)

    list.append('new new')
    assert.equal(list.head.data, 'new new' )

    list.append('new stuff')
    list.append('new word')

    assert.equal(list.head.nextNode.data, 'new stuff' )
    assert.equal(list.head.nextNode.nextNode.data, 'new word')
  });

  it('pop should not change the length', () => {
    list.pop()
    assert.equal(list.length, 0)
  });

  it('should pop if there is only one', () => {
    list.append('pop me')
    assert.equal(list.length, 1)

    list.pop()
    assert.equal(list.length, 0)
  })

  it('should return true if the node is in the  list', function(){
    list.append('suh')
    let result = list.find("suh");
    assert.equal(result.data, "suh");
  });

  it('should return null if node is missing', function(){
    list.append('suh')
    let result = list.find("not here");
    assert.equal(result,null);
  });

  it('push data into array', ()=>{
    list.append('suh')
    list.append('dude')
    list.append('bro')
    list.append('fam')

    assert.deepEqual(list.intoArray(), ['suh','dude','bro','fam'])

  })

  it('should let me insert stuff',()=> {
    list.append('suh')
    list.append('dude')
    list.append('bro')
    list.append('fam')

    list.insert('taco', 1)
    assert.deepEqual(list.intoArray(), ['suh','taco','dude', 'bro', 'fam'])
  })

  it('should just add it to the end if I append at the last position', ()=> {
    list.append('suh')
    list.append('dude')
    list.append('bro')
    list.append('fam')
    list.insert('taco', 4)
    assert.deepEqual(list.intoArray(), ['suh','dude', 'bro', 'fam', 'taco'])
  })

  it('should just add it to the end if I append at the last position if I add a random position number', ()=> {
    list.append('suh')
    list.append('dude')
    list.append('bro')
    list.append('fam')
    list.insert('taco', 100)
    assert.deepEqual(list.intoArray(), ['suh','dude', 'bro', 'fam', 'taco'])
  })
})
