function mySetInterval(fn, delay = 0) {
    let timer = null;
    const func = () => {
        timer = setTimeout(() => {
            fn();
            func();
        }, delay)
    }
    func();
    const clearMyInterval = () => clearTimeout(timer)
    return { clearMyInterval };
}

// 用setInterval实现setTimeout
function mySetTimeOut(fn, delay = 0) {
    let timer = setInterval(() => {
        fn();
        clearInterval(timer);
    }, delay)
}