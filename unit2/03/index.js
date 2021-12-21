let arr = [5, 8, 6]
let max = -Infinity
let max2 = -Infinity
for(let i=0; i<arr.length; i++) {
  if (arr[i] > max) {
    max2 = max
    max = arr[i]
  } else if (arr[i] > max2) {
    max2 = arr[i]
  }
}
console.log(max, max2)




1. 設 arr 為 [5, 8, 6]
2. 設 max 為 -Infinity
3. 設 max2 為 -Infinity
4. 進入迴圈，i 從 0 跑到 2
5. i 現在是 0
6. 判斷 arr[0] > max => (5 > -Infinity) => 是
7. 把 max2 設為 max => max2 = -Infinity
8. 把 max 設為 arr[0] => max = 5
9. 下一圈迴圈
10. i 現在是 1
11. 判斷 arr[1] > max => (8 > 5) => 是
12. 把 max2 設為 max => max2 = 5
13. 把 max 設為 arr[1] => max = 8
14. 下一圈迴圈
15. i 現在是 2
16. 判斷 arr[2] > max => (6 > 8) => 不是
17. 判斷 arr[2] > max2 => (6 > 5) => 是
11. 把 max2 設為 arr[2] => max2 = 6
18. 下一圈迴圈
19. i 現在是 3，不符合條件，結束迴圈
20. 印出 max, max2 => 8, 6


