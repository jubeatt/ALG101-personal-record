function solve(lines) {
  let n = Number(lines[0])
  // 星星
  for(let i=1; i<=n; i++) {
    console.log(repeat(' ', n-i) + repeat('*', i*2-1))
  }
  // 木棒
  for(let i=1; i<=n-1; i++) {
    console.log(repeat(' ', n-1) + '|')
  }
} 
function repeat(str, n) {
  let s = ''
  for(let i=0; i<n; i++) {
    s += str
  }
  return s
}