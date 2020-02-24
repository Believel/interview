// 交换字符串中的两个单词
let str = 'John Smith';
let reg = /(\w+)\s(\w+)/;
str = str.replace(reg, '$2, $1');
console.log(str)