const ajax = {
    get({url, callback}) {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url, true) // 第三个参数代表是否异步
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                // HTTP 状态在 200-300 之间表示请求成功
                // HTTP 状态为 304 表示请求内容未发生改变，可直接从缓存中读取
                if (xhr.status >= 200 && 
                    xhr.status < 300 || 
                    xhr.status == 304) {
                    console.log('请求成功', xhr.responseText)
                    callback(xhr.responseText)
                }
            }
        }
        xhr.send();
    },
    post({url, data, callback}) {
        const xhr = new XMLHttpRequest()
        xhr.open('POST', url, true) // 第三个参数代表是否异步
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded')
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if (xhr.status >= 200 && 
                    xhr.status < 300 || 
                    xhr.status == 304) {
                    console.log('请求成功', xhr.responseText)
                    callback(xhr.responseText)
                }
            }
        }
        xhr.send(data);
    }
}