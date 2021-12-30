
// 我的解法
function solve(lines) {
  // 原字串
  const str = lines[0]
  // 預期長度
  const length = lines[1] * 1
  // 填充文字
  const padStr = lines[2]
  // 結果文字
  const resultStr = padEnd(str, length, padStr)
  // 印出結果
  console.log(resultStr)
}

function padEnd(str, targetLength, padString=' ') {
  // 長度 <= 原字串
  // 填入文字為空字串
  if(
      targetLength <= str.length || 
      !(padString)
    ) return str
  // 結果字串
  let result = ''
  // 未達到目標長度時不會停止
  while(str.length < targetLength) {
    // 填入文字
    str += padString
  }
  // 去掉超出範圍的文字
  for(let i=0; i<targetLength; i++) {
    result += str[i]
  }
  return result
}

// 跟別人學來的解法
function solve(lines) {
  // 原字串
  const str = lines[0]
  // 預期長度
  const length = lines[1] * 1
  // 填充文字
  const padStr = lines[2]
  // 結果文字
  const resultStr = padEnd(str, length, padStr)
  // 印出結果
  console.log(resultStr)
}


function padEnd(str, targetLength, padString=' ') {
  // 長度 <= 原字串
  // 填充文字為空字串
  if(
      targetLength <= str.length || 
      !(padString) 
    ) return str
  // 動態索引值
  let k = 0
  // 未達到目標長度時不會停止
  while(str.length < targetLength) {
    // 填入文字
    str += padString[k++]
    // 已經是填充文字的最後一個字，歸零
    if(k === padString.length) k=0
  }
  // 回傳結果
  return str
}