/* 
Given the max value of fib element 
*/

// Approach 1:
function fibSeq(max) {
    var arr = [1, 1];
    var fibNum = 2;
    while (fibNum <= max) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        fibNum = arr[arr.length - 1] + arr[arr.length - 2];
    }
}

// Approach 2
function fibSeq(max) {
    var arr = [1, 1];
    var prev1 = 1;
    var prev2 = 1;
    var curr = 2;
    while (curr <= max) {
        arr.push(curr);
        prev1 = prev2;
        prev2 = curr;
        curr = prev1 + prev2;
    }
}

/*
Giving the  max number of fib
*/

// option 1:
function fibSeq(num) {
    var arr = [1,1]; // say: 1,1,2,3,....
    for (var i = 2; i < num+1; i++) {
        arr.push(arr[i-2] +arr[i-1]);
    }
    return arr; // return arr[num]    will return the fib element in the num position 
}