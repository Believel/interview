
// 场景：滚动事件中会发起网络请求， 但是我们并不希望用户在滚动过程中一直发起请求，而是隔一段时间发起一次，对于这种情况我们就可以使用节流
/**
 * 节流
 * @param {*} func 用户传入需要防抖的函数
 * @param {*} wait 等待时间
 */
const throttle = (func, wait = 500) => {
    // 上一次执行该函数的事件
    let lastTime = 0;
    return function(...args) {
        // 当前的时间
        let now = +new Date()
        // 将当前时间和上次执行的时间对于
        // 如果差值大于设置的等待时间就执行函数
        if (now - lastTime > wait) {
            lastTime = now;
            func.apply(this, args)
        }
    }
}

// demo
setInterval(throttle(() => {
    console.log(1)
}, 500), 1)