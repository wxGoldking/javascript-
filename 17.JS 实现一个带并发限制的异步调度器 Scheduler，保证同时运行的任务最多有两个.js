// addTask(1000,"1");
// addTask(500,"2");
// addTask(300,"3");
// addTask(400,"4");
// 的输出顺序是：2 3 1 4

// 整个的完整执行流程：

// 一开始1、2两个任务开始执行
// 500ms时，2任务执行完毕，输出2，任务3开始执行
// 800ms时，3任务执行完毕，输出3，任务4开始执行
// 1000ms时，1任务执行完毕，输出1，此时只剩下4任务在执行
// 1200ms时，4任务执行完毕，输出4

// 作者：Sunshine_Lin
// 链接：https://juejin.cn/post/7023906112843808804
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

class Scheduler {
    constructor(limit) {
        this.limit = limit;
        this.queue = [];
        this.curTasks = [];
        this.waitTasks = [];
    }
    addTask(time, fn) {
        this.queue.push({time, fn});
    }
    doTask(time, fn){
        if(this.curTasks.length < this.limit) {
            this.curTasks.push({time, fn});
            setTimeout(() => { 
                fn();
                fn === this.curTasks[0] ? this.curTasks.shift() : this.curTasks.pop()
                if(this.waitTasks.length) {
                    const {time, fn} = this.waitTasks.shift();
                    this.doTask(time, fn)
                }
            }, time);
        } else {
            this.waitTasks.push({time, fn})
        }
    }
    start() {
        for (let i = 0; i < this.queue.length; i++) {
            const {time, fn} = this.queue[i];
            this.doTask(time, fn)
        }
    }
}
const scheduler = new Scheduler(2)
scheduler.addTask(1000, () => console.log(1))
scheduler.addTask(500, () => console.log(2))
scheduler.addTask(300, () => console.log(3))
scheduler.addTask(400, () => console.log(4))