function solve(lines) {
  let n = Number(lines[0])
  let m = Number(lines[1])
  for(let i=1; i<=n; i++) {
    for(let j=1; j<=m; j++) {
      console.log(`${i}*${j}=${i*j}`)
    }
  }
} 