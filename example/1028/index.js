// 解法一，雙層迴圈
function solve(lines) {
  // 輸入規則：4 個數字起頭 + 空格 + 1或2個數字 + 空格 + 1或2個數字結尾 
  const isValidInput = /^\d{4}\s\d{1,2}\s\d{1,2}$/.test(lines[0])
  // 判斷輸入是否合法
  if( !(isValidInput) ) return false
  // ['1991 11 7'] => 1991117 => 轉成數字
  let n = lines[0].split(' ').reduce((acc, elem) => acc + elem, '') * 1
  // 當 n 不是一位數就執行
  while(n >= 10) {
    // 暫存加總值
    let m = 0
    // 對 n 的每一位做加總
    while(n !== 0) {
      m += n % 10
      n = Math.floor(n/10)
    }
    // 把 n 的值更新為加總值
    n = m
  }
  console.log(n)
}


// 解法二，函式填空法
function solve(lines) {
  // 輸入規則：4 個數字起頭 + 空格 + 1或2個數字 + 空格 + 1或2個數字結尾 
  const isValidInput = /^\d{4}\s\d{1,2}\s\d{1,2}$/.test(lines[0])
  // 判斷輸入是否合法
  if( !(isValidInput) ) return false
  // ['1991 11 7'] => 1991117 => 轉成數字
  let n = lines[0].split(' ').reduce((acc, elem) => acc + elem, '') * 1
  // 當 n 不是一位數就執行
  while(n >= 10) {
    // 暫存 n 的位數總和
    let m = sum(n)
    // 更新 n 的值
    n = m
  }
  // 印出結果
  console.log(n)
}
function sum(n) {
  let result = 0
  while(n !== 0) {
    // 取最後一位數
    result += n % 10
    // 去除最後一位數
    n = Math.floor(n/10)
  }
  return result
}
