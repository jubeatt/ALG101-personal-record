function solve(lines) {
  // 原字串，起點，終點
  const [str, s, e] = lines
  // 結果
  const resultStr = slice(str, Number(s), Number(e))
  // 印出結果
  console.log(resultStr)
}


function slice(str, start, end) {
  // 沒有 end 值，設為字串長度
  if(!end) end = str.length
  // 結果
  let result = ''
  // 根據 start end 範圍擷取文字
  for(let i=start; i<end; i++) {
    result += str[i]
  }
  // 回傳結果
  return result
}