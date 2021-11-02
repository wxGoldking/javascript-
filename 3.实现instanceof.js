function instanceOf (parent, child) {
    let prototype = parent.prototype;
    let cp = child.__proto__
    while(cp) {
        if(cp === prototype) {
            return true;
        }else{
            cp = cp.__proto__;
        }
    }
    return false;
}