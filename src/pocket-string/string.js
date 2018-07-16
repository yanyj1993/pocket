// add by yanyj 20180507 start
// String
var pocket = require('../../dist/pocket');

// padStart
pocket.padStart = function (str, length, padStr) {
    if(String.prototype.padStart) {
        return String.prototype.padStart.call(str, length, padStr);
    }

    // 自身实现
    return padStr.repeat(length).slice(0, length - str.length) + str;
};

// padEnd
pocket.padEnd = function (str, length, padStr) {
    if(String.prototype.padEnd) {
        return String.prototype.padEnd.call(str, length, padStr);
    }

    // 自身实现
    return str + padStr.repeat(length).slice(0, length - str.length);
};

// replaceAll
pocket.replaceAll = function(str, regStr, replaceStr) {
    var regExp = pocket.isRegExp(regStr) ? regStr : new RegExp(regStr, 'g');
    return str.replace(regExp, replaceStr);
};

pocket.getUUID = function() {
    return new Date().getTime().toString(16);
};

module.exports = pocket;

// add by yanyj 20180507 end