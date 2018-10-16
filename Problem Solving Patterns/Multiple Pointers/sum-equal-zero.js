/*
Write a function called sumZero which accepts a sorted array of integers.  
The function should find the first pair where the sum is 0. Return an array that  
includes both values that sum to zero or undefined if such pair doesn't exist 
*/
sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
sumZero([-2, 0, 1, 3]) // undefined
sumZero([1, 2, 3]) // undefined

// Naive solution using nested loop with time complexity of O(N^2)  
function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

// Refactored solution based on two pointers technique 
function sumZero(arr) {
    // create two pointers 
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // if we find a pair
        if (arr[left] + arr[right] === 0)
            return true;
        // if sum of elements less than given sum (0 in this case), 
        // then move towards higher values
        else if (arr[left] + arr[right] < 0)
            left++;
        // if sum of elements bigger than given sum (0 in this case), 
        // then move towards smaller values
        else
            right--;

    }
}
sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]