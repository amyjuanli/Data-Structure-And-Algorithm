// data - val
// reference to next node - next

// class Node{
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// Painful coding like this
// var first = new Node('hi');
// first.next = new Node('there');
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

// So we will create methods inside class to achieve these: push, pop, ...

// --------------Singly Linked List---------------------------------------------
// Now let's build the linked list by building up methods
// create Node class to have value and next properties

// NODE properties:
// val
// next
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
// create SingleLinkedList Class to have head, tail and length properties
// SSL properties:
// head
// tail
// length
class SingleLinkedList {
    // constructor these three properties of SLL
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // AIM
    // to add new node to the end of the list
    // PSEUDOCODE 
    // create a new node using the passed value
    // if no head property on the list, set the head and tail both to be the newly created node
    // Otherwise set the the next property on the tail to be the new node and
    // set the tail property on the list to be the new node 
    // increment the length by one
    // return the new linked list
    push(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    // AIM
    // to remove node from the end of the list
    // PSEUDOCODE
    // if empty list (no nodes), return undefined
    // if ONLY one on the list, return a newly created list without any node. 
    // otherwise, loop through entire list until you reach the tail
    // set the next property of the 2nd to last node to be null
    // set the tail to be the 2nd to last node
    // decrement the length of the list by one 
    // return the value of the node removed 
    pop() {
        // if empty list
        if (!this.head) return undefined;
        // // if only one node on the list
        // if (!this.head.next) return new SingleLinkedList();
        var current = this.head;
        var newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        // // to fix the issue if only one node in the list
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current; // return the removed node
    }


    //     traverse() {
    //         var current = this.head;
    //         while (current) {
    //             console.log(current.val);
    //             current = current.next;
    //         }
    //     }

    // AIM
    // to remove a new node from the beginning of the linked list
    // PSEUDOCODE
    // If empty list (no nodes), return undefined
    // If ONLY one node on the list, return a newly created list with no nodes
    // Store the current head in a variable
    // Set the head property to be the current head's next property 
    // Decrement the length of the list by one
    // Return the value of the node removed 
    shift() {
        if (!this.head) return undefined;
        // to fix the issue if only one node in the list
        // this doesn't fix
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        // to fix the issue via this way
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;

    }

    // AIM
    // to add a new node from the beginning of the linked list
    // PSEUDOCODE
    // Create a function which accepts a value
    // Create a new node using the value passed to the function
    // If empty list (no nodes), set the head and the tail to the newly created node
    // Otherwise, set the newly created node's next property to be the current head property on the list
    // Set the head property on the list to be the newly created node 
    // Increment the length of the list by one
    // Return the linked list
    unshift(val) {
        var newNode = new Node(val);
        // when list is empty 
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            // when at least one node already on the list
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    // AIM
    // To retrieve a node by its position on the list
    // For instance: given 0 -> return the 1st item;  
    // PSEUDOCODE 
    // Create a get function which accepts an index 
    // If the index is negative or greater than or equal to the length of the list, return null
    // Otherwise, loop through entire list until you reach the index and return the node at the specific index
    get(index) {
        // if(!this.head || index < 0 || index > this.length) return undefined if(!this.head || index < 0 || index > this.length) return undefined;;
        // refactor 
        if (index < 0 || index > this.length) return null;
        var current = this.head;
        // for (var i = 0; i < index; i++) {
        //     current = current.next;
        // }
        var counter = 0;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
    // AIM
    // To change the value of a node based on its position on th list
    // PSEUDOCODE  
    // Create a function which accepts an index and a value
    // Use the defined get method to get the specific node
    // If found, set the value of the node to be the value passed to the function and return true;
    // Otherwise, return false;
    set(index, val) {
        var foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    // AIM
    // To add a node to the list at the specific index 
    // PSEUDOCODE   
    // Create a function which accepts an index and a value 
    // If the index is negative or greater than the length of the list, return false;
    // If the index is the same as the length, push a new node to the end of the list and return true
    // If the index is zero, unshift a new node to the start of the list and return true
    // Otherwise, using the defined get method to access the node at the given index - 1
    // Set the next property on that found node to be the new node
    // Set the next property on the new node to be the previous next node of the found node
    // Increment the length
    // Return true;
    insert(index, val) {
        // special cases
        if (index < 0 || index > this.length) return false;
        if (index === 0) this.unshift(val);
        if (index === this.length) this.push(val);

        // general cases
        var newNode = new Node(val);
        var preNode = this.get(index - 1)
        // insert the new node in between two nodes 
        var nextNode = preNode.next;
        newNode.next = nextNode;
        preNode.next = newNode;
        // or 
        //         var temp = prevNode.next;
        //         prevNode.next = newNode;
        //         newNode.next = temp;

        this.length++;
        return true;
    }
    // AIM
    // To remove a node from the linked list at a specific index
    // PSEUDOCODE   
    // Create a function which accepts an index
    // If the index is negative or greater than or equal to the length of the list, return undefined;
    // If the index is zero, then shift to remove a new node from the start of the list. 
    // If the index is length -1, then pop a node 
    // Otherwise, access the node before the given index and the node after the given index
    // Set the next property of the before node to the after node
    // Decrement the length
    // Return the value of the removed node;
    remove(index) {
        // special cases
        if (index < 0 || index > this.length) return undefined;
        if (index === 0) return this.shift(index);
        if (index === this.length - 1) return this.pop();

        // general cases
        var preNode = this.get(index - 1);
        var removeNode = preNode.next;
        var nextNode = removeNode.next;
        preNode.next = nextNode;
        this.length--;
        return removeNode;
    }
    // AIM
    // To reverse the linked list in place
    // Solution 1: 
    // PSEUDOCODE   
    // loop through the nodes from the last one to the first one on the list
    // Leveraging 'get' method to set the next property of node to next node 
    // Set the last node's property to null 
    // swap the head and tail properties 
    // Return the new linked list.
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

    // Solution 2: 
    // PSEUDOCODE   
    // swap the head and tail properties 
    // reset the next property ...
    // Return the new linked list. 
    reverse() {
        // Step 1: swap the head and tail
        var currentNode = this.head; // 'node' variable will be referenced inside the loop
        this.head = this.tail;
        this.tail = node;

        // Step 2: reset the next property for each node
        var pre = null;
        var next;
        for (let i = 0; i < this.length; i++) {
            next = currentNode.next;
            currentNode.next = pre;
            pre = currentNode;
            currentNode = next;
        }
        return this;
    }
    // WALKING THROUGH EXECUTION STEPS: 
    // [100, 200, 300, 400, 999]
    //  NODE  NEXT 
    //  100 -> null
    //  PREV  NODE NEXT 
    //  200 -> 100 -> null 
    //         PREV  NODE NEXT 
    //  300 -> 200 -> 100 -> null 
    //            PREV  NODE NEXT 
    //  400 -> 300-> 200 -> 100 -> null 
    //                  PREV  NODE 
    //  999 -> 400-> 300-> 200 -> 100 -> null 


    // For testing the output purpose
    print() {
        var arr = [];
        var current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }

}

var list = new SingleLinkedList();
list.push("hello");
list.push("world");
list;
// output: 
// SingleLinkedList {head: Node, tail: Node, length: 2}
// head: Node {val: "hello", next: Node}
// length: 2
// tail: Node {val: "world", next: null}
// __proto__: Object