
// Array :

// concat() 方法用于连接两个或多个数组。
// 该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
let a = [1, 2, 3];
console.log(a.concat(4, 5));

let ages = [32, 33, 16, 40];
// every 检测数组 ages 的所有元素是否都大于 18
console.log(ages.every((age) => {
    return age > 20;
}));

let fruits = ["Banana", "Orange", "Apple", "Mango"];
// 参数为链接符
let energy = fruits.join();
console.log(energy);
console.log(typeof energy);

var numbers = [4, 9, 16, 25];
// map() 不会对空数组进行检测  map() 不会改变原始数组
console.log(numbers.map(Math.sqrt))

// pop()    移除最后一个数组元素，返回移除的数组。 此方法改变数组的长度！
// push()   新元素将添加在数组的末尾，返回长度   此方法改变数组的长度。
// shift()  方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
// reverse()    方法用于颠倒数组中元素的顺序。

var fruitts = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var myBest = fruitts.slice(-3, -1);
// array.slice(start, end)   slice() 方法不会改变原始数组
console.log(myBest);

var peoples = [3, 10, 18, 20];
// some() 方法用于检测数组中的元素是否满足指定条件  some() 不会改变原始数组
console.log(peoples.some((age) => {
    return age > 10;
}));

var points = [40, 100, 1, 5, 25, 10];
// sort() 方法用于对数组的元素进行排序    这种方法会改变原始数组
points.sort(function (a, b) { return a - b });
points.sort(function (a, b) { return a - b });
console.log(points);

// ================================================================================================>>>

// String

var str = "Hello world!";
// match()函数用来查找字符串中特定的字符，并且如果找到的话，则返回这个字符。
console.log(str.match("world") + "<br>");

let str1 = "Please visit Microsoft!"
// replace() 方法在字符串中用某些字符替换另一些字符
let n = str1.replace("Microsoft", "w3cschool");
console.log(str1);
console.log(n);

txt="a,b,c,d,e"   // String
// 字符串使用string.split()函数转为数组
txt.split(",");   // Split on commas
console.log(txt);
console.log(txt.split(","));

