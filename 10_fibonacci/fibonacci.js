const fibonacci = function(num) {

    if (num < 0) return "OOPS";
    if (num === 0) return 0;

    let previous = 0
    let total = 1
   
    for (start = 1; start < num; start++){
        let temp = total
        total = total + previous
        previous = temp
    }
    return total

}

// Do not edit below this line
module.exports = fibonacci;
