/*
Create a function which accepts a longer string and a short string.  
This function return the number of matches.
*/

/* 
Pseudocode:
- This function accepts a longer string and shorter string  
- Loop over the longer string  (outer loop)  
    - Loop over the short string (inner loop)  
        - If character doesn't match, break the inner loop   
        - If character match, keep going 
    - If a match is found, increment the count 
- return the count
*/

function naiveStringSearch(long, short) {
    var count = 0;
    let i, j;// variables defined outside loop in order to refer them outside loop in below
    for (i = 0; i < long.length - short.length + 1; i++) {
        for (j = 0; j < short.length; j++) {
            if (long[i + j] !== short[j]) {
                // console.log('BREAK')
                break;
            }
        }
        if (j === short.length) { // this statement outside inner loop
            // console.log('FOUND ONE')
            count++;
        }
    }
    return count;
}

// or put the condition inside the inner loop 
function naiveStringSearch(long, short) {
    var count = 0;
    for (let i = 0; i < long.length - short.length + 1; i++) {
        for (let j = 0; j < short.length; j++) {
            if (long[i + j] !== short[j])
                break;
            if (j === short.length - 1)
                count++;
        }
    }
    return count;
}