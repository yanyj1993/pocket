// add by yanyj 20180508 start
// 性能测试
let preformance = require('../../lib/performance.test');
let pocket = require('./string');

function replaceAll(str, reg, placeStr) {
    var _str = str;
    while(_str.indexOf(reg) !== -1) {
        _str = _str.replace(reg, placeStr);
    }

    return _str;
}


// console.log(replaceAll('112223332244423321', '2', ''))


preformance.performance(['replaceAll#loop', 'replaceAll#pocket.replaceAll'], function () {
    replaceAll('sasadsdsfadadeada', 'a', '');
}, function () {

    pocket.replaceAll('sasadsdsfadadeada', 'a', '');

});


// add by yanyj 20180508 end