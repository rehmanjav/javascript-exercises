const palindromes = function (word) {
    if (word[word.length - 1] == "." ||
        word[word.length - 1] == "?" ||
        word[word.length - 1] == "!") {
            word = word.slice(0, -1);
    }

    word = word.toLowerCase();
    word = word.replaceAll(" ", "");
    word = word.replaceAll(",", "");

    for (let i = 0; i <= Math.floor((word.length / 2)); i++) {
        if (word[i] != word[word.length - (i + 1)]) {
            return false;
        }
    }
    return true;

};

// Do not edit below this line
module.exports = palindromes;
