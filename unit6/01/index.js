function map(arr, handler) {
  // 新陣列
  let newArr = []
  // 遍歷陣列內容
  for(let i=0; i<arr.length; i++) {
    // 將回傳值寫入新陣列
    // 傳入三個參數：
    // 1. 目前元素
    // 2. 索引值
    // 3. 來源陣列
    newArr[i] = handler(arr[i], i, arr)
  }
  return newArr
}

const result = map([1, 2, 3], (elem, index, src) => {
  // 來源陣列
  console.log('srcArray:', src)
  // 索引值
  console.log('index:', index)
  // 目前元素
  console.log('elem:', elem)
  // 元素處理後的回傳值
  return elem * 2
})
console.log('return value:', result)

// output: srcArray: [1, 2, 3]
// output: index: 0
// output: elem: 1

// output: srcArray: [1, 2, 3]
// output: index: 1
// output: elem: 2

// output: srcArray: [1, 2, 3]
// output: index: 2
// output: elem: 3

// output: return value: [2, 4, 6]