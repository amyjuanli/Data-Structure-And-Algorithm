/*
Create a function called capitalizeFirst which accepts an array of strings.
Capitalize the first letter for each string in the array. And return the new array.
*/
function capitalizeFirst(arr) {
    let newArr = [];
    if (arr.length === 0) return newArr;
    newArr.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
    newArr = newArr.concat(capitalizeFirst(arr.slice(1)));
    return newArr;
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']