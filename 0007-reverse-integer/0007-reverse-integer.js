/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reverse = 0;
    let temp = x;
    x = Math.abs(x);
    while(x>0){
        let reminder = x%10;
        reverse = (reverse*10)+reminder;
        x = Math.floor(x/10);
    }
    let limit = 2**31;
    if(reverse < -limit || reverse > limit) return 0;
    return (temp>0) ? reverse: -reverse;
};