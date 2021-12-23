# 印出金字塔

[題目連結](https://oj.lidemy.com/problem/1022)

白話文解釋：在第 N 行印出 P-N 個空白和 2N-1 個星星（P為輸入值）

輸入範圍：
- P 在 1 到 30 的正整數

其他資訊：
- 空間限制：1024MB
- 型態限制：P 符合 JavaScript 中的整數範圍
- 時間限制：1000 毫秒

這題的解法可以參考這篇 [文章](https://jubeatt.github.io/2021/12/23/print-stars/)

紀錄一下我原本的爛寫法：

```js
function solve(lines) {
  // 總共有幾行
  let n = Number(lines[0])
  // 用來儲存奇數的陣列
  let arr = []
  // 建立陣列（輸入範圍是 1 ~ 30，所以第 30 行會有 59 顆星星）
  for(let i=1; i<=60; i++) {
    // 只儲存奇數
    if(i&1) arr.push(i)
  }

  // 印出 1 ~ n 行 
  for(let i=1; i<=n; i++) {
    // 儲存最後要印出的內容
    let content = ''
    // 陣列從 0 開始，所以才得 arr[i-1]
    content = createWhiteSpace(n-i) + createStarts(arr[i-1])
    console.log(content)
  }
}
// 第 i 行會有 n-i 個空白
function createWhiteSpace (n) {
  let result = ''
  for(let i=0; i<n; i++) {
    result += ' '
  }
  return result
}
// 依照 1, 3, 5 的順序印出星星
function createStarts (n) {
  let result = ''
  for(let i=0; i<n; i++) {
    result += '*'
  }
  return result
}
```