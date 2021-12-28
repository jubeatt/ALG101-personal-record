function solve(lines) {
  // 轉成一行字串
  const str = lines.reduce((acc, elem) => acc + elem, '')
  console.log(whowin(str))
}

function whowin(str) {
  const O = 'O'
  const X = 'X'
  if( str[0]===O && str[1]===O && str[2]===O ) return O
  if( str[3]===O && str[4]===O && str[5]===O ) return O
  if( str[6]===O && str[7]===O && str[8]===O ) return O

  if( str[0]===O && str[3]===O && str[6]===O ) return O
  if( str[1]===O && str[4]===O && str[7]===O ) return O
  if( str[2]===O && str[5]===O && str[8]===O ) return O

  if( str[0]===X && str[1]===X && str[2]===X ) return X
  if( str[3]===X && str[4]===X && str[5]===X ) return X
  if( str[6]===X && str[7]===X && str[8]===X ) return X

  
  if( str[0]===X && str[3]===X && str[6]===X ) return X
  if( str[1]===X && str[4]===X && str[7]===X ) return X
  if( str[2]===X && str[5]===X && str[8]===X ) return X

  if( str[0]===O && str[4]===O && str[8]===O ) return O
  if( str[2]===O && str[4]===O && str[6]===O ) return O

  if( str[0]===X && str[4]===X && str[8]===X ) return X
  if( str[2]===X && str[4]===X && str[6]===X ) return X

  // 以上都沒有就是平手
  return 'DRAW'
}

function whoWin(lines) {
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

/*  窮舉所有贏的可能
第一行 OOO
第二行 OOO
第三行 OOO

第一列
O
O
O
第二列
  O
  O
  O
第三列
    O
    O
    O

斜角一
O
  O
    O
斜角二
    O
  O
O 

*/