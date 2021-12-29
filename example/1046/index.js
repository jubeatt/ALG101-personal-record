function solve(lines) {
  // 轉成一行字串
  const str = lines.reduce((acc, elem) => acc + elem, '')
  console.log(whowin2(str))
}

// 解法一 => 二維陣列
function whoWin1(lines) {
  // 橫排
  for(let i=0; i<3; i++) {
    // 第 i 排的第 0 個字元 = 第 i 排的第 1 個字元
    // 第 i 排的第 1 個字元 = 第 i 排的第 2 個字元
    if(lines[i][0] === lines[i][1] && lines[i][1] === lines[i][2]) {
      return lines[i][0]
    }
  }
  // 直排
  for(let i=0; i<3; i++) {
    // 第一排的第 i 個字元 = 第二排的第 i 個字元
    // 第二排的第 i 個字元 = 第三排的第 i 個字元
    if(lines[0][i] === lines[1][i] && lines[1][i] === lines[2][i]) {
      return lines[0][i] 
    }
  }
  // 斜排
  if(lines[0][0] === lines[1][1] && lines[1][1] === lines[2][2]) {
    return lines[0][0]
  }
  if(lines[0][2] === lines[1][1] && lines[1][1] === lines[2][0]) {
    return lines[0][2]
  }
  // 以上都沒有就是平手
  return 'DRAW'
}

// 解法一 => 轉成字串
function whowin2(str) {
  // 橫排
  for(let i=0; i<3; i++) {
    let n = i*3
    if(str[n] === str[n+1] && str[n+1] === str[n+2]) {
      return str[n]
    }
  }
  // 直排
  for(let i=0; i<3; i++) {
    if(str[i] === str[i+3] && str[i+3] === str[i+6]) {
      return str[i]
    }
  }
  // 斜排
  if(str[0] === str[4] && str[4] === str[8]) {
    return str[0]
  }
  if(str[2] === str[4] && str[4] === str[6]) {
    return str[2]
  }
  return 'DRAW'
}

