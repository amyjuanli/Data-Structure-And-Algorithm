/*
Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers
have the same frequency of digits.

Time complexity: O(N)
*/

sameFrequency(182, 281) // true
sameFrequency(34, 14) // false
sameFrequency(22, 222) // false

function sameFrequency(n1, n2) {
    // convert Number to String in order to loop through them
    n1 = n1.toString();
    n2 = n2.toString();
    if (n1.length !== n2.length) return false;
    const lookup = {};
    for (let i = 0; i < n1.length; i++) {
        lookup[n1.charAt(i)] = (lookup[n1.charAt(i)] || 0) + 1;
    }
    for (let j = 0; j < n2.length; j++) {
        if (!lookup[n2.charAt(j)]) return false;
        else lookup[n2.charAt(j)]--;
    }
    return true;
}