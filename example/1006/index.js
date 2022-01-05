function solve(lines) {
  // 產生 1~N 個座位
  let seats = Array.from({length: Number(lines[0])}, (elem, index) => index + 1)
  // 過濾掉被佔走的位置（從第三個元素開始代表被佔走的數字）
  // => [ 1, 2, 3, 6, 7, 8 ]
  for(let i=2; i<lines.length; i++) {
    seats = seats.filter((elem) => elem !== Number(lines[i])) 
  }
  // 奇數數列 => [1, 3, 7]
  const odds = seats.filter(elem => elem & 1)
  // 偶數數列 => [2, 6, 8]
  const evens = seats.filter(elem => !(elem & 1))
  // 橫排坐一起的總數
  const sum1 = calculatePermutationsA(seats)
  // 直排坐一起的總數（奇數）
  const sum2 = calculatePermutationsB(odds)
  // 直排坐一起的總數（偶數）
  const sum3 = calculatePermutationsB(evens)
  // 印出結果
  console.log(sum1 + sum2 + sum3)

}
// 橫排的算法
function calculatePermutationsA(arr) {
  let total = 0
  // i=0, i=2, i=4, i=6, ... 
  for(let i=0; i<arr.length; i+=2) {
    // 1-2 = -1 ?
    // 3-4 = -1 ?
    // 5-6 = -1 ?
    // ...
    if(arr[i] - arr[i+1] === -1) total++
  }
  return total
}
// 直排的算法
function calculatePermutationsB(arr) {
  let total = 0
  // i from 0 to n-1
  for(let i=0; i<arr.length; i++) {
    // 3-1 = 2 ?
    // 5-3 = 2 ?
    // 7-5 = 2 ?
    // ...
    if(arr[i] - arr[i-1] === 2) total++
  }
  return total
}