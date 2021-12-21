let arr = [10, 8, 6, 2, 3]
let min = Infinity
let min2 = Infinity
for (let i=0; i<arr.length; i++) {
  if (arr[i] < min) {
    min2 = min
    min = arr[i]
  } else if (arr[i] < min2) {
    min2 = arr[i]
  }
}
console.log(min, min2)


/* 

let arr = [10, 8, 6]
let min = Infinity
let min2 = Infinity

for (i from 0 to n-1) do
  if (arr[i] < min) do
    min2 = min
    min = arr[i]
  else if (arr[i] < min2) do
    min2 = arr[i]
  end else if
end for

print min, min2

*/

/* 

1. 設 arr 為 [10, 8, 6, 2, 3]
2. 設 min 為 Infinity
3. 設 min2 為 Infinity
4. 進入迴圈，i 從 0 跑到 4
5. i 現在是 0
6. 判斷 arr[0] < min，(10 < Infinity) => 是
7. 把 min2 的值設為 min => min2 = Infinity
8. 把 min 的值設為 arr[0] => min = 10
9. 下一圈迴圈
10. i 現在是 1
11. 判斷 arr[1] < min，(8 < 10) => 不是
12. 把 min2 的值設為 min => min2 = 10
13. 把 min 的值設為 arr[1] => min = 8
13. 下一圈迴圈
14. i 現在是 2
15. 判斷 arr[2] < min，(6 < 8) => 是
16. 把 min2 的值設為 min => min2 = 8
17. 把 min 的值設為 arr[2] => min = 6
18. 下一圈迴圈
20. i 現在是 3
21. 判斷 arr[3] < min，(2 < 6) => 是
22. 把 min2 的值設為 min => min2 = 6
23. 把 min 的值設為 arr[3] => min = 2
24. 下一圈迴圈
25. i 現在是 4
26. 判斷 arr[4] < min，(3 < 2) => 不是
27. 判斷 arr[4] < min2，(3 < 2) => 不是
28. 下一圈迴圈
29. i 現在是 5，不符合條件，結束迴圈
30. 印出 min, min2 => 6, 2
31. 執行結束

 */