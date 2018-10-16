// NODE properties:
// val
// next
// prev
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

// DSL properties:
// head
// tail
// length
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    } 
    push(val) {
     let newNode = new Node(val);
     if(this.length === 0) {
         this.head = newNode;
         this.tail = newNode;
     } else {
         this.tail.next = newNode;
         newNode.prev = this.tail;
         this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if(this.length === 0) return undefined; 
    // set the seond to last node to be the tail
    if(this.length === 1) {
        this.head = null;
        this.tail = null;
    } else {
        var poppedNode = this.tail;
        this.tail = poppedNode.prev;
        this.tail.next = null;
     // cut off the links of poppedNode to the list 
     // list.pop() 
    // Node {val: "amy", next: null, prev: null}
        poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

// If length is 0, return undefined
// Store the current head property in a variable (call it old head)
// If the list length is one
//    Set the head to be null
//    Set the tail to be null
// Otherwise, update the head to be the next property of the old head
// Set the head's prev property to be null
// Set the old head's next to null
// Decrement the length
// Return old head 
  shift() {
     if (this.length === 0) return undefined;
     if(this.length === 1) {
         this.head = null;
         this.tail = null;
     } else {
         var oldHead = this.head;
          this.head = oldHead.next;
          this.head.prev = null;
          // cut the old head's links to the list 
          // list.shift() 
//output: Node {val: "hello", next: null, prev: null}
          oldHead.next = null;
     }
     this.length--;
     return oldHead;
  }

  // Create a new node with value passed to the function
  // If the length is 0
  //    Set the head to be the new node 
  //    Set the tail to be the new node 
  // Otherwise
  //    Set the prev property on the head of the list to be the new node
  //    Set the nex property on the new node to be the head property
  //    Update the head to be the new node 
  // Increment the length
  // Return the new list 
  unshift(val) {
      var newNode = new Node(val);
      if(this.length === 0) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          this.head.prev = newNode;
          newNode.next = this.head;
          ths.head = newNode; 
      }
      this.length++;
      return this;
  }

  // If the index is less than 0 greater or equal to the lenght, return undefined
  // If the index is less than or equal to half of the length of the list
  //    Loop through the list starting from the head towards the middle
  //    Return the node once found
  // If the index is greater than half of the length of the list 
  //    Loop through the list starting from the tail towards middle 
  //    Return the node once found 
  get(index) {
      if(index < 0 || index >= this.length) return undefined;
      var current, counter;
      if(index <= this.length/2) {
          console.log("LOOP FROM HEAD");
          counter = 0;
          current = this.head;
          while (counter !== index) {
              current = current.next;
              counter++;
          }
      } else {
          console.log("LOOP FROM TAIL");
           counter = this.length-1;
            current = this.tail;
            while (counter !== index) {
              current = current.prev;
              counter--;
          }
      }
        return current;
  }

  // Create a variable to store the found node at the index passed to the function via get method 
  //   If the get method returns a valid node, set the value to be the value passed 
  //   Return true
  // Otherwise, return false 
  set(index, val) {
      var foundNode = this.get(index);
      if(foundNode) {
          foundNode.val = val;
          return true;
      }
      return false;
  } 

  // If the index is less than zero or greater than or equal to the length, return false
  // If the index is 0, unshift and return the result 
  // If the index is the same as the length, push and return the result 
  // Otherwise
  //    Use the get method to access the index - 1
  //    Set the next and preve properties of the nodes 
  // Increment the length
  // Return the list 
  insert(index, val) {
      if (index < 0 || index > this.length) return false;
      if(index === 0) return this.unshift(val);
      if(index === this.length) return this.push(val);
      var newNode = new Node(val);
      var prevNode = this.get(index-1);
      var nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;
      this.length++;
      return true;
  }
  remove(index) {
     if (index < 0 || index >= this.length) return undefined;
     if(index === 0) return this.shift();
     if(index === this.length-1) return this.pop();

     var removedNode = this.get(index);
     var prevNode = removedNode.prev;
     var nextNode = removedNode.next;
     prevNode.next = nextNode;
     nextNode.prev = prevNode;
     
     // cut off the links of the removed node to the link 
     removedNode.next = null;
     removedNode.prev = null; 

     this.length--;
     return removedNode;
  }
  reverse() {
    var temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }

}

var list = new DoublyLinkedList();
list.push('hello');
list.push('world');