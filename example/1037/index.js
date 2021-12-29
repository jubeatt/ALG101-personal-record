function solve(lines) {
  // 要刪除的目標 '3'
  const target = lines[0]
  // ['1', '3', '3', '2', '8']
  const arr = lines.slice(2)
  // 過濾後的陣列
  const ans = filter(arr, (elem) => elem !== target)
  // 印出所有元素
  for(let i=0; i<ans.length; i++) {
    console.log(ans[i])
  }
}


function filter(arr, callback) {
  let result = []
  let k = 0
  for(let i=0; i<arr.length; i++) {
    // 把回傳 true 的元素加入到結果陣列
    if(callback(arr[i])) {
      result[k] = arr[i]
      // 更新索引值
      k++
    }
  }
  // 回傳結果陣列
  return result
}