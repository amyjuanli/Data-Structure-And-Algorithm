class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var current = this.first;
            this.first = newNode;
            this.first.next = current;
        }
        return this.size++;
    }
    pop() {
        if (this.size === 0) return undefined;
        var temp = this.first;
        if (this.size === 1) {
            this.last = null;
        }
        this.first = this.first.next;
        --this.size;
        return temp.value;
    }
}

// test
var stack = new Stack();
stack.push(1);
stack.push(2);