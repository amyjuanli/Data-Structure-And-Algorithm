/* 
LINEAR SEARCH
Write a function called linear search which accepts an array and a value. This  
function returns the index at which the value is found in the array. If the value  
is never found, then return -1
*/

/* 
Pseudocode:
- This function accepts an array and a value  
- Loop through the array and check if the current element is equal to the value  
- If it is, return the index at which the element is found in the array  
- If never found, return -1
*/

function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
    return -1;
}