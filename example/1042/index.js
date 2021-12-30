function solve(lines) {
  // 處理完的字串
  const str = toLowerCase(lines[0])
  // 印出結果
  console.log(str)
}


function toLowerCase(s) {
  let result = ''
  for(let i=0; i<s.length; i++) {
    // 如果是大寫字母
    if(s[i]>='A' && s[i]<='Z') {
      // 轉成小寫
      result += String.fromCharCode(s[i].charCodeAt(0) + 32)
    } else {
      // 不是大寫字母不做處理
      result += s[i]
    }
  }
  return result
}