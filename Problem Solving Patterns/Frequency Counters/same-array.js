/*
Write a function called 'same', which accepts two arrays. 
The function should return true if every value in the array has its corresponding 
value squared in the second array. The order doesn't matter. The frequency of 
values must be the same.
*/

same([1, 2, 3], [4, 1, 9]); // true
same([1, 2, 3], [1, 9]); // false
same([1, 2, 1], [4, 4, 1]); // false (must be same frequency)

// Naive Solution using for loop (Big O: N^2)
function same1(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let value of arr1) {
    if (arr2.indexOf(value * value) === -1) return false;
    console.log(arr2);
    arr2.splice(index, 1); // to prevent the case like: same1([1,2,3,2], [1,4,9,16])
  }
  return true;
}

// Refactored solution using frequency counter method (Big O: N)
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  // console.log(frequencyCounter1);
  // console.log(frequencyCounter2);
  return true;
}

same2([1, 2, 3, 2], [9, 1, 4, 4]);
// {1: 1, 2: 2, 3: 1}
// {1: 1, 4: 2, 9: 1}
// true