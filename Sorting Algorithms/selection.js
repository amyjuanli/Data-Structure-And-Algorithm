// pseudocode:
//   1. Create a function which accepts an array
//   2. Store the first element as the smallest value
//   3. Compare this item to the next item in the array until you find a smaller value
//   4. If a smaller number is found, designate this new number to the 'minimum' and continue until the end of array
//   5. If the 'minimum' is not the index you initially begin with, swap them.
//   6. Repeat this until the array is sorted

/*
 UN-OPTIMIZED SELECTION SORT VERSION 
 */
function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var lowest = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        console.log(lowest, i);
        console.log('Swap');
        var temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
    }
    return arr;
}

selectionSort([0, 2, 34, 22, 10, 19, 17]); // many unnecessary swaps
// 0 0
// Swap
// 1 1
// Swap
// 4 2
// Swap
// 6 3
// Swap
// 5 4
// Swap
// 6 5
// Swap
// 6 6
// Swap
//  [0, 2, 10, 17, 19, 22, 34]

// Problem with this algorithm:
// when lowest index is equal to the initial index, swaps still continues although 
// it is needed at all. 


/*
OPTIMIZED SELECTION SORT VERSION 
 */
function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var lowest = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (lowest !== i) {
            console.log(lowest, i);
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

selectionSort([0, 2, 34, 22, 10, 19, 17]); // ONLY four swaps
// 4 2
// 6 3
// 5 4
// 6 5
// [0, 2, 10, 17, 19, 22, 34]