function sumRange(arr) {
    var temp, i;
    var sum = 0;
    if(arr[0] > arr[1]) {
        // swap
        temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
    } 

    for(i = arr[0]; i <= arr[1]; i++) {
        sum += i;
    }
    return sum;
}

// test
sumRange([4,1]) // sum = 1+2+3+4=10