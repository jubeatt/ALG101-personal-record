let str = 'hELLo'
let convertResult = ''
for(let i=0; i<str.length; i++) {
  if (str[i] >= 'A' && str[i] <= 'Z') {
    convertResult += String.fromCharCode(str[i].charCodeAt(0) + 32)
  } else if (str[i] >= 'a' && str[i] <= 'z') {
    convertResult += String.fromCharCode(str[i].charCodeAt(0) - 32)
  } else {
    convertResult += str[i]
  }
}
console.log(convertResult)

/* 

let str = 'hELLo'
let convertResult = ''
for (i from 0 to n-1) do
  if (srt[i] >= 'A' AND str[i] <= 'Z') do
    convertResult += toUpperCase(str[i])
  end if
  else if (srt[i] >= 'a' AND str[i] <= 'z') do
    convertResult += toLowerCase(str[i])
  end else if
  else 
    convertResult += srt[i] do
  end else
end for
print convertResult

*/


/* 

1. 設 str 為 'hELLo'
2. 設 convertResult 為 ''
3. 進入迴圈，i 從 0 跑到 4
4. i 現在是 0
5. 檢查 str[0] ('h') 是否在 'A' 到 'Z' 的範圍 => 不是
6. 檢查 str[0] ('h') 是否在 'a' 到 'z' 的範圍 => 是
7. 將 str[i] 做轉換成大寫字母，接著拼接到 convertResult => convertResult = 'H'
8. 下一圈迴圈
9. i 現在是 1
10. 檢查 str[1] ('E') 是否在 'A' 到 'Z' 的範圍 => 是
11. 將 str[i] 做轉換成小寫字母，接著拼接到 convertResult => convertResult = 'He'
12. 下一圈迴圈
13. i 現在是 2
14. 檢查 str[2] ('L') 是否在 'A' 到 'Z' 的範圍 => 是
15. 將 str[i] 做轉換成小寫字母，接著拼接到 convertResult => convertResult = 'Hel'
16. 下一圈迴圈
17. i 現在是 3
18. 檢查 str[3] ('L') 是否在 'A' 到 'Z' 的範圍 => 是
19. 將 str[3] 做轉換成小寫字母，接著拼接到 convertResult => convertResult = 'Hell'
20. 下一圈迴圈
21. i 現在是 4
22. 檢查 str[4] ('o') 是否在 'A' 到 'Z' 的範圍 => 不是
23. 檢查 str[4] ('o') 是否在 'a' 到 'z' 的範圍 => 是
24. 將 str[4] 做轉換成大寫字母，接著拼接到 convertResult => convertResult = 'HellO'
25. 下一圈迴圈
26. i 現在是 5，不符合條件，跳出迴圈
27. 印出 convertResult => 'HellO'
28. 執行結束

*/