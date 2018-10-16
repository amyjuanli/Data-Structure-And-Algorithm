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

    // BFS method
    breathFirstSearch() {
        var node = this.root;
        var visited = [],
            queue = [];
        if (!this.root) return null;
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

    // DFS-PreOrder
    // Steps - Recursively
    //     1. Create a variable to store the values of nodes visited
    //     2. Store the root of the BST in a variable called current 
    //     3. Write a helper function which accepts node 
    //        1. Push the value of the node to the variable that stores the values 
    //        2. If the node has a left property, call the helper function with the left property on the node 
    //        3. If the node has a right property, call the helper function with the right property on the node 
    //     4. Invoke the helper function with the current variable 
    //     5. Return the array of values
    deepFirstSearchPreOrder() {
        var visited = [],
            current = this.root;
        function traverse(current) {
            visited.push(current.value);
            if (current.left) helper(current.left);
            if (current.right) helper(current.right);
        }
        traverse(current);
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

//      10
//   5     13
// 2   7  11  16

tree.breathFirstSearch(); // [10, 5, 13, 2, 7, 11, 16]
tree.deepFirstSearchPreOrder(); // [10, 5, 2, 7, 13, 11, 16]