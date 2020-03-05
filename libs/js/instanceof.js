// ! instanceof 可以正确的判断对象的类型，因为内部机制是通过判断  对象的原型链  中是不是能找到   类型的prototype   
function myInstanceof(left, right) {
    // 获取类型的原型
    let prototype = right.prototype;
    // 获取对象的原型
    left = left.__proto__
    // 一直循环判断对象的原型是否等于类型的原型，知道对象原型为null,因为原型链最终为null
    while(true) {
        if (left === null || left === undefined) return false;
        if (prototype === left) return true;
        left = left.__proto__;
    }
}

function Foo() {

}

console.log(myInstanceof(Foo, Function))