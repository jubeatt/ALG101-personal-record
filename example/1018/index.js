function solve(lines) {
  // 所有數字
  const numbers = lines[1].split(' ').map(elem => elem * 1)
  // 只有一個數字的情況
  if (numbers.length === 1) return console.log(1)
  // 預設最大長度
  let max = -Infinity
  // 有幾個重複數字
  let count = 1
  // 讀取每個數字
  for (let i=1; i<numbers.length; i++) {
    // 前一個數字 = 目前數字
    if (numbers[i-1] === numbers[i]) {
      // 計數器+1
      count++
    } else {
      // 如果計數器 > 目前最大值
      if (count > max) {
        // 更新最大值
        max = count
        // 初始化計數器
        count = 1
      } else {
        // 初始化計數器
        count = 1
      }
    }
  }
  /*
    假設 [1, 2, 2] 的時候，count 最後會是 2，max 是 1，
    這是因為最後面沒有數字了，所以不會進到 else 區塊，
    因此這裡要在判斷一次 max 是否大於 count
   */
  console.log(max > count ? max : count)
}

/*
  從學長姊的心得學來的，好像是叫做 counting sort，
  簡單來說就是拿到幾號球就投到幾號的籃子裡，
  最後最多球的那個籃子就是答案了。
*/
function solve(lines) {
  // 所有數字
  const numbers = lines[1].split(' ').map(Number)
  // 建立 0~999 的陣列
  let arr = Array.from({length: 1000}).map(() => 0)
  // 遍歷所有數字
  for (let i=0; i<numbers.length; i++) {
    // 如果 number[i] = 1，arr[1] 的值就 + 1
    // 如果 number[i] = 2，arr[2] 的值就 + 1
    // ...
    arr[numbers[i]]++
  }
  // 由大排到小
  arr.sort((a, b) => b -a)
  console.log(arr[0])
}



// 暫時不知道為什麼這一題會 error
function solve(lines) {
  // 所有數字
  const numbers = lines[1].split(' ').map(elem => elem * 1)
  // 只有一個數字
  if (numbers.length === 1) return console.log(1)
  // 儲存數字重複次數
  let numberCounts = []
  // numbers = 1, i from 1 to 1
  // numbers = 2, i from 1 to 2
  for(let i=1; i<=numbers.length; i++) {
    // i=1，算出 1 重複出現幾次
    // i=2，算出 2 重複出現幾次
    // 最後把重複次數儲存起來
    numberCounts.push(numbers.filter(elem => elem === i).length)
  }
  // 由大到小排序
  numberCounts.sort((a, b) => b - a)
  // 印出最大值
  console.log(numberCounts[0])
}