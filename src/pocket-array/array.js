// add by yanyj 20180508 start
// array.js
var pocket = require('../pocket');

pocket.forEach = function (array, callback) {
    if(pocket.isArray(array) && pocket.isFunction(callback)) {
        if(Array.prototype.forEach) {
          return Array.prototype.forEach.call(array, callback);
        }

        for(var i =0, length = array.length; i < length; i++) {
            callback(array[i], i, array);
        }

        return void 0;
    }

};

module.exports = pocket;
// add by yanyj 20180508 end