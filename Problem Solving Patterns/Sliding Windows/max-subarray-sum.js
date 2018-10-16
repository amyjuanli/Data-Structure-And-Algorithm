/*
Write a function called maxSubarraySum which accepts an array of integers and a number  
called n. The function calculate the maximum sum of n consecutive elements in the array.
*/

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10 (2+8=10)
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) // 17 (2+5+2+8=17)
maxSubarraySum([4, 2, 1, 6], 1) // 6 (6)
maxSubarraySum([4, 2, 1, 6, 2], 4) // 13 (4+2+1+6)
maxSubarraySum([], 4) // null


// // Naive solution using nested for loop
function maxSubarraySum(arr, n) {
    if (n > arr.length) return null;
    let maxSum = -Infinity;
    for (let i = 0; i < arr.length - n + 1; i++) {
        let temp = 0;
        for (let j = 0; j < n; j++) {
            temp += arr[i + j];
        }
        if (temp > maxSum) {
            maxSum = temp;
        }
    }
    return maxSum;
}

// When the array is growing very big, the above solution is not efficient one. Let's try
// Refactored solution using 'sliding window pattern'
function maxSubarraySum(arr, n) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < n) return null;
    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
// or another variant 
function maxSubarraySum(arr, n) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < n) return null;
    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = 0; i < arr.length - n; i++) { // a little change
        tempSum = tempSum - arr[i] + arr[i + n];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}