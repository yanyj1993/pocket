// add by yanyj 20180507 start
// pocket.js
(function(root, factory) {

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.

        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.pocket = factory();
    }
}(this, function() {
    var pocket = {};
    var root = this;

    // add by yanyj 20180507 start
    // common 方法

    // 判断 参数类型
    pocket.is = function(arg, type) {
        return Object.prototype.toString.call(arg) === '[object ' + type + ']';
    };

    // Number
    pocket.isNumber = function(arg) {
        return pocket.is(arg, 'Number')
    };
    // string
    pocket.isString = function(arg) {
        return pocket.is(arg, 'String')
    };
    // Object
    pocket.isObject = function(arg) {
        return pocket.is(arg, 'Object')
    };
    // Array
    pocket.isArray = function(arg) {
        return pocket.is(arg, 'Array')
    };
    // Boolean
    pocket.isBoolean = function(arg) {
        return pocket.is(arg, 'Boolean')
    };
    // Undefined
    pocket.isUndefined = function(arg) {
        return pocket.is(arg, 'Undefined')
    };
    // Null
    pocket.isNull = function(arg) {
        return pocket.is(arg, 'Null')
    };
    // Function
    pocket.isFunction = function(arg) {
        return pocket.is(arg, 'Function')
    };
    // Date
    pocket.isDate = function(arg) {
        return pocket.is(arg, 'Date')
    };
    // RegExp
    pocket.isRegExp = function(arg) {
        return pocket.is(arg, 'RegExp')
    };

    // 安全的获取对象属性
    pocket.getValue = function(obj, args) {
        var _args = pocket.isArray(args) ? args : args.split('.');
        var next = obj;
        for (var i = 0; i < _args.length; i++) {
            next = next[_args[i]];
            if (pocket.isUndefined(next)) return void 0;
            if (pocket.isNull(next) && i !== (_args.length - 1)) return void 0;
        }

        return next;
    };



    // add by yanyj 20180507 end
    // add by yanyj 20180508 start
    // Map


    // 简单实现Map
    pocket.Map = root.Map || function(iterable) {
        // 如果已经实现了Map, 则返回全局变量下的Map

        var _data = {};
        var _size = 0;
        if (pocket.isArray(iterable)) {
            for (var i = 0, length = iterable.length; i < length; i++) {
                if (pocket.isArray(iterable[i]) && iterable[i].length > 1) {
                    _data[iterable[i][0]] = iterable[i][1];
                    _size++;
                }
            }
        }


        this.size = _size;

        this.clear = function() {
            _data = {};
            this.size = 0;
        };
        // 删除
        this['delete'] = function(key) {
            if (!_data.hasOwnProperty(key)) return false;
            delete _data[key];
            this.size--;
            return true;
        };
        // 添加
        this.set = function(key, value) {
            if (!_data.hasOwnProperty(key)) this.size++;
            _data[key] = value;

        };

        this.entries = function() {
            var keys = pocket.keys(_data);
            var _entries = [];
            var key;
            for (var i = 0, length = keys.length; i < length; i++) {
                key = keys[i];
                _entries.push([key, _data[key]])
            }

            return _entries;
        };

        this.forEach = function(callback) {
            if (pocket.isFunction(callback)) {
                var keys = pocket.keys(_data);
                var key;
                for (var i = 0, length = keys.length; i < length; i++) {
                    key = keys[i];
                    callback(_data[key], key, this);
                }
            }

        };

        this.get = function(key) {
            return _data[key];
        };

        this.has = function(key) {
            return _data.hasOwnProperty(key);
        };

        this.keys = function() {
            return pocket.keys(_data);
        };

        this.values = function() {
            var keys = pocket.keys(_data);
            var _values = [];
            var key;
            for (var i = 0, length = keys.length; i < length; i++) {
                key = keys[i];
                _values.push(_data[key])
            }

            return _values;
        }

    };


    // add by yanyj 20180508 end
    // add by yanyj 20180508 start
    // object.js


    pocket.keys = Object.keys || (function() {
        var hasOwnProperty = Object.prototype.hasOwnProperty,
            hasDontEnumBug = !({
                toString: null
            }).propertyIsEnumerable('toString'),
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

        return function(obj) {
            if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) throw new TypeError('Object.keys called on non-object');

            var result = [];

            for (var prop in obj) {
                if (hasOwnProperty.call(obj, prop)) result.push(prop);
            }

            if (hasDontEnumBug) {
                for (var i = 0; i < dontEnumsLength; i++) {
                    if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i]);
                }
            }
            return result;
        }
    })()


    // add by yanyj 20180508 end
    // add by yanyj 20180507 start
    // String


    // padStart
    pocket.padStart = function(str, length, padStr) {
        if (String.prototype.padStart) {
            return String.prototype.padStart.call(str, length, padStr);
        }

        // 自身实现
        return padStr.repeat(length).slice(0, length - str.length) + str;
    };

    // padEnd
    pocket.padEnd = function(str, length, padStr) {
        if (String.prototype.padEnd) {
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



    // add by yanyj 20180507 end
    return pocket;

}));



// add by yanyj 20180507 end