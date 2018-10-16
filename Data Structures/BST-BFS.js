// BST
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        var newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
        } else {
            var current = this.root;
            while (true) {
                if (val === current.value) return undefined;
                if (val > current.value) {
                    if (!current.right) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
                if (val < current.value) {
                    if (!current.left) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                }
            }
        }
    }

    contains(val) {
        if (!this.root) return false;
        var current = this.root;
        while (true) {
            if (val > current.value) {
                if (!current.right) return false;
                current = current.right;
            } else if (val < current.value) {
                if (!current.left) return false;
                current = current.left;
            } else {
                return true;
            }
        }
    }

    // BFS method (the same principle for other trees like ternary tree, ..)
    /* Pseudocode:
        1. Create a queue (can be an array) and a variable to store the values of nodes visited
        2. Place the root node in the queue
        3. Loop through the queue as long as there is anything in the queue
        1. Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
        2. If there is a left property on the node dequeued, add it to the queue
        3. If there is a right property on the node dequeued, add it to the queue
        4. Return the variable that stores the values
    */
    breathFirstSearch() {
        var node = this.root;
        var visited = [],
            queue = [];
        // if (!this.root) return null; // unnecessary?
        queue.push(this.root);
        while (queue.length) {
            node = queue.shift();
            visited.push(node.value);
            if (node.left)
                queue.push(node.left);
            if (node.right)
                queue.push(node.right);
        }
        return visited;
    }
}



var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(2);
tree.insert(7);
tree.insert(11);
tree.insert(16);
tree.breathFirstSearch(); // [10, 5, 13, 2, 7, 11, 16]