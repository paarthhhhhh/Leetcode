/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let reverse = 0;
    let xCopy = x;
    while (x > 0) {
        let remainder = x % 10;
        reverse = (reverse * 10) + remainder;
        x = Math.floor(x / 10);
    }
    return xCopy === reverse;
};