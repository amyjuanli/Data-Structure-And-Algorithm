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
        [arr[lowest], arr[i]] = [arr[i], arr[lowest]];
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
            [arr[lowest], arr[i]] = [arr[i], arr[lowest]];
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