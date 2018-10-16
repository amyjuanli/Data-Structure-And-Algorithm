# Data Structures
We will learn how to use ES2015 class syntax to build data structures like 
*singly-list*, *doubly-list*. 

 Different data structures are excel at different things.  
Some are very specified but some are very generally used (like Array).  
* Store Map/location data - *Graph*
* Need a ordered list for fast inserts/removal from the beginning - *linked-list*
* Scrapping web data - *tree*
* Schedular - *binary tree*

For the necessity of insertions/removal data, if order doesn't matter, go for *Object*.
But if order matters, then go for *Array* which is good for fast insertions/removal 
at the end. To have a fast performance at the beginning or other positions, go 
for *Link lists*.

## Singly Linked List (SLL)
A data structure that contains **head**, **tail**, and **length** property. 
Linked list consists of **nodes**, and each node contains a **value** and a 
**pointer** which points to next node or null.  
Advantages: fast insertions/removal.  
* *Singly Linked List* is excellent alternative to array if insertion/removal
*  from the beginning is required.
* Arrays contains a built in index whereas linked list not (via nodes)
* The idea of a list data structure that consists of nodes is the foundation for
*  other important data structures like *stacks* and *queues*. 
  
## Doubly linked List (DLL)
Almost identical to *Singly Linked List* except each node points also points to its previous node.   
DLL provides more efficient operations like *pop*, print out list reversely, ....    
**Taking more memory - More flexibility!**

## Comparing Array, SSL, and DLL 
|                | Array                           | SLL                                       | DLL                                       |
| -------------- | ------------------------------- | ----------------------------------------- | ----------------------------------------- |
| how indexed    | Indexed in order                | Don't have indexes                        | Don't have indexes                        |
| data structure | Array contains a built-in index | Connected via nodes with **next** pointer | Connected via nodes with *next* and *pre* |
| access element | Fast access at a specific index | Random access is not allowed              | Random access is not allowed              |
| Insertion      | O(n)                            | O(1) (but getting to the index: O(n)      | O(1)                                      |
| Removal        | O(n)                            | head-O(n)/tail-O(n)                       | O(1)                                      |
| Searching      | O(n)  linear search             | O(n)                                      | O(n) (technically O(n/2) but still O(n))  |
| Access         | O(1)                            | O(n)                                      | O(n)                                      |

## Stacks
* They are *LIFO* data structures (last in first out)
* They are used to handle function invocations (like call stack), operations like undo/redo, routing (the history), etc. 
* Big O notations for Stacks (important: insertion/removal)
|    Operation   | Big O Notation   | 
| -------------- | ---------------- | 
| Insertion      | O(1)             | 
| Removal        | O(1)             | 
| Searching      | O(n)             | 
| Access         | O(n)             | 
* JavaScript doesn't have built in Stack but easier to implement them (two operations: *push/pop*)
  * Array
  * SLL

## Queues
* Queue - *FILO* principle (first in last out)
* They are used: background tasks, uploading files, printing, etc. 
* Implement queues in JavaScript (two operations: *enqueue/dequeue*)
  * Array (easy to implement, but not efficient performance)
  * SLL 
* Big O notations for Stacks (important: insertion/removal)
|    Operation   | Big O Notation   | 
| -------------- | ---------------- | 
| Insertion      | O(1)             | 
| Removal        | O(1)             | 
| Searching      | O(n)             | 
| Access         | O(n)             | 

## Trees
* Essential elements/structure consisting of *Trees*: ONE root, parent->child->grandchildren relation. 
  * Root - the top node in a tree
  * Child
  * Parent
  * Siblings
  * Leaf - a node with no children
  * Edge - a connection between nodes
* Use cases:
  * HTML DOM (like `document.body.children[2]` to access the child) 
  * Abstract syntax tree
  * AI
  * Folders in operating systems
  * ...

* Kinds of Tress 
  * Trees
  * Binary Trees
  * Binary Search Trees (BST)
|    Operation   | Big O Notation   | 
| -------------- | ---------------- | 
| Insertion      | O(log n)         | 
| Search         | O(log n)         | 


## Hash Tables 
JS has *Object* and *Maps* which use hash tables.  
To implement a hash table, we can use an array in order to loop through values 
by keys. For the (human/computer readable) purposes, instead of `colors[2]`, we 
use `colors['red']`. Therefore, we need a way to convert the keys into valid array indices. 
*hash function* comes to rescue.  
JS doesn't have built-in hash function (In python, `hash('hello')`). We need to build our own.
* What makes a good has?
  * Fast
  * Distributes uniformly
  * Deterministic (same input yields same output)
#### References

