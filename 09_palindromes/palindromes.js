const palindromes = function (str) {
    str = str.toLowerCase().replaceAll(/[^a-z]/g, '');
    return str === str.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
