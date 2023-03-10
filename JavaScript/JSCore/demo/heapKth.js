const a = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];

/* 获取数组中第k个最大元素 */
const findKthLargest1 = function (nums, k) {
    // 从大到小排序
    return nums.sort((a, b) => b - a)[k - 1];
};

const findKthLargest2 = function (nums, k) {
    // 维护一个大小是 K 的最小堆
    let minHeap = new Heap((a, b) => a < b);
    for (const num of nums) {
        minHeap.push(num);
        if (minHeap.size > k) {
            // 弹出堆顶元素
            minHeap.pop();
        }
    }
    return minHeap.peek();
};

/* 获取数组中第k个最小元素 */
const findKthMinimum1 = function (nums, k) {
    // 从小到大排序
    return nums.sort((a, b) => a - b)[k - 1];
};

const findKthMinimum2 = function (nums, k) {
    // 维护一个大小是 K 的最大堆
    let minHeap = new Heap((a, b) => a > b);
    for (const num of nums) {
        minHeap.push(num);
        if (minHeap.size > k) {
            minHeap.pop();
        }
    }
    return minHeap.peek();
};

/* 维护一个堆结构 */
class Heap {
    constructor(compare) {
        this.arr = [0]; // 忽略 0 这个索引，便于计算左右节点
        this.compare = compare ? compare : (a, b) => a > b; // 默认最大堆
    }
    get size() {
        return this.arr.length - 1;
    }
    // 新增元素
    push(item) {
        this.arr.push(item);
        this.goUp(this.arr.length - 1);
    }
    // 弹出堆顶
    pop() {
        if (this.arr.length === 1) return null;
        // 将尾部元素和堆顶元素交换位置
        this.swap(1, this.arr.length - 1);
        let head = this.arr.pop(); // 删除堆顶元素
        this.goDown(1); // 再做下沉操作
        return head;
    }
    // 元素上浮, i 是索引
    goUp(i) {
        let { arr, compare, parent } = this;
        // 对比当前元素和父元素的大小，满足 compare 则进行交换
        while (i > 1 && compare(arr[i], arr[parent(i)])) {
            this.swap(i, parent(i));
            i = parent(i);
        }
    }
    // 元素下沉, i 是索引
    goDown(i) {
        let { arr, compare, left, right, size } = this;
        while (left(i) <= size) {
            // 1. 拿到左右节点的最(大或小)值
            let child = left(i);
            if (right(i) <= size && compare(arr[right(i)], arr[child])) {
                child = right(i);
            }
            // 2. i 满足最大堆或最小堆，则什么也不做
            if (compare(arr[i], arr[child])) {
                return;
            }

            // 3. 交换位置，继续下沉操作
            this.swap(i, child);
            i = child; // 更新位置
        }
    }
    // 获取左边的元素
    left(i) {
        return i * 2;
    }
    // 获取右边的元素
    right(i) {
        return i * 2 + 1;
    }
    // 获取父元素
    parent(i) {
        return Math.floor(i >> 1);
    }
    // i, j 交换位置
    swap(i, j) {
        [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
    }
    // 获取堆顶元素
    peek() {
        return this.arr[1];
    }
}

console.log('**************', findKthMinimum1(a, 3));
