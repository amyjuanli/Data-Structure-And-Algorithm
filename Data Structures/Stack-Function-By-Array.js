var stack = []; 

// Opton 1: push/pop 
// add data using push 
stack.push(1);
stack.push(2);
stack.push(3);

console.log("last in first out")
stack.pop();


// Option 2: unshift/shift 
// add data using unshift 
stack.unshift('first');
stack.unshift('second');
stack.unshift('third');

console.log("last in first out")
stack.shift();


// Summary
// Considering the performance, first option is better. 