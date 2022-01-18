// 引入library
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin
});

// 儲存每一行的資料
var lines = []

// 輸入資料
rl.on('line', function (line) {
  // push資料
  lines.push(line)
});



// 輸入結束
rl.on('close', function() {
  // 資料傳入solve
  solve(lines)
})

function solve(lines) {
  // 切割出數列
  const numbers = lines.slice(1, Number(lines[0].split(' ')[0]) + 1).map(Number)
  // 切割出查詢數字
  const searchNumbers = lines.slice(Number(lines[0].split(' ')[0]) + 1).map(Number)
  for (let searchNumber of searchNumbers) {
    console.log(search(numbers, searchNumber))
  }
}

// 解法一：最基本的解法
function search(array, targetElement) {
  for (let i=0; i<array.length; i++) {
    if (targetElement === array[i]) {
      return i
    }
  }
  return -1
}


// 解法二：二分搜尋法（while 迴圈）
function binarySearch1(array, targetElement) {
  // 初始值：0 ~ array 的長度 -1 
  let start = 0
  let end = array.length - 1

  // 終止條件 左邊界 > 右邊界
  while (start <= end) {
    // 中間位置（無條件捨去，取偏左邊那點）
    const middle = start + end >> 1 
    /*
      目標 = 中間那個數字：
      找到數字了，直接回傳位置
      
      目標 > 中間的數字：
      代表前面的數字不用看了，把 start 設為中間位置往右移一位（+1）
      
      目標 < 中間的數字：
      代表後面的數字不用看了，把 end 設為中間位置往左移一位（-1）
    */
    if (targetElement === array[middle]) {
      return middle
    } else if (targetElement > array[middle]) {
      start = middle + 1
    } else {
      end = middle - 1
    }
  }
  // 找不到目標數字，回傳 -1
  return -1
}



// 解法三：二分搜尋法（遞迴）
function binarySearch2(array, targetElement) {
  // 要遞迴的 function 
  function binarySearchRecursively(array, targetElement, start, end) {
    // 左邊界 > 右邊界
    if (start > end) {
      return -1
    }

    // 中間位置（無條件捨去，取偏左邊那點）
    const middle = (start + end) >> 1

    /*
      目標 = 中間那個數字：
      找到數字了，直接回傳位置
      
      目標 > 中間的數字：
      代表前面的數字不用看了，把 start 設為中間位置往右移一位（+1）
      
      目標 < 中間的數字：
      代表後面的數字不用看了，把 end 設為中間位置往左移一位（-1）
    */
    if (targetElement === array[middle]) {
      return middle
    } else if (targetElement > array[middle]) {
      // 更新 start 後，遞迴 binarySearchRecursively
      return binarySearchRecursively(array, targetElement, middle + 1, end)
    } else {
      // 更新 end 後，遞迴 binarySearchRecursively
      return binarySearchRecursively(array, targetElement, start, middle - 1)
    }
  }
  // 第一次呼叫，設定初始值，start = 0, end = array 長度 -1
  return binarySearchRecursively(array, targetElement, 0, array.length-1)
}


/* 
  時間紀錄：
  Time: 240ms Memory: 37MB Lang: JavaScript Author: peanu (basic)
  Time: 156ms Memory: 37MB Lang: JavaScript Author: peanu (binary-search: while)
  Time: 160ms Memory: 36MB Lang: JavaScript Author: peanu (binary-search: recursive)
*/