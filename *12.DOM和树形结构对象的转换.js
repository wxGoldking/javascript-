function dom2Tree(dom){
    return {
        tag: dom.tagName,
        text: dom.nodeType === 3 && dom.nodeValue,
        children: [...dom.childNodes].map(child => dom2Tree(child))
    };
}



function tree2Dom(node) {
    if(node.tag) {
        let dom = document.createElement(node.tag)
        node.children.forEach(child => {
            const node = tree2Dom(child);
            node && dom.appendChild(tree2Dom(child))
        })
        return dom;
    }else{
        return node.text && document.createTextNode(node.text)
    }
}