// idea: add from the end but remove from the beginning on DLL
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // adding from the end of DLL
    enqueue(val) {
        var newNode = new Node(val);
        if(this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    // remove from the beginning of DLL
    dequeue() {
        if(this.size === 0) return null;
        
        var temp = this.first;
        if(this.size === 1) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}