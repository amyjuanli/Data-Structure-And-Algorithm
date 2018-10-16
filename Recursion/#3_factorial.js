// // option: regular one:
// function fact(num) {
//     var result = 1;
//     for (var i = 1; i <= num; i++) {
//         result *= i;
//     }
//     return result;
// }

// using recursive function
function factorial(num) {
    if (num < 0) return 0;
    if (num <= 1) return 1;
    return num * factorial(num-1);
}
