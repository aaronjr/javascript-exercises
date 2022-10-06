const reverseString = function(input) {
    word = ""
    for(i = input.length - 1; i >= 0 ; i-- ){
        word += input[i]
    }
    return word
};

// Do not edit below this line
module.exports = reverseString;
