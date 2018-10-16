class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let node = new Node(val);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++
        return this;
    }
    pop() {
        // case: no node
        if (this.length === 0) return undefined;
        // case: more than one node 
        var current = this.head;
        var tail = current;
        // store the new tail as the second to the last node on the list 
        while (current.next) {
            tail = current;
            current = current.next;
        }
        this.tail = tail; // update the tail
        this.tail.next = null;
        this.length--;
        // fix the problem when no node left after pop
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current; // return the removed node
    }
    shift() {
        if (this.length === 0) return undefined;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            var oldHead = this.head;
            this.head = oldHead.next;
        }
        this.length--;
        return oldHead;
    }
    unshift(val) {
        var newNode = new Node(val);
        // when list is empty 
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            // when at least one node on the list
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        var current = this.head;
        var counter = 0;
        while (counter !== index) {
            current = current.next;
            counter++;
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
        // Special cases
        if (index < 0 || index > this.length) return false;
        if (index === 0) return this.unshift(val);
        if (index === this.length) return this.push(val);
        // insert node somewhere between the first and last node
        var newNode = new Node(val);
        var preNode = this.get(index - 1)
        var nextNode = preNode.next;
        newNode.next = nextNode;
        preNode.next = newNode;
        this.length++;
        return true;
    }
    remove(index) {
        // Special cases
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift(index);
        if (index === this.length - 1) return this.pop();
        // remove node which is between the first and last node
        var preNode = this.get(index - 1);
        var removeNode = preNode.next;
        var nextNode = removeNode.next;
        preNode.next = nextNode;
        this.length--;
        return removeNode;
    }
    reverse() {
        // Step 1: change next property of each node from the last to the beginning of list
        for (let i = this.length - 1; i >= 0; i--) {
            (i > 0) ? this.get(i).next = this.get(i - 1): this.get(i).next = null;
        }
        // Step 2: Then swap the head and tail property 
        var temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        return this;
    }
}

var list = new SingleLinkedList();
list.push("hello");
list.push("world");
list;