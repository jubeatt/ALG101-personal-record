let arr = [10, 8, 6, 2, 3]
let min = Infinity
let min2 = Infinity
for (let i=0; i<arr.length; i++) {
  if (arr[i] < min) {
    min2 = min
    min = arr[i]
  } else if (arr[i] < min2) {
    min2 = arr[i]
  }
}
console.log(min, min2)


/* 

let arr = [10, 8, 6]
let min = Infinity
let min2 = Infinity

for (i from 0 to n-1) do
  if (arr[i] < min) do
    min2 = min
    min = arr[i]
  else if (arr[i] < min2) do
    min2 = arr[i]
  end else if
end for

print min, min2


 */