/* 
  解法一 => 我的解法
*/
function solve(lines) {
  // 每個人的選項
  const SELECTION = lines.slice(1)
  // 總共有幾個人
  const TOTAL = SELECTION.length
  // 選 A 的人數
  const A_COUNT = SELECTION.filter(elem => elem === 'A').length
  // 選 B 的人數
  const B_COUNT = SELECTION.filter(elem => elem === 'B').length

  // 沒有人不合群的情況
  if (A_COUNT === B_COUNT) return console.log('PEACE')
  if (A_COUNT === TOTAL) return console.log('PEACE')
  if (B_COUNT === TOTAL) return console.log('PEACE')
  
  // A 不合群
  if (A_COUNT < B_COUNT) {
    return SELECTION.forEach((elem, index) => elem === 'A' ? console.log(index + 1) : null)
  }
  // B 不合群
  if (B_COUNT < A_COUNT) {
    return SELECTION.forEach((elem, index) => elem === 'B' ? console.log(index + 1) : null)
  }
}

/* 
  解法二 => 參考別人的解法
*/
function solve(lines) {
  // 選 A 的數量
  let aCount = 0
  // 計算選 A 的數量
  for (let i=1; i<lines.length; i++) {
    if (lines[i] === 'A') {
      aCount++
    }
  }
  // 選 B 的數量 = 總數扣掉 A - 1（扣掉人數）
  let bCount = lines.length - aCount - 1
  // 沒有不合群
  if ( aCount===bCount || aCount===0 || bCount===0 ) {
    return console.log('PEACE')
  }

  // 誰是不合群的人
  const WHO_LOSE = aCount < bCount ? 'A' : 'B'
  // 找出不合群的位置
  for(let i=1; i<lines.length; i++) {
    if(lines[i] === WHO_LOSE) {
      console.log(i)
    }
  }
}
