
const { deepCopy4 } = require('./src/utils/deepCopy')

let params = {
    a: 1,
    b: {
        c: {
            d: 2
        },
        e: 3
    },
    t: function() {
        console.log("hello world")
    },
    u: [1,2,3,4,5]
}
params.x = params;

let res = deepCopy4(params)
console.dir(res, {
    showHidden: false,
    depth: null
})