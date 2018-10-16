/*
 Frequency Counter / Multiple Pointers - areThereDuplicates

Write a function called **areThereDuplicates** which accepts a variable number 
of arguments, and checks whether there are any duplicates among the arguments passed 
in. 
*/

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'a'); // true


// Frequency Counter solution
function areThereDuplicates(...args) { // rest parameters as an array
    // create a frequency counter 
    let counter = {};
    for (let val of args) {
        counter[val] = (counter[val] || 0) + 1;
    }
    // check if there are any duplicates
    for (let key in counter) {
        if (counter[key] > 1) return true;
    }
    return false;
}


// Multiple Pointer Solution
function areThereDuplicates(...args) {
    args = args.sort((a, b) => a > b); // a - b doesn't work in this example?
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) return true;
        else {
            start++;
            next++;
        }
    }
    return false;
}