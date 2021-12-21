let arr = [8, 11, 13, 3, 7]
let min = arr[0]
for(let i=0; i<arr.length; i++) {
  if (arr[i] < min) min = arr[i]
}
console.log('min:', min)

// 虛擬碼練習（中文）
/* let min = 第一張牌
for (i from 1 to n) do
  翻開第 i 張牌
  if (第 i 張牌比 min 小) do
    min = 第 i 張牌
  end if
end for */

// 虛擬碼練習（英文）
/* let min = arr[0]
for (i from 0 to n-1) do
  if (arr[i] < min) do
    min = arr[i]
  end if
end for */
