const leapYears = function(year) {
    const isYearDivisibleByFour = year % 4 === 0;
    const IsNotYearDivisibleBy100 = year % 100 !== 0;
    const IsYearDivisibleBy400 = year % 400 === 0;

    if (isYearDivisibleByFour && (IsNotYearDivisibleBy100 || IsYearDivisibleBy400)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
