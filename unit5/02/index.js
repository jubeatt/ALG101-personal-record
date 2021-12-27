function isValid(str) {
  // 輸入規則：A-Z 開頭 + 9 個連續數字結尾
  const isValidInput = /^[A-Z][0-9]{9}$/.test(str)
  // 判斷輸入是否合法
  if( !(isValidInput) ) return false
  
  // 字串
  const IDString = codeTable(str[0]) + str.substring(1)
  // 數字
  const IDNumbers = IDString.split('').map(value => Number(value))
  console.log('IDNumbers', IDNumbers)
  // 公式表
  const table = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1]
  // 總和
  let sum = 0
  // 驗證計算
  for(let i=0; i<IDNumbers.length; i++) {
    sum += IDNumbers[i] * table[i]
  }
  // 回傳結果
  console.log('sum:', sum)
  return sum%10 === 0
}
// 字母對應表
function codeTable(key) {
  const mapping = {
    A: '10', B: '11', C: '12',
    D: '13', E: '14', F: '15',
    G: '16', H: '17', I: '34',
    J: '18', K: '19', L: '20',
    M: '21', N: '22', O: '35',
    P: '23', Q: '24', R: '25',
    S: '26', T: '27', U: '28',
    V: '29', W: '32', X: '30',
    Y: '31', Z: '33'
  }
  return mapping[key]
}