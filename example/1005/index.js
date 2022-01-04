function solve(lines) {
  // 取出所有數字
  const numbers = lines.slice(0, lines.indexOf('0')).map(elem => Number(elem))
  // 找出相親數
  numbers.forEach(elem => console.log(findAmicable(elem)))
}
function findAmicable(number) {
  // number => 220
  // 儲存 number 的因數總和 => 284
  const n1 = calculateFactorSum(number)
  // 儲存 n1（284） 的因數總和 => 220
  const n2 = calculateFactorSum(n1)
  // 如果 n2 = number，代表就是相親數
  return number === n2 ? n1 : 'QQ'
}
function calculateFactorSum(n) {
  let result = 0
  // 把除了自己的數都試一遍
  for(let i=1; i<=n-1; i++) {
    if(n % i === 0) result+= i
  }
  return result
}