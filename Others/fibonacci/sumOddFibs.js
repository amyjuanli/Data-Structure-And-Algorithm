/* Q: 
Given a positive integer num, return the sum of all odd Fibonacci numbers 
that are less than or equal to num.
*/

function sumOddFib(n) {
// Module 1: create an array to contain all fibs numbers
// Approach 1:  
    var arr = [1,1];
    var fibNum = 2;
    while (fibNum <= n) {
        arr.push(arr[arr.length-1] + arr[arr.length-2]);
        fibNum = arr[arr.length-1] + arr[arr.length-2];
    }

// Approach 2:  
    var arr = [1,1];
    var prev1 = 1;
    var prev2 = 1;
    var curr = 2;
    while (curr <= n) {
        arr.push(curr);
        prev1 = prev2;
        prev2 = curr;
        curr = prev1 + prev2;
    }

    // module 2: sum up all the odd fib numbers 
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0) {
            sum += arr[i];
        }
    }

    return sum; //
}