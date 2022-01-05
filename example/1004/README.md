# 聯誼順序比大小

[題目連結](https://oj.lidemy.com/problem/1004)

補充：這一題要轉成 `BigInt` 的時候，參數最好是用 `String`，而不是 `Number`，不然會出現誤差。

白話文解釋：對兩個數字比大小

輸入範圍：
- 正整數 M 在 1 到 50 之間，代表總共有幾組
- 正整數 A B 在 1 ~ 512 個位數之間
- 整數 K 為 -1 或 1

其他資訊：
- 空間限制：1024MB
- 型態限制：A B 有可能超過 JavaScript 中的整數範圍（2^53 -1），所以必須改用 BigInt 來處理
- 時間限制：2000 毫秒