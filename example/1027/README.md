# 信用卡號驗證

[題目連結](https://oj.lidemy.com/problem/1027)

白話文解釋：如內容敘述

輸入範圍：
- 純字串的數字

其他資訊：
- 空間限制：1024MB
- 型態限制：無
- 時間限制：1000 毫秒


解題方向：

1. 前 15 位數做加權總合
2. 奇數 x 2，偶數 x 1
3. 加總過程 `>= 10`，.就減 9 
4. 把兩個結果加總後 % 10，如果是 0 就是 0，不是的話就是 10 - (n%10)