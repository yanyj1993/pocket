/**
 * Created by yanyj on 2017/7/6.
 */
var split = require('./lib/file');

split("./src/pocket.js", "//split", '', ["./src/pocket/pocket.header","./src/pocket/pocket.tail"]);