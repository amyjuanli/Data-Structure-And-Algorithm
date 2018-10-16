function thirdHighestNumber(arr) {
    let firstHighestNumber = Number.NEGATIVE_INFINITY;
    let secondHighestNumber = Number.NEGATIVE_INFINITY;
    let thirdHighestNumber = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arr.length; i++) {
        if (firstHighestNumber < arr[i]) {
            thirdHighestNumber = secondHighestNumber;
            secondHighestNumber = firstHighestNumber;
            firstHighestNumber = arr[i];
        } else if (secondHighestNumber < arr[i]) {
            thirdHighestNumber = secondHighestNumber;
            secondHighestNumber = arr[i];
        } else if (thirdHighestNumber < arr[i]) {
            thirdHighestNumber = arr[i];
        }
    }
    return thirdHighestNumber;
}

// Run the tests
thirdHighestNumber([5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31]);
// -> 11
