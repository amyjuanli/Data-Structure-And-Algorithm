/*
Reverse
Write a function called *reverse* which accepts a string and return a new string in reverse
*/

// Pure recursive solution
// v1
function reverse(str) {
    let newStr = '';
    if (str.length === 0) return newStr;
    newStr = str[str.length - 1];
    newStr = newStr + reverse(str.slice(0, str.length - 1))
    return newStr;
}
// v2 more concise code
function reverse(str) {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}


// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'