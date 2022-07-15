const removeFromArray = function(array, ...args) {
    let indexLast = arguments.length -1;
    let output = array;

    for (let i = 1; i <= indexLast; i++) {
        while (output.includes(arguments[i])) {
            output.slice(output.indexOf(arguments[i]), 1);
        }


    }

    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
