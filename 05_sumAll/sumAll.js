const sumAll = function(start,end) {
    let sum=0;
    if (typeof start !== 'number' || typeof end !== 'number' || !Number.isInteger(start) || !Number.isInteger(end)){
        return "ERROR";
    } else if(start < 0 || end < 0){
        return "ERROR";
    } else if(start > end) {
        for(let i=start;i>=end;i--){
            sum += i;
        }
        return sum;
    } else {
        for(let i=start;i<=end;i++){
            sum += i;
        }
        return sum;
    }

};

// Do not edit below this line
module.exports = sumAll;
