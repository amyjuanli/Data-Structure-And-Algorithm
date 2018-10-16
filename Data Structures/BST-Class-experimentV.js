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
    // INSERTING A NODE TO BST 
    // Pseudocode: 
    // Create a new node 
    // Starting at the root 
    //   If there is no root, the root becomes the new node 
    //   If there is a root, check if the value of the new node is greater than or less than the value of the root
    //       If greater: 
    //           Check to see if there is a node to the right 
    //               If there is, move to that node and repeat these steps
    //               If no, add that node as the right property 
    //        If less:
    //            Check to see if there is a node to the left:
    //                 If there is, move to that node and repeat these steps
    //                 If no, add that node as the left property

    insert(val) {
        var newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
        } else {
            var current = this.root;
            while (true) {
                if(val === current.value) return undefined;
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
    // FINDING A NODE IN A BST
    // Pseudocode
    // Starting at the root
    // Check if there is a root, if not - done!
    // If there is a root, check if the value on the new node is the value we are looking for 
    //   If match, done!
    //   Otherwise 
    //      If it is greater 
    //         Check to see if there is a node to the right 
    //             If there is, move to that node and repeat these steps
    //             If there is not, done!
    //       If it is less
    //          Check to see if there is a node to the left
    //             If there is, move to that node and repeat these steps
    //             If there is not, done!
    contains(val) {
        if(!this.root) return false;
        var current = this.root;
        while(true) {
             if(val > current.value) {
                 if(!current.right) return false;
                 current = current.right;
             } else if (val < current.value) {
                 if(!current.left) return false;
                 current = current.left;
                 // if value is found
             } else {
                return true;
             }
        }
    }
}

// // not efficient way to add new nodes to the tree by doing: 
// var tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(20);
// tree.root.left = new Node(4);
// tree.root.left.right(8);


// Built tree: 
//     10
//  5      13
//2  7   11  16
var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(2);
tree.insert(7);
tree.insert(11);
tree.insert(16);