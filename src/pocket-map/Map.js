// add by yanyj 20180508 start
// Map
var pocket = require('../../dist/pocket');

// 简单实现Map
pocket.Map = function () {
    // 如果已经实现了Map, 则返回全局变量下的Map
    if(root.Map) return new root.Map(args);

    var _data = {};

    return {
        size: 0,

        clear: function () {
            _data = {};
            this.size = 0;
        },
        // 删除
        'delete': function (key) {
            if(!_data.hasOwnProperty(key)) return false;
            delete _data[key];
            this.size --;
            return true;
        },
        // 添加
        set: function (key, value) {
            if(!_data.hasOwnProperty(key)) this.size ++;
            _data[key] = value;

        },
        
        entries: function () {
            var keys = pocket.keys(_data);
            var _entries = [];
            var key;
            for(var i = 0, length = keys.length; i < length; i++) {
                key = keys[i];
                _entries.push([key, _data[key]])
            }

            return _entries;
        },

        forEach: function (callback) {
            if(pocket.isFunction(callback)) {
                var keys = pocket.keys(_data);
                var key;
                for(var i = 0, length = keys.length; i < length; i++) {
                    key = keys[i];
                    callback(_data[key], key, this);
                }
            }

        },

        get: function (key) {
            return _data[key];
        },

        has: function (key) {
            return _data.hasOwnProperty(key);
        },

        keys: function () {
            return pocket.keys(_data);
        },

        values: function () {
            var keys = pocket.keys(_data);
            var _values = [];
            var key;
            for(var i = 0, length = keys.length; i < length; i++) {
                key = keys[i];
                _values.push(_data[key])
            }

            return _values;
        }
    }

};

module.exports = pocket;
// add by yanyj 20180508 end