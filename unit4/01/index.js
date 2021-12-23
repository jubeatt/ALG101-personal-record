// 解法一

for(let i=1; i<=100; i++) {
  const n= Math.floor(Math.sqrt(i))
  if( i === n*n ) {
    console.log(i)
  }
}

//  解法二
var i = 1
while(i*i <= 100) {
  console.log(i*i)
  i++
}