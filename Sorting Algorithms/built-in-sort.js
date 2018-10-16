// function comparator(a, b)
// Sort order is determined based on the returned values:
// negative -> a comes before b 
// positive -> a comes after b
// 0 -> a, b same 
function numberCompare(num1, num2) {
    return num2 - num1; // descending 
}
[6,4,15,10].sort(numberCompare);


function compareByLen(str1, str2) {
    return str1.length - str2.length; // short string to long string
}


