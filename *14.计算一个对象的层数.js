// 循环获取并拍平每一个Object value 直到没有Object value, 每执行一次记一层
function loopGetLevel(obj) {
    let floor = 0;
    let values = [obj];
    while(values.length) {
        floor++
        values = values.reduce((res, item) => {
            const arr = Object.values(item).filter(it => it !== null && typeof it === 'object');
            return res.concat(arr);
        }, [])
    }
    return floor;
}