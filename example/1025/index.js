
/* 解法一（數學版）
function solve(lines) {
  const arr = lines[0].split(' ')
  let start = Number(arr[0])
  let end = Number(arr[1])
  for(let i=start; i<=end; i++) {
    if(isNarcissistic(i)) {
      console.log(i)
    }
  }
}
function isNarcissistic(number) {
  // 儲存總和
  let sum = 0
  // 用來計算用的暫存數
  let tempNumber = number
  // 數字位數
  const length = findDigits(tempNumber)
  do {
    // sum = 最後一位數 x 數字長度
    sum += (tempNumber%10) ** length
    // 去除最後一位數
    tempNumber = Math.floor(tempNumber/10)
  }while(tempNumber)
  // 總和 = 原本的數字
  if(sum === number) {
    return true
  }
}

function findDigits(number) {
  let result = 1
  // 除以 10 無條件捨去後還 > 0
  while(Math.floor(number/10)) {
    result++
    // 去掉最後一位數
    number = Math.floor(number/10)
  }
  return result
}

 */

/*  解法一（數學版）簡化
function solve(lines) {
  const arr = lines[0].split(' ')
  const start = Number(arr[0])
  const end = Number(arr[1])
  for(let i=start; i<=end; i++) {
    let sum = 0
    let tempNumber = i
    const length = findDigits(i)
    // sum = 每一位數 ** length
    do {
      sum += (tempNumber%10) ** length
      // 去除最後一位數
      tempNumber = Math.floor(tempNumber/10)
    }while(tempNumber)
    // 是水仙花數就印出
    if(sum === i) console.log(i)
  }
}
function findDigits(number) {
  let result = 1
  // 除以 10 無條件捨去後還 > 0
  while(Math.floor(number/10)) {
    result++
    // 去掉最後一位數
    number = Math.floor(number/10)
  }
  return result
}

 */




/* 解法二（字串版） 
function solve(lines) {
  const arr = lines[0].split(' ')
  const start = Number(arr[0])
  const end = Number(arr[1])
  for(let i=start; i<=end; i++) {
    let sum = 0
    // 轉成字串
    let tempNumber = String(i)
    // 位數
    const digit = tempNumber.length
    // sum = 每一位數 ** length
    for(let j=0; j<digit; j++) {
      sum += Number(tempNumber[j]) ** digit
    }
    // 是水仙花數就印出
    if(sum === i) console.log(i)
  }
}

*/