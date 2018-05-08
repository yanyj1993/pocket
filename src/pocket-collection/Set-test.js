// add by yanyj 20180508 start
// Set.test
let pocket = require('./Set');

let set = new pocket.Set([1,23]);

set.add(NaN);
set.add(NaN);
set.add(1);
set.add(1);
set.add(-0);
set.add(0);
set.add({});
set.add({});
let a = {};
set.add(a);
set.add({});
console.log(set.size);

console.log(set.delete(123));
console.log(set.entries());
console.log(set.has(NaN));
console.log(set.has({}));
console.log(set.has(a));



console.log(set.size);
// add by yanyj 20180508 end