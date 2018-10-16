// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function rProductOfArray(arr) {
    let product = 1;
    if (arr.length === 0) return product;
    product = arr[0];
    return product * productOfArray(arr.slice(1));
}

// or 
function rProductOfArray(arr) {
    if (arr.length === 0) return 1;
    let product = arr[0];
    return product * productOfArray(arr.slice(1));
}