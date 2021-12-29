function lastIndexOf(arr, target) {
  for(let i=arr.length; i>=0; i--) {
    if(target === arr[i]) {
      return i
    }
  }
  return -1
}
console.log(lastIndexOf([1, 2, 2, 3], 2))  // 2 
console.log(lastIndexOf([1, 2, 2, 3], 3))  // 3
console.log(lastIndexOf([1, 2, 2, 3], 4))  // -1