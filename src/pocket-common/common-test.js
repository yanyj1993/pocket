// add by yanyj 20180507 start
let pocket = require('./common');

console.log(pocket.is(1, 'Number')); // true
console.log(pocket.isNumber(1)); // true
console.log(pocket.isNumber('1')); // false


// get-value

var obj = {
    a: {
        b:null
    }
};

console.log(pocket.getValue(obj,'a.b.c.d'));

// add by yanyj 20180507 end