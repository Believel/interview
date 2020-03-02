// Proxy可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写

// let p = new Proxy(target, handler);
// `target` 代表需要添加代理的对象
// `handler` 用来自定义对象中的操作


// 代码实现，主要代码展示
let onWatch = (obj, setBind, getLogger) => {
    let handler = {
        get(target, property, receiver) {
            getLogger(target, property)
            // Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法。
            // Reflect.get() 获取对象身上某个属性的值
            return Reflect.get(target, property, receiver);
        },
        set(target, property, value, receiver) {
            setBind(value);
            // 将值分配给属性的函数。返回一个Boolean
            return Reflect.set(target, property, value);
        }
    };
    return new Proxy(obj, handler);
};

let obj = {
    a: {
        b: 1
    }
}
let value
let p = onWatch(obj, (v) => {
    value = v
}, (target, property) => {
    console.log(`Get '${property}' = ${target[property]}`);
})
p.a.b = 2 // bind `value` to `2`
p.a.b // -> Get 'a' = 2

// 好处：可以自定义实现对对象的操作，并且无需一层层递归为每个属性添加代理，一次即可完成以上操作，性能上更好
// 缺陷：浏览器的兼容性不好