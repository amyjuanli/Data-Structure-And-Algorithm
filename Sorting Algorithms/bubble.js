// Pseudocode:
// 1. Ceate a function that will sort an array by moving the largest number to the end
// 2. Do this by having nested loops so you can resort the array an appropriate amount of times

/*
 UN-OPTIMIZED BUBBLE SORT VERSION 
 */
// -v1
// function bubbleSort(arr) {
//   var temp;
//   for (var i = 0; i < arr.length - 1; i++) {
//       for (var j = 0; j < arr.length - 1 - i; j++) {
//           if (arr[j] > arr[j + 1]) {
//               temp = arr[j];
//               arr[j] = arr[j + 1];
//               arr[j + 1] = temp;
//           }
//       }
//   }
//   return arr;
// }

// -v2
function bubbleSort(arr){
    for(var i = arr.length; i > 0; i--){
      for(var j = 0; j < i - 1; j++){
        console.log(arr, arr[j], arr[j+1]);
        if(arr[j] > arr[j+1]){
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;         
        }
      }
    }
    return arr;
  }
  

// tests
// For random array, optimized and unptimized version are no big differences in performance. 
bubbleSort([8,1,2,3,4,5,6,7]);


// For nearly sorted array, this algorithm keeps sorting although already 
// sorted-more steps than optimized bubble sort
bubbleSort([1,2,3,4,9,5])
// [1, 2, 3, 4, 9, 5] 1 2
// [1, 2, 3, 4, 9, 5] 2 3
// [1, 2, 3, 4, 9, 5] 3 4
// [1, 2, 3, 4, 9, 5] 4 9
// [1, 2, 3, 4, 9, 5] 9 5
//  one pass
// [1, 2, 3, 4, 5, 9] 1 2
// [1, 2, 3, 4, 5, 9] 2 3
// [1, 2, 3, 4, 5, 9] 3 4
// [1, 2, 3, 4, 5, 9] 4 5
// one pass
// [1, 2, 3, 4, 5, 9] 1 2
// [1, 2, 3, 4, 5, 9] 2 3
// [1, 2, 3, 4, 5, 9] 3 4
// one pass
// [1, 2, 3, 4, 5, 9] 1 2
//  [1, 2, 3, 4, 5, 9] 2 3
// one pass
// [1, 2, 3, 4, 5, 9] 1 2
// one pass
//  [1, 2, 3, 4, 5, 9


/*
 OPTIMIZED BUBBLE SORT VERSION
 For nearly sorted array, the optimized version is more efficient as it avoid the
 unnecessary looping steps if not needed. 
 For instance, if the array already sorted, then bubble sort does one more check, 
 and break the outer loop. 
*/
// using for loop
function bubbleSort(arr) {
    var noSwaps;
    for (var i = arr.length; i > 1; i--) {
        noSwaps = true;
        for (var j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                // SWAP
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        console.log('one pass')
        if (noSwaps) break; // if noSwaps equals to true, it means the array is
        // already sorted, so we break the whole loop
    }
    return arr;
}

// using while loop
function bubbleSort(arr) {
    var swap = true;
    var temp;
    while(swap) {
      swap = false;
      for(var i = 0; i < arr.length-1; i++) {
        if (arr[i] > arr[i+1]) {
          swap = true;
          temp = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = temp;
        }
      }
    }
   console.log(arr);
   return arr;
  }


// tests
bubbleSort([1, 2, 3, 4, 9, 5])
// [1, 2, 3, 4, 9, 5] 1 2
// [1, 2, 3, 4, 9, 5] 2 3
// [1, 2, 3, 4, 9, 5] 3 4
// [1, 2, 3, 4, 9, 5] 4 9
// [1, 2, 3, 4, 9, 5] 9 5
//  one pass
// [1, 2, 3, 4, 5, 9] 1 2
// [1, 2, 3, 4, 5, 9] 2 3
// [1, 2, 3, 4, 5, 9] 3 4
// [1, 2, 3, 4, 5, 9] 4 5
// one pass
// [1, 2, 3, 4, 5, 9]