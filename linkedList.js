class LinkedList{
  constructor(){
    this.currentHead = null;
  }
  append(value){
     this.newNode = new Node(value);
     this.newNode.nextNode = null;
     if(this.currentHead == null){
      this.currentHead = this.newNode;
     }else if(this.currentHead.nextNode == null){
      this.currentHead.nextNode = this.newNode;
     }else{
      this.cur = this.currentHead;
      while( this.cur.nextNode != null){
        this.cur = this.cur.nextNode;
      }
      this.cur.nextNode = this.newNode;
      this.cur = this.currentHead;
     }
  }
  prepend(value){
    this.newNodeHead = new Node(value);
    this.newNodeHead.nextNode = this.currentHead;
    this.currentHead = this.newNodeHead;
  }
  size(){
    this.current = this.currentHead;
    this.total = 0;
    if(this.current == null){
        return 'size: '+0;
    }else{
        while(this.current != null){
          this.current = this.current.nextNode;
          this.total++;
        }
        return this.total;
    }
  }
  head(){
    return 'head: '+ this.currentHead.value;
  }
  tail(){
    this.currentTail = this.currentHead;
    if(this.currentTail.nextNode == null){
      return 'tail: '+ this.currentTail.value;
    }else{
      while(this.currentTail.nextNode != null){
        this.currentTail = this.currentTail.nextNode;
      }
      return 'tail: ' + this.currentTail.value;
    }
  }
  at(index){
    this.i = 0
    this.curr = this.currentHead;
    while(this.i != index){
      this.curr.nextNode;
      this.curr = this.curr.nextNode;
      this.i++;
    }
    return this.curr.value;
  }
  pop(){
    this.prev = this.currentHead;
    this.current = this.currentHead.nextNode;
    while( this.current.nextNode != null){
      this.prev = this.current;
      this.current = this.prev.nextNode;
    }
    this.prev.nextNode = null;
  }
  contains(value){
    this.currentNode = this.currentHead;
    while(this.currentNode != null){
      if(this.currentNode.value == value){
        return true;
      }else{
        this.currentNode = this.currentNode.nextNode
      }
    }return false;
    }
  find(value){
    this.i = 0;
    this.currentNode = this.currentHead;
    while(this.currentNode != null){
      if(this.currentNode.value == value){
        return this.i;
      }else{
        this.currentNode = this.currentNode.nextNode;
        this.i++;
      }
    }return null;
  }
  toString(){
    this.result = '';
    this.curr = this.currentHead;
    while(this.curr != null){
      this.result += `${this.curr.value} -> `;
      this.curr = this.curr.nextNode;
    }
    this.result += 'null';
    return 'list: '+this.result;
  }
  insertAt(value, index){
    this.newNode = new Node(value);
    this.prev = this.currentHead;
    this.prevIndex = 0;
    this.next = this.prev.nextNode;
    this.nextIndex = this.prevIndex + 1;
    if(index == 0){
      this.prepend(value);
    }else if(index >= this.size()){
      this.append(value);
    }
    else if(this.prevIndex == index - 1){
      this.next = this.prev.nextNode;
      this.prev.nextNode = this.newNode;
      this.newNode.nextNode = this.next;
    }else{
      while( this.prevIndex != index -1 ){
        this.prevIndex++;
        this.prev = this.prev.nextNode;
      }
      this.next = this.prev.nextNode;
      this.prev.nextNode = this.newNode;
      this.newNode.nextNode = this.next;
    }
  }
  removeAt(index){
    this.curr = this.currentHead;
    this.i = 0;
    if(index == 0){
      this.currentHead = this.currentHead.nextNode;
    }
    while(this.i < index-1){
      this.curr = this.curr.nextNode;
      this.i++;
    }if(this.i == index-1){
      this.curr.nextNode = this.curr.nextNode.nextNode;
    }

  }
}

class Node{
    constructor(value = null){
        this.value = value;
        this.nextNode = null;
    }  
}


//test
let ln = new LinkedList;
ln.append('1');
ln.append('2');
ln.append('3');
ln.append('4');
ln.append('5');
ln.prepend('0');
ln.prepend('-1');
ln.insertAt('9',9);
ln.removeAt(7)

console.log(ln.toString());
console.log('size: '+ln.size());
console.log(ln.head());
console.log(ln.tail());
console.log(ln.at(5));
console.log(ln.contains(5));
console.log(ln.find(5));
