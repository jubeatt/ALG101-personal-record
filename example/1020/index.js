function solve(lines) {
  // 建立數字陣列
  let numberArray = transToNumber(lines.slice(1))
  // 遍歷所有數字
  numberArray.forEach((elem) => {
    /*
      edge case：
      數字 1 不是質數也不是合數，但要輸出 Composite
      數字 2 是特殊案例，所以直接輸出 Prime
    */
    if(elem === 1) console.log('Composite')
    if(elem === 2) console.log('Prime')
    if( elem===1 || elem===2 ) return 0

    // 判斷是否為質數
    let message = isPrime(elem) ? 'Prime' : 'Composite'
    // 印出輸出訊息
    console.log(message)
  })
}
function transToNumber (array) {
  let result = []
  for(let i=0; i<array.length; i++) {
    result.push(Number(array[i]))
  }
  return result
}
function isPrime (number) {
  // 遍歷 2 ~ n-1
  for(let i=2; i<number; i++) {
    // 可以整除就代表不是質數
    if( number%i === 0 ) return false
  }
  // 都不能整除就代表是質數
  return true
}