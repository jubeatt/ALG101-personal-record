for(let i=1; i<=100; i++) {
  if (i%15 === 0) {
    console.log('FizzBuzz')
  } else if (i%3 === 0) {
    console.log('Fizz')
  } else if (i%5 === 0) {
    console.log('Buzz')
  } else {
    console.log(i)
  }
}

// 虛擬碼練習
/* for(i from 1 to n) do
  if(i%15 === 0) print 'FizzBuzz'
  else if(i%3 ===0) print 'Fizz'
  else if(i%5 ===0) print 'Buzz'
  else print i
end for */