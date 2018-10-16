// using recursive method (but it seems a little verbose)
function isOdd(num) {
    if (num === 0) {
        return false;
    } else if (num === 1) {
        return true;
    } else if (num < 0) {
        return isOdd(-num);
    } else {
        return isOdd(num - 2);
    }
}

// regular method - more concise 
function isOdd(num) {
    if (num % 2 !== 0) return true;
    return false;
}