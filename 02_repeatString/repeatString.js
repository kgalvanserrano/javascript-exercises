const repeatString = function(string, num) {
    let getRepeatedString = "";
    let error = "ERROR";

    if (num < 0) {
        return error;
    }

    while (num > 0) {
        getRepeatedString += string;
        num--;
    }
    return getRepeatedString
};


// Do not edit below this line
module.exports = repeatString;
