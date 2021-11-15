/**
 *  实现一个LazyMan，可以按照以下方式调用:
    LazyMan('Hank')输出:
    Hi! This is Hank!

    LazyMan('Hank').sleep(10).eat('dinner')输出
    Hi! This is Hank!
    //等待10秒..
    Wake up after 10
    Eat dinner~

    LazyMan('Hank').eat('dinner').eat('supper')输出
    Hi This is Hank!
    Eat dinner~
    Eat supper~

    LazyMan('Hank').eat('supper').sleepFirst(5)输出
    //等待5秒
    Wake up after 5
    Hi This is Hank!
    Eat supper
*/

function LazyMan(name) {
    class LazyManCreater {
        constructor(name) {
            this.name = name;
            this.list = [() => console.log(`Hi! This is ${name}!`)];
            setTimeout(() => {
                this.start()
            }, 0)
        }
        async start() {
            for (let i = 0; i < this.list.length; i++) {
                const fn = this.list[i];
                await fn()
            }
        }
        eat(str) {
            this.list.push(() => console.log(`Eat ${str}~`))
            return this;
        }
        sleep(time) {
            this.list.push(async () => await new Promise(resolve => {
                setTimeout(() => resolve(), time * 1000)
            }))
            return this;
        }
        sleepFirst(time) {
            this.list.unshift(async () => await new Promise(resolve => {
                setTimeout(() => resolve(), time * 1000)
            }))
            return this;
        }
    }
    return new LazyManCreater(name)
}