let arr = [2, 7, 5]
let max = arr[0]
for (let i=0; i<arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i]
  }
}
console.log(max)

/* 

1. 設 arr 為 [2, 7, 5]
2. 設 max 為 arr[0] => max = 2
3. 進入迴圈，i 從 0 跑到 2
4. 現在 i 是 0
5. 判斷 arr[0] > max， 2 > 2 => 不是
6. 下一圈迴圈
7. 現在 i 是 1
8. 判斷 arr[1] > max，7 > 2 => 是，把 max 設為 arr[1] => max = 7
9. 下一圈迴圈
10. 現在 i 是 2
11. 判斷 arr[2] > max，5 > 7 => 不是
12. 現在 i 是 3，不符合迴圈條件，結束迴圈
13. 印出 max => 7


 */