const palindromes = function (a) {
    string = a.toLowerCase().replace(/[^a-z]/g, "");
    
    return (string.split("").reverse().join("") == string)
};

// Do not edit below this line
module.exports = palindromes;


// first word
//aReplace = a.replace(',', " ")
//aJoin = aReplace.split("").join("")
// second word
//reversed = aReplace.split("").reverse().join("")

//return aJoin + " -- " + reversed