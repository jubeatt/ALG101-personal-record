function repeat(str, times) {
  var result = ''
  for(var i=0; i<times; i++) {
    result += str
  }
  return result
}
console.log(repeat('a', 5)) // aaaaa