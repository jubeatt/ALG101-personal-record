function isSequence(arr) {
  if(arr.length <= 1) return true
  // 預設公差
  let n = arr[1] - arr[0]
  for(let i=1; i<arr.length; i++) {
    if(arr[i] - arr[i-1] !== n) return false
  }
  return true
}
console.log(isSequence([0, 2, 4, 6, 8, 10])) // true
console.log(isSequence([0, 2, 4, 6, 8, 11])) // false
console.log(isSequence([1, 3, 5, 7, 9, 11])) // true
console.log(isSequence([1, 3, 2, 4, 5, 6])) // false
console.log(isSequence([1, 3])) // true
console.log(isSequence([1])) // true
console.log(isSequence([])) // true