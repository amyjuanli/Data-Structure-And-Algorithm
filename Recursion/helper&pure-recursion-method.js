/* 
Compare different solutions to a same problem:
- iterative way
- recursive helper method
- pure recursion
*/

// Solution 1: An iterative solution using a for loop 
function collectOddsValues(arr) {
    let odds = [];
    for (let i = 0; i < arr.length; i++) {
        if (isOdds(arr[i])) { // using a non-recursion helper method 
            odds.push(arr[i]);
        }
    }
    return odds;
}
// define a helper method
function isOdd(num) {
    if (num % 2 !== 0) return true;
    return false;
}


// Solution 2: Helper Method Recursion solution 
function collectOddsValues(arr) {
    let odds = [];
    function helper(helperInput) {
        if(helperInput.length === 0) return;
        if(helperInput[0] % 2 !== 0) {
            odds.push(helperInput[0]);
        } 
        helper(helperInput.slice(1));
    }
    helper(arr);
    return odds;
}


// Solution 3: Pure Recursion solution 
function collectOddValues(arr) {
    let odds = [];
    if(arr.length === 0) return odds;
    if (arr[0] % 2 !== 0) odds.push(arr[0]);
    odds = odds.concat(collectOddValues(arr.slice(1)));
    return odds;
}

collectOddValues([1,2,3,4,5])
// [1].concat(collectOddValues([2,3,4,5]))
//                 [].concat(collectOddValues([3,4,5]))
//                             [3].concat(collectOddValues[4,5])
//                                         [].concat(collectOddValues([5]))
//                                                     [5].concat(collectOddValues[])
//                                                                     []


