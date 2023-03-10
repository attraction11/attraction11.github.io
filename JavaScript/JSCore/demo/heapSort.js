/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 通常堆是通过一维数组来实现的。在数组起始位置为0的情形中：
// 父节点i的左子节点在位置(2*i+1)
// 父节点i的右子节点在位置(2*i+2)
// 子节点i的父节点在位置floor((i-1)/2)

let len; // 因为声明的多个函数都需要数据长度，所以把len设置成为全局变量

function sortArray(arr) {
    buildMaxHeap(arr);

    for (let i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i);
        len--;
        heapify(arr, 0);
    }
    return arr;
}

function buildMaxHeap(arr) {
    // 建立大顶堆
    len = arr.length;
    for (let i = Math.floor(len / 2); i >= 0; i--) {
        heapify(arr, i);
    }
}

twoPart

function heapify(arr, i) {
    // 堆调整
    let left = 2 * i + 1,
        right = 2 * i + 2,
        largest = i;

    // 若子节点比节点大，则标记
    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }
    // 若标记有子节点，则交换父子位置，并递归计算
    if (largest != i) {
        swap(arr, i, largest);
        heapify(arr, largest);
    }
}

function swap(arr, i, j) {    
    [arr[i], arr[j]] = [arr[j], arr[i]]
}


