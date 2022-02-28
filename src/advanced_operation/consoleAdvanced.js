
// node里的console.log样式需要借助utils库来进行自定义

module.exports = function() {
    // 打开计时器
    console.time('runTime');

    const util = require('util');
    util.inspect.styles.number = 'cyan'

    const func = require('../data_structure/arrayToObject')

    console.log('start run algorithm code');
    console.log('result is :')

    // showHidden 表示是否输出更多信息（不可枚举和Symble类型的属性），默认值是false。
    // depth 表示最大递归的层数，对象很复杂时可以指定层数，值为 null 表示将不限递归层数完整遍历对象，默认值是 2。
    // colors 表示输出格式是否将会以 ANSI 颜色编码，通常用于在终端显示更漂亮的效果，默认值是false
    // console.dir(func(), {
    //     showHidden: false,
    //     depth: 100,
    //     color: true
    // })

    // util.inspect(func(), false, null, true)用来将对象转化成字符串，可以控制showHidden depth 和 color，效果和console.dir一致
    console.log(util.inspect(func(), false, null, true))

    // console.log(JSON.stringify(func(), null, 2))

    // console.log(util.inspect.colors)

    console.timeEnd('runTime');
}