"use strict";
exports.__esModule = true;
exports.sum = exports.arraySum = void 0;
var arraySum = function (numArray) {
    return numArray.reduce(exports.sum, 0);
};
exports.arraySum = arraySum;
// this function is only accurate when using `Int`, number with decimal points
// will need to use library like `Big.js`
var sum = function (a, b) {
    return (a + b);
};
exports.sum = sum;
