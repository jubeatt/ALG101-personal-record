function solve(lines) {
  // 輸入規則：數字開頭 + 空格 + 運算符號 + 空格 + 數字結尾 
const isValidInput = /^\d{1,5}\s[\+\-\*\/]\s\d{1,5}$/.test(lines[0])
  // 判斷輸入是否合法
  if( !(isValidInput) ) return false
  // '3 * 4' => ['3', '*', '4']
  const input = lines[0].split(' ')
  // 數字 1
  const a = input[0] * 1
  // 數字 2
  const b = input[2] * 1
  // 運算符號
  const o = input[1]
  switch (o) {
    case '+':
      console.log(a + b)
      break
    case '-':
      console.log(a - b)
      break
    case '*':
      console.log(a * b)
      break
    case '/':
      console.log(a / b)
      break
  }
}