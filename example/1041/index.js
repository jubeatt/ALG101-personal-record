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