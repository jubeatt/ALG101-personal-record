let arr = [1, 5, 3]
let max = arr[0]
for (let i=0; i<arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i]
  }
}
console.log(max)
// 虛擬碼
/* let arr = [1, 5, 3]
let max = arr[i]
for (i from 0 to n-1) do
  if(arr[i] > max) do
    max = arr[i]
  end if
end for
console.log(max) */