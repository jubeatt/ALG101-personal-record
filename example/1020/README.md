# 判斷質數

[題目連結](https://oj.lidemy.com/problem/1020)

白話文解釋：找出從 2 到 n-1 中都不能被 n 整除的數字

輸入範圍：
- A 在 1 到 100 之間（代表總共有幾個數字）
- B 在 1 到 100000 之間（每一個數字的值）

其他資訊：
- 空間限制：1024MB
- 型態限制：A B 皆符合 JavaScript 中的整數範圍
- 時間限制：1000 毫秒

這一題要注意的地方是邊角案例：

1. 輸入數字為 1 時需輸出 Composite
2. 輸入數字為 2 時需輸出 Prime

要注意的另外一點是「迴圈的初始值從 2 開始」。

在看題目時可能因為文字敘述而不自覺的把 1 設為起點。這樣就錯了，因為 1 能夠被任何數字整除，結果都全部都輸出 Composite。永遠不會有 Prime 的那一天。