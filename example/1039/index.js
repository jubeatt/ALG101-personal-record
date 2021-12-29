function solve(lines) {
  // 要填滿的值 '10'
  const target = lines[0]
  // ['1', '2', '3']
  const arr = lines.slice(2)
  // 填滿後的陣列
  const filledArr = fill(arr, target) 
  // 印出結果
  filledArr.forEach(elem => console.log(elem))
}


function fill(arr, value) {
  const result = []
  // 遍歷陣列元素
  for(let i=0; i<arr.length; i++) {
    // 把值填入新陣列
    result[i] = value
  }
  // 回傳結果
  return result
}