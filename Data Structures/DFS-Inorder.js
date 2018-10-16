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
    //        1) Push the value of the node to the variable that stores the values 
    //        2) If the node has a left property, call the helper function with the left property on the node 
    //        3) If the node has a right property, call the helper function with the right property on the node 
    //     4. Invoke the helper function with the current variable 
    //     5. Return the array of values
    deepFirstSearchPreOrder() {
        var visited = [],
            current = this.root;

        function traverse(current) {
            visited.push(current.value);
            if (current.left)
                traverse(current.left);
            if (current.right) traverse(current.right);
        }
        traverse(current);
        return visited;

    }

    // DFS - PostOrder
    // Steps - Recursively
    // 1. Create a variable to store the values of nodes visited
    // 2. Store the root of the BST in a variable called current
    // 3. Write a helper function which accepts a node 
    //    1) If the node has a left property, call the helper function with the left property on the node 
    //    2) If the node has a right property, call the helper function with the right property on the node 
    //    3) Push the value of the node to the variable that stores the values
    // 4. Invoke the helper function with the current variable
    // 5. Return the nodes visited
    deepFirstSearchPostOrder() {
        var visited = [];
        var current = this.root;

        function traverse(current) {
            // not using else if ... else as node can have more than one child 
            if (current.left) traverse(current.left);
            if (current.right) traverse(current.right);
            visited.push(current.value);
        }
        traverse(current);
        return visited;
    }

    // DFS - InOrder
    // Steps - Recursively
    // 1. Create a variable to store the values of nodes visited
    // 2. Store the root of the BST in a variable called current
    // 3. Write a helper function which accepts a node 
    //    1) If the node has a left property, call the helper function with the left property on the node 
    //    2) Push the value of the node to the variable that stores the values
    //    3) If the node has a right property, call the helper function with the right property on the node 
    // 4. Invoke the helper function with the current variable
    // 5. Return the nodes visited
    deepFirstSearchInOrder() {
        var visited = [];
        var current = this.root;

        function traverse(current) {
            if (current.left) traverse(current.left);
            visited.push(current.value);
            if (current.right) traverse(current.right);

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
tree.deepFirstSearchPostOrder(); // [2, 7, 5, 11, 16, 13, 10]
tree.deepFirstSearchInOrder(); // [2, 5, 7, 10, 11, 13, 16]