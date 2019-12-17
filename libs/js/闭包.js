// 1、闭包解决var定义函数的问题
// for (var i = 0; i < 5; i++) {
//     ;
//     (function (j) {
//         setTimeout(() => {
//             console.log(j)
//         }, j * 1000)
//     })(i)

// }

// 2、利用第三个参数
// for (var k = 0; k < 5; k++) {
//     setTimeout((j) => {
//         console.log(j)
//     }, 1000, k)
// }

// 3、var -> let
for (let k = 0; k < 5; k++) {
    setTimeout(() => {
        console.log(k)
    }, 1000)
}