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


// 檢討後的解法
function solve(lines) {
  // 建立座標資料
  const coords = []
  for(let i=1; i<lines.length; i++) {
    coords.push({
      // i=1 => '2 2' => ['2', '2']
      // i=2 => '1 1' => ['1', '1']
      x: lines[i].split(' ')[0] * 1,
      y: lines[i].split(' ')[1] * 1
    })
  }
  // 預設最小值
  let min = Infinity
  // 儲存最短距離的座標
  let ans = null
  // 找出最短距離
  for(let i=0; i<coords.length; i++) {
    // i from 0 to 3  < length
    // i from 0 to 2  < length-1
    // j from (i+1) to 3 (length=4)
    // i=0 => j=1 2 3
    // i=1 => j=2 3
    // i=2 => j=3
    // length-1 到此結束
    // i=3 => j=4 不符合條件，4 < 4 is false，不進入 j 的迴圈
    const targetX = coords[i].x 
    const targetY = coords[i].y
    for(let j=i+1; j<coords.length; j++) {
      const compareX = coords[j].x
      const compareY = coords[j].y
      const dis = calculateDistance(targetX, targetY, compareX, compareY)
      if(dis < min) {
        // 更新最小值
        min = dis
        // 更新座標資料
        ans = {
          x1: targetX,
          y1: targetY,
          x2: compareX,
          y2: compareY
        }
      }
    }
  }
  // 輸出訊息
  const coord1 = ans.x1 + ' ' + ans.y1
  const coord2 = ans.x2 + ' ' + ans.y2

  // coord1[X] < coord2[X]
  if(ans.x1 < ans.x2) {
    // 先輸出 coord1
    console.log(coord1)
    console.log(coord2)
  }
  // coord1[X] > coord2[X] 
  if(ans.x1 > ans.x2) {
    // 先輸出 coord2
    console.log(coord2)
    console.log(coord1)
  }
  // coord1[X] === coord2[X]
  if(ans.x1 === ans.x2) {
    // coord1[Y] <= coord2[Y]
    if(ans.y1 <= ans.y2) {
      // 先輸出 coord1
      console.log(coord1)
      console.log(coord2)
    } else {
      // 先輸出 coord2
      console.log(coord2)
      console.log(coord1)
    }
  }
}
function calculateDistance(x1, y1, x2, y2) {
  const x = Math.pow(x1-x2, 2)
  const y = Math.pow(y1-y2, 2)
  return Math.sqrt(x+y)
}
