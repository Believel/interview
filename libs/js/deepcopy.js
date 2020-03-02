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

// 判断是否是对象
function isObject(o) {
    return  (typeof o === 'object' || typeof o === 'function') && o !== null
}
// 深拷贝方法实现
function deepClone(obj) {
    if (!isObject(obj)) throw new Error('非对象');
    let isArray = Array.isArray(obj)
    let newObj = isArray ? [...obj] : {...obj};
    Object.keys(newObj).forEach(key => {
        newObj[key] = isObject(obj[key]) ? deepClone(obj[key]): obj[key];
    })
    return newObj;
}
let obj = {
    a: [1, 2, 3],
    b: {
      c: 2,
      d: 3
    },
    e: function() {
        console.log(11)
    }
  }
  let newObj = deepClone(obj)
  newObj.b.c = 4;
  console.log(obj)