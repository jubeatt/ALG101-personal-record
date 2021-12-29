// 解法一 => 反向迴圈 + push
function solve(lines) {
  // ['3', '1', '2', '3'] => ['1', '2', '3']
  lines.splice(0,1)
  const arr = reverse(lines)
  for(let i=0; i<arr.length; i++) {
    console.log(arr[i])
  }
}
function reverse(arr) {
  let result = []
  for(let i=arr.length-1; i>=0; i--) {
    result.push(arr[i])
  }
  // 修改原陣列
  for(let i=0; i<arr.length; i++) {
    arr[i] = result[i]
  }
  // 回傳值
  return result
}

// 解法二 => 迴圈 + 變數索引值
function solve(lines) {
  // ['3', '1', '2', '3'] => ['1', '2', '3']
  lines.splice(0,1)
  const arr = reverse(lines)
  for(let i=0; i<arr.length; i++) {
    console.log(arr[i])
  }
}
function reverse(arr) {
  // 動態索引值
  // i=0 => k=2
  // i=1 => k=1
  // i=2 => k=0
  let k = arr.length - 1
  let result = []
  for(let i=0; i<arr.length; i++) {
    result[i] = arr[k-i]
  }
  // 修改原陣列
  for(let i=0; i<arr.length; i++) {
    arr[i] = result[i]
  }
  // 回傳值
  return result
}