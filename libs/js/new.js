// ! new
// 1. 新生成了一个对象
// 2. 链接到原型
// 3. 绑定 this
// 4. 返回新对象

function create() {
    // 创建新对象
    let obj = {}
    // 获取构造函数
    let Con = [].shift.call(arguments)
    // 设置空对象的原型
    obj.__proto__ = Con.prototype
    // 绑定 this 并执行构造函数
    let result = Con.apply(obj, arguments)
    // 确保返回值是对象
    return result instanceof Object ? result : obj
}

function Foo(name) {
    this.name = name
}
Foo.prototype.getName = function() {
    return this.name
}
let obj = create(Foo, '长航')
console.log(obj.getName())