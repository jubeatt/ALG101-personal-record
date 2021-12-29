// 我的解法
function solve(lines) {
  // 轉成數字
  const temp = lines.map(value => value * 1)
  // 移除第一個元素
  temp.splice(0,1)
  // 建立群組陣列 => [[1, 1, 2, 2], [3, 3, 4, 4]]
  const group = createNestedArray(temp)
  // 計算每一組的距離
  for(let i=0; i<group.length; i++) {
    console.log(calculateDistance(group[i]))
  }
}

function createNestedArray(arr, unit=4) {
  // 拷貝原陣列
  const copyArr = [...arr]
  // 儲存最後的結果
  const result = []
  // 建立群組
  while(copyArr.length !== 0) {
    // 暫存陣列
    const tempArr = []
    // 儲存元素
    for(let i=0; i<unit; i++) {
      tempArr.push(copyArr[i])
    }
    // 推回群組陣列
    result.push(tempArr)
    // 更新陣列內容
    copyArr.splice(0, unit)
  }
  return result
}
function calculateDistance(arr) {
  // x 軸
  const x = (arr[0]-arr[2]) ** 2
  // y 軸
  const y = (arr[1]-arr[3]) ** 2
  // 開根號，取小數第二位
  const result = Math.sqrt(x+y).toFixed(2)
  // 回傳結果
  return result
}

// 參考別人的解法
function solve(lines) {
  // 轉成數字
  const arr = lines.map(value => value * 1)
  // 總共有幾組
  const total = arr[0]
  // from 0 to 1
  for(let i=0; i<total; i++) {
    // i=0，start=1
    // i=1，start=5
    // i=2，start=9
    const start = i*4 + 1
    const x1 = arr[start] * 1   // lines[1]
    const y1 = arr[start+1] * 1 // lines[2]
    const x2 = arr[start+2] * 1 // lines[3]
    const y2 = arr[start+3] * 1 // lines[4]
    console.log(calculateDistance(x1, y1, x2, y2)) // 1.41
  } 
}
function calculateDistance(x1, y1, x2, y2) {
  const x = (x1-x2) ** 2
  const y = (y1-y2) ** 2
  return Math.sqrt(x + y).toFixed(2)
}

// 學到更簡潔的解法
function solve(lines) {
  // 轉成數字
  const temp = lines.map(value => value * 1)
  // 全部有幾組
  const total = temp[0]
  // 計算每一組的距離
  for(let i=0; i<total; i++) {
    // i=0 => start=1
    // i=1 => start=5
    // i=2 => start=9
    // ... 
    let start = i*4+1
    // i=0 => slice(1, 5) [1, 1, 2, 2]
    // i=1 => slice(5, 9) [3, 3, 4, 4]
    // ...
    // 搭配解構賦值取出每一點
    const [x1, y1, x2, y2] = temp.slice(start, start+4)
    const distance = calculateDistance(x1, y1, x2, y2)
    console.log(distance)
  }
}

function calculateDistance(x1, y1, x2, y2) {
  const x = Math.pow(x1-x2, 2)
  const y = Math.pow(y1-y2, 2)
  return Math.sqrt(x+y).toFixed(2)
}