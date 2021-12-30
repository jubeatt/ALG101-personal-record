// 解法一 => 讓最後一個元素不加上分隔值
function solve(lines) {
  // 要插入的值 ','
  const target = lines[0]
  // ['1', '2', '3']
  const arr = lines.slice(2)
  // 處理完的字串
  const str = join(arr, target)
  // 印出結果
  console.log(str)
}
function join(arr, separator) {
  let result = ''
  // 遍歷陣列元素
  for(let i=0; i<arr.length; i++) {
    // 不是最後一個元素才插值
    if(i !== arr.length-1) {
      result += arr[i] + separator
    } else {
      // 最後一個元素直接填入
      result += arr[i]
    }
  }
  // 回傳結果
  return result
}

// 解法二 => 看成是 1 + !2 + !3
function solve(lines) {
  // 分隔值
  const s = lines[0]
  // ['1', '2', '3']
  const array = lines.slice(2)
  // 結果
  const resultStr = join(array, s)
  // 印出結果
  console.log(resultStr)
}
function join(arr,  separator) {
  // 儲存第一個元素
  let result = arr[0]
  // 從第二個元素開始取出
  for(let i=1; i<arr.length; i++) {
    // 分隔值 + 文字
    result += separator + arr[i]
  }
  // 回傳結果
  return result
}

// 解法三 => 看成是 1! + 2! + 3
function solve(lines) {
  // 分隔值
  const s = lines[0]
  // ['1', '2', '3']
  const array = lines.slice(2)
  // 結果
  const resultStr = join(array, s)
  // 印出結果
  console.log(resultStr)
}

function join(arr,  separator) {
  let result = ''
  // 記得 -1 排除最後一個元素
  for(let i=0; i<arr.length-1; i++) {
    // 文字 + 分隔值
    result += arr[i] + separator
  }
  // 補上最後一個元素值
  return result + arr[arr.length-1]
}