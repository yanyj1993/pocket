// add by yanyj 20180507 start
// pocket.js
(function (root, factory) {

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
}(this, function () {
    var pocket = {};
    var root = this;
//split
    return pocket;

}));



// add by yanyj 20180507 end