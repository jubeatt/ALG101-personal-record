function solve(lines) {
  // ['3 9 27'] => [3, 9, 27]
  const array = lines[1].split(' ').map(elem => Number(elem))
  const message = isSequence(array) ? 'Yes' : 'No'
  console.log(message)
}
function isSequence(array) {
  if(array.length <= 1) return false // edge case
  let n = array[1] / array[0]  // 預設公比
  for(let i=1; i<array.length; i++) {
    if(array[i]/array[i-1] !== n) return false
  }
  return true
}