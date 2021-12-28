// 我的解法
function solve(lines) {
  // 有幾組座標
  const n = lines[0] * 1
  let min = Infinity
  // 儲存最短距離的兩組座標
  let result = null
  // 計算最近點對
  // i from 1 to 4
  for(let i=1; i<=n; i++) {
    // '2 2' => ['2', '2'] => [2, 2]
    const targetArr = lines[i].split(' ').map(value => value * 1)
    const x1 = targetArr[0]
    const y1 = targetArr[1]
    // i=1，j from 2 to 4
    // i=2，j from 3 to 4
    for(let j=i+1; j<=n; j++) {
      // '1 1' => ['1', '1'] => [1, 1]
      const compareArr = lines[j].split(' ').map(value => value * 1)
      const x2 = compareArr[0]
      const y2 = compareArr[1]
      const distance = calculateDistance(x1, y1, x2, y2)
      // 如果比原本的最短距離小
      if(distance < min) {
        // 更新目前最短距離
        min = distance
        result = [x1, y1, x2, y2]
      } 
    }
  }

  // 輸出訊息
  const position1 = result[0] + ' ' + result[1] 
  const position2 = result[2] + ' ' + result[3] 

  // position1[X] < position2[X]
  if(result[0] < result[2]) {
    // 先輸出 position1
    console.log(position1)
    console.log(position2)
  }
  // position1[X] > position2[X] 
  if(result[0] > result[2]) {
    // 先輸出 position2
    console.log(position2)
    console.log(position1)
  }
  // position1[X] === position2[X]
  if(result[0] === result[2]) {
    // position1[Y] <= position2[Y]
    if(result[1] <= result[3]) {
      // 先輸出 position1
      console.log(position1)
      console.log(position2)
    } else {
      // 先輸出 position2
      console.log(position2)
      console.log(position1)
    }
  }
}

function calculateDistance(x1, y1, x2, y2) {
  const x = Math.pow(x1-x2, 2)
  const y = Math.pow(y1-y2, 2)
  // 這裡不要 toFixed()，不然會出錯
  return Math.sqrt(x + y)
}