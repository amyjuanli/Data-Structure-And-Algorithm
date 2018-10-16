/*
BINARY SEARCH
Implement on sorted arrays
*/


/* 
Pseudocode:
- This function accepts a sorted array and a value  
- Create a left pointer at the start of the array and a right pointer at the end of the array  
- While the left pointer comes before the right pointer:  
  - Create a middle pointer  
  - If the middle value equals the given value, return its index  
  - If it is smaller than given value, move the left pointer up
  - If it is bigger than given value, move the right pointer down  
- If never found, return -1.
*/

function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        let currentValue = arr[middle];
        if (currentValue === val) return middle;
        else if (currentValue < val) left = middle + 1;
        else right = middle - 1;
    }
    return -1;
}
