function solve(lines) {
  // 判斷結果
  const isEndsWithTarget = endsWith(lines[0], lines[1])
  // 印出結果
  console.log(isEndsWithTarget)
}


function endsWith(str, searchString) {
  // 搜尋字串長度 > 比對字串長度 
  // 搜尋字串為空字串
  if(searchString.length > str.length || searchString.length === 0) return false
  // 儲存搜尋字串最後一個字的索引值
  let k =  searchString.length - 1 
  // 反向迴圈
  for(let i=str.length-1; i>=0; i--) {
    // 比對兩字串的倒數第 n 個字是否相同
    if(str[i] !== searchString[k--]) return false
    // 沒有字可以比了
    if(k < 0) break
  }
  // 符合
  return true
}