let str = "Hi"
let ans = ''
for(let i=0; i<str.length; i++) {
  let code = str.charCodeAt(i)
  if (code >= 97 && code <= 122) {
    ans += String.fromCharCode(code - 32)
  } else {
    ans += str[i]
  }
}
console.log(ans)

/*


1. 設 str 為 'Hi'
2. 設 ans 為 ''
3. 進入迴圈，i 從 0 跑到 1
4. i 現在是 0
5. 設 code 為 'H' 的 ASCII 碼 => code = 72
6. 判斷 code 的值是否在 97 ~ 122 之間 => 不是
7. ans += str[0] => ('' + 'H') => ans = 'H'
8. 下一圈迴圈
9. i 現在是 1
10. 設 code 為 'i' 的 ASCII 碼 => code = 105
11. 判斷 code 的值是否在 97 ~ 122 之間 => 是
12. 將 code 值 - 32，得到大寫 'I'，把 ans += 'I' => ('H' + 'I') => ans = 'HI'
13. 下一圈迴圈
14. i 現在是 2，不符合條件，結束迴圈
15. 印出 ans => 'HI'


 */