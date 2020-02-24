//  使用 * 表示这是一个Generator函数
// 内部可以通过yield暂停代码
// 通过调用next恢复执行

// 最大的特点：可以控制函数的执行
function* test() {
    let a = 1 + 3
    yield 2
    yield 3
}
let b = test()
console.log(b.next()) // {value: 2, done: false}
console.log(b.next()) // {value: 3, done: false}
console.log(b.next()) // {value: undefined, done: true}

// cb也就是编译过的test函数
function generator(cb) {
    return (function () {
        var object = {
            next: 0,
            stop: function () {}
        };
        return {
            next: function () {
                var ret = cb(object);
                if (ret === undefined) return {
                    value: undefined,
                    done: true
                };
                return {
                    value: ret,
                    done: false
                };
            }
        };
    })();
}
