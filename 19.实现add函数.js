/**
 * 题目描述：实现一个 add 方法 使计算结果能够满足如下预期：
    add(1)(2)(3)()=6
    add(1,2,3)(4)()=10
 * 
 * 
*/

function add (...args) {
    const arr = [];
    const fn = (...args) => {
        if (args.length) {
            arr.push(...args);
            return fn
        }
        return arr.reduce((sum, item) => sum + item, 0)
    }
    return fn(...args)
}


function add (...args) {
    const arr = [];
    const fn = (...args) => {
        arr.push(...args);
        return fn;
    }
    fn.toString = () => arr.reduce((sum, item) => sum + item, 0)
    return fn(...args)
}
