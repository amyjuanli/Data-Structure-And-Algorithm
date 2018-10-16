function isPalindrome(str) {
    let re = /[\W_]/g;
    let checkStr = str.toLowerCase().replace(re, "");
    for (let i = 0; i < checkStr.length / 2; i++) {
        if (checkStr.charAt(i) !== checkStr.charAt(checkStr.length - i - 1)) return false;
    }
    return true;
}