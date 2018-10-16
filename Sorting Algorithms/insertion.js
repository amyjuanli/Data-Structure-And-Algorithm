// too many swaps happening in this strategy (bad approach)
// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         for (let j = 0; j < i; j++) {
//             if (arr[i] < arr[j]) {
//                 // swap
//                 var temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }

// A good approach for insertion sorting algorithm
function insertionSort(arr) {
    for(var i = 1; i < arr.length; i++) {
        var currentVal = arr[i];
        // if sorted array, arr[j] > currentVal return false, so O(n)
        for (var j = i-1; j >= 0 && arr[j] > currentVal; j--) {
            console.log('move larger value to next position');
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
    }
     return arr;
 }

 // tests
 insertionSort([2, 1, 9, 76, 4])

 // for nearly sorted array, insertion sorting is fine:
 insertionSort([1,2,3,4,-1]);
// move larger value to next position
// [-1, 1, 2, 3, 4]

