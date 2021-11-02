// 方法一
function parse (json) {
    return eval("(" + json + ")");
}




// 方法二
function parse(jsonStr){
    return new Function("return" + jsonStr)()
 }
  
 var jsonStr ='{"age":20,"name":"jack"}';
 parse(jsonStr)