const fibonacci = function(n) {
    let fibSeq = [1, 1,];

    if (fibSeq.length < n) {
        fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2]);
    }

    return fibSeq[fibSeq.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
