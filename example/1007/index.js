function solve(lines) {
  // 儲存整理後的學生資料
  const students = []
  // 儲存人氣王的學生資料
  let superStars = null
  // 建立每個同學的資料
  lines.slice(1).forEach(elem => {
    // name='Nick', score='8'
    const [name, score] = elem.split(' ')
    // 加到 students 中
    students.push({
      name: name,
      score: Number(score)
    })
  })
  // 重新排序 => 由大到小，並儲存最大值
  const MAX = students.sort((a, b) => b.score - a.score)[0].score
  // 把跟最大值相等的同學留下
  superStars = students.filter(elem => elem.score === MAX)
  // 印出結果
  superStars.forEach(elem => console.log(elem.name))

}

/* 
希望把資料整理成這樣
[
  {
    name: 'Nick',
    score: 8
  },
  {
    name: 'Peter',
    score: 5
  },
  ...
]
*/