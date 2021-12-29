function solve(lines) {
  // 要搜尋的目標 '3'
  const target = lines[0]
  // ['1', '2', '3', '3', '3']
  const arr = lines.slice(2)
  // 對應元素的索引值
  const index = indexOf(arr, target)
  // 印出結果
  console.log(index)
}
function indexOf(arr, searchElement) {
  // 遍歷陣列元素
  for(let i=0; i<arr.length; i++) {
    // 找到目標
    if(arr[i] === searchElement) {
      // 回傳索引值
      return i
    }
  }
  // 找不到
  return -1
}