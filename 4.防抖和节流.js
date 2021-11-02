// 防抖
const debounce = (fn, delay = 500) => {
    let timer = null;
    return function(...args){
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.call(this, ...args)
        }, delay)
    }
}

// 节流
const throttle = (fn, delay = 500) => {
    let time = 0;
    return function(...args){
        const now = Date.now();
        if(time && now - time < delay) return;
        time = now;
        fn.call(this, ...args)
    }

}