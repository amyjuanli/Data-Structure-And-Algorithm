/*
Write a function called flatten which accepts an array of arrays and return a new  
array with all values flattened
*/

// Pure recursive solution
function flatten(arr) {
    let newArr = [];
    if (arr.length === 0) return newArr;
    if (typeof arr[0] === "number") {
        newArr.push(arr[0]);
        newArr = newArr.concat(flatten(arr.slice(1)));
    } else if (typeof arr[0] === "object") {
        newArr = newArr.concat(flatten(arr[0].concat(arr.slice(1))));
    }
    return newArr;
}

// or mixed with for loop to manage the recursive function call 
function flatten(oldArr) {
    var newArr = []
    for (var i = 0; i < oldArr.length; i++) {
        if (Array.isArray(oldArr[i])) {
            newArr = newArr.concat(flatten(oldArr[i]))
        } else {
            newArr.push(oldArr[i])
        }
    }
    return newArr;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3