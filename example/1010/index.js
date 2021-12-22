function solve(lines) {
  // 取出陣列的第一個元素 => 'n1 n2'
  // 切割字串為陣列 => ['n1', 'n2']
  const array = lines[0].split(' ')
  if (array[0] === array[1]) {
    console.log('Yes')
  } else {
    console.log('No')
  }
}