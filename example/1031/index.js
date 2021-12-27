// 解法一，內建函式法
function solve(lines) {
  console.log(countSumOfSquareNumber(lines[0] * 1))
}
function countSumOfSquareNumber(n) {
  // 若 n 為負數
  if(n < 0) {
    n = n * -1
  }
  let sum = 0
  for(let i=1; i<=n; i++) {
    // 如果開根號 + 無條件捨去 = 原數字，代表是完全平方數
    if( i === Math.floor(Math.sqrt(i))**2 ) {
      // 把完全平方數加總
      sum += i
    }
  }
  return sum
}

// 解法二，範圍限制法
function solve(lines) {
  console.log(countSumOfSquareNumber(lines[0] * 1))
}
function countSumOfSquareNumber(n) {
  // 若 n 為負數
  if(n < 0) {
    n = n * -1
  }
  let sum = 0
  let i = 1
  // 若 i 平方後 <= n，就執行  
  while(i**2 <= n) {
    // 把 i 平方值加到 sum
    sum += i**2
    // 更新 i 
    i++
  }
  return sum
}