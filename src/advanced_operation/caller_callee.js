// 函数的caller属性返回"调用该函数的函数引用"
function a() {
    console.log(a.caller)
}
function b() {
    a();
}
b()

// arguments.callee返回"正在执行函数本身的引用"，只在函数执行时有效
function add(num1, num2, num3) {
    console.log(arguments.callee)
    console.log('实参个数: ', arguments.length)
    console.log('形参个数: ', arguments.callee.length )
    return num1 + num2;
}
add(2,4)

module.exports = {
    b
}