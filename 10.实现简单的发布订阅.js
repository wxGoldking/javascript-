/**
 * 实现一个发布订阅模式拥有on emit once off方法
 * 
*/

class EventEmitter {
    constructor() {
        this.events = {}
    }
    on(key, cb, once = false) {
        once && (cb.once = true)
        if(!this.events[key]) this.events[key] = [];
        this.events[key].push(cb)
    }
    emit(key, ...args) {
        (this.events[key] || []).forEach((cb) => {
            cb(...args);
        })
        this.events[key] = (this.events[key] || []).filter(cb => !cb.once);
    }
    off(key, fn) {
        this.events[key] = (this.events[key] || []).filter(cb => cb !== fn);
    }
    once(key, cb) {
        this.on(key, cb, true)
    }
}

const event = new EventEmitter()

const fn1 = () => console.log(1)
const fn2 = () => console.log(2)
const fn3 = () => console.log(3)
const fn4 = () => console.log(4)
const fn5 = () => console.log(5)

event.on('key1', fn1)
event.on('key1', fn2)
event.on('key1', fn3)
event.on('key2', fn4)
event.once('key2', fn5)