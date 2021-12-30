// 解法一 => 找出頭尾索引值
function solve(lines) {
  // 處理完的字串
  const str = trim(lines[0])
  // 印出結果
  console.log(str)
}
function trim(s) {
  // 結果字串
  let result = ''
  // 儲存起點位置
  let first = 0
  // 儲存終點位置
  // 要注意輸入為 ' ' 的 edge case 
  let last = s.length-1 

  // 找出從前面數來第一個非空白字元的索引值
  for(let i=0; i<s.length; i++) {
    if(s[i] !== ' ') {
      first = i
      break
    }
  }
  // 找出從後面數來第一個非空白字元的索引值
  for(let i=s.length-1; i>=0; i--) {
    if(s[i] !== ' ') {
      last = i
      break
    }
  }
  // 組合字串
  // 注意要 <= 才能取到終點位置字元
  for(let i=first; i<=last; i++) {
    result += s[i]
  }
  return result
}

// 解法一簡潔版 => 找出頭尾索引值
function solve(lines) {
  const resultStr = trim(lines[0])
  // 印出結果
  console.log(resultStr)
}
function trim(str) {
  // 轉成陣列
  // => [' ', ' ', 'a', 'b', 'c', ' ', ' ']
  const strArr = str.split('')
  // 從左邊開始找出第一個不是空白字元的索引值
  // findIndex 會找出第一個回傳 true 的索引值
  // includes 會根據搜尋值回傳 true 或 false

  // 下面的邏輯可以這樣思考：
  // 'abc'.includes('a') => 在 abc 裡面找有沒有 a => true
  // ' '.includes('a') => 在 空字串 裡面找有沒有 a => false
  // !(' ').includes('a') => 在 非空字串 裡面找有沒有 a => true
  // 所以換句話說只要是「不是空字串」都會是 true
  // 因此 findIndex 可以就找出第一個非空字串的索引值
  const start = strArr.findIndex(elem => !(' ').includes(elem))
  // 先將陣列反轉，接著用剛剛的邏輯找出第一個不是空白字元的索引值
  // 注意因為是反轉後的陣列，所以索引值一樣是從 0 開始
  const end = strArr.reverse().findIndex(elem => !(' ').includes(elem))
  // 關於 str.length-end 的這段可以這樣思考：
  // 假設 end = 0
  // end = length-0 => 倒數第 0 個
  // slice(start, length)
  // 假設 end = 1
  // end = length-1 => 倒數第 1 個
  // slice(start, length -1)
  // 假設 end = 2
  // end = length-2 => 倒數第 2 個
  // slice(start, length -1)
  // ...
  return str.slice(start, str.length-end)
}



// 解法二 => 先處理前面，在處理後面
function solve(lines) {
  // 處理完的字串
  const str = trim(lines[0])
  // 印出結果
  console.log(str)
}


function trim(s) {
  // 儲存狀態
  let isFrontWhiteSpaceFounded = false
  // 儲存狀態
  let isBackWhiteSpaceFounded = false
  // 儲存去掉前面空白後的字串
  let front = ''
  // 儲存去掉後面空白後的字串
  let back = ''
  // 先去掉前面的空白
  for(let i=0; i<s.length; i++) {
    // 第一個非空白字元找到後，isFrontWhiteSpaceEnd 會變 true
    // 所以接下來出現的空白字元也都會被填入
    if(s[i] !== ' ' || isFrontWhiteSpaceFounded) {
      front += s[i]
      isFrontWhiteSpaceFounded = true
    }
  }
  // 接著去掉後面的空白
  for(let i=front.length-1; i>=0; i--) {
    // 第一個非空白字元找到後，isBackWhiteSpaceFounded 會變 true
    // 所以接下來出現的空白字元也都會被填入
    if(front[i] !== ' ' || isBackWhiteSpaceFounded) {
      // 順序要這樣才會對，不然會變成顛倒文字
      back = front[i] + back
      isBackWhiteSpaceFounded = true
    }
  }
  return back
}