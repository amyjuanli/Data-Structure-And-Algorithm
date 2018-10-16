/* 
countUniqueValues  
Implement a function called countUniqueValues, which accepts a sorted array, and 
counts the unique values in the array. There can be negative numbers in the array,  
but it will always be sorted. 
*/

// concrete examplees 
countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
countUniqueValues([1, 2, 3, 4, 11, 11]) // 5
countUniqueValues([]) // 0
countUniqueValues([-4, -3, -1, 1, 1, 2]) // 5


// My solution
function countUniqueValues(arr) {
    let count = 0;
    let left = 0;
    let right = 1;
    while (right < arr.length) {
        // the first two pairs: if equal, increment by 1; otherwise, increment by 2
        if (left === 0) {
            arr[left] === arr[right] ? count += 1 : count += 2;
            // the other pairs: if not equal, increment by 1
        } else {
            if (arr[left] !== arr[right]) count += 1;
        }
        left++;
        right++;
    }
    return count;
}


// Refactored solution based on  two pointers technique 
// building up a unique value array with space complexity of O(1) and time complexity of O(N)
// v1
// function countUniqueValues(arr) {
//     if (!arr.length) return 0;
//     let left = 0;
//     let right = 1;
//     while (right < arr.length) {
//         if (arr[left] === arr[right]) {
//             right++;
//         } else {
//             left++;
//             arr[left] = arr[right];
//             right++;
//         }
//     }
//     return left + 1;
// }

// v2 - simplify the code
function countUniqueValues(arr) {
    if (!arr.length) return 0;
    let left = 0;
    for (let right = 1; right < arr.length; right++) {
        // if not same, replace the value of one plus left with the value of right
        if (arr[left] !== arr[right]) {
            left++;
            arr[left] = arr[right];
        }
    }
    return left+1;
}