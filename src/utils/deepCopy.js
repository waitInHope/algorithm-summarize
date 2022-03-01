
const deepCopy = function() {

}

// 简陋浅拷贝版本
const deepCopy1 = function(src) {
    let target = {};
    for(let key in src) {
        target[key] = src[key];
    }
    return target;
}

// 使用递归拷贝对象属性，基本完成深拷贝需求
const deepCopy2 = function(src) {
    if(typeof src === 'object') {
        let target = {};
        for(let key in src) {
            target[key] = deepCopy2(src[key])
        }
        return target;
    } else {
        return src;
    }
}

// 兼容处理属性为对象和数组的深拷贝
const deepCopy3 = function(src) {
    if(typeof src === 'object') {
        let target = Array.isArray(src) ? [] : {};
        for(let key in src) {
            target[key] = deepCopy3(src[key]);
        }
        return target;
    } else {
        return src;
    }
}

// 针对循环引用的属性进行兼容处理，使用WeakMap暂存所有的对象地址
const deepCopy4 = function(src, dataMap = new WeakMap()) {
    if(typeof src === 'object') {
        if(dataMap.get(src)) {
            return dataMap.get(src);
        }

        let target = Array.isArray(src) ? [] : {};
        dataMap.set(src, target);
        for(let key in src) {
            target[key] = deepCopy4(src[key], dataMap);
        }
        return target;
    } else {
        return src;
    }
}

module.exports = {
    deepCopy,
    deepCopy1,
    deepCopy2,
    deepCopy3,
    deepCopy4
}