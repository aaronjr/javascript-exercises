const removeFromArray = function() {
    list = arguments[0]
    for(i = 1; i < arguments.length; i++){
        if (list.includes(arguments[i])){
            for(j = 0; j < list.length; j++){
                if(list[j] == arguments[i]){
                    list.splice(j, 1)
                }
            }
        }
    }
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
