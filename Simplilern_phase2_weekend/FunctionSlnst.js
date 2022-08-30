function multiply(a, b, c) {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
console.log(multiply(5, 6));
function calculationCost(price, discount) {
    if (discount === void 0) { discount = 0.05; }
    return price * (1 - discount);
}
console.log(calculationCost(56));
var sum = function (value, value1) {
    return value + value1;
};
console.log(sum(56, 78));
var div = function (value, value1) {
    return value / value1;
};
console.log(div(156, 78));
function getTotalMarks(value, value1) {
    var marks = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        marks[_i - 2] = arguments[_i];
    }
    var totalMarks = 0;
    marks.forEach(function (mark) { return totalMarks += mark; });
    return totalMarks;
}
console.log(getTotalMarks(5, 6, 60, 70, 90, 50, 60));
//# sourceMappingURL=FunctionSlnst.js.map