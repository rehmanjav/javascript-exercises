const repeatString = function(string="", repeat) {
    if (repeat < 0) {return "ERROR";} 
    if (string === "") {return "";}

    let output = '';
    for (let i = 0; i < repeat; i++) {
        output += string;
    }

    return output;
};

// Do not edit below this line
module.exports = repeatString;
