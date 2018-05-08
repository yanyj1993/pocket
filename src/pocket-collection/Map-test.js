// add by yanyj 20180508 start
// Map.test.js
let pocket = require('./Map');

let testMap = new pocket.Map();

console.log(testMap);
console.log(testMap.size);
console.log(testMap.clear());
console.log(testMap.size);

//
testMap.set('a', {});
testMap.set('b', 1);
console.log(testMap);
console.log(testMap.size);
console.log(testMap.entries());
testMap.forEach(function () {
    console.log(arguments);
})
// testMap.delete('a');
// console.log(testMap);
// console.log(testMap.size);

// add by yanyj 20180508 end