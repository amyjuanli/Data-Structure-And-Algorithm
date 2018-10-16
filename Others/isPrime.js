// To decide whether the input integer is a prime number or not
// prime numbers: 2, 3, ...
function checkPrime(x) {
    if (x > 1) {
        for (var j = 2; j < x; j++) {
            if (x % j === 0) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}