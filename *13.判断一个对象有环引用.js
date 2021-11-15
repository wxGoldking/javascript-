
// 用一个数组存储每一个遍历过的对象，下次找到数组中存在，则说明环引用

function cycleDetector(obj, objValues = []) {
    let flag = false;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if(flag) break;
            const value = obj[key];
            if (typeof value === 'object' && value !== null) {
                if (objValues.includes(value)) {
                    flag = true;
                } else {
                    objValues.push(value)
                }
                !flag && (flag = cycleDetector(value, objValues))
            }
        }
    }
    return flag
}