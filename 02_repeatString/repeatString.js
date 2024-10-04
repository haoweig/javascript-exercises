const repeatString = function(value, count) {
    if (count === 0){
        return '';
    }
    else if (count < 0){
        return 'ERROR';
    }
    else{
        let result = '';
        for(let i=0; i<count; i++){
            result += value;
        }
        return result;
    }
};

// Do not edit below this line
module.exports = repeatString;
