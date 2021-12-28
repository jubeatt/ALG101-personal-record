// 拿到所有資料s
function solve(lines) {
  const n = lines[0] * 1
  const str = lines[1]
  console.log(caesarCipher2(str, n))
}
// 解法一
function caesarCipher1(s, n) {
  let result = ''
  for(let i=0; i<s.length; i++) {
    // 取得 ASCII CODE
    const code = s.charCodeAt(i)
    // 位移後的數字
    let m = code + n
    // 取餘數 + 96 直到 <= 122 為止
    while(m > 122) {
      // 加上 96 是因為 a 從 97 開始
      m = (m % 122) + 96
    }
    // 轉回文字
    result += String.fromCharCode(m)
  }
  return result
}

// 解法二
function caesarCipher2(s, n) {
  let result = ''
  for(let i=0; i<s.length; i++) {
    // 取得 ASCII CODE
    const code = s.charCodeAt(i)
    // code + 實際的位移量
    let m = code + (n % 26)
    // 如果超出範圍 
    if(m > 122) {
      // 取餘數，並加上 96，因為 a 從 97 開始
      m = (m % 122) + 96
    }
    // 轉回文字
    result += String.fromCharCode(m)
  }
  return result
}