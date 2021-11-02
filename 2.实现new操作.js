const myNew = (fn, ...args) => {
    if(typeof fn !== 'function') {
        throw new Error('参数必须为函数')
    }
    const obj = {};
    obj.__proto__ = fn.prototype;
    fn.call(obj, ...args);
    return obj
}