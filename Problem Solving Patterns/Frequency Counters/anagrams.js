/* 
ANAGRAMS
Given two strings, write a function to determine if the second string is an anagram of  
the first. 
An anagram is a word, phrase, or name formed by rearranging the letters of another.  
Let's assume the string contains only lowercase alphabets.
*/

// concrete examples
validAnagram('', '') // true
validAnagram('aa`', 'zza') // false

// Approach 1
// create two counters for reach input array
function validAnagram1(first, second) {
    if (first.length !== second.length) return false;
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let letter of first) {
        frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) + 1;
    }
    for (let letter of second) {
        frequencyCounter2[letter] = (frequencyCounter2[letter] || 0) + 1;
    }
    for (let key in frequencyCounter1) {
        // the below statement is unnecessary
        // if (!(key in frequencyCounter2)) return false;
        if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
    }
    return true;
}

// Approach 2: 
// create only one counter and compare the frequency with the other input
function validAnagram2(first, second) {
    if (first.length !== second.length) return false;
    const lookup = {};
    for (let letter of first) {
        // if letter exists, increment, otherwise set to 1
        lookup[letter] = (lookup[letter] || 0) + 1;
        // or
        // lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for (let letter of second) {
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter]--;
        }
    }
    return true;
}