// 选一个元素，大于小于 分成两边，递归
// 时间 nlog(n)
function quickSort(arr) {
    if (arr.length <= 1) return arr
    let left = []
    let right = []
    let pivot = arr.splice(0, 1)[0]
    arr.forEach(e => {
        if (e < pivot) {
            left.push(e)
        } else {
            right.push(e)
        }
    });

    return quickSort(left).concat(pivot, quickSort(right))
}

// 遍历，插在大于前者小于后者的地方
// 时间 n^2
function insertSort(arr) {
    let tmp;
    for (let i = 1; i < arr.length; i++) {
        tmp = arr[i]
        for (let j = i; j >= 0; j--) {
            if (tmp < arr[j - 1]) {
                arr[j] = arr[j - 1]
            } else {
                arr[j] = tmp
                break
            }
        }
    }
    return arr
}

// 每次遍历选出最小的一个，push
// 时间 n^2
function selectSort(arr) {
    let minIndex
    for (let i = 0; i < arr.length; i++) {
        minIndex = i
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }

    return arr
}

// 相邻比较，前大于后，交换位置，每一次都得到未排序的最大
// 时间 n^2
function bubbleSort(arr) {
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length - 1 - j; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
            }
        }
    }
    return arr
}

// merge()是一个把两个有序的数组合并成一个有序的数组，拆分的思想，把一个长度为n的无序数组拆分成n个只有一个的元素的数组，再合成n/2个有2个元素的数组，最终归并成一个有序数组
// 时间 nlog(n)
function mergeSort(arr) {
    if(arr.length < 2) return arr;
    let left = arr.slice(0,Math.floor(arr.length/2))
    let right = arr.slice(Math.floor(arr.length/2))

    function merge(left, right) {
        let result = []
        while(left.length && right.length){
            if(left[0]<=right[0]){
                result.push(left.shift())
            }else{
                result.push(right.shift())
            }
        }
        if(left.length) result.push(...left)
        if(right.length) result.push(...right)
        return result
    }

    return merge(mergeSort(left),mergeSort(right)) // 递归
}


