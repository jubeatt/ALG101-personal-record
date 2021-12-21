function solve(lines) {
  // 迭代輸入陣列的每個元素
  lines.forEach(function(element) {
    // 將字串以空白字元分割
    let group = element.split(' ')
    // 取出第一個元素，並轉換成數字型態
    let number1 = Number(group[0])
    // 取出第二個元素，並轉換成數字型態
    let number2 = Number(group[1])
    // 如果 number1 跟 number2 皆為 0，不做事
    if(number1===0 && number2===0) return
    
    if(number1 > number2) {
      // 如果 number1 大於 number2，印出 number1
      console.log(number1)
    } else if(number1===number2) {
      // 如果 number1 等於 number2，印出 number1
      console.log(number1)
    } else {
      // 都不是，印出 number2
      console.log(number2)
    }
  })
}

// 虛擬碼練習

/* forEach e (array) do
  let group = e.split(' ')
  let number1 = group[0]
  let number2 = group[1]
  
  if(number1===0 && number2===0) return
  
  if(number1 > number2) print number1
  else if(number1 === number2) print number1
  else print number2
end forEach */