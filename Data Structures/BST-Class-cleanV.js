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