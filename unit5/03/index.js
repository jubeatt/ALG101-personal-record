function addDigits(n) {
  // 負數 case
  if(n < 0) {
    // 變成正數
    n = n * -1
  }
  // 浮點數 case
  if(n - Math.floor(n) !== 0) {
    // 變成整數
    n = Math.floor(n)
  }
  let sum = 0
  while(n !== 0) {
    sum += n % 10
    n = Math.floor(n/10)
  }
  return sum
}

console.log(addDigits(1234))
console.log(addDigits(5566))
console.log(addDigits(0))
console.log(addDigits(12))
console.log(addDigits(-55))
console.log(addDigits(12.25))
console.log(addDigits(10293.21235))