// Stack is about push and pop operations. Since, add/removal from beginning is 
// more efficient than from the end, so we build push/pop on SLL which actually working 
// from the beginning of the stack 
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

    // Create a push function (add from the beginning rather than the end)
    // Create a function which accepts a value
    // Create a new node with that passed value
    // If there are no nodes in the stack, set the first and last property to be the new node
    // If at least one node in the stack, create a variable to stores the current first property on the stack
    // Reset the first property to be the new node 
    // Set the next property on the stack to be the previously one
    // Increment the size of the stack by one 
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

var stack = new Stack();
stack.push(1);
stack.push(2);