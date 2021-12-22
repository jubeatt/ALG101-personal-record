function solve(lines) {
  // 小偷能偷到的總金額
  let totalValue = 0
  // 小偷能帶走物品的最大數量
  const max = Number(lines[0])
  // 物品的數量 
  const totalItem = Number(lines[1])
  // 所有物品（除掉前兩筆元素）
  const items = transformToNumber(lines.slice(2))

  // 檢查輸入範圍
  if( max<0 || max>1000 ) return false
  // 檢查輸入範圍
  if( totalItem<1 || totalItem>1000 ) return false
  // 檢查輸入範圍
  items.forEach((elem) => {
    if( elem<1 || elem>100000 ) return false
  })
  
  // 重新排序，由大排到小
  items.sort((a, b) => b - a)
  // 切割出可偷的物品陣列
  const availableItems = items.slice(0, max)
  // 計算陣列總和
  totalValue = availableItems.reduce((acc, elem) => acc + elem, 0)
  console.log(totalValue)

}
// 轉換成 Number 型態
function transformToNumber(arr) {
  let result = []
  for(let i=0; i<arr.length; i++) {
    result.push(Number(arr[i]))
  }
  return result 
}
