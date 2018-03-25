// Underscore一个JavaScript实用库，提供了一整套函数式编程的实用功能，但是没有扩展任何JavaScript内置对象。
// 它是这个问题的答案：“如果我在一个空白的HTML页面前坐下， 并希望立即开始工作， 我需要什么？“...它弥补了部
// 分jQuery没有实现的功能,同时又是Backbone.js必不可少的部分.
const _ = require("underscore");
// console.dir(_);

_.each([1, 2, 3], function (element) {
    console.log(element);
});
// 
const listMap = _.map([1, 2, 3], function (element) {
    return element * 3;
});
console.log(listMap);
// 
var sum = _.reduce([1, 2, 3], function (memo, num) {
    return memo + num;
});
console.log(sum);
// 只找到第一个。
var even = _.find([1, 2, 3, 4, 5, 6], function (num) {
    return num % 2 == 7;
});
console.log("even");
console.log(even);
// 
var evens = _.filter([1, 2, 3, 4, 5, 6], function (num) {
    return true;
});
console.log(evens);
console.log("evens");
// 返回数组。
const persons = _.where([{ author: "Shakespare", year: 111 }, { author: "Shakespeareaaa", year: 161111 }], { author: "Shakespeare", year: 1611 });
console.log(persons);
// 只找到第一个值，键值对包含 的。
const person = _.findWhere([{ author: "Shakespeare", year: 1611, name: "perfect" }, { author: "Shakespeareaaa", year: 161111 }], { author: "Shakespeare", year: 1611 });
console.log(person);
// 
// reject_   功能和filter相反。
// 所有的都需要返回true，才会返回true
const everyT = _.every([true, 1, null, 'yes'], _.identity);
console.log(everyT);