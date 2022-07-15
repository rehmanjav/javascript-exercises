const reverseString = function(str) {
    let output = "";
    let len = str.length;

    for (let i = 1; i <= len; i++) {
        output += str[len - i];
    }

    return output;
};

// Do not edit below this line
module.exports = reverseString;
