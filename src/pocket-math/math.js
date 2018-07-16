// add by yanyj 20180710 start
// math方法
var pocket = require('../pocket');

pocket.math = {
    // 两点的斜率
    pointsSlope: function (startPoint, endPoint) {
        return (endPoint[1] - startPoint[1]) / (endPoint[0] - startPoint[0])
    },
    // 两点的弧度
    pointsRadian: function (startPoint, endPoint) {
        return Math.atan2((endPoint[1] - startPoint[1]) , (endPoint[0] - startPoint[0]));
    },
    // 两点的角度
    pointsAngle: function (startPoint, endPoint) {
        return 180 * this.pointsRadian(startPoint, endPoint) / Math.PI;
    },

    inOneLine: function (linePoints, otherPoints) {
        
    }
};

module.exports = pocket;
// add by yanyj 20180710 end