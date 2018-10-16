function sumRange(num) {
    if(num === 0) return 0;
    return num + sumRange(num-1);
}
// sumRange(3)
// return 3 + sumRange(2)
//             return 2 + sumRange(1)
//                          return 1