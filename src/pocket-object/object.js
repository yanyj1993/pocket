// add by yanyj 20180508 start
// object.js
var pocket = require('../../dist/pocket');

pocket.keys = Object.keys || (function () {
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
        dontEnums = [
            'toString',
            'toLocaleString',
            'valueOf',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function (obj) {
        if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) throw new TypeError('Object.keys called on non-object');

        var result = [];

        for (var prop in obj) {
            if (hasOwnProperty.call(obj, prop)) result.push(prop);
        }

        if (hasDontEnumBug) {
            for (var i=0; i < dontEnumsLength; i++) {
                if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i]);
            }
        }
        return result;
    }
})();

pocket.equalDeepProperty = function(obj1, obj2, property, splitFlag) {
    // 非对象的两个参数比较直接返回false
    if(!pocket.isObject(obj1) || !pocket.isObject(obj2)) {
        return false;
    }

    if(obj1 === obj2) {
        return true;
    }

    // 访问层级
    if(pocket.isString(property)) {
        property = property.split(splitFlag || '.');
    }


    var deepIndex = property.length;
    for(var i = 0; i < deepIndex; i ++) {
        obj1 = obj1[property[i]];
        obj2 = obj2[property[i]];

        if((!pocket.isObject(obj1) || !pocket.isObject(obj2)) && i !== deepIndex -1) return false;
    }


    return obj1 === obj2;
};

// 安全的获取对象属性(对象)
pocket.getValue = function (obj, args) {
    var _args = pocket.isArray(args) ? args : args.split('.');
    var next = obj;
    for (var i = 0; i < _args.length; i++) {
        next = next[_args[i]];
        if(pocket.isUndefined(next)) return void 0;
        if(pocket.isNull(next) && i !== (_args.length -1)) return void 0;
    }

    return next;
};

module.exports = pocket;
// add by yanyj 20180508 end