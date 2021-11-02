
const quchong1 = (arr) => {
    return arr.filter((it, i) => {
        return i === arr.indexOf(it);
    })
}

const quchong2 = (arr) => {
    return Array.from(new Set(arr))
}