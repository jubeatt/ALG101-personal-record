function solve(lines) {
  // 總行數
  const n = Number(lines[0])
  // 遍歷 1 ~ n 行
  for(let i=1; i<=n; i++) {
    // 輸出值
    let str = ''
    // 建立空格與星星
    str = repeat(' ', n-i) + repeat('*', i*2-1)
    console.log(str)
  }
}
// 產生重複字串
function repeat (str, n) {
  let s = ''
  for(let i=0; i<n; i++) {
    s += str
  }
  return s
}