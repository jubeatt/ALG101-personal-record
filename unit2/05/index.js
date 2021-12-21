let str = "hello"
let deleted = 'l'
let ans = ''
for (let i = 0; i < str.length; i++) {
  if (str[i] !== deleted) {
    ans += str[i]
  }
}
console.log(ans)

/* 

1. 設 str 為 'hello'
2. 設 deleted 為 'l'
3. 設 ans 為 ''
4. 進入迴圈，i 從 0 跑到 4
5. i 現在是 0
6. 判斷 str[0] 是否不等於 delete => ('h' !== 'l') => 是
7. 把 str[0] 的值拼接到 ans => ('' + 'h')  => ans = 'h'
8. 下一圈迴圈
9. i 現在是 1
10. 判斷 str[1] 是否不等於 delete => ('e' !== 'l') => 是
11. 把 str[1] 的值拼接到 ans => ('h' + 'e')  => ans = 'he'
12. 下一圈迴圈
13. i 現在是 2
14. 判斷 str[2] 是否不等於 delete => ('l' !== 'l') => 不是
15. 下一圈迴圈
16. i 現在是 3
17. 判斷 str[3] 是否不等於 delete => ('l' !== 'l') => 不是
18. 下一圈迴圈
19. i 現在是 4
20. 判斷 str[4] 是否不等於 delete => ('o' !== 'l') => 是
21. 把 str[4] 的值拼接到 ans => ('he' + 'o')  => ans = 'heo'
22. 下一圈迴圈
23. i 現在是 5，不符合條件，結束迴圈
24. 印出 ans => 'heo'

 */

