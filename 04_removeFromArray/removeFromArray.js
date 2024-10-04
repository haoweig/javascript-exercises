const removeFromArray = function(origArray, ...unwanted) {
    return origArray.filter(item => !unwanted.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
