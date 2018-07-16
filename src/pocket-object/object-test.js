// add by yanyj 20180521 start
// object 测试
let pocket = require('./object');

let a = {
    name: {
        first: 'yan'
    }
};

let b = {
    name: ''
};

console.log(pocket.equalDeepProperty(a, b, 'name#first', '#'));

// add by yanyj 20180521 end