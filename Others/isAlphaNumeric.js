// v1 - non-regular expression 
function isAlphaNumeric(str) {
    var code;

    for (var i = 0; i < str.length; i++) {
        code = str.charCodeAt(i);
        if(!(code > 47 && code < 58) && // numeric (0-9)
          !(code > 64 && code < 91) && // upper alpha(A-Z)
          !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
          }
    }
    return true;
} 


// v2 - regular expression (not a fast way)
function isAlphaNumeric(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
}