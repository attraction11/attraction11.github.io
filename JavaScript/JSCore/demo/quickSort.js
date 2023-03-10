const a = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];

const quickSort = function (array) {
    const quick = function (arr) {
        if (arr.length <= 1) {
            return arr
        }

        // 1. 选择一个基准用于分区
        const index = Math.floor(arr.length >> 1)
        const center = arr.splice(index, 1)[0] // 获取并移除基准元素
        const left = []
        const right = []
        for (let i = 0; i < arr.length; i++) {
            const value = arr[i];
            if (value > center) {
                right.push(value)
            } else if (value <= center) {
                left.push(value)
            }
        }
        // 2. 对左右分区，再次进行分区遍历
        return quick(left).concat(center, quick(right))
    }
    const result = quick(array)
    return result
}

console.log("*******", quickSort(a))