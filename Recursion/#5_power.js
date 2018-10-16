/*
POWER
Write a function called power which accepts a base and an exponent. This function  
should return the power of the base to the exponent.  
This function actually mimics `Math.power()`  
Don't worry about the negative bases and exponents 
*/

// Iterative solution
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    var result = 1;
    for (var i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

// Recursive solution 
function power(base, exponent) {
    if (exponent == 0)
        return 1;
    return base * power(base, exponent - 1);
}

// if exponent is negative 
function power(base, exponent) {
    if (exponent < 0) {
        return 1 / power(base, -exponent);
    } else {
        if (exponent == 0) {
            return 1;
        } else {
            return base * power(base, exponent - 1);
        }
    }
}

// A shorter version
function power(x, n) {
    if (n < 0)
        return 1 / power(x, -n);
    return n === 0 ? 1 : x * power(x, n - 1);
}


// tests
power(2, 0) // 1
power(2, 2) // 4
power(2, 4) // 16