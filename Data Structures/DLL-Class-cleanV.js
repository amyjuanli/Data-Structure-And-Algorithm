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
        if (this.length === 0) {
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
        if (this.length === 0) return undefined;
        // set the second to last node to be the tail
        if (this.length === 1) {
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
    shift() {
        if (this.length === 0) return undefined;
        if (this.length === 1) {
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
    unshift(val) {
        var newNode = new Node(val);
        if (this.length === 0) {
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
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        var current, counter;
        if (index <= this.length / 2) {
            console.log("LOOP FROM HEAD");
            counter = 0;
            current = this.head;
            while (counter !== index) {
                current = current.next;
                counter++;
            }
        } else {
            console.log("LOOP FROM TAIL");
            counter = this.length - 1;
            current = this.tail;
            while (counter !== index) {
                current = current.prev;
                counter--;
            }
        }
        return current;
    }
    set(index, val) {
        var foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return this.unshift(val);
        if (index === this.length) return this.push(val);
        var newNode = new Node(val);
        var prevNode = this.get(index - 1);
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
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

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