// no base case
function fact(num) {
    // if (num == 0)
    //     return 1;
    return num * fact(num - 1);
}

// forget to return in base case 
function fact(num) {
    if (num == 0)
        console.log(1);
    return num * fact(num - 1);
}

// input in the recursive case not change
function fact(num) {
    if (num == 0)
        console.log(1);
    return num * fact(num);
}