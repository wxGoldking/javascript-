
// 方法一 valueOf或toString
const a = {
    value: 1,
    valueOf() {
        return a.value++;
    }
}

// 第二种方法
var a = [1, 2, 3];
a.join = a.shift;
console.log(a == 1 && a == 2 && a == 3); // true

// 第三种方法
var val = 0;
Object.defineProperty(window, 'a', {
    get: function () {
        return ++val;
    }
})