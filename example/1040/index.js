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