/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let reverse = 0;
    let xCopy = x;
    if (x < 0) {
        return false;
    }
    while (x > 0) {
        let reminder = x % 10;
        reverse = (reverse * 10) + reminder;
        x = Math.floor(x / 10);
    }
    return xCopy === reverse;
};