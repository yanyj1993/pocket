// add by yanyj 20180507 start
// common 方法
var pocket = require('../pocket');
// 判断 参数类型
pocket.is = function (arg, type) {
    return Object.prototype.toString.call(arg) === '[object ' + type + ']';
};

// Number
pocket.isNumber = function(arg) { return pocket.is(arg, 'Number') };
// NaN
pocket.isNaN = function(arg) { return pocket.is(arg, 'Number') && isNaN(arg)  };
// string
pocket.isString = function(arg) { return pocket.is(arg, 'String') };
// Object
pocket.isObject = function(arg) { return pocket.is(arg, 'Object') };
// Array
pocket.isArray = function(arg) { return pocket.is(arg, 'Array') };
// Boolean
pocket.isBoolean = function(arg) { return pocket.is(arg, 'Boolean') };
// Undefined
pocket.isUndefined = function(arg) { return pocket.is(arg, 'Undefined') };
// Null
pocket.isNull = function(arg) { return pocket.is(arg, 'Null') };
// Function
pocket.isFunction = function(arg) { return pocket.is(arg, 'Function') };
// Date
pocket.isDate = function(arg) { return pocket.is(arg, 'Date') };
// RegExp
pocket.isRegExp = function(arg) { return pocket.is(arg, 'RegExp') };


module.exports = pocket;

// add by yanyj 20180507 end