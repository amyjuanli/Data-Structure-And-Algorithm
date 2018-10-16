/* 
BINARY SEARCH

Givens a sorted array of integers, write a function called search that accepts an
array and value and return the index where the value is located. NOt found, return -1
*/
search([1,2,3,4,5,6], 4) // 3
search([1,2,3,4,5,6], 6) // 5
search([1,2,3,4,5,6], 11) // -1


// A naive solution using linear search - time complexity O(N)
function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }
    return -1;
}

// A refactored solution using binary search which based on D&Q pattern
function binarySearch(arr, val) {
    let min = 0;
    let max = arr.length-1;
    while (min<=max) {
        let middle = Math.floor((min+max)/2);
        let currentElement = arr[middle];
        if (currentElement === val) {
            return middle;
        } else if (currentElement > val) {
            max = middle -1;
        } else {
            min = middle;
        }
    }
    return -1;
}