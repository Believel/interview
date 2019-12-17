let a = {
    age: undefined,
    sex: Symbol('male'),
    name: 'yck',
    jobs: function () {}
}
//  局限性
// 1. 会忽略undefined
// 2. 会忽略symbol
// 3. 不能序列化函数
// 4. 不能解决循环引用的对象
let b = JSON.parse(JSON.stringify(a))
// console.log(b) // {name: "yck"}

let arr = [0, "1", [2, 3]]
// 分别是浅拷贝
let copyarr = arr.concat()
// let copyarr = arr.slice()
arr[1] = "2"
copyarr[2][0] = 4
console.log(copyarr)
console.log(arr)