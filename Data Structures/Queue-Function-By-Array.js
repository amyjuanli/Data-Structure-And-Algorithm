var q = [];
q.push("first task");
q.push("second task");
q.push("third task");
q
// ["first task", "second task", "third task"]

q.shift() 
// "first task"
q.shift() 
// "second task"
q.shift() 
// "third task"


// or 
q.unshift("First");
q.unshift("Second");
q.unshift("Third")
q
// ["Third", "Second", "First"]
q.pop()
// "First";
q.pop()
// "Second";
q.pop()
// "Third";


// summary:
// Although very easy to implement queue by array, but performance is not good: insertion/removal from the beginning 
// of array requires the re-indexing process for the rest of elements. 