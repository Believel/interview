// 继承
// 组合继承
// function Person(name) {
//     this.name = name
// }
// Person.prototype.getName = function () {
//     return this.name
// }

// function children(name) {
//     Person.call(this, name)
// }
// children.prototype = new Person()
// let p = new children('zpp')
// console.log(p.getName())
// console.log(children)


// 寄生组合继承
// function Person(name) {
//     this.name = name
// }
// Person.prototype.getName = function () {
//     return this.name
// }

// function Child(name) {
//     Person.call(this, name)
// }
// Child.prototype = Object.create(Person.prototype, {
//     constructor: {
//         value: Child,
//         enumerable: false,
//         writable: true,
//         configurable: true
//     }
// })
// const child = new Child('zpp')
// console.log(child);


// class实现继承
// class的本质就是函数
class Person {
    constructor(value) {
        this.value = value
    }
    getValue() {
        return this.value
    }
}
class Children extends Person {
    constructor(value) {
        super(value)
        this.value = value;
    }
}
const p = new Children(1)
console.log(p.getValue())
console.log(p instanceof Person)