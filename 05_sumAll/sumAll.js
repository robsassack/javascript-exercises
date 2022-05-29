const sumAll = function(num1, num2) {
    // return error if num1 or num2 are negative
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }
    // return error if num1 or num2 isn't a number
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return 'ERROR';
    }
    // set variable to hold sum
    let sum = 0;
    // swap the numbers if num2 < num1
    if (num1 > num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    // loop through the numbers in the range
    for (num1; num1 <= num2; num1++) {
        // add to sum
        sum += num1;
    }
    // return sum
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
