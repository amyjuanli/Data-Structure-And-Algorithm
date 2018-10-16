/* 
return the nth term in the Fibonacci sequence
*/
// Approach 1: using iterative method
function ifib(n) {
    let prev1 = 1;
    let prev2 = 1;
    let curr = prev1 + prev2;
    let nth = 3;
    while (nth <= n) {
        curr = prev1 + prev2;
        prev1 = prev2;
        prev2 = curr;
        nth++;
    }
    return curr;
}

// Approach 2: using recursive function 
function rFib(n) {
    if(n<2) {
        return 1;
    } else {
        return rFib(n-2) + rFib(n-1);
    }
}