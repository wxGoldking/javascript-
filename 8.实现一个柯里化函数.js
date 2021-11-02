/**
 *  实现函数currying
 *  const add = (a, b, c) => a + b + c;
    const a = currying(add, 1);
    console.log(a(2,3)) // 1 + 2 + 3=6
*/

function currying(fn, ...args) {
    let arr = [...args];
    if(arr.length === fn.length) {
        return fn(...arr)
    }else{
        const resFn = (...arguments) => {
            arr = [...arr, ...arguments]
            if(arr.length >= fn.length) {
                return fn(...arr)
            }
            return resFn;
        }
        return resFn;
    }
}