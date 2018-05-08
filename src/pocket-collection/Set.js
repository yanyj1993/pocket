// add by yanyj 20180508 start
// Map
var pocket = require('../../dist/pocket');

pocket.Set = function (iterable) {

    var _data = [];

    var hasNaN = false;
    var NaNIndex = -1;
    var _iterable = iterable;
    if (pocket.isString(iterable)) {
        _iterable = iterable.split('');
    }

    if(pocket.isArray(_iterable)) {
        pocket.forEach(_iterable, function (value) {
            if(pocket.isNaN(value)) {
                if(!hasNaN) {
                    hasNaN = true;
                    NaNIndex = _data.length;
                    _data.push(value);
                }
            } else if(_data.indexOf(value) === -1){
                _data.push(value);
            }

        })
    }


    this.size = _data.length;

    this.add = function (value) {
        if(pocket.isNaN(value)) {
            if(!hasNaN) {
                hasNaN = true;
                NaNIndex = _data.length;
                _data.push(value);
                this.size ++;
            }
        } else if(_data.indexOf(value) === -1){
            _data.push(value);
            this.size ++;
        }



        return this;
    };

    this.clear = function () {
        this._data = [];
        this.size = 0;
        this.hasNaN = false;
        this.NaNIndex = -1;
    };

    this.delete = function (value) {
        if(pocket.isNaN(value) && NaNIndex !== -1) {
            _data.splice(NaNIndex, 1);
            this.hasNaN = false;
            this.NaNIndex = -1;
            this.size --;

            return true;
        }
        var index = _data.indexOf(value);
        if( index !== -1) {
            _data.splice(index, 1);
            this.size --;

            return true;
        }

        return false;
    };

    this.entries = function () {
        var _entries = [];

        for(var i =0, length = _data.length; i < length; i++) {
            _entries.push([_data[i], _data[i]]);
        }

        return _entries;
    };

    this.forEach = function (callback) {
        if(pocket.isFunction(callback)) {
            for(var i =0, length = _data.length; i < length; i++) {
                callback(_data[i], _data[i], this);
            }
        }

    };

    this.has = function (value) {
        if(pocket.isNaN(value)) {
            return hasNaN;
        }

        return _data.indexOf(value) !== -1;
    };

    this.keys = this.values = function () {
        return _data;
    }

};


module.exports = pocket;
// add by yanyj 20180508 end