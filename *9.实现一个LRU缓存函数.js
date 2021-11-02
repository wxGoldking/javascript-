/**
 * 
 * LRU 缓存机制 设计和实现一个 LRU（最近最少使用）缓存数据结构，使它应该支持一下操作：
 * get 和 put。 get(key) - 如果 key 存在于缓存中，则获取 key 的 value（总是正数），否则返回 -1。 
 * put(key,value) - 如果 key 不存在，请设置或插入 value。
 * 当缓存达到其容量时，它应该在插入新项目之前使最近最少使用的项目作废。
 * 
 * 
 * 
*/

class LRUCache {
    constructor(size){
        this.size = size;
        this.store = new Map();
    }
    get(key) {
        if (this.store.has(key)) {
            const value = this.store.get(key);
            this.store.delete(key);
            this.store.set(key, value)
            return value;
        } else {
            return -1;
        }
    }
    put(key, value) {
        if (this.store.has(key)) {
            this.store.delete(key);
        }
        this.store.set(key, value);
        if (this.store.size > this.size) {
            this.store.delete(this.store.keys().next().value)
        }
    }
}

const cache = new LRUCache( 2 /* 缓存容量 */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4