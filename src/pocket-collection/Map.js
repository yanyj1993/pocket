// add by yanyj 20180508 start
// Map
var pocket = require('../../dist/pocket');

// 简单实现Map
pocket.Map = root.Map || function (iterable) {
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

    this.clear = function () {
        _data = {};
        this.size = 0;
    };
    // 删除
    this['delete'] = function (key) {
        if (!_data.hasOwnProperty(key)) return false;
        delete _data[key];
        this.size--;
        return true;
    };
    // 添加
    this.set = function (key, value) {
        if (!_data.hasOwnProperty(key)) this.size++;
        _data[key] = value;

    };

    this.entries = function () {
        var keys = pocket.keys(_data);
        var _entries = [];
        var key;
        for (var i = 0, length = keys.length; i < length; i++) {
            key = keys[i];
            _entries.push([key, _data[key]])
        }

        return _entries;
    };

    this.forEach = function (callback) {
        if (pocket.isFunction(callback)) {
            var keys = pocket.keys(_data);
            var key;
            for (var i = 0, length = keys.length; i < length; i++) {
                key = keys[i];
                callback(_data[key], key, this);
            }
        }

    };

    this.get = function (key) {
        return _data[key];
    };

    this.has = function (key) {
        return _data.hasOwnProperty(key);
    };

    this.keys = function () {
        return pocket.keys(_data);
    };

    this.values = function () {
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

module.exports = pocket;
// add by yanyj 20180508 end