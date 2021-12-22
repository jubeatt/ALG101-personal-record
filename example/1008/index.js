function solve(lines) {
  // 所需水量
  let capacity = Number(lines[0])
  // 計數器
  let count = 0
  // capacity = 0 時才會停止
  while(capacity) {
    // 做 AND 位元運算 
    if(capacity & 1) {
      count++
    }
    // 利用位移更新 capacity 的值
    capacity >>= 1
  }
  console.log(count)
}