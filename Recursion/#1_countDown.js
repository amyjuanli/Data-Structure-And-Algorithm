// non-recursive method
function iCountDown(num) {
    for (let i = num; i > 0; i--) {
        console.log(i);
    }
    console.log('All done!');
}

// recursive method
function rCountDown(num) {
    if (num <= 0) {
        console.log('All done!');
        return;// with this 'return' in order to stop the function
    }
    console.log(num);
    rCountDown(--num);
}



countDown(5)
countDown(5)
// 5
// 4
// 3
// 2
// 1
// All done!