// 解法一，內建函式
function solve(lines) {
  
  console.log(isValid(lines))
}
function isValid(array) {
  // 輸入規則：開頭 4 個數字，結尾 4 個數字，中間以 - 做分隔
  const isValidInput = /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(array[0])
  // 判斷輸入是否合法
  if( !(isValidInput) ) return false
  // expected => [5,4,1,2,3, ...]
  const numbers = array[0]
                    .split('')
                    .filter(value => value !== '-')
                    .map(value => Number(value))
  // 最後一個數字
  const lastNum = numbers[numbers.length-1]
  // 信用卡公司
  const company = numbers[0] === 5 ? 'MASTER_CARD' : 'VISA'
  // 消除最後一個數字
  numbers.splice(-1, 1)
  // 奇數項
  const odd = numbers
                .filter((value, index) => !(index & 1))
                .map(value => value*2 >= 10 ? value*2-9 : value*2)
                .reduce((acc, value) => acc + value, 0)
  // 偶數項 
  const even = numbers 
                .filter((value, index) => index & 1)
                .reduce((acc, value) => acc + value, 0)
  // 檢查碼
  const code = (odd+even) % 10 === 0 ? 0 : 10 - ((odd+even) % 10)
  // 回傳訊息
  return lastNum === code ? company : 'INVALID'
}



// 解法二，三寶解法
function solve(lines) {
  // [1, 2, 3, 4 ,5, ...]
  const card = removeDash(lines[0].split(''))
  // 信用卡公司
  const company = card[0] === 5 ? 'MASTER_CARD' : 'VISA'
  // 最後一個數字
  const lastNum = card[15]
  // 移除最後一個數字
  const numbers = removeLastNum(card)
  // 奇數總和
  const odd = addOdds(numbers)
  // 偶數總和
  const even = addEvens(numbers)
  // 檢查碼
  const code = (odd+even)%10 === 0 ? 0 : 10 - ((odd+even)%10)
  // 結果訊息
  const message = lastNum === code ? company : 'INVALID'
  // 印出結果
  console.log(message)
}
function removeDash(arr) {
  let result = []
  for(let i=0; i<arr.length; i++) {
    if(arr[i] !== '-') result.push(Number(arr[i]))
  }
  return result
}
function removeLastNum(arr) {
  let result = []
  for(let i=0; i<arr.length-1; i++) {
    result.push(arr[i])
  }
  return result
}
function addOdds(arr) {
  let sum = 0
  for(let i=0; i<arr.length; i++) {
    if( !(i & 1) ) {
      arr[i]*2 >= 10 
      ? sum += arr[i]*2 - 9 
      : sum += arr[i]*2
    }
  }
  return sum
}
function addEvens(arr) {
  let sum = 0
  for(let i=0; i<arr.length; i++) {
    if(i & 1) sum += arr[i]
  }
  return sum
}
